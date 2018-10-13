import { Component, OnInit } from '@angular/core';
import { LeaveSetupService, EmployeeService } from '../../../../core';

@Component({
    selector: 'app-leaveapprover',
    templateUrl: './leaveapprover.component.html',
    styleUrls: ['./leaveapprover.component.scss']
})
export class LeaveapproverComponent implements OnInit {
<<<<<<< HEAD
=======
    public employees: any;
>>>>>>> master
    public leaveapprover: any;

    constructor(public leavesetupservice: LeaveSetupService, public employeeservice: EmployeeService) { }

    async ngOnInit() {

<<<<<<< HEAD
        await this.leavesetupservice.getleaveapprover();
        this.leaveapprover = this.leavesetupservice.leaveapprover
        console.log(this.leaveapprover);

        await this.employeeservice.GetAllEmployees();
        let employe = this.employeeservice.employeereg;
=======
        this.leaveapprover = await this.leavesetupservice.getLeaveApprovers();

        this.employees = await this.employeeservice.GetAllEmployees();
>>>>>>> master

    }


    async addapprover(value) {
<<<<<<< HEAD
        this.leavesetupservice.addleaveapprover(value.data);
    }

    async updateapprover(value) {
        this.leavesetupservice.updateleaveapprover(value);
=======
        this.leavesetupservice.addLeaveApprover(value.data);
    }

    async updateapprover(value) {
        this.leavesetupservice.updateLeaveApprover(value);
>>>>>>> master

    }

    async deleteapprover(value) {
<<<<<<< HEAD
        this.leavesetupservice.Deleteleaveapprover(value.key);
=======
        this.leavesetupservice.DeleteLeaveApprover(value.key);
>>>>>>> master
    }
}
