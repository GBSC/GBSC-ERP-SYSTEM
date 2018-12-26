import { Component, OnInit } from '@angular/core';
import { EmployeeService, LeaveSetupService, LeaveService, HrmsService, SetupService } from '../../../../core';
import { concatMap } from 'rxjs/operator/concatMap';

@Component({
    selector: 'app-leavetypebalance',
    templateUrl: './leavetypebalance.component.html',
    styleUrls: ['./leavetypebalance.component.scss']
})
export class LeavetypebalanceComponent implements OnInit {

    public leavetypebalance: any;
    public LeaveType: any;
    public employees: any;
    public LeavePolicies: any;
    public empleavepolicy: any;
    public totalleave = []
    public groups: any;
    public empleavepolicyarray: any[];
    public any: any = [];
    public any2: any = [];
    public data: any = []


    constructor(public leavesetupservice: LeaveSetupService, public hrSetupService: SetupService, public leaveservice: LeaveService, public employeeservice: EmployeeService) { }

    async ngOnInit() {

        this.LeavePolicies = await this.leavesetupservice.getLeavePolicies();

        this.empleavepolicy = await this.leaveservice.getLeavePolicyEmployee();

        this.leavetypebalance = await this.leavesetupservice.getLeaveTypeBalances();

        this.LeaveType = await this.leavesetupservice.getLeaveTypes();

        this.employees = await this.employeeservice.GetAllEmployees();

        this.data = this.leaveservice.prepareLeaveData(this.employees, this.LeaveType, this.empleavepolicy
        , this.LeavePolicies);

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
