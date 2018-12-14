import { Component, OnInit } from '@angular/core';
import { EmployeeService, LeaveSetupService, LeaveService } from '../../../../core';
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
    private LeavePoliciesarray: any[];
    private empleavepolicyarray: any[];


    constructor(public leavesetupservice: LeaveSetupService, public leaveservice: LeaveService, public employeeservice: EmployeeService) { }

    async ngOnInit() {

        this.LeavePolicies = await this.leavesetupservice.getLeavePolicies();
       console.log(this.LeavePolicies);
       
        this.empleavepolicy = await this.leaveservice.getLeavePolicyEmployee();
        console.log( this.empleavepolicy);
        
        this.leavetypebalance = await this.leavesetupservice.getLeaveTypeBalances();

        this.LeaveType = await this.leavesetupservice.getLeaveTypes();

        this.employees = await this.employeeservice.GetAllEmployees();

// this.LeavePolicies = this.LeavePolicies.filter(a => {
//   this.LeavePoliciesarray = a.leaveTypeId 
//   console.log(a.leaveTypeId);
// });
//       console.log(this.LeavePolicies);
//       console.log(this.LeavePoliciesarray);

//       //console.log(x)
        
//         this.empleavepolicy.filter(a=>{
//             a.leaveTypeId
//             console.log(a.leaveTypeId);
//         });
         
this.LeavePoliciesarray = this.LeavePolicies.filter(a=> {
this.empleavepolicyarray =  this.empleavepolicy.filter(b=>{
  let x =  b.leaveTypeId == a.leaveTypeId;
    console.log(this.LeavePoliciesarray);
    console.log(b);
    console.log(a);
    console.log(b+a); 
    console.log(x);
    // console.log(b.leaveTypeId == a.leaveTypeId);
    // console.log(b.leaveTypeId);
    // console.log(a.leaveTypeId); 
});

console.log(this.empleavepolicyarray);

}) 
    //    let x = this.LeavePolicies.maximumAllowedBalance +  this.empleavepolicy.maximumAllowedBalance
    //       console.log(x); 
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
