import { Component, OnInit } from '@angular/core';
import { PayrollSetupService } from '../../../../core';

@Component({
    selector: 'app-taxrelief',
    templateUrl: './taxrelief.component.html',
    styleUrls: ['./taxrelief.component.scss']
})
export class TaxreliefComponent implements OnInit {

    public taxRelief: any;
<<<<<<< HEAD
=======
    public incometaxRule: any;
>>>>>>> master
    public updatingtaxRelief: any;

    constructor(public payrollsetupservice: PayrollSetupService) { }

    async ngOnInit() {
<<<<<<< HEAD
        await this.payrollsetupservice.gettaxreliefs();
        this.taxRelief = this.payrollsetupservice.taxrelief;

        await this.payrollsetupservice.getincometaxrules();
        let incomeTaxrule = this.payrollsetupservice.incometaxrule;
    }

    async addTaxRelief(value) {
        await this.payrollsetupservice.addtaxrelief(value.data);
    }

    updatingTaxRelief(value) {
        this.updatingtaxRelief = { ...value.oldData, ...value.newData };
    }

    async updateTaxRelief() {
        await this.payrollsetupservice.updatetaxrelief(this.updatingtaxRelief);
    }

    async deleteTaxRelief(value) {
        await this.payrollsetupservice.Deletetaxrelief(value.key);
=======

        this.taxRelief = await this.payrollsetupservice.getTaxReliefs();

        this.incometaxRule = await this.payrollsetupservice.getIncomeTaxRules();
    }

    async addTaxRelief(value) {
        await this.payrollsetupservice.addTaxRelief(value.data);
    }

    updatingTaxRelief(value) {
        this.updatingtaxRelief = { ...value.oldData, ...value.newData };
    }

    async updateTaxRelief() {
        await this.payrollsetupservice.updateTaxRelief(this.updatingtaxRelief);
    }

    async deleteTaxRelief(value) {
        await this.payrollsetupservice.deleteTaxRelief(value.key);
>>>>>>> master
    }
}