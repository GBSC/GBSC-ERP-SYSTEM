import { Component, OnInit } from '@angular/core';
import { PayrollSetupService } from '../../services/payrollsetup.service';

@Component({
    selector: 'app-payrollyear',
    templateUrl: './payrollyear.component.html',
    styleUrls: ['./payrollyear.component.css']
})
export class PayrollyearComponent implements OnInit {

    public payrollyaer: any;
    payrollYear: any;

    constructor(public payrollsetupservice: PayrollSetupService) { }

    async ngOnInit() {
       
        this.payrollYear = await this.payrollsetupservice.getpayrollyears();
    }

    async addpayrollyear(value){
        await this.payrollsetupservice.addpayrollyear(value.data);
    }

    async updatepayrollyear(value) { 
       await this.payrollsetupservice.updatepayrollyear(value);
    }

    async deletepayrollyear(value) {
       await this.payrollsetupservice.Deletepayrollyear(value.key);
    }

}
