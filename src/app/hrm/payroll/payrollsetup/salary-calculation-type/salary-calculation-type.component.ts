import { Component, OnInit } from '@angular/core';
import { PayrollSetupService } from '../../../../core';

@Component({
    selector: 'app-salary-calculation-type',
    templateUrl: './salary-calculation-type.component.html',
    styleUrls: ['./salary-calculation-type.component.scss']
})
export class SalaryCalculationTypeComponent implements OnInit {

    public salaryCalculationType: any;
<<<<<<< HEAD
    constructor(public payrollsetupservice: PayrollSetupService) { }

    async ngOnInit() {
        await this.payrollsetupservice.getsalarycalculationtypes();
        this.salaryCalculationType = this.payrollsetupservice.salarycalculationtype;
    }

    async addSalaryCalculationType(value) {
        await this.payrollsetupservice.addsalarycalculationtype(value.data);
    }

    async updateSalaryCalculationType(value) {
        console.log(value);
        await this.payrollsetupservice.updatesalarycalculationtype(value);
    }

    async deleteSalaryCalculationType(value) {
        await this.payrollsetupservice.Deletesalarycalculationtype(value.key);
=======

    constructor(public payrollsetupservice: PayrollSetupService) { }

    async ngOnInit() {

        this.salaryCalculationType = await this.payrollsetupservice.getSalaryCalculationTypes();
    }

    async addSalaryCalculationType(value) {
        await this.payrollsetupservice.addSalaryCalculationType(value.data);
    }

    async updateSalaryCalculationType(value) {
        await this.payrollsetupservice.updateSalaryCalculationType(value);
    }

    async deleteSalaryCalculationType(value) {
        await this.payrollsetupservice.deleteSalaryCalculationType(value.key);
>>>>>>> master
    }

}