import { Component, OnInit } from '@angular/core';
import { PayrollSetupService } from '../../../../core';

@Component({
    selector: 'app-bank-advice-template',
    templateUrl: './bank-advice-template.component.html',
    styleUrls: ['./bank-advice-template.component.scss']
})
export class BankAdviceTemplateComponent implements OnInit {

    public bankAdviceTemplates: any;

    constructor(public payrollsetupservice: PayrollSetupService) { }

    async ngOnInit() {

        this.bankAdviceTemplates = await this.payrollsetupservice.getBankAdviceTemplates();
    }

    async addBankAdviceTemplate(value) {
        await this.payrollsetupservice.addBankAdviceTemplate(value.data);
    }

    async updateBankAdviceTemplate(value) {
        await this.payrollsetupservice.updateBankAdviceTemplate(value);
    }

    async deleteBankAdviceTemplate(value) {
        await this.payrollsetupservice.deleteBankAdviceTemplate(value.key);
    }

}