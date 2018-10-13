import { Component, OnInit } from '@angular/core';
import { LeaveSetupService, LeaveService } from '../../../../core';

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
        this.proratematrix = await this.leavesetupservice.getProrateMatrixs();

<<<<<<< HEAD
        this.leavepolicy = await this.leavesetupservice.getAllleavepolicy();

        this.leaveemppolicy = await this.leaveservice.getleavepolicyemployee();
=======
        this.leavepolicy = await this.leavesetupservice.getLeavePolicies();
>>>>>>> master

        this.leaveemppolicy = await this.leaveservice.getLeavePolicyEmployee();
    }

    async addprmatrix(value) {
        this.leavesetupservice.addProrateMatrix(value.data);
    }

    updatingpromatrix(value) {
        this.promatrix = { ...value.oldData, ...value.newData };
    }

    updatepromatrix() {
<<<<<<< HEAD
        this.leavesetupservice.updateproratematrix(this.promatrix);
    }

    async deleteprmatrix(value) {
        await this.leavesetupservice.Deleteproratematrix(value.key);
=======
        this.leavesetupservice.updateProrateMatrix(this.promatrix);
    }

    async deleteprmatrix(value) {
        await this.leavesetupservice.deleteprorateMatrix(value.key);
>>>>>>> master
    }
}