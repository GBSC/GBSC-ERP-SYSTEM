import { Component, OnInit } from '@angular/core';
import { PayrollSetupService } from '../../../../core';

@Component({
    selector: 'app-income-tax-rule',
    templateUrl: './income-tax-rule.component.html',
    styleUrls: ['./income-tax-rule.component.scss']
})
export class IncomeTaxRuleComponent implements OnInit {

    public incomeTax: any;
    public UpdateTaxRule: any;

    constructor(public payrollsetupservice: PayrollSetupService) { }

    async ngOnInit() {
        await this.payrollsetupservice.getincometaxrules();
        this.incomeTax = this.payrollsetupservice.incometaxrule;

        await this.payrollsetupservice.getpayrollyears();
        let payRollYear = this.payrollsetupservice.payrollyear;

    }

    async addIncomeTaxRule(value) {
        await this.payrollsetupservice.addincometaxrule(value.data);
    }

    UpdatingIncomeTaxRule(value) {
        this.UpdateTaxRule = { ...value.oldData, ...value.newData };
    }

    async updateIncomeTaxRule() {
        await this.payrollsetupservice.updateincometaxrule(this.UpdateTaxRule);
    }

    async deleteIncomeTaxRule(value) {
        await this.payrollsetupservice.Deleteincometaxrule(value.key);
    }
}