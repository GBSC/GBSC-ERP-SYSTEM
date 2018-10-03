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

        await this.payrollsetupservice.getpayrollyears();
        this.payrollYear = this.payrollsetupservice.payrollyear;
    }

    async addpayrollyear(value) {
        await this.payrollsetupservice.addpayrollyear(value.data);
    }

    updatingpayrollyear(value) {
        this.updatingYear = { ...value.oldData, ...value.newData };
        console.log(this.updatingYear);
    }

    async updatepayrollyear() {
        await this.payrollsetupservice.updatepayrollyear(this.updatingYear);

    }

    async deletepayrollyear(value) {
        await this.payrollsetupservice.Deletepayrollyear(value.key);
    }

}
