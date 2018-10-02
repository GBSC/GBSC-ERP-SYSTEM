import { Component, OnInit } from '@angular/core';
import { PayrollSetupService } from '../../../hrm/payroll/services/payrollsetup.service';

@Component({
    selector: 'app-pf-payment',
    templateUrl: './pf-payment.component.html',
    styleUrls: ['./pf-payment.component.css']
})
export class PfPaymentComponent implements OnInit {
    public pfPayment: any; 
    constructor(public payrollsetupservice: PayrollSetupService) { }

    async ngOnInit() {
        await this.payrollsetupservice.getpfpayments();
        this.pfPayment = this.payrollsetupservice.pfpayment;
      }
    
      async addPFPayment(value) {
        await this.payrollsetupservice.addpfpayment(value.data);
      }
    
      async updatePFPayment(value) {
        console.log(value);
        await this.payrollsetupservice.updatepfpayment(value);
      }
    
      async deletePFPayment(value) {
        await this.payrollsetupservice.Deletepfpayment(value.key);
      }
    
    }