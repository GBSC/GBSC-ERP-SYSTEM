import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LeaveService } from '../../leave.service';
import { EmployeeService } from '../../../employee/services/employee.service';
import { LeaveSetupService } from '../../leaveSetup.service';
import { SetupService } from '../../../hrmsSetup/services/setup.service';

@Component({
    selector: 'app-employeeleaveopening',
    templateUrl: './employeeleaveopening.component.html',
    styleUrls: ['./employeeleaveopening.component.css']
})
export class EmployeeleaveopeningComponent implements OnInit {
    public leaveopeningForm: FormGroup;
    public leaveopendetailForm: FormGroup;
    public leaveopening: any;
    public leveopeningdetail: any;

    constructor(public fb: FormBuilder, public setup: SetupService, public leaveservice: LeaveService, public leavesetupservice: LeaveSetupService, public empservice: EmployeeService, public router: Router) { }

    async ngOnInit() {

        this.leaveopeningForm = this.fb.group({
            UserId: ['', Validators.required],
            LeaveYearId: ['', Validators.required],
            Remarks: ['', Validators.required]

        });


        this.leaveopendetailForm = this.fb.group({
            LeaveTypeId: ['', Validators.required],
            Quantity: ['', Validators.required],
            ExpiryDate: ['', Validators.required]
        });

        this.leaveservice.getleaveopening();
        this.leaveopening = this.leaveservice.leaveopening
        console.log(this.leaveopening);

        this.leaveservice.getleaveopeningdetail();
        this.leveopeningdetail = this.leaveservice.leaveopeningdetail
        console.log(this.leveopeningdetail);


        await this.empservice.GetAllEmployees();
        let employee = this.empservice.employeereg;

        await this.leavesetupservice.getAllleaveyear();
        let leaveyer = this.leavesetupservice.leaveyear;

        await this.leavesetupservice.getAllleavetype();
        let levetype = this.leavesetupservice.leavetype;

    }


    async addleaveopeningordetail() {

        // console.log(opening);
        this.leaveservice.addLeaveopening(this.leaveopeningForm.value);
        this.leaveservice.addLeaveopeningdetail(this.leaveopendetailForm.value);

    }

}
