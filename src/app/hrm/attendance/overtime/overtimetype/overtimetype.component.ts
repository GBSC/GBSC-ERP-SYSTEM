import { Component, OnInit } from '@angular/core';
import { AttendanceService } from '../../services/attendance.service';

@Component({
    selector: 'app-overtimetype',
    templateUrl: './overtimetype.component.html',
    styleUrls: ['./overtimetype.component.scss']
})
export class OvertimetypeComponent implements OnInit {

    public overtimetype: any;
    constructor(public attendanceservice: AttendanceService) { }

    async ngOnInit() {
        await this.attendanceservice.getAllovertimeflag();
        this.overtimetype = this.attendanceservice.overtimetype
        console.log(this.overtimetype);

    }

    async addovertimetype(value) {
        this.attendanceservice.addovertimetype(value.data);
    }

    async updateovertimetype(value) {
        console.log(value);
        this.attendanceservice.updateovertimetype(value);
    }

    async deleteovertimetype(value) {
        this.attendanceservice.Deleteovertimetype(value.key);
    }

}