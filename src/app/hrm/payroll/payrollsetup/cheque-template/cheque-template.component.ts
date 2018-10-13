import { Component, OnInit } from '@angular/core';
import { PayrollSetupService } from '../../../../core';

@Component({
    selector: 'app-cheque-template',
    templateUrl: './cheque-template.component.html',
    styleUrls: ['./cheque-template.component.scss']
})
export class ChequeTemplateComponent implements OnInit {
    public chequeTemplate: any;

    constructor(public payrollsetupservice: PayrollSetupService) { }

    async ngOnInit() {

        this.chequeTemplate = await this.payrollsetupservice.getChequeTemplates();
    }

    async addChequeTemplate(value) {
        await this.payrollsetupservice.addChequeTemplate(value.data);
    }

    async updateChequeTemplate(value) { 
        await this.payrollsetupservice.updateChequeTemplate(value);
    }

    async deleteChequeTemplate(value) {
        await this.payrollsetupservice.deleteChequeTemplate(value.key);
    }

}