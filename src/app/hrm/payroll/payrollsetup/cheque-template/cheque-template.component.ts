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
    await this.payrollsetupservice.getchequetemplates();
    this.chequeTemplate = this.payrollsetupservice.chequetemplate;
  }

  async addChequeTemplate(value) {
    await this.payrollsetupservice.addchequetemplate(value.data);
  }

  async updateChequeTemplate(value) {
    console.log(value);
    await this.payrollsetupservice.updatechequetemplate(value);
  }

  async deleteChequeTemplate(value) {
    await this.payrollsetupservice.Deletechequetemplate(value.key);
  }

}