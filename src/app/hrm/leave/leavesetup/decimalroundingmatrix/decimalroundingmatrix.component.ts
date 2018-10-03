import { Component, OnInit } from '@angular/core';
import { LeaveSetupService, LeaveService } from '../../../../core';

@Component({
    selector: 'app-decimalroundingmatrix',
    templateUrl: './decimalroundingmatrix.component.html',
    styleUrls: ['./decimalroundingmatrix.component.scss']
})
export class DecimalroundingmatrixComponent implements OnInit {

    public decimalrounding: any;
    public leavePolicy: any;
    public decimalmatrix: any;
    public Employeeleave: any;

    constructor(public leavesetupservice: LeaveSetupService,public leaveservice: LeaveService) { }

    async ngOnInit() {

        await this.leavesetupservice.getdecimalroundingmatrix();
        this.decimalrounding = this.leavesetupservice.decimalroundingmatrix
       
         this.leavePolicy = await this.leavesetupservice.getAllleavepolicy();
    
         this.Employeeleave = await this.leaveservice.getleavepolicyemployee();
 
    }

    async adddrmatrix(value) {
        this.leavesetupservice.addroundingmatrix(value.data);
    }

    async updatedrmatrix() {
        this.leavesetupservice.updatedecimalroundingmatrix( this.decimalmatrix);
    }
    async updatingrmatrix(value) {
        this.decimalmatrix = {...value.oldData, ...value.newData};
    }

    async deletedrmatrix(value) {
        this.leavesetupservice.Deletedecimalroundingmatrix(value.key);


    }

}
