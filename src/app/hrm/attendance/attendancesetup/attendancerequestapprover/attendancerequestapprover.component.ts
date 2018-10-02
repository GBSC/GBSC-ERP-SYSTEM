import { Component, OnInit } from '@angular/core';
import { AttendancesetupService } from '../../services/attendancesetup.service';
import { EmployeeService } from '../../../employee/services/employee.service';

@Component({
    selector: 'app-attendancerequestapprover',
    templateUrl: './attendancerequestapprover.component.html',
    styleUrls: ['./attendancerequestapprover.component.scss']
})
export class AttendancerequestapproverComponent implements OnInit {

    public attendanceRequestapprover: any;
    constructor(public attendancesetupservice: AttendancesetupService, public employeeservice:EmployeeService) { }

    async ngOnInit() {
        await this.attendancesetupservice.getattendanceRequestapprover();
        this.attendanceRequestapprover = this.attendancesetupservice.attendancerequestapprover
        console.log(this.attendanceRequestapprover);

        await this.employeeservice.GetAllEmployees();
        let employe = this.employeeservice.employeereg;
    
    }

    async addRequestapprover(value) {
        this.attendancesetupservice.addattendanceRequestapprover(value.data);
    }

    async updateRequestapprover(value) {
        console.log(value);
        this.attendancesetupservice.updateattendanceRequestapprover(value);
    }

    async deleteRequestapprover(value) {
        this.attendancesetupservice.DeleteattendanceRequestapprover(value.key);
    }

}
