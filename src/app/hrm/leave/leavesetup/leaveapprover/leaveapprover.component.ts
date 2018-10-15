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
        this.leavesetupservice.addLeaveApprover(value.data);
    }

    async updateapprover(value) {
        this.leavesetupservice.updateLeaveApprover(value);

    }

    async deleteapprover(value) {
        this.leavesetupservice.DeleteLeaveApprover(value.key);
    }
}
