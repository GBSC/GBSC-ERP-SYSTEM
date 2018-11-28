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

        this.decimalrounding = await this.leavesetupservice.getDecimalRoundingMatrixs();

        this.leavePolicy = await this.leavesetupservice.getLeavePolicies();

        this.Employeeleave = await this.leaveservice.getLeavePolicyEmployee();
    }

    async adddrmatrix(value) {
        this.leavesetupservice.addRoundingMatrix(value.data);
        this.decimalrounding = await this.leavesetupservice.getDecimalRoundingMatrixs();
    }

    async updatingrmatrix(value) {
        this.decimalmatrix = { ...value.oldData, ...value.newData };
    }

    async updatedrmatrix() {
        this.leavesetupservice.updateDecimalRoundingMatrix(this.decimalmatrix);
    }

    async deletedrmatrix(value) {
        this.leavesetupservice.deleteDecimalRoundingMatrix(value.key);


    }

}
