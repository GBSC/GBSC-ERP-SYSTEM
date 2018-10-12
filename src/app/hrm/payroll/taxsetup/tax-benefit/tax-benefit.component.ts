import { Component, OnInit } from '@angular/core';
import { PayrollSetupService } from '../../../../core';

@Component({
    selector: 'app-tax-benefit',
    templateUrl: './tax-benefit.component.html',
    styleUrls: ['./tax-benefit.component.scss']
})
export class TaxBenefitComponent implements OnInit {

    public taxBenefit: any;
    Updatingbenefit: any;

    constructor(public payrollsetupservice: PayrollSetupService) { }

    async ngOnInit() {
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
    }

    updatingBenefit(value) {
        this.Updatingbenefit = { ...value.oldData, ...value.newData };
    }

    async updateTaxBenefit() {
        await this.payrollsetupservice.updatetaxbenefit(this.Updatingbenefit);
    }

    async deleteTaxBenefit(value) {
        await this.payrollsetupservice.Deletetaxbenefit(value.key);
    }

}