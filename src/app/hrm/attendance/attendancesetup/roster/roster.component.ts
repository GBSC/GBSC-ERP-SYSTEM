import { Component, OnInit } from '@angular/core';
import { AttendancesetupService } from '../../../../core';

@Component({
    selector: 'app-roster',
    templateUrl: './roster.component.html',
    styleUrls: ['./roster.component.scss']
})
export class RosterComponent implements OnInit {
    public rosterUpdate: any;
    public roster: any;
    constructor(public attendancesetupservice: AttendancesetupService) { }

    async ngOnInit() {

        this.roster = await this.attendancesetupservice.getRosters();
    }

    async addroster(value) {
        await this.attendancesetupservice.addRoster(value.data);
        this.roster = await this.attendancesetupservice.getRosters();
    }

     updatingroster(value) {
         this.rosterUpdate = {...value.oldData, ...value.newData};
    }

     updateroster() {
         this.attendancesetupservice.updateRoster(this.rosterUpdate).subscribe(res => {
             console.log(res);
             
         });
    }

    async deleteroster(value) {
        await this.attendancesetupservice.DeleteRoster(value.key);
    }

}