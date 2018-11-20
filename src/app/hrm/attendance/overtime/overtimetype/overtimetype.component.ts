import { Component, OnInit } from '@angular/core';
import { AttendancesetupService } from '../../../../core';

@Component({
    selector: 'app-overtimetype',
    templateUrl: './overtimetype.component.html',
    styleUrls: ['./overtimetype.component.scss']
})
export class OvertimetypeComponent implements OnInit {

    public overtimetype: any;
    public overtimeflag: any;
    public updatingOvertimeType: any;

    constructor(public attendancesetupservice: AttendancesetupService) { }

    async ngOnInit() {

        this.overtimetype = await this.attendancesetupservice.getAllOvertimeType();

        this.overtimeflag = await this.attendancesetupservice.getAllOvertimeFlag();
    }

    async addovertimetype(value) {

        this.attendancesetupservice.addOvertimeType(value.data);
        this.overtimetype = await this.attendancesetupservice.getAllOvertimeType();
    }

    updatingOvertimetype(value) {
        this.updatingOvertimeType = { ...value.oldData, ...value.newData };
    }

    async updateOvertimetype() {
        await this.attendancesetupservice.updateOvertimeType(this.updatingOvertimeType);
    }

    async deleteovertimetype(value) {
        await this.attendancesetupservice.DeleteOvertimeType(value.key);
    }

}