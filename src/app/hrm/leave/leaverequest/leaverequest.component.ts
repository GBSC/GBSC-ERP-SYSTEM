import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { LeaveSetupService, EmployeeService, LeaveService, AuthService } from '../../../core';
import { Router, ActivatedRoute } from '@angular/router';
import { LeaveRequestDetail } from '../../../core/Models/HRM/leaveRequestDetail';
import { LeaveRequest } from '../../../core/Models/HRM/leaveRequest';
import { ToastrService } from 'ngx-toastr';
import { queryRefresh } from '@angular/core/src/render3';
import { Dialog } from 'primeng/primeng';

@Component({
    selector: 'app-leaverequest',
    templateUrl: './leaverequest.component.html',
    styleUrls: ['./leaverequest.component.css']
})
export class LeaverequestComponent implements OnInit {

    public leaveRequestForm: FormGroup;
    public leaveRequestDetailForm: any;
    public leaveYears: any;
    public employees: any;
    public leaveType: any;
    public leaveRequest: any;
    public leaveTypeBalances: any;
    public leaveApprovr: any;
    public leaverequest: any;
    public requestDetail: LeaveRequestDetail[];
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

    constructor(public toastr: ToastrService, public authService : AuthService, public fb: FormBuilder, public activatedRoute: ActivatedRoute, public leavesetupservice: LeaveSetupService, public empservice: EmployeeService,
        public router: Router, public leaveservice: LeaveService) {

        this.onSetCellValue = this.onSetCellValue.bind(this);

        this.leaveRequestForm = this.fb.group({
            UserId: ['', Validators.required],
            IsApproved: [''],
            RequestDate: ['']
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
            description: ['']
        });
    }

    async ngOnInit() {


        this.requestDetail = [];

        this.leaverequest = await this.leaveservice.getAllleaverequest();

        this.employees = await this.empservice.GetAllEmployees();

        this.leaveApprovr = await this.leavesetupservice.getLeaveApprovers();

        this.leaveYears = await this.leavesetupservice.getLeaveYears();

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

    public valueList : any = []

    addLeaveDays(fromDate, toDate){
        var sDate = new Date(fromDate.value)
        var eDate = new Date(toDate.value)
        this.valueList.push({
            
        })
    }

    async leaveRequestDetail(value) {
        console.log(value);  
        console.log(this.leaveBBB);
        
        value.leaveTypeId = this.leaveBBB.leaveTypeId;
        value.totalLeaveDetailValue = this.leaveBBB.entitledQuantity;
        value.totalLeave = this.leaveBBB.entitledQuantity;
        value.value = this.availed;
        value.totalLeaveDetailValue = this.approvedOrNot;
        value.CompanyId = this.authService.getUserCompanyId(); 
        console.log(this.leaveBBB);

        this.leaverequest.filter(f => { 
                
            if(this.leaveBBB.userId == f.userId ){  
                            f.leaveRequestDetails.filter(rd => {  
                                                            
                                if (this.formatDate(new Date(value.dateFrom)) >= this.formatDate(new Date(rd.dateFrom)) && this.formatDate( new Date(value.dateTill)) <= this.formatDate(new Date(rd.dateTill))) {

                                            this.toastr.info("Already Availed Leaves")
                                        }  
                                        else{
                                            this.requestDetail.push(value);
                                            // value.totalLeaveDetailValue = this.approvedOrNot;
                                            // popup.style.display = "none";
                                            console.log(value);
                                            // alert("oK")
                                        }                       
                            })  
                    }
                 
                }
    ) 
 
    }

    async addLeaveRequest(value) {
        this.submitted = true;
        if (this.leaveRequestForm.invalid && this.leaveRequestDetailForm.invalid) {
            this.toastr.error("Fill All Required Fields");
        }
        else {
            let request = new LeaveRequest();
            request = { ...request, ...value };
            request.LeaveRequestDetails = this.requestDetail;
            console.log(value);
            console.log(request);
            if (this.requestDetail.length) {
                await this.leaveservice.addLeaveRequest(request);
                this.toastr.success("Leave Request Added");
                this.router.navigate(['/hrm/leave/leaverequests']);
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

                    // console.log(this.leaveBBB.entitledQuantity)
                    this.approvedOrNot = appLeave.totalLeave;
                    // this.approvedOrNot = this.leaveBBB.entitledQuantity;
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

        let from = new Date(this.leaveRequestDetailForm.value.dateFrom);
        let till = new Date(this.leaveRequestDetailForm.value.dateTill);

        let dayFrom = from.getDate();
        let dayTo = till.getDate();

        let monthFrom = from.getMonth();
        let monthTo = till.getMonth();

        this.availed = 0;

        if (monthFrom === monthTo) {
            this.availed = (dayTo - dayFrom) + 1;
        } else if (monthTo > monthFrom) {
            for (let i = 0; i <= (monthTo - monthFrom); i++) {
                this.availed += this.getMonthDays(monthFrom + i);
            }
            this.availed = (this.availed - dayFrom) - (this.getMonthDays(till.getMonth()) - dayTo) + 1;
        }
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
