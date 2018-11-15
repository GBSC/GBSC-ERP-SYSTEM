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
        
        this.attendancesetupservice.addFlagEffectType(value.data);
        this.flageffecttype = await this.attendancesetupservice.getFlagEffectTypes();
    }

    async updateflageffecttype(value) {
        this.attendancesetupservice.updateFlagEffectType(value);
    }

    async deleteflageffecttype(value) {
        this.attendancesetupservice.DeleteFlagEffectType(value.key);
    }

}