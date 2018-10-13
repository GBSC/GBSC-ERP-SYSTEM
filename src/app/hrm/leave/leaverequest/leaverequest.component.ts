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
    public msg: any;
    public leaveApprovr: any;
    public combinedData = {};
    leaverequest: any;
    public leaveRequestId;

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
            TotalLeaveValue: ['', Validators]
        });


        this.leaverequestdetail = await this.leaveservice.getLeaveRequestDetails();
         
        await this.leaveservice.getAllleaverequest(); 
 
        this.employees = await this.empservice.GetAllEmployees();

        this.leaveApprovr = await this.leavesetupservice.getLeaveApprovers();
       
        this.leaveYear = await this.leavesetupservice.getLeaveYears();
   
        this.leaveType =await this.leavesetupservice.getLeaveTypes();
     }

    async addleaverequestordetail() {
        this.leaveRequestDetailForm.value.leaveRequestId = this.leaveRequestId.leaverequestID;
        await this.leaveservice.addLeaveRequestDetail(this.leaveRequestDetailForm.value);
        this.msg = 'Success! Request Detail Save Successfully';
        setTimeout(() => {
            this.msg = null;
          }, 3000);
    }


    async addleaverequest(e) { 
        this.leaveRequestId = await this.leaveservice.addLeaveRequest(this.leaveRequestForm.value);
    }



}
