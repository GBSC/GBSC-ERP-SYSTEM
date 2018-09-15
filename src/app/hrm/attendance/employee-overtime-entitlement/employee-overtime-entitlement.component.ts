import { Component, OnInit } from '@angular/core';
import { AttendanceService } from '../services/attendance.service';
import { EmployeeService } from '../../employee/services/employee.service';
import { AttendancesetupService } from '../services/attendancesetup.service';

@Component({
    selector: 'app-employee-overtime-entitlement',
    templateUrl: './employee-overtime-entitlement.component.html',
    styleUrls: ['./employee-overtime-entitlement.component.scss']
})
export class EmployeeOvertimeEntitlementComponent implements OnInit {


    public empoverTimeEntitlement: any;
    constructor(public attendanceservice: AttendanceService, public attendancesetupservice: AttendancesetupService, public employeeservice: EmployeeService) { }

    async ngOnInit() {
        await this.attendanceservice.getempOvertimeEntitlements();
        this.empoverTimeEntitlement = this.attendanceservice.empOvertimeEntitlement
        console.log(this.empoverTimeEntitlement);
 
    }

    async addempoverTimeEntitlement(value) {
        this.attendanceservice.addempOvertimeEntitlement(value.data);
    }

    async updateempoverTimeEntitlement(value) {
        console.log(value);
        this.attendanceservice.updateempOvertimeEntitlement(value);
    }

    async deleteempoverTimeEntitlement(value) {
        this.attendanceservice.DeleteempOvertimeEntitlement(value.key);
    }

}