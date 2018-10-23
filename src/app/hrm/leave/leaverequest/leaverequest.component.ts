import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { LeaveSetupService, EmployeeService, LeaveService } from '../../../core';
import { Router } from '@angular/router';
import { LeaveRequestDetail } from '../../../core/Models/HRM/leaveRequestDetail';
import { LeaveRequest } from '../../../core/Models/HRM/leaveRequest';

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
    public leaverequest: any;
    public updatingRequest: any;
    public leaveOpening: any;
    public leaveRequestId;
    private requestDetail: LeaveRequestDetail[];

    constructor(private fb: FormBuilder, public leavesetupservice: LeaveSetupService, public empservice: EmployeeService,
        public router: Router, public leaveservice: LeaveService) { }

    async ngOnInit() {

        this.requestDetail = [];

        this.leaveRequestForm = this.fb.group({
            UserId: ['', Validators],
            IsApproved: ['', Validators],
            RequestDate: ['', Validators]
        });


        this.leaverequestdetail = await this.leaveservice.getLeaveRequestDetails();

        this.leaverequest = await this.leaveservice.getAllleaverequest();

        this.leaveOpening = await this.leaveservice.getLeaveOpening();

        this.employees = await this.empservice.GetAllEmployees();

        this.leaveApprovr = await this.leavesetupservice.getLeaveApprovers();

        this.leaveYear = await this.leavesetupservice.getLeaveYears();

        this.leaveType = await this.leavesetupservice.getLeaveTypes();
    }

    async leaveRequestDetail(value) {
        let data = value.data;
        this.requestDetail.push(data);
    }

    async updatingRequestDetail(value) {
        this.updatingRequest = { ...value.oldData, ...value.newData };
    }

    async updateRequestDetail() {
        await this.leaveservice.updateLeaveRequestDetail( this.updatingRequest);
    }


    async addLeaveRequest(value) {
        let request = new LeaveRequest();
        request = { ...request, ...value };
        request.LeaveRequestDetails = this.requestDetail;
        let s = await this.leaveservice.addLeaveRequest(request);
        this.msg = 'Success! Leave Request Submit Successfully';
        setTimeout(() => {
            this.msg = null;
        }, 3000);
        this.leaveRequestForm.reset();
    }
 
}
