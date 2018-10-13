import { Component, OnInit } from '@angular/core';
import { PayrollService, PayrollSetupService } from '../../../../core';

@Component({
    selector: 'app-stopsalary',
    templateUrl: './stopsalary.component.html',
    styleUrls: ['./stopsalary.component.scss']
})
export class StopsalaryComponent implements OnInit {

<<<<<<< HEAD
=======
    public PayrollType: any;
>>>>>>> master
    public StopSalary: any;
    private updatingstopsalary: any;

    constructor(public payrollservice: PayrollService, public payrollsetupservice: PayrollSetupService) { }

    async ngOnInit() {
<<<<<<< HEAD
        await this.payrollservice.getstopsalaries();
        this.StopSalary = this.payrollservice.stopsalary;

        await this.payrollsetupservice.getpayrolltypes();
        let PayrollType = this.payrollsetupservice.payrolltype;
    }

    async addStopSalary(value) {
        await this.payrollservice.addstopsalary(value.data);
=======
        this.StopSalary = await this.payrollservice.getStopSalaries();

        this.PayrollType = await this.payrollsetupservice.getPayrollTypes();
    }

    async addStopSalary(value) {
        await this.payrollservice.addStopSalary(value.data);
>>>>>>> master
    }

    StopSalaryUpdating(value) {
        this.updatingstopsalary = { ...value.oldData, ...value.newData };
    }
    async updateStopSalary() {
<<<<<<< HEAD
        await this.payrollservice.updatestopsalary(this.updatingstopsalary);
    }

    async deleteStopSalary(value) {
        await this.payrollservice.Deletestopsalary(value.key);
=======
        await this.payrollservice.updateStopSalary(this.updatingstopsalary);
    }

    async deleteStopSalary(value) {
        await this.payrollservice.deleteStopSalary(value.key);
>>>>>>> master
    }
}