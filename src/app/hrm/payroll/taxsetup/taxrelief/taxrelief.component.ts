import { Component, OnInit } from '@angular/core';
import { PayrollSetupService } from '../../../../core';

@Component({
    selector: 'app-taxrelief',
    templateUrl: './taxrelief.component.html',
    styleUrls: ['./taxrelief.component.scss']
})
export class TaxreliefComponent implements OnInit {

    public taxRelief: any;
    public incometaxRule: any;
    public updatingtaxRelief: any;

    constructor(public payrollsetupservice: PayrollSetupService) { }

    async ngOnInit() {

        this.taxRelief = await this.payrollsetupservice.getTaxReliefs();

        this.incometaxRule = await this.payrollsetupservice.getIncomeTaxRules();
    }

    async addTaxRelief(value) {
        await this.payrollsetupservice.addTaxRelief(value.data);
        this.taxRelief = await this.payrollsetupservice.getTaxReliefs();
    }

    updatingTaxRelief(value) {
        this.updatingtaxRelief = { ...value.oldData, ...value.newData };
    }

    async updateTaxRelief() {
        await this.payrollsetupservice.updateTaxRelief(this.updatingtaxRelief);
    }

    async deleteTaxRelief(value) {
        await this.payrollsetupservice.deleteTaxRelief(value.key);
    }
}