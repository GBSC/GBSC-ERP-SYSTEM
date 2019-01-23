import { Component, OnInit } from '@angular/core';
import { AttendanceService, EmployeeService, AttendancesetupService } from '../../../core';

@Component({
    selector: 'app-userrosterattendance',
    templateUrl: './userrosterattendance.component.html',
    styleUrls: ['./userrosterattendance.component.scss']
})
export class UserrosterattendanceComponent implements OnInit {

    public employee: any;
    public assignRoster: any;
    public updatingModel: any;
    public userRosterattendance: any;

    constructor(public attendanceservice: AttendanceService, public attendanceSetupService: AttendancesetupService,
        public employeeService: EmployeeService) { }

    async ngOnInit() {

        this.userRosterattendance = await this.attendanceservice.getUserRosterAttendances();
        console.log(this.userRosterattendance);
                
        this.employee = await this.employeeService.GetAllEmployees();

        this.assignRoster = await this.attendanceSetupService.getAsignRosters();
 
    }

    async adduserRosterattendance(value) {
        console.log(value);
        console.log(value.data);
        
        if(value.data.checkInTime != null && value.data.checkOutTime != null){

            value.data.isPresent = true
        }
        await this.attendanceservice.addUserRosterAttendance(value.data);
        console.log(value.data);
        
        this.userRosterattendance = await this.attendanceservice.getUserRosterAttendances();
    }

    async updatingattendance(value) {
        this.updatingModel = { ...value.oldData, ...value.newData };
    }


    async updateuserRosterattendance() {
        await this.attendanceservice.updateUserRosterAttendance(this.updatingModel);
    }

    async deleteuserRosterattendance(value) {
        await this.attendanceservice.DeleteUserRosterAttendance(value.key);
    }
}