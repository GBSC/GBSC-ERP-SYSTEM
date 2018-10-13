import { Component, OnInit } from '@angular/core';
import { LeaveSetupService } from '../../../../core';

@Component({
    selector: 'app-leavesubtype',
    templateUrl: './leavesubtype.component.html',
    styleUrls: ['./leavesubtype.component.scss']
})
export class LeavesubtypeComponent implements OnInit {

    public subleave: any;
    constructor(public leavesetupservice: LeaveSetupService) { }

    async ngOnInit() {
        this.subleave = await this.leavesetupservice.getLeaveSubTypes();
    }

    async addsubleave(subtype) {
       await this.leavesetupservice.addLeaveSubType(subtype.data);
    }

    async updatesubleave(data) {
        await this.leavesetupservice.updateLeaveSubType(data);
    }

    async deletesubleave(data) {
       await this.leavesetupservice.deleteLeaveSubType(data.key);


    }

}
