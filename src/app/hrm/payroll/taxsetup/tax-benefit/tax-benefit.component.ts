import { Component, OnInit } from '@angular/core';
import { PayrollSetupService } from '../../../../core';

@Component({
    selector: 'app-tax-benefit',
    templateUrl: './tax-benefit.component.html',
    styleUrls: ['./tax-benefit.component.scss']
})
export class TaxBenefitComponent implements OnInit {

    public taxYear: any;
    public benefit: any;
    public taxBenefit: any;
    public payrollType: any;
    public Updatingbenefit: any;

    constructor(public payrollsetupservice: PayrollSetupService) { }

    async ngOnInit() {

        this.taxBenefit = await this.payrollsetupservice.getTaxBenefits();

        this.payrollType = await this.payrollsetupservice.getPayrollTypes();

        this.taxYear = await this.payrollsetupservice.gettTaxYears();

        this.benefit = await this.payrollsetupservice.getBenefits();
    }

    async addTaxBenefit(value) {
        await this.payrollsetupservice.addTaxBenefit(value.data);
    }

    updatingBenefit(value) {
        this.Updatingbenefit = { ...value.oldData, ...value.newData };
    }

    async updateTaxBenefit() {
        await this.payrollsetupservice.updateTaxBenefit(this.Updatingbenefit);
    }

    async deleteTaxBenefit(value) {
        await this.payrollsetupservice.DeleteTaxBenefit(value.key);
    }

}