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


    constructor(public leavesetupservice: LeaveSetupService, public hrSetupService: SetupService, public leaveservice: LeaveService, public employeeservice: EmployeeService) { }

    async ngOnInit() {

        this.LeavePolicies = await this.leavesetupservice.getLeavePolicies();

        this.empleavepolicy = await this.leaveservice.getLeavePolicyEmployee();

        this.leavetypebalance = await this.leavesetupservice.getLeaveTypeBalances();

        this.LeaveType = await this.leavesetupservice.getLeaveTypes();

        this.employees = await this.employeeservice.GetAllEmployees();

        // this.groups = await this.hrSetupService.getAllGroups(); 

        console.log(this.empleavepolicy);
        console.log(this.LeavePolicies);
        console.log(this.employees);



        this.employees = this.employees.map(user => {
            let u;
            for (let lp of this.empleavepolicy) {
                if (lp.userId == user.userId) {
                    console.log('lp', lp)
                    console.log('user', user)
                    user.sampleCount = lp.entitledQuantity;
                    user.sampleId = lp.leaveTypeId;
                    u = user;
                } else {
                    return user;
                }
            }


        });
        // console.log('emp', this.employees); 
        // this.LeavePolicies.forEach(e => { 
        //     for(let user of this.employees) {
        //         // console.log('user', user);
        //         if(e.groupId == user.groupId) {
        //             if(e.leaveTypeId === user.sampleId) {
        //                 console.log(user);
        //                 console.log(e);
        //                 console.log(user.sampleId)
        //                 console.log(user.sampleCount)
        //                 console.log(e.leaveTypeId);
        //                 console.log(e.entitledQuantity);
        //                 // this.empleavepolicy.forEach(lpp => {
        //                 //     if(lpp.userId === user.userId) {
        //                 //         console.log(lpp);

        //                 //         lpp.entitledQuantity += e.entitledQuantity;
        //                 //         console.log(lpp);

        //                 //         return lpp;
        //                 //     }
        //                 // })
        //             }
        //         }
        //     }

        // });


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
