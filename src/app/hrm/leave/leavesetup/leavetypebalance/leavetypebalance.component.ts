import { Component, OnInit } from '@angular/core';
import { LeaveSetupService } from '../../leaveSetup.service';

@Component({
    selector: 'app-leavetypebalance',
    templateUrl: './leavetypebalance.component.html',
    styleUrls: ['./leavetypebalance.component.scss']
})
export class LeavetypebalanceComponent implements OnInit {

    public leavetypebalance: any;
    constructor(public leavesetupservice: LeaveSetupService) { }

    async ngOnInit() {
        await this.leavesetupservice.getAllleavetypebalance();
        this.leavetypebalance = this.leavesetupservice.leavetypebalance
        console.log(this.leavetypebalance);

    }

    async addleavetypebalance(value) {
        this.leavesetupservice.addleavetypebalance(value.data);
    }

    async updateleavetypebalance(value) {
        this.leavesetupservice.updateleavetypebalance(value);

    }

    async deleteleavetypebalance(value) {
        this.leavesetupservice.Deleteleavetypebalance(value.key);


    }

}
