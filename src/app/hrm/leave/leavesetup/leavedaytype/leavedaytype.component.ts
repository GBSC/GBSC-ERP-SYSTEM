import { Component, OnInit } from '@angular/core';
import { LeaveSetupService } from '../../../../core';

@Component({
    selector: 'app-leavedaytype',
    templateUrl: './leavedaytype.component.html',
    styleUrls: ['./leavedaytype.component.scss']
})
export class LeavedaytypeComponent implements OnInit {

    public leveDayType: any;
    public Modelupdating: any;

    constructor(public leavesetupservice: LeaveSetupService) { }

    async ngOnInit() {

        this.leveDayType = await this.leavesetupservice.getLeaveDayTypes();
    }

    async addleavedaytype(value) {

        await this.leavesetupservice.addLeaveDayType(value.data);
        this.leveDayType = await this.leavesetupservice.getLeaveDayTypes();
    }

    async updatingleavedaytype(value) {
        this.Modelupdating = { ...value.oldData, ...value.newData };
    }

    async updateleavedaytype() {
        await this.leavesetupservice.updateLeaveDayType(this.Modelupdating);
    }

    async deleteleavedaytype(value) {
        await this.leavesetupservice.DeleteLeaveDayType(value.key);
    }

}
