import { Component, OnInit } from '@angular/core';
import { AttendancesetupService } from '../../../../core';

@Component({
    selector: 'app-flageffecttype',
    templateUrl: './flageffecttype.component.html',
    styleUrls: ['./flageffecttype.component.scss']
})
export class FlageffecttypeComponent implements OnInit {

    public flageffecttype: any;

    constructor(public attendancesetupservice: AttendancesetupService) { }

    async ngOnInit() {
        this.flageffecttype = await this.attendancesetupservice.getFlagEffectTypes();
    }

    async addflageffecttype(value) {

        await this.attendancesetupservice.addFlagEffectType(value.data);
        this.flageffecttype = await this.attendancesetupservice.getFlagEffectTypes();
    }

    async updateflageffecttype(value) {
        await this.attendancesetupservice.updateFlagEffectType(value);
    }

    async deleteflageffecttype(value) {
        await this.attendancesetupservice.DeleteFlagEffectType(value.key);
    }

}