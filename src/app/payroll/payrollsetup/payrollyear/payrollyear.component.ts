import { Component, OnInit } from '@angular/core';
import { PayrollSetupService } from '../../../hrm/payroll/services/payrollsetup.service';

@Component({
    selector: 'app-payrollyear',
    templateUrl: './payrollyear.component.html',
    styleUrls: ['./payrollyear.component.css']
})
export class PayrollyearComponent implements OnInit {

    public payrollyear: any;

    constructor(public payrollsetupservice: PayrollSetupService) { }

    async ngOnInit() {
         await this.payrollsetupservice.getpayrollyears();
         this.payrollyear = this.payrollsetupservice.payrollyear;
       }
     
       async addPayrollYear(value) {
         await this.payrollsetupservice.addpayrollyear(value.data);
       }
     
       async updatePayrollYear(value) {
         console.log(value);
         await this.payrollsetupservice.updatepayrollyear(value);
       }
     
       async deletePayrollYear(value) {
         await this.payrollsetupservice.Deletepayrollyear(value.key);
       }
     
     }