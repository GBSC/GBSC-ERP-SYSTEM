import { Component, OnInit } from '@angular/core';
import { PayrollSetupService } from '../../../../core';

@Component({
    selector: 'app-allowancerate',
    templateUrl: './allowancerate.component.html',
    styleUrls: ['./allowancerate.component.css']
})
export class AllowancerateComponent implements OnInit {
<<<<<<< HEAD
=======
    public allowances: any;
>>>>>>> master
    public allowancerate: any;

    constructor(public payrollsetupservice: PayrollSetupService) { }

    async ngOnInit() {

<<<<<<< HEAD
        await this.payrollsetupservice.getallowancerates();
        this.allowancerate = this.payrollsetupservice.allowancerate;

        await this.payrollsetupservice.getallowances();
        let allowance = this.payrollsetupservice.allowance;
=======
        this.allowancerate = await this.payrollsetupservice.getAllowanceRates();

        this.allowances = await this.payrollsetupservice.getAllowances();
>>>>>>> master

    }

    async addAllowanceRate(value) {
<<<<<<< HEAD
        await this.payrollsetupservice.addallowancerate(value.data);
    }

    async updateAllowanceRate(value) {
        console.log(value);
        await this.payrollsetupservice.updateallowancerate(value);
    }

    async deleteAllowanceRate(value) {
        await this.payrollsetupservice.Deleteallowancerate(value.key);
=======
        await this.payrollsetupservice.addAllowanceRate(value.data);
    }

    async updateAllowanceRate(value) {
        await this.payrollsetupservice.updateAllowanceRate(value);
    }

    async deleteAllowanceRate(value) {
        await this.payrollsetupservice.deleteAallowanceRate(value.key);
>>>>>>> master
    }

}