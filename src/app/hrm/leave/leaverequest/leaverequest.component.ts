import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { LeaveSetupService } from '../leaveSetup.service';
import { Router } from '@angular/router';
import { LeaveService } from '../leave.service';
import { EmployeeService } from '../../employee/services/employee.service';

@Component({
    selector: 'app-leaverequest',
    templateUrl: './leaverequest.component.html',
    styleUrls: ['./leaverequest.component.css']
})
export class LeaverequestComponent implements OnInit {

    public leaveRequestForm: FormGroup;
    public leaveRequestDetailForm: FormGroup;
    public leaverequestdetail: any;

    constructor(private fb: FormBuilder, public leavesetupservice: LeaveSetupService, public empservice: EmployeeService,
        public router: Router, public leaveservice: LeaveService) { }

    async ngOnInit() {

        this.leaveRequestForm = this.fb.group({
            UserId: ['', Validators]
        });

        this.leaveRequestDetailForm = this.fb.group({
            LeaveYearId: ['', Validators],
            LeaveTypeId: ['', Validators],
            DateFrom: ['', Validators],
            DateTill: ['', Validators],
            Description: ['', Validators],
            IsShortLeave: ['', Validators],
            FirstSecondHalf: ['', Validators],
            Value: ['', Validators],
            ApprovalId: ['']
        });


        await this.leaveservice.getAllleaverequestdetail();
        this.leaverequestdetail = this.leaveservice.leaverequestdetail;

        await this.empservice.GetAllEmployees();
        let employee = this.empservice.employeereg;
 
        await this.leavesetupservice.getleaveapprover();
        let leaveapprovr = this.leavesetupservice.leaveapprover;

        await this.leavesetupservice.getAllleaveyear();
        let leaveyear = this.leavesetupservice.leaveyear;

        await this.leavesetupservice.getAllleavetype();
        let levetype = this.leavesetupservice.leavetype;
    }

    async addleaverequestordetail() {
        console.log(this.leaveRequestDetailForm.value);
        this.leaveRequestDetailForm.value.leaveRequestId = this.leaveRequestId.leaverequestID;
        await this.leaveservice.addleaverequestdetail(this.leaveRequestDetailForm.value);
    }

    leaveRequestId;

    async addleaverequest(e) {
       // console.log(this.leaveRequestForm.value);
       this.leaveRequestId = await this.leaveservice.addleaverequest(this.leaveRequestForm.value);
        console.log(this.leaveRequestDetailForm.value);
    }



}
