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

    async updatingRequestapprover(value) {
        console.log(value);
        this.attendanceapprover = {...value.oldData, ...value.newData};
    }
   
    async updateRequestapprover() { 
       await this.attendancesetupservice.updateattendanceRequestapprover( this.attendanceapprover);
    }

    async deleteRequestapprover(value) {
        this.attendancesetupservice.DeleteattendanceRequestapprover(value.key);
    }

}
