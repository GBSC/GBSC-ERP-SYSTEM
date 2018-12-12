import { Component, OnInit } from '@angular/core';
import { LeaveSetupService } from '../../../../core';

@Component({
    selector: 'app-leaveeligibility',
    templateUrl: './leaveeligibility.component.html',
    styleUrls: ['./leaveeligibility.component.scss']
})
export class LeaveeligibilityComponent implements OnInit {

    public leaveeligibility: any;
    constructor(public leavesetupservice: LeaveSetupService) { }

    async ngOnInit() {

        this.leaveeligibility = await this.leavesetupservice.getLeaveEligibilities();;
    }

    async addleaveeligibility(value) {
        await this.leavesetupservice.addLeaveEligibility(value.data);
        this.leaveeligibility = await this.leavesetupservice.getLeaveEligibilities();;
    }

    async updateleaveeligibility(value) {
        await this.leavesetupservice.updateLeaveEligibility(value);

    }

    async deleteleaveeligibility(value) {
        await this.leavesetupservice.deleteLeaveEligibility(value.key);


    }

}
