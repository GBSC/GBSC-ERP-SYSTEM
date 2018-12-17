import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { LeaveSetupService, EmployeeService, LeaveService } from '../../../core';
import { Router, ActivatedRoute } from '@angular/router';
import { LeaveRequestDetail } from '../../../core/Models/HRM/leaveRequestDetail';
import { LeaveRequest } from '../../../core/Models/HRM/leaveRequest';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-leaverequest',
    templateUrl: './leaverequest.component.html',
    styleUrls: ['./leaverequest.component.css']
})
export class LeaverequestComponent implements OnInit {

    public leaveDetail: any[] = [];
    public leaveRequestForm: FormGroup;
    // public leaverequestdetail: any;
    public leaveYear: any;
    public employees: any;
    public leaveType: any;
    public leaveRequest: any;
    public leaveApprovr: any;
    public leaverequest: any;
    public updatingRequest: any;
    public leaveOpening: any; 
    private requestDetail: LeaveRequestDetail[];
    public totalleave : any;

    @Input('leaveRequestId') id: number;

    constructor(public toastr: ToastrService, public fb: FormBuilder, public activatedRoute: ActivatedRoute, public leavesetupservice: LeaveSetupService, public empservice: EmployeeService,
        public router: Router, public leaveservice: LeaveService) { }

    async ngOnInit() {

        this.requestDetail = [];

        this.leaveRequestForm = this.fb.group({
            UserId: ['', Validators],
            IsApproved: ['', Validators],
            RequestDate: ['', Validators]
        });


        // this.leaverequestdetail = await this.leaveservice.getLeaveRequestDetails();

        this.leaverequest = await this.leaveservice.getAllleaverequest();

        this.leaveOpening = await this.leaveservice.getLeaveOpening();

        this.employees = await this.empservice.GetAllEmployees();

        this.leaveApprovr = await this.leavesetupservice.getLeaveApprovers();

        this.leaveYear = await this.leavesetupservice.getLeaveYears();

        this.leaveType = await this.leavesetupservice.getLeaveTypes();

        this.activatedRoute.params.subscribe(params => {
            this.id = params['id'];
        });
        if (this.isUpdate() === true) {
            this.leaveservice.getleaverequest(this.id).subscribe(resp => {
                this.leaveRequest = resp;
                let a = this.leaveRequest.leaveRequestDetails;
                this.leaveDetail = a.filter(b => {
                    delete b.leaveRequestDetailId;
                    delete b.leaveRequestId;
                    return b;
                });
                this.patchValues(this.leaveRequest);
            });
        }

        // this.totalleave = 
    }

    
    async updatingRequestDetail(value) {
        this.updatingRequest = { ...value.oldData, ...value.newData };
    }
    
    async updateRequestDetail() {
        await this.leaveservice.updateLeaveRequestDetail(this.updatingRequest);
    }

     async leaveRequestDetail(value) {
     let data = value.data;
      this.requestDetail.push(data);
     }

    async addLeaveRequest(value) {
        let request = new LeaveRequest();
        request = { ...request, ...value };
        request.LeaveRequestDetails = this.requestDetail;
        let s = await this.leaveservice.addLeaveRequest(request);
        this.leaveRequestForm.reset();
        this.toastr.success("Leave Request Added");
        this.router.navigate(['/hrm/leave/leaverequests']);

    }


    isUpdate(): boolean {

        if (this.id > 0) {
            return true;
        }
        else
            return false;
    }

    async updateLeaverequestDetail(value) {
        console.log(value);
    }

    async update(value) {
        value.leaveRequestId = this.id;
        value.LeaveRequestDetails = this.leaveDetail;
        this.leaveservice.updateLeaveRequest(value).subscribe(resp => {
            this.toastr.success("Leave Request Updated");
            this.router.navigate(['/hrm/leave/leaverequests']);

        });
    }

    patchValues(request: any) {

        this.leaveRequestForm.patchValue({

            UserId: request.userId,
            IsApproved: request.isApproved,
            RequestDate: request.requestDate
        })

    }
}
