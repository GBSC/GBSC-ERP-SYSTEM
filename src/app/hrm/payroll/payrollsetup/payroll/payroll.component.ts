import { Component, OnInit } from '@angular/core';
import { PayrollSetupService } from '../../services/payrollsetup.service';

@Component({
  selector: 'app-payroll',
  templateUrl: './payroll.component.html',
  styleUrls: ['./payroll.component.scss']
})
export class PayrollComponent implements OnInit {

  public payRoll: any; 
    constructor(public payrollsetupservice: PayrollSetupService) { }

   async ngOnInit() {
        await this.payrollsetupservice.getpayrolls();
        this.payRoll = this.payrollsetupservice.payroll;
      }
    
      async addPayroll(value) {
        await this.payrollsetupservice.addpayroll(value.data);
      }
    
      async updatePayroll(value) {
        console.log(value);
        await this.payrollsetupservice.updatepayroll(value);
      }
    
      async deletePayroll(value) {
        await this.payrollsetupservice.Deletepayroll(value.key);
      }
    
    }