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

    constructor(public attendancesetupservice: AttendancesetupService) { }

    async ngOnInit() {
<<<<<<< HEAD
        await this.attendancesetupservice.getAllovertimetype();
        this.overtimetype = this.attendancesetupservice.overtimetype
        console.log(this.overtimetype);

        await this.attendancesetupservice.getAllovertimeflag();
        let overtimeflag = this.attendancesetupservice.overtimeflag
=======
        this.overtimetype = await this.attendancesetupservice.getAllOvertimeType();

        this.overtimeflag = await this.attendancesetupservice.getAllOvertimeFlag();
>>>>>>> master
    }

    async addovertimetype(value) {
        this.attendancesetupservice.addOvertimeType(value.data);
    }

    async updateovertimetype(value) {
        this.attendancesetupservice.updateOvertimeType(value);
    }

    async deleteovertimetype(value) {
        this.attendancesetupservice.DeleteOvertimeType(value.key);
    }

}