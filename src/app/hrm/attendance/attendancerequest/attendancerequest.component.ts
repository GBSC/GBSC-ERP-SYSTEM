import { Component, OnInit } from '@angular/core';
import { EmployeeService, AttendancesetupService, AttendanceService } from '../../../core';

@Component({
    selector: 'app-attendancerequest',
    templateUrl: './attendancerequest.component.html',
    styleUrls: ['./attendancerequest.component.scss']
})
export class AttendancerequestComponent implements OnInit {

    public attendancerequest: any;
<<<<<<< HEAD
=======
    public attendanceRequestTypes: any;
    public attendanceRequestApprover: any;
    public assignroster: any;
    public employees: any;
>>>>>>> master
    private UpdatingRequest;

    constructor(public attendanceservice: AttendanceService, public attendanceSetupservice: AttendancesetupService,
        public Employeeservice: EmployeeService) { }

    async ngOnInit() {

<<<<<<< HEAD
        await this.attendanceservice.getattendancerequests();
        this.attendancerequest = this.attendanceservice.attendancerequest
        console.log(this.attendancerequest);

        await this.Employeeservice.GetAllEmployees();
        let requesttype = this.Employeeservice.employeereg;

        await this.attendanceSetupservice.getattendanceRequestTypes();
        let employee = this.attendanceSetupservice.attendanceRequestType;

        await this.attendanceSetupservice.getasignrosters();
        let assignrostr = this.attendanceSetupservice.asignroster;

        await this.attendanceSetupservice.getattendanceRequestapprover();
        let requestApprovr = this.attendanceSetupservice.attendancerequestapprover;
=======
        this.attendancerequest = await this.attendanceservice.getAttendanceRequests();

        this.employees = await this.Employeeservice.GetAllEmployees();

        this.attendanceRequestTypes = await this.attendanceSetupservice.getAttendanceRequestTypes();

        this.assignroster = await this.attendanceSetupservice.getAsignRosters();

        this.attendanceRequestApprover = await this.attendanceSetupservice.getAttendanceRequestApprover();
>>>>>>> master
    }


    async addattendancerequest(value) {
        this.attendanceservice.addAttendanceRequest(value.data);
    }

    async updatingrequest(value) {
        this.UpdatingRequest = { ...value.oldData, ...value.newData };
    }

    async updateattendancerequest() {
<<<<<<< HEAD
        this.attendanceservice.updateattendancerequest(this.UpdatingRequest);
=======
        this.attendanceservice.updateAttendanceRequest(this.UpdatingRequest);
>>>>>>> master
    }

    async deleteattendancerequest(value) {
        this.attendanceservice.deleteAttendanceRequest(value.key);
    }

}