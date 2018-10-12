import { Component, OnInit } from '@angular/core';
import { AttendancesetupService } from '../../../../core';

@Component({
    selector: 'app-overtimetype',
    templateUrl: './overtimetype.component.html',
    styleUrls: ['./overtimetype.component.scss']
})
export class OvertimetypeComponent implements OnInit {

    public overtimetype: any;
    constructor(public attendancesetupservice: AttendancesetupService) { }

    async ngOnInit() {
        await this.attendancesetupservice.getAllovertimetype();
        this.overtimetype = this.attendancesetupservice.overtimetype
        console.log(this.overtimetype);

        await this.attendancesetupservice.getAllovertimeflag();
        let overtimeflag = this.attendancesetupservice.overtimeflag
    }

    async addovertimetype(value) {
        this.attendancesetupservice.addovertimetype(value.data);
    }

    async updateovertimetype(value) {
        console.log(value);
        this.attendancesetupservice.updateovertimetype(value);
    }

    async deleteovertimetype(value) {
        this.attendancesetupservice.Deleteovertimetype(value.key);
    }

}