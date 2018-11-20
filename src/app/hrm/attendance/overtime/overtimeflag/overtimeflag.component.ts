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
        this.attendanceSetupservice.addOvertimeFlag(value.data);
        this.overtimeflag = await this.attendanceSetupservice.getAllOvertimeFlag();
    }

    async updatingModel(value) {
        this.modelUpdate = { ...value.oldData, ...value.newData };
    }

    async updateovertimeflag() {
        this.attendanceSetupservice.updateOvertimeFlag(this.modelUpdate);
    }

    async deleteovertimeflag(value) {
        this.attendanceSetupservice.DeleteOvertimeFlag(value.key);
    }

}