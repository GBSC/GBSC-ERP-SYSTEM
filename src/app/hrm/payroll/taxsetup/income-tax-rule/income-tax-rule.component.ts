import { Component, OnInit } from '@angular/core';
import { PayrollSetupService } from '../../../../core';

@Component({
    selector: 'app-income-tax-rule',
    templateUrl: './income-tax-rule.component.html',
    styleUrls: ['./income-tax-rule.component.scss']
})
export class IncomeTaxRuleComponent implements OnInit {

    public incomeTax: any;
<<<<<<< HEAD
=======
    public payrollYears: any;
>>>>>>> master
    public UpdateTaxRule: any;

    constructor(public payrollsetupservice: PayrollSetupService) { }

    async ngOnInit() {
<<<<<<< HEAD
        await this.payrollsetupservice.getincometaxrules();
        this.incomeTax = this.payrollsetupservice.incometaxrule;

        await this.payrollsetupservice.getpayrollyears();
        let payRollYear = this.payrollsetupservice.payrollyear;

    }

    async addIncomeTaxRule(value) {
        await this.payrollsetupservice.addincometaxrule(value.data);
    }

=======

        this.incomeTax = await this.payrollsetupservice.getIncomeTaxRules();

        this.payrollYears = await this.payrollsetupservice.getPayrollYears();

    }

    async addIncomeTaxRule(value) {
        await this.payrollsetupservice.addIncomeTaxRule(value.data);
    }

>>>>>>> master
    UpdatingIncomeTaxRule(value) {
        this.UpdateTaxRule = { ...value.oldData, ...value.newData };
    }

    async updateIncomeTaxRule() {
<<<<<<< HEAD
        await this.payrollsetupservice.updateincometaxrule(this.UpdateTaxRule);
=======
        await this.payrollsetupservice.updateIncomeTaxRule(this.UpdateTaxRule);
>>>>>>> master
    }

    async deleteIncomeTaxRule(value) {
        await this.payrollsetupservice.Deleteincometaxrule(value.key);
    }
}