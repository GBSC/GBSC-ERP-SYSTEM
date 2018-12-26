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

        this.employee = await this.employeeService.GetAllEmployees();

        this.assignRoster = await this.attendanceSetupService.getAsignRosters();
    
        this.userRosterattendance = this.userRosterattendance.map(r => {
           
            this.employeeService.updatedLeaves.forEach(markleave => {
                let attdate = new Date(r.attendanceDate);
                let fromDate = new Date(markleave.dateFrom);
                let tillDate = new Date(markleave.tillDate);

                if(fromDate => attdate && tillDate <= attdate ) {
                    markleave.isOnLeave = true;
                    return markleave;
                }
                return markleave;
            })
        });
        console.log(this.userRosterattendance);
    }

    async adduserRosterattendance(value) {

        await this.attendanceservice.addUserRosterAttendance(value.data);
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