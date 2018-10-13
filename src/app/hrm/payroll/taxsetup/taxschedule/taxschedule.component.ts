import { Component, OnInit } from '@angular/core';
import { PayrollSetupService } from '../../../../core';

@Component({
    selector: 'app-taxschedule',
    templateUrl: './taxschedule.component.html',
    styleUrls: ['./taxschedule.component.scss']
})
export class TaxscheduleComponent implements OnInit {

    public taxSchedule: any;
<<<<<<< HEAD
=======
    public incomeTaxrule: any;
>>>>>>> master
    private taxScheduling: any;

    constructor(public payrollsetupservice: PayrollSetupService) { }

    async ngOnInit() {
<<<<<<< HEAD
        await this.payrollsetupservice.gettaxschedules();
        this.taxSchedule = this.payrollsetupservice.taxschedule;

        await this.payrollsetupservice.getincometaxrules();
        let incomeTaxrule = this.payrollsetupservice.incometaxrule;
=======
        this.taxSchedule = await this.payrollsetupservice.getTaxSchedules();

        this.incomeTaxrule = await this.payrollsetupservice.getIncomeTaxRules();
>>>>>>> master
    }


    async addTaxSchedule(value) {
<<<<<<< HEAD
        await this.payrollsetupservice.addtaxschedule(value.data);
=======
        await this.payrollsetupservice.addTaxSchedule(value.data);
>>>>>>> master
    }

    updatingTaxSchedule(value) {
        this.taxScheduling = { ...value.oldData, ...value.newData };
    }

    async updateTaxSchedule() {
<<<<<<< HEAD
        await this.payrollsetupservice.updatetaxschedule(this.taxScheduling);
    }

    async deleteTaxSchedule(value) {
        await this.payrollsetupservice.Deletetaxschedule(value.key);
=======
        await this.payrollsetupservice.updateTaxSchedule(this.taxScheduling);
    }

    async deleteTaxSchedule(value) {
        await this.payrollsetupservice.deleteTaxSchedule(value.key);
>>>>>>> master
    }
}