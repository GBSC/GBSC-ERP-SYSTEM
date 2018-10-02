import { Component, OnInit } from '@angular/core';
import { AttendanceService } from '../services/attendance.service';
import { AttendancesetupService } from '../services/attendancesetup.service';
import { EmployeeService } from '../../employee/services/employee.service';

@Component({
    selector: 'app-overtime-entitlement',
    templateUrl: './overtime-entitlement.component.html',
    styleUrls: ['./overtime-entitlement.component.scss']
})
export class OvertimeEntitlementComponent implements OnInit {

    public overtimeEntitlement: any;
    constructor(public attendanceservice: AttendanceService,public attendancesetupservice: AttendancesetupService, public employeeservice: EmployeeService) { }

    async ngOnInit() {
        await this.attendanceservice.getovertimeEntitlements();
        this.overtimeEntitlement = this.attendanceservice.overtimeEntitlement
        //console.log(this.overtimeEntitlement);
        
        await this.attendancesetupservice.getAllovertimetype();
        let overtimetype = this.attendancesetupservice.overtimetype

        await this.employeeservice.GetAllEmployees();
        let user = this.employeeservice.employeereg
    }

    async addovertimeEntitlement(value) {
        this.attendanceservice.addovertimeEntitlement(value.data);
    }

    async updateovertimeEntitlement(value) {
        console.log(value);
        this.attendanceservice.updateovertimeEntitlement(value);
    }

    async deleteovertimeEntitlement(value) {
        this.attendanceservice.DeleteovertimeEntitlement(value.key);
    }

}