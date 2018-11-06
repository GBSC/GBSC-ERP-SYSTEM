import { Component, OnInit } from '@angular/core';
import { AttendancesetupService } from '../../../../core';

@Component({
    selector: 'app-assignroster',
    templateUrl: './assignroster.component.html',
    styleUrls: ['./assignroster.component.scss']
})
export class AssignrosterComponent implements OnInit {


    public assignroster: any;
    public roster: any;
    constructor(public attendancesetupservice: AttendancesetupService) { }

    async ngOnInit() {
        this.assignroster = await this.attendancesetupservice.getAsignRosters();

        this.roster = await this.attendancesetupservice.getRosters();
    }

    async addassignroster(value) {

        this.attendancesetupservice.addAsignRoster(value.data);
        this.assignroster = await this.attendancesetupservice.getAsignRosters();
    }

    async updateassignroster(value) {
        this.attendancesetupservice.updateAsignRoster(value);
    }

    async deleteassignroster(value) {
        this.attendancesetupservice.DeleteAsignRoster(value.key);
    }

}
