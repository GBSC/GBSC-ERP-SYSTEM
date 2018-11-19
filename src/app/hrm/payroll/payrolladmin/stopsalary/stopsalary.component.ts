import { Component, OnInit } from '@angular/core';
import { PayrollService, PayrollSetupService } from '../../../../core';

@Component({
    selector: 'app-stopsalary',
    templateUrl: './stopsalary.component.html',
    styleUrls: ['./stopsalary.component.scss']
})
export class StopsalaryComponent implements OnInit {

    public PayrollType: any;
    public StopSalary: any;
    private updatingstopsalary: any;

    constructor(public payrollservice: PayrollService, public payrollsetupservice: PayrollSetupService) { }

    async ngOnInit() {

        this.StopSalary = await this.payrollservice.getStopSalaries();

        this.PayrollType = await this.payrollsetupservice.getPayrollTypes();
    }

    async addStopSalary(value) {

        this.StopSalary = await this.payrollservice.getStopSalaries();
        await this.payrollservice.addStopSalary(value.data);
    }

    StopSalaryUpdating(value) {
        this.updatingstopsalary = { ...value.oldData, ...value.newData };
    }
    async updateStopSalary() {
        await this.payrollservice.updateStopSalary(this.updatingstopsalary);
    }

    async deleteStopSalary(value) {
        await this.payrollservice.deleteStopSalary(value.key);
    }
}