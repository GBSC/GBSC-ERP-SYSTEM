import { Component, OnInit } from '@angular/core';
import { AttendancesetupService } from '../../../../core';

@Component({
    selector: 'app-flagvalue',
    templateUrl: './flagvalue.component.html',
    styleUrls: ['./flagvalue.component.scss']
})
export class FlagvalueComponent implements OnInit {


    public flagvalue: any;
    constructor(public attendancesetupservice: AttendancesetupService) { }

    async ngOnInit() {

        this.flagvalue = await this.attendancesetupservice.getFlagValues();
    }

    async addflagvalue(value) {
        this.attendancesetupservice.addFlagValue(value.data);
        this.flagvalue = await this.attendancesetupservice.getFlagValues();
    }

    async updateflagvalue(value) {
        this.attendancesetupservice.updateFlagValue(value);
    }

    async deleteflagvalue(value) {
        this.attendancesetupservice.DeleteFlagValue(value.key);
    }

}