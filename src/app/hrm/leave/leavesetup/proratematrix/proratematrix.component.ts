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
    
        this.leavepolicy = await this.leavesetupservice.getLeavePolicies();

        this.leaveemppolicy = await this.leaveservice.getLeavePolicyEmployee();
    }

    async addprmatrix(value) {
        this.leavesetupservice.addProrateMatrix(value.data);
    }

    updatingpromatrix(value) {
        this.promatrix = { ...value.oldData, ...value.newData };
    }

    updatepromatrix() {
        this.leavesetupservice.updateProrateMatrix(this.promatrix);
    }

    async deleteprmatrix(value) {
        await this.leavesetupservice.deleteprorateMatrix(value.key);
    }
}