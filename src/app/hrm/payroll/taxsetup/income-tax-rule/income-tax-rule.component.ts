import { Component, OnInit, Input } from '@angular/core';
import { PayrollSetupService } from '../../../../core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-income-tax-rule',
    templateUrl: './income-tax-rule.component.html',
    styleUrls: ['./income-tax-rule.component.scss']
})
export class IncomeTaxRuleComponent implements OnInit {

    taxTypeSource = ["Percentage", "Amount"];
    applicableToSource = ["Male", "Female", "Both"];

    public incomeTax: any;
    public payrollYears: any;
    public UpdateTaxRule: any;

    public taxRelief: any;
    public taxReliefadd: any[];
    public incometaxRule: any;
    public updatingtaxRelief: any;

    public taxSchedule: any;
    public taxScheduleadd: any[];
    public incomeTaxrule: any;
    public taxScheduling: any;

    public taxrules: any;
    public scheduleDetail: any[] = [];
    public reliefDetail: any[] = [];
    public incomeTaxForm: FormGroup;

    @Input('incomeTaxRuleId') id: number;

    constructor(public fb: FormBuilder,public router: Router, public activatedRoute: ActivatedRoute, public toastr: ToastrService, public payrollsetupservice: PayrollSetupService) {


        this.incomeTaxForm = this.fb.group({
            PersonalExemption: [''],
            TaxLimit: [''],
            AgeLimit: [''],
            ExemptPercentage: [''],
            TaxRebatePercentage: [''],
            TaxRebateAmount: [''],
            PayrollYearId: [''],
            TaxSchedules: this.fb.array([]),
            TaxReliefs: this.fb.array([])
        })
    }

    async ngOnInit() {

        this.taxScheduleadd = []
        this.taxReliefadd = []

        this.taxRelief = await this.payrollsetupservice.getTaxReliefs();

        this.incomeTax = await this.payrollsetupservice.getIncomeTaxRules();

        this.payrollsetupservice.getPayrollYears().subscribe(resp => {this.payrollYears = resp; })

        this.taxSchedule = await this.payrollsetupservice.getTaxSchedules();

        this.activatedRoute.params.subscribe(params => {
            this.id = params['id'];
        });

        if (this.isUpdate() === true) {
            this.payrollsetupservice.getIncomeTaxRule(this.id).subscribe(resp => {
                this.taxrules = resp;
                let a = this.taxrules.taxSchedules;
                let b = this.taxrules.taxReliefs;
                this.scheduleDetail = a.filter(b => {
                    delete b.taxScheduleId;
                    delete b.incomeTaxRuleId;
                    return b
                });
                this.reliefDetail = b.filter(c => {
                    delete c.taxReliefId;
                    delete c.incomeTaxRuleId;
                    return c
                });
                this.patchValues(this.taxrules);
            });
        }
    }

    isUpdate(): boolean {

        if (this.id > 0) {
            return true;
        }
        else
            return false;
    }

    addTaxRelief(value) {
        let data = value.data;
        this.taxReliefadd.push(data);
    }

    async updateTaxRelief(value) {
       console.log(value);
       
    }

    async deleteTaxRelief(value) {
        await this.payrollsetupservice.deleteTaxRelief(value.key);
    }

    addTaxSchedule(value) {

        let data = value.data;
        this.taxScheduleadd.push(data);
    } 

    async updateTaxSchedule(value) {
        console.log(value);
        
    }

    async deleteTaxSchedule(value) {
        await this.payrollsetupservice.deleteTaxSchedule(value.key);
    }

    async addIncomeTaxRule(value) {

        this.incomeTaxForm.value.TaxSchedules = this.taxScheduleadd
        this.incomeTaxForm.value.TaxReliefs = this.taxReliefadd
         await this.payrollsetupservice.addIncomeTaxRule(value);
         this.toastr.success("Income Tax Rule Added");
        this.router.navigate(['/hrm/payroll/incometaxrule-detail']);
        this.incomeTax = await this.payrollsetupservice.getIncomeTaxRules();

    } 

     updateIncomeTaxRule(value) {
        value.incomeTaxRuleId = this.id;
        value.TaxSchedules = this.scheduleDetail; 
        value.TaxReliefs = this.reliefDetail; 
        this.payrollsetupservice.updateIncomeTaxRule(value).subscribe(resp=>{
            this.toastr.success("Income Tax Rule Updated");
            this.router.navigate(['/hrm/payroll/incometaxrule-detail']);
        });
    }

    async deleteIncomeTaxRule(value) {
        await this.payrollsetupservice.Deleteincometaxrule(value.key);
    }

    patchValues(taxrule: any) {

        this.incomeTaxForm.patchValue({

            PersonalExemption: taxrule.personalExemption,
            ExemptPercentage: taxrule.exemptPercentage,
            TaxLimit: taxrule.taxLimit,
            AgeLimit: taxrule.ageLimit,
            TaxRebatePercentage: taxrule.taxRebatePercentage,
            TaxRebateAmount: taxrule.taxRebateAmount,
            PayrollYearId: taxrule.payrollYearId,
        })
    }
}
