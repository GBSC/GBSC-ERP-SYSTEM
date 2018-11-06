import { Component, OnInit } from '@angular/core';
import { AttendancesetupService } from '../../../../core';

@Component({
    selector: 'app-overtimeflag',
    templateUrl: './overtimeflag.component.html',
    styleUrls: ['./overtimeflag.component.scss']
})
export class OvertimeflagComponent implements OnInit {

    public overtimeflag: any;
    constructor(public attendanceSetupservice: AttendancesetupService) { }

    async ngOnInit() {
        this.overtimeflag = await this.attendanceSetupservice.getAllOvertimeFlag();
    }

    async addovertimeflag(value) {
        this.attendanceSetupservice.addOvertimeFlag(value.data);
        this.overtimeflag = await this.attendanceSetupservice.getAllOvertimeFlag();
    }

    async updateovertimeflag(value) {
        this.attendanceSetupservice.updateOvertimeFlag(value);
    }

    async deleteovertimeflag(value) {
        this.attendanceSetupservice.DeleteOvertimeFlag(value.key);
    }

}