import { Component, OnInit } from '@angular/core';
import { EmployeeService, LeaveSetupService } from '../../../../core';

@Component({
    selector: 'app-leavetypebalance',
    templateUrl: './leavetypebalance.component.html',
    styleUrls: ['./leavetypebalance.component.scss']
})
export class LeavetypebalanceComponent implements OnInit {

    public leavetypebalance: any;
    public LeaveType: any;
    public employees: any;

    constructor(public leavesetupservice: LeaveSetupService, public employeeservice: EmployeeService) { }

    async ngOnInit() {

        this.leavetypebalance = await this.leavesetupservice.getLeaveTypeBalances();

        this.LeaveType = await this.leavesetupservice.getLeaveTypes();

        this.employees = await this.employeeservice.GetAllEmployees();
    }


    async addleavetypebalance(value) {

        await this.leavesetupservice.addLeaveTypeBalance(value.data);
        this.leavetypebalance = await this.leavesetupservice.getLeaveTypeBalances();
    }

    async updateleavetypebalance(value) {
        await this.leavesetupservice.updateLeaveTypeBalance(value);

    }

    async deleteleavetypebalance(value) {
       await this.leavesetupservice.deleteLeaveTypeBalance(value.key);
    }

}
