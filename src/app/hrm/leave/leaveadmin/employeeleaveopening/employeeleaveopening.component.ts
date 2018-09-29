import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LeaveService } from '../../leave.service';
import { EmployeeService } from '../../../employee/services/employee.service';
import { LeaveSetupService } from '../../leaveSetup.service';

@Component({
    selector: 'app-employeeleaveopening',
    templateUrl: './employeeleaveopening.component.html',
    styleUrls: ['./employeeleaveopening.component.css']
})
export class EmployeeleaveopeningComponent implements OnInit {
    public leaveopeningForm: any;
    public leaveopendetailForm: any;

    constructor(public fb: FormBuilder, public leaveservice: LeaveService, public leavesetupservice: LeaveSetupService, public empservice: EmployeeService, public router: Router) { }

    async ngOnInit() {


        this.leaveopeningForm = this.fb.group({
            Employee: ['', Validators.required],
            LeaveYear: ['', Validators.required],
            Remarks: ['', Validators.required]

        });


        this.leaveopendetailForm = this.fb.group({
            LeaveType: ['', Validators.required],
            Quantity: ['', Validators.required],
            Expiry: ['', Validators.required]
        });

        await this.empservice.GetAllEmployees();
        let employee = this.empservice.employeereg;
        console.log(employee);

        await this.leavesetupservice.getAllleaveyear();
        let leaveyer = this.leavesetupservice.leaveyear;
        console.log(leaveyer);

        await this.leavesetupservice.getAllleavetype();
        let leavetyp = this.leavesetupservice.leavetype;
        console.log(leavetyp);

    }


    async addleaveopeningordetail(opening, detail) {

        console.log(opening.data);
        this.leaveservice.addLeaveopening(opening.data);

        console.log(opening.data);
        this.leaveservice.addLeaveopeningdetail(detail.data);


    }

}
