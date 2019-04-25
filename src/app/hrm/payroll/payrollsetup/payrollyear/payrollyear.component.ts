import { Component, OnInit } from '@angular/core';
import { PayrollSetupService } from '../../../../core';

@Component({
    selector: 'app-payrollyear',
    templateUrl: './payrollyear.component.html',
    styleUrls: ['./payrollyear.component.css']
})
export class PayrollyearComponent implements OnInit {

    public payrollYears: any;
    public updatingYear: any;

    constructor(public payrollsetupservice: PayrollSetupService) { }

    async ngOnInit() {

        this.payrollsetupservice.getPayrollYears().subscribe(resp => {
            this.payrollYears = resp;
           console.log(this.payrollYears);
         })
    }

     addpayrollyear(value) {
         
         this.payrollsetupservice.addPayrollYear(value.data).subscribe(resp => {console.log(resp); })

        this.payrollsetupservice.getPayrollYears().subscribe(resp => {this.payrollYears = resp; })
     }

    updatingpayrollyear(value) {
        this.updatingYear = { ...value.oldData, ...value.newData };
    }

    async updatepayrollyear() {
        await this.payrollsetupservice.updatePayrollYear(this.updatingYear);

    }

    async deletepayrollyear(value) {
        await this.payrollsetupservice.deletePayrollYear(value.key);
    }

}
