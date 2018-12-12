import { Component, OnInit } from '@angular/core';
import { AttendancesetupService } from '../../../../core';

@Component({
    selector: 'app-flagtype',
    templateUrl: './flagtype.component.html',
    styleUrls: ['./flagtype.component.scss']
})
export class FlagtypeComponent implements OnInit {


    public flagtype: any;
    constructor(public attendancesetupservice: AttendancesetupService) { }

    async ngOnInit() {

        this.flagtype = await this.attendancesetupservice.getFlagTypes();
    }

    async addflagtype(value) {
       await this.attendancesetupservice.addFlagType(value.data);
        this.flagtype = await this.attendancesetupservice.getFlagTypes();
    }

    async updateflagtype(value) {
       await this.attendancesetupservice.updateFlagType(value);
    }

    async deleteflagtype(value) {
        await this.attendancesetupservice.DeleteFlagType(value.key);
    }

}