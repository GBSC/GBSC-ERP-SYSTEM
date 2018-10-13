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

    constructor(public leavesetupservice: LeaveSetupService, public leaveservice: LeaveService) { }

    async ngOnInit() {

<<<<<<< HEAD
        await this.leavesetupservice.getdecimalroundingmatrix();
        this.decimalrounding = this.leavesetupservice.decimalroundingmatrix

        this.leavePolicy = await this.leavesetupservice.getAllleavepolicy();

        this.Employeeleave = await this.leaveservice.getleavepolicyemployee();

=======
        this.decimalrounding = await this.leavesetupservice.getDecimalRoundingMatrixs();

        this.leavePolicy = await this.leavesetupservice.getLeavePolicies();

        this.Employeeleave = await this.leaveservice.getLeavePolicyEmployee();
>>>>>>> master
    }

    async adddrmatrix(value) {
        this.leavesetupservice.addRoundingMatrix(value.data);
    }

<<<<<<< HEAD
    async updatedrmatrix() {
        this.leavesetupservice.updatedecimalroundingmatrix(this.decimalmatrix);
    }
    async updatingrmatrix(value) {
        this.decimalmatrix = { ...value.oldData, ...value.newData };
=======
    async updatingrmatrix(value) {
        this.decimalmatrix = { ...value.oldData, ...value.newData };
    }

    async updatedrmatrix() {
        this.leavesetupservice.updateDecimalRoundingMatrix(this.decimalmatrix);
>>>>>>> master
    }

    async deletedrmatrix(value) {
        this.leavesetupservice.deleteDecimalRoundingMatrix(value.key);


    }

}
