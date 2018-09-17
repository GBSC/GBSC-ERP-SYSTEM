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
    empworkingot: any;
    empoffdayot: Object;
    incomingot: Object;
    outgoingot: Object;
    constructor(public attendanceservice: AttendanceService, public attendancesetupservice: AttendancesetupService, 
        public employeeservice: EmployeeService) { }

    async ngOnInit() {
        await this.attendanceservice.getempOvertimeEntitlements();
        this.empoverTimeEntitlement = this.attendanceservice.empOvertimeEntitlement
        console.log(this.empoverTimeEntitlement);

        await this.attendanceservice.getemployeeWorkingDayOts();
        this.empworkingot = this.attendanceservice.workingdayot
        console.log(this.empworkingot);
        
        await this.attendanceservice.getemployeeOffdayOts();
        this.empoffdayot = this.attendanceservice.workingoffdayot
        console.log(this.empoffdayot);

        await this.attendanceservice.getemployeeIncomingOts();
        this.incomingot = this.attendanceservice.newincomingot
        console.log(this.incomingot);

        await this.attendanceservice.getemployeeOutgoingOts();
        this.outgoingot = this.attendanceservice.OutgoingOts
        console.log(this.outgoingot);

        await this.attendancesetupservice.getAllovertimetype();
        let OverTimeType = this.attendancesetupservice.overtimetype

        await this.employeeservice.GetAllEmployees();
        let users = this.employeeservice.employeereg
    }

    async addworkingdayot(value) {
        this.attendanceservice.addemployeeWorkingDayOt(value.data);
    }

    async addoffdayot(value) {
        this.attendanceservice.addemployeeOffdayOts(value.data);
    }
    async addincomingot(value) {
        this.attendanceservice.addemployeeIncomingOts(value.data);
    }
    async addoutgoingot(value) {
        this.attendanceservice.addemployeeOutgoingOt(value.data);
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