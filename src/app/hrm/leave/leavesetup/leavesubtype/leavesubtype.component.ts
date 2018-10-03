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
        await this.leavesetupservice.getleavesubtype();
        this.subleave = this.leavesetupservice.leavesubtype
    }

    async addsubleave(subtype) {
        this.leavesetupservice.addleavesubtype(subtype.data);
    }

    async updatesubleave(data) {
        this.leavesetupservice.updateleavesubtype(data);
    }

    async deletesubleave(data) {
        this.leavesetupservice.Deleteleavesubtype(data.key);


    }

}
