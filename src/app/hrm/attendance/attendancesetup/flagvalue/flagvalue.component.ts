import { Component, OnInit } from '@angular/core';
import { AttendancesetupService } from '../../services/attendancesetup.service';

@Component({
    selector: 'app-flagvalue',
    templateUrl: './flagvalue.component.html',
    styleUrls: ['./flagvalue.component.scss']
})
export class FlagvalueComponent implements OnInit {


    public flagvalue: any;
    constructor(public attendancesetupservice: AttendancesetupService) { }

    async ngOnInit() {
        await this.attendancesetupservice.getflagvalues();
        this.flagvalue = this.attendancesetupservice.flagvalue
        console.log(this.flagvalue);

    }

    async addflagvalue(value) {
        this.attendancesetupservice.addflagvalue(value.data);
    }

    async updateflagvalue(value) {
        console.log(value);
        this.attendancesetupservice.updateflagvalue(value);
    }

    async deleteflagvalue(value) {
        this.attendancesetupservice.Deleteflagvalue(value.key);
    }

}