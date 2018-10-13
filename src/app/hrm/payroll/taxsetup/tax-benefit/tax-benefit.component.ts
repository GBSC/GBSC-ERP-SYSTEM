import { Component, OnInit } from '@angular/core';
import { PayrollSetupService } from '../../../../core';

@Component({
    selector: 'app-tax-benefit',
    templateUrl: './tax-benefit.component.html',
    styleUrls: ['./tax-benefit.component.scss']
})
export class TaxBenefitComponent implements OnInit {

<<<<<<< HEAD
    public taxBenefit: any;
    Updatingbenefit: any;
=======
    public taxYear: any;
    public benefit: any;
    public taxBenefit: any;
    public payrollType: any;
    public Updatingbenefit: any;
>>>>>>> master

    constructor(public payrollsetupservice: PayrollSetupService) { }

    async ngOnInit() {
<<<<<<< HEAD
        await this.payrollsetupservice.gettaxbenefits();
        this.taxBenefit = this.payrollsetupservice.taxbenefit;

        await this.payrollsetupservice.getpayrolltypes();
        let Payrlltype = this.payrollsetupservice.payrolltype;

        await this.payrollsetupservice.gettaxyears();
        let taxyear = this.payrollsetupservice.taxyear;

        await this.payrollsetupservice.getbenefits();
        let benefit = this.payrollsetupservice.benefits;
    }

    async addTaxBenefit(value) {
        await this.payrollsetupservice.addtaxbenefit(value.data);
=======

        this.taxBenefit = await this.payrollsetupservice.getTaxBenefits();

        this.payrollType = await this.payrollsetupservice.getPayrollTypes();

        this.taxYear = await this.payrollsetupservice.gettTaxYears();

        this.benefit = await this.payrollsetupservice.getBenefits();
    }

    async addTaxBenefit(value) {
        await this.payrollsetupservice.addTaxBenefit(value.data);
>>>>>>> master
    }

    updatingBenefit(value) {
        this.Updatingbenefit = { ...value.oldData, ...value.newData };
    }

    async updateTaxBenefit() {
<<<<<<< HEAD
        await this.payrollsetupservice.updatetaxbenefit(this.Updatingbenefit);
    }

    async deleteTaxBenefit(value) {
        await this.payrollsetupservice.Deletetaxbenefit(value.key);
=======
        await this.payrollsetupservice.updateTaxBenefit(this.Updatingbenefit);
    }

    async deleteTaxBenefit(value) {
        await this.payrollsetupservice.DeleteTaxBenefit(value.key);
>>>>>>> master
    }

}