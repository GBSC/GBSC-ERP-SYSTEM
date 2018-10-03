import { Component, OnInit } from '@angular/core';
import { LeaveSetupService } from '../../leaveSetup.service';
import { LeaveService } from '../../leave.service';

@Component({
    selector: 'app-proratematrix',
    templateUrl: './proratematrix.component.html',
    styleUrls: ['./proratematrix.component.scss']
})
export class ProratematrixComponent implements OnInit {
    public proratematrix: any;
    public leaveemppolicy: any;
    public leavepolicy: any;
    public promatrix: any;
    constructor(public leavesetupservice: LeaveSetupService, public leaveservice: LeaveService) { }

    async ngOnInit() {
        await this.leavesetupservice.getproratematrix();
        this.proratematrix = this.leavesetupservice.proratematrix
        console.log(this.proratematrix);

        this.leavepolicy = await this.leavesetupservice.getAllleavepolicy();
 
        this.leaveemppolicy = await this.leaveservice.getleavepolicyemployee();

    }

    async addprmatrix(value) {
        this.leavesetupservice.addproratematrix(value.data);
    }

     updatingpromatrix(value) {
        this.promatrix = {...value.oldData, ...value.newData};
    }
   
     updatepromatrix() {
         this.leavesetupservice.updateproratematrix( this.promatrix);
    }

    async deleteprmatrix(value) {
       await this.leavesetupservice.Deleteproratematrix(value.key);
    }
}