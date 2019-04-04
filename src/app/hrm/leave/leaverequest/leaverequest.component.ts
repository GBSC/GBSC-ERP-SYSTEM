import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { LeaveSetupService, EmployeeService, LeaveService, AuthService } from '../../../core';
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

    lookupDataSource = [ "On Leave", "Cancel Leave" ];
    public leaveRequestForm: FormGroup;
    public leaveDaysForm: FormGroup;
    public leaveRequestDetailForm: any;
    public leaveYears: any;
    public employees: any;
    public leaveType: any;
    public leaveRequest: any;
    public leaveTypeBalances: any;
    public leaveApprovr: any;
    public leaverequest: any;
    public requestDetail: any[];
    public totalLeave: any;
    public leavePolicy: any;
    public empleavePolicy: any;
    public availed: any = 0;
    public empId: any = null;
    public leaveBBB: any = null;
    public data: any;
    public approvedLeaves: any;
    public approvedOrNot: any;
    submitted = false;

    @Input('leaveRequestId') id: number;

    constructor(public toastr: ToastrService, public authService: AuthService, public fb: FormBuilder, public activatedRoute: ActivatedRoute, public leavesetupservice: LeaveSetupService, public empservice: EmployeeService,
        public router: Router, public leaveservice: LeaveService) {

        this.onSetCellValue = this.onSetCellValue.bind(this);

        this.leaveRequestForm = this.fb.group({
            UserId: ['', Validators.required],
            IsApproved: [''],
            RequestDate: [''],
            leaveRequestDetails: this.fb.array([])
        });

        this.leaveRequestDetailForm = this.fb.group({
            leaveYearId: ['', Validators.required],
            leaveTypeId: ['', Validators.required],
            dateFrom: ['', Validators.required],
            dateTill: ['', Validators.required],
            isShortLeave: [''],
            firstSecondHalf: [''],
            value: [''],
            totalLeaveDetailValue: [''],
            totalLeave: [''],
            description: [''],
            leaveDays: this.fb.array([])
        });

    }

    async ngOnInit() {


        this.requestDetail = [];

        this.leaverequest = await this.leaveservice.getAllleaverequest();

        this.employees = await this.empservice.GetAllEmployees();

        this.leaveApprovr = await this.leavesetupservice.getLeaveApprovers();

        this.leaveYears = await this.leavesetupservice.getLeaveYears();
        console.log(this.leaveYears);
        this.leaveYears = this.leaveYears.filter(c => c.isCurrentYear == true);
        console.log(this.leaveYears);
        
        this.leaveType = await this.leavesetupservice.getLeaveTypes();

        this.empleavePolicy = await this.leaveservice.getLeavePolicyEmployee();

        this.leavePolicy = await this.leavesetupservice.getLeavePolicies();

        this.activatedRoute.params.subscribe(params => {
            this.id = params['id'];
        });
        if (this.isUpdate() === true) {
            this.leaveservice.getleaverequest(this.id).subscribe(resp => {
                this.leaveRequest = resp;
                let a = this.leaveRequest.leaveRequestDetails;
                this.requestDetail = a.filter(b => {
                    delete b.leaveRequestDetailId;
                    delete b.leaveRequestId;
                    return b;
                });

                this.getLeaveBalance(this.leaveRequest.userId);
                this.patchValues(this.leaveRequest);
            });
        }
        this.data = this.leaveservice.prepareLeaveData(this.employees, this.leaveType, this.empleavePolicy, this.leavePolicy);
    }

    public leaveDates: any = []
 
    public count : any;

    addLeaveDays(value) {
        var dateOfLeave = this.formatDate(new Date(value));
        let data = {
            leaveDate: dateOfLeave,
            status: "On Leave"
        }

        let availedDay ;
        this.leaverequest.forEach(l => 
            { 
                 if(l.userId == this.empId){

                    l.leaveRequestDetails.forEach(lday => { 
                        
                        if(lday.leaveTypeId == this.leaveBBB.leaveTypeId){  
                            availedDay = lday.leaveDays.find(c => this.formatDate(new Date(c.leaveDate)) == dateOfLeave);
                        }
                    })
                 }
            })
        
        let selectedDay = this.leaveDates.find(c => this.formatDate(new Date(c.leaveDate)) == dateOfLeave);
        if(selectedDay || availedDay) {
                this.toastr.info("Day Already Selected or Availed")
                return;
        }

        this.leaveDates.push(data); 
         this.count = this.leaveDates.filter(c => c.status === 'On Leave').length;
                this.availed = this.count;
    }


    async leaveRequestDetail(value) { 
        value.leaveTypeId = this.leaveBBB.leaveTypeId;
        value.totalLeaveDetailValue = this.leaveBBB.entitledQuantity;
        value.totalLeave = this.leaveBBB.entitledQuantity;
        value.value = this.availed;
        value.totalLeaveDetailValue = this.approvedOrNot;
        value.CompanyId = this.authService.getUserCompanyId();
        value.leaveDays = this.leaveDates;
        this.requestDetail.push(value);
        console.log(value);

    }

    addLeaveRequest(value) {
        this.submitted = true;
        if (this.leaveRequestForm.invalid && this.leaveRequestDetailForm.invalid) {
            this.toastr.error("Fill All Required Fields");
        }
        else {

            this.leaveRequestForm.value.leaveRequestDetails = this.requestDetail;
            if (this.requestDetail.length) {
                this.leaveservice.addLeaveRequest(value).subscribe(r => {

                    this.toastr.success("Leave Request Added");
                    this.router.navigate(['/hrm/leave/leaverequests']);
                });
                console.log(value);
            }
            else {
                this.toastr.error("Please Add Leave Detail")
            }
        }
    }

    isUpdate(): boolean {

        if (this.id > 0) {
            return true;
        }
        else
            return false;
    }

    updateLeaveDay(value) {
        console.log(value);
        this.count = this.leaveDates.filter(c => c.status === 'On Leave').length;
        this.availed = this.count;
    }

    async updateLeaverequestDetail(value) {
        console.log(value);
    }

    update(value) {
        value.leaveRequestId = this.id;
        value.LeaveRequestDetails = this.requestDetail;
        this.leaveservice.updateLeaveRequest(value).subscribe(resp => {
            console.log(resp);
            this.toastr.success("Leave Request Updated");
            this.router.navigate(['/hrm/leave/leaverequests']);

        });
        console.log(value);
    }

    contentReady(e) {
        if (!e.component.getSelectedRowKeys().length)
            e.component.selectRowsByIndexes(-1);
    }

    selectionChanged(e) {
        e.component.collapseAll(-0);
        e.component.expandRow(e.currentSelectedRowKeys[0]);
    }

    getLeaveBalance(userId) {
        this.empId = userId;
    }
    get r() { return this.leaveRequestForm.controls; }
    get rd() { return this.leaveRequestDetailForm.controls; }

    onSetCellValue(abc) {
        console.log(this.empId);

        for (let ap of this.leaverequest) {
            console.log(ap.userId);
        }
        console.log(this.leaverequest);
        let uLeaves = this.leaverequest.find(apL => {
            if (apL.userId == this.empId) {
                return apL;
            }
        })
        console.log(uLeaves);
        let appLeave;
        if (uLeaves && uLeaves.leaveRequestDetails && uLeaves.leaveRequestDetails.length) {

            appLeave = uLeaves.leaveRequestDetails.find(apLType => apLType.leaveTypeId == abc)
            console.log(appLeave);

            if (uLeaves.isApproved && appLeave) {
                this.approvedOrNot = appLeave.totalLeaveDetailValue;
            }
            else if (uLeaves.isApproved == false || uLeaves.isApproved == null) {
                console.log(appLeave)
                if (appLeave) {

                    this.approvedOrNot = appLeave.totalLeave;
                }
            }
        }

        console.log(abc);
        console.log(this.employees);
        console.log(this.empId);
        console.log(this.leaveservice.data);
        this.leaveservice.data.forEach(e => {
            if (e.userId == this.empId) {

                if (!uLeaves) {
                    this.approvedOrNot = e.entitledQuantity;
                }

                console.log("first condition", e);

                if (e.leaveTypeId == abc) {
                    if (e.gender === 'Male' && e.isMale == true) {

                        this.leaveBBB = e;
                    }
                    else if (e.gender === 'Female' && e.isFemale == true) {
                        this.leaveBBB = e;
                    } else if (e.isMale && e.isFemale) {
                        this.leaveBBB = e;
                    }
                    else {
                        this.toastr.info("Sorry ! Not Allowed")
                    }
                }
            }
        });

    }

    countDays(e) {

        let from = new Date(this.data.leaveDate);
        // let till = new Date(this.leaveRequestDetailForm.value.dateTill);

        let dayFrom = from.getDate();
        // let dayTo = till.getDate();

        let monthFrom = from.getMonth();
        // let monthTo = till.getMonth();

        this.availed = 0;
        for (let i = 0; i <= (monthFrom); i++) {
            this.availed += this.getMonthDays(monthFrom + i);
        }
        this.availed = (this.availed - dayFrom) - (this.getMonthDays(from.getMonth())) + 1;
        // if (monthFrom) {
        //     this.availed = (dayFrom) + 1;
        // } else if (monthTo > monthFrom) {
        //     for (let i = 0; i <= (monthTo - monthFrom); i++) {
        //         this.availed += this.getMonthDays(monthFrom + i);
        //     }
        //     this.availed = (this.availed - dayFrom) - (this.getMonthDays(till.getMonth()) - dayTo) + 1;
        // }
    }

    getMonthDays(month) {
        let thirty = [3, 5, 8, 11];
        if (month === 1) {
            return 28;
        } else if (thirty.includes(month)) {
            return 30;
        } else {
            return 31;
        }
    }

    formatDate(date: Date) {
        return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
    }

    patchValues(request: any) {

        this.leaveRequestForm.patchValue({
            UserId: request.userId,
            IsApproved: request.isApproved,
            RequestDate: request.requestDate
        })

    }
}
