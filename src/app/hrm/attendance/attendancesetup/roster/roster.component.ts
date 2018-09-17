import { Component, OnInit } from '@angular/core';
import { AttendancesetupService } from '../../services/attendancesetup.service';

@Component({
    selector: 'app-roster',
    templateUrl: './roster.component.html',
    styleUrls: ['./roster.component.scss']
})
export class RosterComponent implements OnInit {


    public roster: any;
    constructor(public attendancesetupservice: AttendancesetupService) { }

    async ngOnInit() {
        await this.attendancesetupservice.getrosters();
        this.roster = this.attendancesetupservice.roster
        console.log(this.roster);

    }

    async addroster(value) {
        this.attendancesetupservice.addroster(value.data);
    }

    async updateroster(value) {
        console.log(value);
        this.attendancesetupservice.updateroster(value);
    }

    async deleteroster(value) {
        this.attendancesetupservice.Deleteroster(value.key);
    }

}