import { Component, OnInit } from '@angular/core';
import { PayrollSetupService } from '../../services/payrollsetup.service';

@Component({
  selector: 'app-bank-advice-template',
  templateUrl: './bank-advice-template.component.html',
  styleUrls: ['./bank-advice-template.component.scss']
})
export class BankAdviceTemplateComponent implements OnInit {

  public bankadvice: any; 

  constructor(public payrollsetupservice: PayrollSetupService) { }

 async ngOnInit() {
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
    }
  
  }