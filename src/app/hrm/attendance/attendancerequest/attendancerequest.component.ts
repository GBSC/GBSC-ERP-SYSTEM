import { Component, OnInit } from '@angular/core';
import { EmployeeService, AttendancesetupService, AttendanceService } from '../../../core';

@Component({
    selector: 'app-attendancerequest',
    templateUrl: './attendancerequest.component.html',
    styleUrls: ['./attendancerequest.component.scss']
})
export class AttendancerequestComponent implements OnInit {

    public attendancerequest: any;
    public attendanceRequestTypes: any;
    public attendanceRequestApprover: any;
    public assignroster: any;
    public employees: any;
    public UpdatingRequest;

    constructor(public attendanceservice: AttendanceService, public attendanceSetupservice: AttendancesetupService,
        public Employeeservice: EmployeeService) { }

    async ngOnInit() {

        this.attendancerequest = await this.attendanceservice.getAttendanceRequests();
        this.attendancerequest = this.attendancerequest.filter(t => (t.isSubmitted == true) && (t.isApproved == null || t.isApproved == false) && (t.isRejected == null || t.isRejected == false))

        this.employees = await this.Employeeservice.GetAllEmployees();

        this.attendanceRequestTypes = await this.attendanceSetupservice.getAttendanceRequestTypes();

        this.assignroster = await this.attendanceSetupservice.getAsignRosters();

        this.attendanceRequestApprover = await this.attendanceSetupservice.getAttendanceRequestApprover();
    }


    async addattendancerequest(value) {
        await this.attendanceservice.addAttendanceRequest(value.data);

        this.attendancerequest = await this.attendanceservice.getAttendanceRequests();
        this.attendancerequest = this.attendancerequest.filter(t => (t.isSubmitted == true) && (t.isApproved == null || t.isApproved == false) && (t.isRejected == null || t.isRejected == false))
     }

    async updatingrequest(value) {
        this.UpdatingRequest = { ...value.oldData, ...value.newData };
    }

    async updateattendancerequest() {
        this.attendanceservice.updateAttendanceRequest(this.UpdatingRequest);
    }

    async deleteattendancerequest(value) {
        this.attendanceservice.deleteAttendanceRequest(value.key);
    }

}