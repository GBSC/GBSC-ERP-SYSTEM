import { Component, OnInit } from '@angular/core';
import { EmployeeService, AttendancesetupService, AttendanceService } from '../../../core';

@Component({
    selector: 'app-attendanceapprove',
    templateUrl: './attendanceapprove.component.html',
    styleUrls: ['./attendanceapprove.component.scss']
})
export class AttendanceapproveComponent implements OnInit {
    public attendanceSummited: any;
    public attendanceSummiteddata: any;
    public attendanceapprove: any;
    public attendancereject: any;
    public employees: any;
    public attendanceRequestTypes: any;
    public assignroster: any;
    public attendanceRequestApprover: any;

    constructor(public attendanceservice: AttendanceService, public attendanceSetupservice: AttendancesetupService,
        public Employeeservice: EmployeeService) { }

    async ngOnInit() {
        this.attendanceSummited = await this.attendanceservice.getAttendanceRequests();
        console.log(this.attendanceSummited);
        this.attendanceSummiteddata = this.attendanceSummited.filter(t => (t.isSubmitted == true) && (t.isApproved == null || t.isApproved == false) && (t.isRejected == null || t.isRejected == false));
        console.log(this.attendanceSummiteddata);

        this.attendanceapprove = this.attendanceSummited.filter(t => (t.isSubmitted == true) && (t.isApproved == true) && (t.isRejected == null || t.isRejected == false));
        console.log(this.attendanceapprove);

        this.attendancereject = this.attendanceSummited.filter(t => (t.isSubmitted == true) && (t.isApproved == null || t.isApproved == false) && (t.isRejected == true));
        console.log(this.attendancereject);

        this.employees = await this.Employeeservice.GetAllEmployees();
        this.attendanceRequestTypes = await this.attendanceSetupservice.getAttendanceRequestTypes();
        this.assignroster = await this.attendanceSetupservice.getAsignRosters();
        this.attendanceRequestApprover = await this.attendanceSetupservice.getAttendanceRequestApprover();
    }


    async updateattendancerequest(value) {
        console.log(value.key);
        console.log(value);
        await this.attendanceservice.updateAttendanceRequest(value.key);


        this.attendanceSummited = await this.attendanceservice.getAttendanceRequests();
        console.log(this.attendanceSummited);
        this.attendanceSummiteddata = this.attendanceSummited.filter(t => (t.isSubmitted == true) && (t.isApproved == null || t.isApproved == false) && (t.isRejected == null || t.isRejected == false));
        console.log(this.attendanceSummiteddata);

        this.attendanceapprove = this.attendanceSummited.filter(t => (t.isSubmitted == true) && (t.isApproved == true) && (t.isRejected == null || t.isRejected == false));
        console.log(this.attendanceapprove);

        this.attendancereject = this.attendanceSummited.filter(t => (t.isSubmitted == true) && (t.isApproved == null || t.isApproved == false) && (t.isRejected == true));
        console.log(this.attendancereject);


    }



}
