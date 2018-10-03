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
        await this.attendanceservice.getuserRosterattendances();
        this.userRosterattendance = this.attendanceservice.userRosterattendance
        console.log(this.userRosterattendance);

    }

    async adduserRosterattendance(value) {
        this.attendanceservice.adduserRosterattendance(value.data);
    }

    async updateuserRosterattendance(value) {
        console.log(value);
        this.attendanceservice.updateuserRosterattendance(value);
    }

    async deleteuserRosterattendance(value) {
        this.attendanceservice.DeleteuserRosterattendance(value.key);
    }

}