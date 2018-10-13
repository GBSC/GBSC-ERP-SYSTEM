import { Component, OnInit } from '@angular/core';
import { LeaveSetupService } from '../../../../core';

@Component({
    selector: 'app-leavepurpose',
    templateUrl: './leavepurpose.component.html',
    styleUrls: ['./leavepurpose.component.css']
})
export class LeavepurposeComponent implements OnInit {
    public levepurpose: any;

    constructor(public leavesetupservice: LeaveSetupService) { }

    async ngOnInit() {
        this.levepurpose = await this.leavesetupservice.getLeavePurposes(); 
    }

    addleavepurpose(lpurpose) {
        this.leavesetupservice.addLeavePurpose(lpurpose.data);
    }

    updateleavepurpose(levpurpose) { 
        this.leavesetupservice.updateLeavePurpose(levpurpose); 

    }

    deleteleavepurpose(lvpurpose) { 
        this.leavesetupservice.DeleteLeavPurpose(lvpurpose.key); 
    }

}
