import { Component, OnInit } from '@angular/core';
import { LeaveSetupService } from '../../../../core';

@Component({
    selector: 'app-leavepurpose',
    templateUrl: './leavepurpose.component.html',
    styleUrls: ['./leavepurpose.component.css']
})
export class LeavepurposeComponent implements OnInit {
    public leavePurpose: any;
    public updatingPurpose: any;

    constructor(public leavesetupservice: LeaveSetupService) { }

    async ngOnInit() {

        this.leavePurpose = await this.leavesetupservice.getLeavePurposes();
    }

    async addleavepurpose(value) {

        await this.leavesetupservice.addLeavePurpose(value.data);
        this.leavePurpose = await this.leavesetupservice.getLeavePurposes();
    }

    updatingleavepurpose(value) {
        this.updatingPurpose = { ...value.oldData, ...value.newData };

    }

    async updateleavepurpose() {
        await this.leavesetupservice.updateLeavePurpose(this.updatingPurpose);

    }

    async deleteleavepurpose(value) {
        await this.leavesetupservice.DeleteLeavPurpose(value.key);
    }

}
