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
        await this.leavesetupservice.getAllleaveeligibility();
        this.leaveeligibility = this.leavesetupservice.leaveeligibility
        console.log(this.leaveeligibility);

    }

    async addleaveeligibility(value) {
        this.leavesetupservice.addleaveeligibility(value.data);
    }

    async updateleaveeligibility(value) {
        console.log(value);
        this.leavesetupservice.updateleaveeligibility(value);

    }

    async deleteleaveeligibility(value) {
        console.log(value);
        this.leavesetupservice.Deleteleaveeligibility(value.key);


    }

}
