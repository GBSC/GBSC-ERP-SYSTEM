import { Component, OnInit } from '@angular/core';
import { AttendancesetupService } from '../../../../core';

@Component({
    selector: 'app-overtimeflag',
    templateUrl: './overtimeflag.component.html',
    styleUrls: ['./overtimeflag.component.scss']
})
export class OvertimeflagComponent implements OnInit {

    public overtimeflag: any;
    public modelUpdate: any;

    constructor(public attendanceSetupservice: AttendancesetupService) { }

    async ngOnInit() {
        this.overtimeflag = await this.attendanceSetupservice.getAllOvertimeFlag();
    }

    async addovertimeflag(value) {
        await this.attendanceSetupservice.addOvertimeFlag(value.data);
        this.overtimeflag = await this.attendanceSetupservice.getAllOvertimeFlag();
    }

    async updateovertimeflag() {
        await this.attendanceSetupservice.updateOvertimeFlag(this.modelUpdate);
    }

    async deleteovertimeflag(value) {
        await this.attendanceSetupservice.DeleteOvertimeFlag(value.key);
    }

}