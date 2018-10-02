import { Component, OnInit } from '@angular/core';
import { AttendanceService } from '../services/attendance.service';
import { AttendancesetupService } from '../services/attendancesetup.service';
import { EmployeeService } from '../../employee/services/employee.service';

@Component({
    selector: 'app-attendancerequest',
    templateUrl: './attendancerequest.component.html',
    styleUrls: ['./attendancerequest.component.scss']
})
export class AttendancerequestComponent implements OnInit {
 
    public attendancerequest: any; 
    private UpdatingRequest;
    
    constructor(public attendanceservice: AttendanceService,public attendanceSetupservice: AttendancesetupService,
        public Employeeservice: EmployeeService) { }

    async ngOnInit() {
        
        await this.attendanceservice.getattendancerequests();
        this.attendancerequest = this.attendanceservice.attendancerequest
        console.log(this.attendancerequest);

<<<<<<< HEAD
    public attendancerequest: any;
    constructor(public attendanceservice: AttendanceService) { }

    async ngOnInit() {
        await this.attendanceservice.getattendancerequests();
        this.attendancerequest = this.attendanceservice.attendancerequest
        console.log(this.attendancerequest);

    }

    async addattendancerequest(value) {
        this.attendanceservice.addattendancerequest(value.data);
    }

    async updateattendancerequest(value) {
        console.log(value);
        this.attendanceservice.updateattendancerequest(value);
=======
        await this.Employeeservice.GetAllEmployees();
        let requesttype = this.Employeeservice.employeereg;
        
        await this.attendanceSetupservice.getattendanceRequestTypes();
        let employee = this.attendanceSetupservice.attendanceRequestType;
       
        await this.attendanceSetupservice.getasignrosters();
        let assignrostr = this.attendanceSetupservice.asignroster;
       
        await this.attendanceSetupservice.getattendanceRequestapprover();
        let requestApprovr = this.attendanceSetupservice.attendancerequestapprover;
    }


    async addattendancerequest(value) {
        this.attendanceservice.addattendancerequest(value.data);
    }

    async updatingrequest(value) {
        this.UpdatingRequest = { ...value.oldData, ...value.newData};
    }

    async updateattendancerequest() { 
        this.attendanceservice.updateattendancerequest( this.UpdatingRequest);
>>>>>>> master
    }

    async deleteattendancerequest(value) {
        this.attendanceservice.Deleteattendancerequest(value.key);
    }

}