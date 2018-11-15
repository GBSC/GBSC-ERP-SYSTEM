import { Component, OnInit, Input } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { EmployeeService, PayrollService, PayrollSetupService } from '../../../core';
import { GratuitySlabGratuity } from '../../../core/Models/HRM/gratuitySlabGratuity';
import { GratuitySlab } from '../../../core/Models/HRM/gratuitySlab';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Gratuity } from '../../../core/Models/HRM/gratuity';

@Component({
    selector: 'app-gratuity',
    templateUrl: './gratuity.component.html',
    styleUrls: ['./gratuity.component.scss']
})
export class GratuityComponent implements OnInit {

    public gratuity: any;
    public employees: any;
    public Gratuity: any[] = [];
    public gratuityTypes: any;
    public leavingReasons: any;
    public fundSetups: any;
    public gratuitySlabs: any;
    public GratuitySlab: any;
    private gratuityslab: GratuitySlabGratuity[];
    public GratuityForm: any;

    @Input('userGratuityId') id: number;


    constructor(private fb: FormBuilder, public payrollservice: PayrollService, private activatedRoute: ActivatedRoute,
        public Employeeservice: EmployeeService, public toastr: ToastrService, public payrollsetupservice: PayrollSetupService, public router: Router, ) { }

    async ngOnInit() {

        this.gratuityslab = [];

        this.GratuityForm = this.fb.group({
            GratuityAmount: ['', Validators],
            TotalSalary: ['', Validators],
            From: ['', Validators],
            To: ['', Validators],
            GratuityTypeId: ['', Validators],
            LeavingReasonId: ['', Validators],
            UserId: ['', Validators],
            FundSetupId: ['', Validators]
        });


        this.gratuity = await this.payrollservice.getGratuities();

        this.leavingReasons = await this.payrollsetupservice.getLeavingReasons();

        this.gratuitySlabs = await this.payrollsetupservice.getGratuitySlabs();

        this.gratuityTypes = await this.payrollsetupservice.getGratuityTypes();

        this.fundSetups = await this.payrollsetupservice.getFundSetups();

        this.employees = await this.Employeeservice.GetAllEmployees();

        this.activatedRoute.params.subscribe(params => {
            this.id = params['id'];
        });

        if (this.isUpdate() === true) {
            this.payrollservice.getGratuity(this.id).subscribe((resp: Gratuity) => {
                this.GratuitySlab = resp;
                let a = this.GratuitySlab.gratuitySlabGratuities;
                this.Gratuity = a.filter(b => {
                    delete b.gratuitySlabGratuityId;
                    delete b.userGratuityId;
                    return b;
                });
                this.patchValues(this.GratuitySlab);
            });
        }

    }

    async gratuitySlab(value) {
        let data = value.data;
        this.gratuityslab.push(data);
    }

    async addGratuity(value) {
        let pushslab = new GratuitySlab();
        pushslab = { ...pushslab, ...value };
        pushslab.gratuitySlabGratuities = this.gratuityslab;
        let x = await this.payrollservice.addGratuity(pushslab);
        this.GratuityForm.reset();
        this.toastr.success("Gratuity Added");
        this.router.navigate(['/hrm/payroll/gratuitydetail']);
        this.gratuity = await this.payrollservice.getGratuities();
    }

    isUpdate(): boolean {

        if (this.id > 0) {
            return true;
        }
        else
            return false;
    }

    async updateGratuitySlabGratuity(value) {
        console.log(value);
    }

    async update(value) {
        value.userGratuityId = this.id;
        value.gratuitySlabGratuities = this.Gratuity;
        this.payrollservice.updateGratuity(value).subscribe(resp => {
            this.toastr.success("Gratuity Updated");
            this.router.navigate(['/hrm/payroll/gratuitydetail']);

        });
    }

    patchValues(gratuity: any) {

        this.GratuityForm.patchValue({

            GratuityAmount: gratuity.gratuityAmount,
            TotalSalary: gratuity.totalSalary,
            From: gratuity.from,
            To: gratuity.to,
            GratuityTypeId: gratuity.gratuityTypeId,
            LeavingReasonId: gratuity.leavingReasonId,
            UserId: gratuity.userId,
            FundSetupId: gratuity.fundSetupId
        })

    }

    async deleteGratuity(value) {
        await this.payrollservice.deleteGratuity(value.key);
    }
}