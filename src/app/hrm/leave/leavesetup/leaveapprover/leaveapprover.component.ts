import { Component, OnInit } from '@angular/core';
import { LeaveSetupService, EmployeeService } from '../../../../core';

@Component({
    selector: 'app-leaveapprover',
    templateUrl: './leaveapprover.component.html',
    styleUrls: ['./leaveapprover.component.scss']
})
export class LeaveapproverComponent implements OnInit {
    public employees: any;
    public leaveapprover: any;

    constructor(public leavesetupservice: LeaveSetupService, public employeeservice: EmployeeService) { }

    async ngOnInit() {

        this.leaveapprover = await this.leavesetupservice.getLeaveApprovers(); 

        this.employees = await this.employeeservice.GetAllEmployees();

    }


    async addapprover(value) {
        console.log(value);
        await this.leavesetupservice.addLeaveApprover(value.data);
    }

    async updateapprover(value) {
        await this.leavesetupservice.updateLeaveApprover(value);

    }

    async deleteapprover(value) {
        await this.leavesetupservice.DeleteLeaveApprover(value.key);
    }
}
