import { Component, OnInit } from '@angular/core';
import { PayrollSetupService } from '../../../../core';

@Component({
    selector: 'app-taxschedule',
    templateUrl: './taxschedule.component.html',
    styleUrls: ['./taxschedule.component.scss']
})
export class TaxscheduleComponent implements OnInit {

    public taxSchedule: any;
    public incomeTaxrule: any;
    public taxScheduling: any;

    constructor(public payrollsetupservice: PayrollSetupService) { }

    async ngOnInit() {
        this.taxSchedule = await this.payrollsetupservice.getTaxSchedules();

        this.incomeTaxrule = await this.payrollsetupservice.getIncomeTaxRules();
    }


    async addTaxSchedule(value) {

        await this.payrollsetupservice.addTaxSchedule(value.data);
        this.taxSchedule = await this.payrollsetupservice.getTaxSchedules();
    }

    updatingTaxSchedule(value) {
        this.taxScheduling = { ...value.oldData, ...value.newData };
    }

    async updateTaxSchedule() {
        await this.payrollsetupservice.updateTaxSchedule(this.taxScheduling);
    }

    async deleteTaxSchedule(value) {
        await this.payrollsetupservice.deleteTaxSchedule(value.key);
    }
}