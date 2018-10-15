import { Component, OnInit } from '@angular/core';
import { AttendancesetupService, EmployeeService } from '../../../../core';

@Component({
    selector: 'app-attendancerequestapprover',
    templateUrl: './attendancerequestapprover.component.html',
    styleUrls: ['./attendancerequestapprover.component.scss']
})
export class AttendancerequestapproverComponent implements OnInit {

    public attendanceRequestapprover: any;
    public attendanceapprover: any;
    public employee: any;

    constructor(public attendancesetupservice: AttendancesetupService, public employeeservice: EmployeeService) { }

    async ngOnInit() {

        this.attendanceRequestapprover = await this.attendancesetupservice.getAttendanceRequestApprover();

        this.employee = await this.employeeservice.GetAllEmployees();
    }

    async addRequestapprover(value) {
        await this.attendancesetupservice.addAttendanceRequestApprover(value.data);
    }

    updatingRequestapprover(value) {
        this.attendanceapprover = { ...value.oldData, ...value.newData };
    }

    async updateRequestapprover() {
        await this.attendancesetupservice.updateAttendanceRequestApprover(this.attendanceapprover);
    }

    async deleteRequestapprover(value) {
        await this.attendancesetupservice.DeleteAttendanceRequestApprover(value.key);
    }

}
