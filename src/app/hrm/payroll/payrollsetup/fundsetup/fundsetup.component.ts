import { Component, OnInit } from '@angular/core';
import { PayrollSetupService } from '../../../../core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-fundsetup',
    templateUrl: './fundsetup.component.html',
    styleUrls: ['./fundsetup.component.css']
})
export class FundsetupComponent implements OnInit {

    public fundSetup: any;
    public FundSetupForm: FormGroup;
    public payrollYears: any;
    public updatingfundSetup: any;

    constructor(private fb: FormBuilder, public payrollsetupservice: PayrollSetupService) { }

    async ngOnInit() {

        this.FundSetupForm = this.fb.group({
            PayrollYearId: ['', Validators],
            PfEmployerContribution: ['', Validators],
            PfEmployeeContribution: ['', Validators],
            TaxableAmountLimit: ['', Validators],
            MinServicePeriod: ['', Validators],
            ApplicableFrom: ['', Validators],
            EobiMinimumSalary: ['', Validators],
            EobiEmployerContribution: ['', Validators],
            EobiEmployeeContribution: ['', Validators],
            MaximumContribution: ['', Validators],
            ExemptAge: ['', Validators],
            SessiMinimumSalary: ['', Validators],
            SessiEmployerContribution: ['', Validators],
            SessiEmployeeContribution: ['', Validators],
            PessiMinimumSalary: ['', Validators],
            PessiEmployerContribution: ['', Validators],
            PessiEmployeeContribution: ['', Validators],
            IessiMinimumSalary: ['', Validators],
            IessiEmployerContribution: ['', Validators],
            IessiEmployeeContribution: ['', Validators]
        });

        this.fundSetup = await this.payrollsetupservice.getFundSetups();

        this.payrollYears = await this.payrollsetupservice.getPayrollYears();
    }

    async addFundSetup() {

        await this.payrollsetupservice.addFundSetup(this.FundSetupForm.value);
        this.fundSetup = await this.payrollsetupservice.getFundSetups();
    }

    updatingFundSetup(value) {
        this.updatingfundSetup = { ...value.oldData, ...value.newData };
    }

    async updateFundSetup() {
        await this.payrollsetupservice.updateFundSetup(this.updatingfundSetup);
    }

    async deleteFundSetup(value) {
        await this.payrollsetupservice.deleteFundSetup(value.key);
    }

}