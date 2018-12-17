import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PayrollSetupService } from '../../../../core';

@Component({
    selector: 'app-allowance-deduction',
    templateUrl: './allowance-deduction.component.html',
    styleUrls: ['./allowance-deduction.component.css']
})
export class AllowanceDeductionComponent implements OnInit {
    public allowancededuction: any;
    public allowanceCalculationTypes: any;
    public AllowanceorDeductionForm: FormGroup;
    public updatingdeduction: any;

    constructor(public fb: FormBuilder, public payrollSetupService: PayrollSetupService) { }

    async ngOnInit() {

        this.AllowanceorDeductionForm = this.fb.group({
            Title: ['', Validators],
            FixedValue: ['', Validators],
            Type: ['', Validators],
            AllowanceCalculationTypeId: ['', Validators],
            ValueExpressionPayment: ['', Validators],
            ValueExpressionPaymentFrom: ['', Validators],
            ValueExpressionForecast: ['', Validators],
            ValueExpressionForecastFrom: ['', Validators],
            CalculationSequenceNumber: ['', Validators],
            RemitKey: ['', Validators],
            GlCodeAllowance: ['', Validators],
            RepostNumber: ['', Validators],
            GlCodeDeduction: ['', Validators],
            GlCode: ['', Validators],
            DefaultCostCenter: ['', Validators],
            IsProrated: ['', Validators],
            IsBaseAllowance: ['', Validators],
            IsOneTimeAllowance: ['', Validators],
            IsGrossSalary: ['', Validators]
        });


        this.allowancededuction = await this.payrollSetupService.getAllowanceDeductions();

        this.allowanceCalculationTypes = await this.payrollSetupService.getAllowanceCalculationTypes();
    }

    async addAllowanceDeduction() {
        await this.payrollSetupService.addAllowanceDeduction(this.AllowanceorDeductionForm.value);
        this.allowancededuction = await this.payrollSetupService.getAllowanceDeductions();
    }

    updatingAllowanceDeduction(value) {
        this.updatingdeduction = { ...value.oldData, ...value.newData };
    }
    async updateAllowanceDeduction() {
        await this.payrollSetupService.updateAllowanceDeduction(this.updatingdeduction);
    }

    async deleteAllowanceDeduction(value) {
        await this.payrollSetupService.DeleteAllowanceDeduction(value.key);
    }
}
