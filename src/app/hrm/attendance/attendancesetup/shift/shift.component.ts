import { Component, OnInit } from '@angular/core';
import { AttendancesetupService } from '../../services/attendancesetup.service';

@Component({
    selector: 'app-shift',
    templateUrl: './shift.component.html',
    styleUrls: ['./shift.component.scss']
})
export class ShiftComponent implements OnInit {


    public shift: any;
    constructor(public attendancesetupservice: AttendancesetupService) { }

    async ngOnInit() {
        await this.attendancesetupservice.getshifts();
        this.shift = this.attendancesetupservice.shift
        console.log(this.shift);

    }

    async addshift(value) {
        this.attendancesetupservice.addshift(value.data);
    }

    async updateshift(value) {
        console.log(value);
        this.attendancesetupservice.updateshift(value);
    }

    async deleteshift(value) {
        this.attendancesetupservice.Deleteshift(value.key);
    }

}