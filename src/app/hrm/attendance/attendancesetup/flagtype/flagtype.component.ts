import { Component, OnInit } from '@angular/core';
import { AttendancesetupService } from '../../services/attendancesetup.service';

@Component({
    selector: 'app-flagtype',
    templateUrl: './flagtype.component.html',
    styleUrls: ['./flagtype.component.scss']
})
export class FlagtypeComponent implements OnInit {


    public flagtype: any;
    constructor(public attendancesetupservice: AttendancesetupService) { }

    async ngOnInit() {
        await this.attendancesetupservice.getflagtypes();
        this.flagtype = this.attendancesetupservice.flagtype
        console.log(this.flagtype);

    }

    async addflagtype(value) {
        this.attendancesetupservice.addflagtype(value.data);
    }

    async updateflagtype(value) {
        console.log(value);
        this.attendancesetupservice.updateflagtype(value);
    }

    async deleteflagtype(value) {
        this.attendancesetupservice.Deleteflagtype(value.key);
    }

}