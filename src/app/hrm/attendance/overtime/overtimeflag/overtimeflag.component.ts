import { Component, OnInit } from '@angular/core';
import { AttendanceService } from '../../services/attendance.service';
import { AttendancesetupService } from '../../services/attendancesetup.service';

@Component({
    selector: 'app-overtimeflag',
    templateUrl: './overtimeflag.component.html',
    styleUrls: ['./overtimeflag.component.scss']
})
export class OvertimeflagComponent implements OnInit {

    public overtimeflag: any;
    constructor(public attendanceSetupservice: AttendancesetupService) { }

    async ngOnInit() {
        await this.attendanceSetupservice.getAllovertimeflag();
        this.overtimeflag = this.attendanceSetupservice.overtimeflag
        console.log(this.overtimeflag);
    }

    async addovertimeflag(value) {
        this.attendanceSetupservice.addovertimeflag(value.data);
    }

    async updateovertimeflag(value) {
        console.log(value);
        this.attendanceSetupservice.updateovertimeflag(value);
    }

    async deleteovertimeflag(value) {
        this.attendanceSetupservice.Deleteovertimeflag(value.key);
    }

}