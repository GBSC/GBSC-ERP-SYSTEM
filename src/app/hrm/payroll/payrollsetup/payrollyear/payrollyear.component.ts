import { Component, OnInit } from '@angular/core';
import { PayrollSetupService } from '../../../../core';

@Component({
    selector: 'app-payrollyear',
    templateUrl: './payrollyear.component.html',
    styleUrls: ['./payrollyear.component.css']
})
export class PayrollyearComponent implements OnInit {

    public payrollYear: any;
    private updatingYear: any;

    constructor(public payrollsetupservice: PayrollSetupService) { }

    async ngOnInit() {

        this.payrollYear = await this.payrollsetupservice.getPayrollYears();
    }

    async addpayrollyear(value) {
        await this.payrollsetupservice.addPayrollYear(value.data);
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
