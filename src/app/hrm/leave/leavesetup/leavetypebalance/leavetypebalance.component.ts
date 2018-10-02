import { Component, OnInit } from '@angular/core';
import { LeaveSetupService } from '../../leaveSetup.service';
import { EmployeeService } from '../../../employee/services/employee.service';

@Component({
    selector: 'app-leavetypebalance',
    templateUrl: './leavetypebalance.component.html',
    styleUrls: ['./leavetypebalance.component.scss']
})
export class LeavetypebalanceComponent implements OnInit {

    public leavetypebalance: any;
<<<<<<< HEAD
    constructor(public leavesetupservice: LeaveSetupService) { }
=======
    constructor(public leavesetupservice: LeaveSetupService, public employeeservice: EmployeeService) { }
>>>>>>> master

    async ngOnInit() {
        await this.leavesetupservice.getAllleavetypebalance();
        this.leavetypebalance = this.leavesetupservice.leavetypebalance
        console.log(this.leavetypebalance);
<<<<<<< HEAD

    }

=======

        await this.leavesetupservice.getAllleavetype();
        let typeofleave = this.leavesetupservice.leavetype;

        await this.employeeservice.GetAllEmployees();
        let employe = this.employeeservice.employeereg;

    }


>>>>>>> master
    async addleavetypebalance(value) {
        this.leavesetupservice.addleavetypebalance(value.data);
    }

    async updateleavetypebalance(value) {
        this.leavesetupservice.updateleavetypebalance(value);

    }

    async deleteleavetypebalance(value) {
        this.leavesetupservice.Deleteleavetypebalance(value.key);
<<<<<<< HEAD


=======
>>>>>>> master
    }

}
