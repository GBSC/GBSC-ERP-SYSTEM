import { Component, OnInit } from '@angular/core';
import { AttendanceService, AttendancesetupService, EmployeeService } from '../../../core';

@Component({
    selector: 'app-overtime-entitlement',
    templateUrl: './overtime-entitlement.component.html',
    styleUrls: ['./overtime-entitlement.component.scss']
})
export class OvertimeEntitlementComponent implements OnInit {

    public overtimeEntitlement: any;
<<<<<<< HEAD
    constructor(public attendanceservice: AttendanceService, public attendancesetupservice: AttendancesetupService, public employeeservice: EmployeeService) { }

    async ngOnInit() {
        await this.attendanceservice.getovertimeEntitlements();
        this.overtimeEntitlement = this.attendanceservice.overtimeEntitlement
        //console.log(this.overtimeEntitlement);

        await this.attendancesetupservice.getAllovertimetype();
        let overtimetype = this.attendancesetupservice.overtimetype

        await this.employeeservice.GetAllEmployees();
        let user = this.employeeservice.employeereg
=======
    public overTimetype: any;
    public employee: any;

    constructor(public attendanceservice: AttendanceService, public attendancesetupservice: AttendancesetupService, public employeeservice: EmployeeService) { }

    async ngOnInit() {
        this.overtimeEntitlement = await this.attendanceservice.getOvertimeEntitlements();

        this.overTimetype = await this.attendancesetupservice.getAllOvertimeType();

        this.employee = await this.employeeservice.GetAllEmployees();
>>>>>>> master
    }

    async addovertimeEntitlement(value) {
        this.attendanceservice.addOvertimeEntitlement(value.data);
    }

    async updateovertimeEntitlement(value) {
        this.attendanceservice.updateOvertimeEntitlement(value);
    }

    async deleteovertimeEntitlement(value) {
        this.attendanceservice.DeleteOvertimeEntitlement(value.key);
    }

}