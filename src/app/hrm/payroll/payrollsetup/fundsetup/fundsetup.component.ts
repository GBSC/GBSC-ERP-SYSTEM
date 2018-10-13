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
<<<<<<< HEAD
    private updatingfundSetup: any;
=======
    public payrollYears: any;
    public updatingfundSetup: any;
>>>>>>> master

    constructor(private fb: FormBuilder, public payrollsetupservice: PayrollSetupService) { }

    async ngOnInit() {
<<<<<<< HEAD

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

        await this.payrollsetupservice.getfundsetups();
        this.fundSetup = this.payrollsetupservice.fundsetup;

        await this.payrollsetupservice.getpayrollyears();
        let Payrollyear = this.payrollsetupservice.payrollyear;
    }

    async addFundSetup() {
        await this.payrollsetupservice.addfundsetup(this.FundSetupForm.value);
        console.log(this.FundSetupForm.value);

=======

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
>>>>>>> master
    }

    updatingFundSetup(value) {
        this.updatingfundSetup = { ...value.oldData, ...value.newData };
<<<<<<< HEAD
    }
    async updateFundSetup() {
        await this.payrollsetupservice.updateallowancededuction(this.updatingfundSetup);
    }

    async deleteFundSetup(value) {
        await this.payrollsetupservice.Deletefundsetup(value.key);
=======
    }

    async updateFundSetup() {
        await this.payrollsetupservice.updateFundSetup(this.updatingfundSetup);
    }

    async deleteFundSetup(value) {
        await this.payrollsetupservice.deleteFundSetup(value.key);
>>>>>>> master
    }

}