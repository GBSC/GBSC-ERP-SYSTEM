import { Component, OnInit } from '@angular/core';
import { AttendanceService } from '../../../core';

@Component({
    selector: 'app-user-roster-attendance',
    templateUrl: './user-roster-attendance.component.html',
    styleUrls: ['./user-roster-attendance.component.scss']
})
export class UserRosterAttendanceComponent implements OnInit {

    public userRosterattendance: any;
    constructor(public attendanceservice: AttendanceService) { }

    async ngOnInit() {
        this.userRosterattendance = await this.attendanceservice.getUserRosterAttendances();
    }

    async adduserRosterattendance(value) {
        this.attendanceservice.addUserRosterAttendance(value.data);
    }

    async updateuserRosterattendance(value) {
        console.log(value);
        this.attendanceservice.updateUserRosterAttendance(value);
    }

    async deleteuserRosterattendance(value) {
        this.attendanceservice.DeleteUserRosterAttendance(value.key);
    }

}