import { Component, OnInit } from '@angular/core';
import { PayrollSetupService } from '../../../../core';

@Component({
    selector: 'app-benefit',
    templateUrl: './benefit.component.html',
    styleUrls: ['./benefit.component.scss']
})
export class BenefitComponent implements OnInit {

    public benefit: any;
    constructor(public payrollsetupservice: PayrollSetupService) { }

    async ngOnInit() {
<<<<<<< HEAD
        await this.payrollsetupservice.getbenefits();
        this.benefit = this.payrollsetupservice.benefits;
    }

    async addBenefit(value) {
        await this.payrollsetupservice.addbenefit(value.data);
    }

    async updateBenefit(value) {
        console.log(value);
        await this.payrollsetupservice.updatebenefit(value);
    }

    async deleteBenefit(value) {
        await this.payrollsetupservice.Deletebenefit(value.key);
=======

        this.benefit = await this.payrollsetupservice.getBenefits();
    }

    async addBenefit(value) {
        await this.payrollsetupservice.addBenefit(value.data);
    }

    updatingBenefit(value) {
        this.benefit = { ...value.oldData, ...value.newData };
    }

    async updateBenefit() {
        await this.payrollsetupservice.updateBenefit(this.benefit);
    }

    async Deletebenefit(value) {
        await this.payrollsetupservice.deleteBenefit(value.key);
>>>>>>> master
    }

}