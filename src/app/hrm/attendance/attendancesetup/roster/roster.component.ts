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
        await this.attendancesetupservice.addRoster(value.data);
        this.roster = await this.attendancesetupservice.getRosters();
    }

    async updateroster(value) {
        await this.attendancesetupservice.updateRoster(value);
    }

    async deleteroster(value) {
        await this.attendancesetupservice.DeleteRoster(value.key);
    }

}