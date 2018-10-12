import { Component, OnInit } from '@angular/core';
import { AttendancesetupService } from '../../../../core';

@Component({
    selector: 'app-roster',
    templateUrl: './roster.component.html',
    styleUrls: ['./roster.component.scss']
})
export class RosterComponent implements OnInit {
    public roster: any;
    constructor(public attendancesetupservice: AttendancesetupService) { }

    async ngOnInit() {
        this.roster = await this.attendancesetupservice.getRosters();
    }

    async addroster(value) {
        this.attendancesetupservice.addRoster(value.data);
    }

    async updateroster(value) {
        this.attendancesetupservice.updateRoster(value);
    }

    async deleteroster(value) {
        this.attendancesetupservice.DeleteRoster(value.key);
    }

}