import { Component, OnInit } from '@angular/core';
import { LeaveSetupService } from '../../../../core';

@Component({
    selector: 'app-leavedaytype',
    templateUrl: './leavedaytype.component.html',
    styleUrls: ['./leavedaytype.component.scss']
})
export class LeavedaytypeComponent implements OnInit {

    public leveDayType: any;
    constructor(public leavesetupservice: LeaveSetupService) { }

    async ngOnInit() {
        this.leveDayType = await this.leavesetupservice.getLeaveDayTypes();
    }

    async addleavedaytype(ldaytype) {
        this.leavesetupservice.addLeaveDayType(ldaytype.data);
    }

    async updateleavedaytype(levdaytype) {
        this.leavesetupservice.updateLeaveDayType(levdaytype);
    }

    async deleteleavedaytype(value) {
        this.leavesetupservice.DeleteLeaveDayType(value.key);
    }

}
