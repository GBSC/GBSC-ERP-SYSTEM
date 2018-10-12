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
    public leaveYear: any;
    public employees: any;
    public leaveType: any;
    public leaveApprovr: any;
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


        this.leaverequestdetail = await this.leaveservice.getLeaveRequestDetails();
         
        await this.leaveservice.getAllleaverequest();
        this.leaverequest = this.leaveservice.leaverequest;
        this.combinedData = { ...this.leaverequestdetail, ...this.leaverequest }
 
        this.employees = await this.empservice.GetAllEmployees();

        this.leaveApprovr = await this.leavesetupservice.getleaveapprover();
       
        this.leaveYear = await this.leavesetupservice.getAllleaveyear();
   
        this.leaveType =await this.leavesetupservice.getAllleavetype();
     }

    async addleaverequestordetail() {
        console.log(this.leaveRequestDetailForm.value);
        this.leaveRequestDetailForm.value.leaveRequestId = this.leaveRequestId.leaverequestID;
        await this.leaveservice.addLeaveRequestDetail(this.leaveRequestDetailForm.value);
    }

    leaveRequestId;

    async addleaverequest(e) { 
        this.leaveRequestId = await this.leaveservice.addLeaveRequest(this.leaveRequestForm.value);
        console.log(this.leaveRequestDetailForm.value);
    }



}
