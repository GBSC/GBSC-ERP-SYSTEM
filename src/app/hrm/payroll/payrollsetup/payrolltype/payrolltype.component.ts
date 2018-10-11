import { Component, OnInit } from '@angular/core';
import { PayrollSetupService } from '../../../../core';

@Component({
    selector: 'app-payrolltype',
    templateUrl: './payrolltype.component.html',
    styleUrls: ['./payrolltype.component.scss']
})
export class PayrolltypeComponent implements OnInit {

    public payrollType: any;
    constructor(public payrollsetupservice: PayrollSetupService) { }

    async ngOnInit() {
        await this.payrollsetupservice.getpayrolltypes();
        this.payrollType = this.payrollsetupservice.payrolltype;
    }

    async addPayrollType(value) {
        await this.payrollsetupservice.addpayrolltype(value.data);
    }

    async updatePayrollType(value) {
        console.log(value);
        await this.payrollsetupservice.updatepayrolltype(value);
    }

    async deletePayrollType(value) {
        await this.payrollsetupservice.Deletepayrolltype(value.key);
    }

}