import { Component, OnInit, Input } from '@angular/core';
import { LeaveSetupService, LeaveService, EmployeeService, AttendanceService } from '../../../core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-viewleaverequest',
    templateUrl: './viewleaverequest.component.html',
    styleUrls: ['./viewleaverequest.component.scss']
})
export class ViewleaverequestComponent implements OnInit {

    public leaveRequestId: any;
    public leaverequestdetail: any;
    public leaveYear: any;
    public leaveRequestForm: FormGroup;
    public employees: any;
    public leaveType: any;
    public leaveApprovr: any;
    public leaveRequest: any;
    public leaverequest: any;
    public leaveOpening: any;
    public userRosterattendance: any;
    public leaveDetail: any[] = [];

    constructor(public toastr: ToastrService, public fb: FormBuilder, public leavesetupservice: LeaveSetupService, public empservice: EmployeeService,
        public router: Router,public employeeService: EmployeeService, public attendanceservice:AttendanceService, public activatedRoute: ActivatedRoute, public leaveservice: LeaveService) { }


    async ngOnInit() {
        this.leaverequestdetail = await this.leaveservice.getLeaveRequestDetails();

        this.leaverequest = await this.leaveservice.getAllleaverequest();

        this.leaveOpening = await this.leaveservice.getLeaveOpening();

        this.employees = await this.empservice.GetAllEmployees();

        this.userRosterattendance = await this.attendanceservice.getUserRosterAttendances();

        this.leaveApprovr = await this.leavesetupservice.getLeaveApprovers();

        this.leaveYear = await this.leavesetupservice.getLeaveYears();

        this.leaveType = await this.leavesetupservice.getLeaveTypes();



    }

    // [formItem]="{editorOptions: { readOnly: true }}"

    onToolbarPreparing(e) {
        e.toolbarOptions.items.unshift(
            {
                location: 'after',
                widget: 'dxButton',
                options: {
                    icon: 'add',
                    onClick: this.addleaveRequest.bind(this)
                }
            });
    }


    contentReady(e) {
        if (!e.component.getSelectedRowKeys().length)
            e.component.selectRowsByIndexes(-1);
    }

    public dataToUpdate: any = null;

    selectionChanged(e) {
        e.component.collapseAll(-0);
        e.component.expandRow(e.currentSelectedRowKeys[0]);
        console.log(e);
    }

    updateLeaveRequest(e) {
        console.log(e);

        // if(e.data.isApproved) {
        let leave = this.leaverequest.find(l => {
            if (l.leaveRequestId === e.key) {
                return l;
            }
        })
        console.log(leave);
        leave.leaveRequestDetails = leave.leaveRequestDetails.map(d => {
            if (e.data.isApproved) {
                let g = d.totalLeaveDetailValue -= d.value;
                console.log(g);
                delete d.leaveRequestDetailId
                return d;
            }
            return d;
        });

        this.empservice.updatedLeaves = leave.leaveRequestDetails;
        
        this.leaveservice.updateLeaveRequest(leave).subscribe(resp => {
            this.toastr.success("Leave Request Updated");
            this.router.navigate(['/hrm/leave/leaverequests']);
        });
        if (e.data.isApproved) {
            let isOnLeaveDays = [];

            console.log( this.employeeService.updatedLeaves);

                this.employeeService.updatedLeaves.forEach(markleave => {
                    let leaveType : any = {};
                    leaveType.id = markleave.leaveTypeId;
                    leaveType.days = [];
                    let fromDate = new Date(markleave.dateFrom);
                    let tillDate = new Date(markleave.dateTill);
                    // if(markLeave.userId ===)
                    if (fromDate <= tillDate) {
                
                        for(fromDate; fromDate <= tillDate; fromDate.setDate(fromDate.getDate()+1)){
                            // console.log(fromDate);
                            let d = new Date(fromDate);
                            leaveType.days.push(d);
                        }
                        isOnLeaveDays.push(leaveType);
                        return markleave;
                    }
                  

                    
                    return markleave;
                })
                  console.log( this.employeeService.updatedLeaves);
                  console.log(isOnLeaveDays);
                  this.attendanceservice.isOnLeaveDates = isOnLeaveDays;

        }

    }

    addleaveRequest() {
        this.router.navigate(['/hrm/leave/createleaverequest']);
    }


    getSingleRowData(d) {
        this.leaveRequestId = d.key;
        this.router.navigate(['hrm/leave/update-leave-request/' + this.leaveRequestId]);
    }
}
