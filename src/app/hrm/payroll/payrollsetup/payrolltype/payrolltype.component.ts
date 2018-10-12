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
        this.payrollType = await this.payrollsetupservice.getPayrollTypes();
    }

    async addPayrollType(value) {
        await this.payrollsetupservice.addPayrollType(value.data);
    }

    async updatePayrollType(value) {
        await this.payrollsetupservice.updatePayrollType(value);
    }

    async deletePayrollType(value) {
        await this.payrollsetupservice.deletePayrollType(value.key);
    }

}