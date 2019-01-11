import { Component, OnInit } from '@angular/core';
import { PayrollSetupService } from '../../../../core';

@Component({
    selector: 'app-income-tax-rule',
    templateUrl: './income-tax-rule.component.html',
    styleUrls: ['./income-tax-rule.component.scss']
})
export class IncomeTaxRuleComponent implements OnInit {

    taxTypeSource = [ "Percentage", "Amount" ];
    applicableToSource = [ "Male", "Female", "Both" ];
    public incomeTax: any;
    public payrollYears: any;
    public UpdateTaxRule: any;

    constructor(public payrollsetupservice: PayrollSetupService) { }

    async ngOnInit() {

        this.incomeTax = await this.payrollsetupservice.getIncomeTaxRules();

        this.payrollYears = await this.payrollsetupservice.getPayrollYears();

    }

    async addIncomeTaxRule(value) {
        await this.payrollsetupservice.addIncomeTaxRule(value.data);
        this.incomeTax = await this.payrollsetupservice.getIncomeTaxRules();
    }

    UpdatingIncomeTaxRule(value) {
        this.UpdateTaxRule = { ...value.oldData, ...value.newData };
    }

    async updateIncomeTaxRule() {
        await this.payrollsetupservice.updateIncomeTaxRule(this.UpdateTaxRule);
    }

    async deleteIncomeTaxRule(value) {
        await this.payrollsetupservice.Deleteincometaxrule(value.key);
    }
}