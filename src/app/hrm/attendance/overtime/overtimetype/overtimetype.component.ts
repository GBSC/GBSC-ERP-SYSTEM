import { Component, OnInit } from '@angular/core';
import { AttendanceService } from '../../services/attendance.service';
import { AttendancesetupService } from '../../services/attendancesetup.service';

@Component({
    selector: 'app-overtimetype',
    templateUrl: './overtimetype.component.html',
    styleUrls: ['./overtimetype.component.scss']
})
export class OvertimetypeComponent implements OnInit {

    public overtimetype: any;
<<<<<<< HEAD
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
=======
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
>>>>>>> master
    }

}