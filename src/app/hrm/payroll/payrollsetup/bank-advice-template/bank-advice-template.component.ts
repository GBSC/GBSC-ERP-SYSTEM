import { Component, OnInit } from '@angular/core';
import { PayrollSetupService } from '../../../../core';

@Component({
    selector: 'app-bank-advice-template',
    templateUrl: './bank-advice-template.component.html',
    styleUrls: ['./bank-advice-template.component.scss']
})
export class BankAdviceTemplateComponent implements OnInit {

<<<<<<< HEAD
    public bankadvice: any;
=======
    public bankAdviceTemplates: any;
>>>>>>> master

    constructor(public payrollsetupservice: PayrollSetupService) { }

    async ngOnInit() {

<<<<<<< HEAD
        await this.payrollsetupservice.getbankadvicetemplates();
        this.bankadvice = this.payrollsetupservice.bankadvicetemplate;
    }

    async addBankAdviceTemplate(value) {
        await this.payrollsetupservice.addbankadvicetemplate(value.data);
    }

    async updateBankAdviceTemplate(value) {
        console.log(value);
        await this.payrollsetupservice.updatebankadvicetemplate(value);
    }

    async deleteBankAdviceTemplate(value) {
        await this.payrollsetupservice.Deletebankadvicetemplate(value.key);
=======
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
>>>>>>> master
    }

}