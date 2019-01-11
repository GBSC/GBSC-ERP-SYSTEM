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

        this.benefit = await this.payrollsetupservice.getBenefits();
    }

    async addBenefit(value) {
        await this.payrollsetupservice.addBenefit(value.data);
        this.benefit = await this.payrollsetupservice.getBenefits();
    }

    updatingBenefit(value) {
        this.benefit = { ...value.oldData, ...value.newData };
    }

    async updateBenefit() {
        await this.payrollsetupservice.updateBenefit(this.benefit);
    }

    async Deletebenefit(value) {
        await this.payrollsetupservice.deleteBenefit(value.key);
    }

}