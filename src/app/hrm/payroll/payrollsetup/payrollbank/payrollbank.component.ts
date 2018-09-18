import { Component, OnInit } from '@angular/core';
import { PayrollSetupService } from '../../services/payrollsetup.service';

@Component({
  selector: 'app-payrollbank',
  templateUrl: './payrollbank.component.html',
  styleUrls: ['./payrollbank.component.scss']
})
export class PayrollbankComponent implements OnInit {

  public payrollBank: any; 
  constructor(public payrollsetupservice: PayrollSetupService) { }

 async ngOnInit() {
      await this.payrollsetupservice.getpayrollbanks();
      this.payrollBank = this.payrollsetupservice.payrollbank;
     
      await this.payrollsetupservice.getbankadvicetemplates();
      let bankAdviceTemplate = this.payrollsetupservice.bankadvicetemplate;
     
      await this.payrollsetupservice.getchequetemplates();
      let chequeTemplate = this.payrollsetupservice.chequetemplate;
    }
  
    async addPayrollBank(value) {
      await this.payrollsetupservice.addpayrollbank(value.data);
    }
  
    async updatePayrollBank(value) {
      console.log(value);
      await this.payrollsetupservice.updatepayrollbank(value);
    }
  
    async deletePayrollBank(value) {
      await this.payrollsetupservice.Deletepayrollbank(value.key);
    }
  
  }