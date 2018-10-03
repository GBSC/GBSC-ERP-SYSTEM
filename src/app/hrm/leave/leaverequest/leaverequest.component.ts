import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { LeaveSetupService, EmployeeService, LeaveService } from '../../../core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-leaverequest',
    templateUrl: './leaverequest.component.html',
    styleUrls: ['./leaverequest.component.css']
})
export class LeaverequestComponent implements OnInit {

    public leaveRequestForm: FormGroup;
    public leaveRequestDetailForm: FormGroup;
    public leaverequestdetail: any;
    public combinedData = {};
    leaverequest: any;

    constructor(private fb: FormBuilder, public leavesetupservice: LeaveSetupService, public empservice: EmployeeService,
        public router: Router, public leaveservice: LeaveService) { }

    async ngOnInit() {

        this.leaveRequestForm = this.fb.group({
            UserId: ['', Validators],
            LeaveRequestCode: ['', Validators],
            RequestDate: ['', Validators],
            IsApproved: ['', Validators]
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

        await this.leaveservice.getAllleaverequest();
        this.leaverequest = this.leaveservice.leaverequest;
        this.combinedData = {...this.leaverequestdetail, ...this.leaverequest}

        console.log(this.combinedData);
        
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
