import { Component, OnInit } from '@angular/core';
import { LeaveSetupService } from '../../../../core';

@Component({
    selector: 'app-decimalroundingmatrix',
    templateUrl: './decimalroundingmatrix.component.html',
    styleUrls: ['./decimalroundingmatrix.component.scss']
})
export class DecimalroundingmatrixComponent implements OnInit {

    public decimalrounding: any;
    constructor(public leavesetupservice: LeaveSetupService) { }

    async ngOnInit() {
        await this.leavesetupservice.getdecimalroundingmatrix();
        this.decimalrounding = this.leavesetupservice.decimalroundingmatrix
    }

    async adddrmatrix(value) {
        this.leavesetupservice.addroundingmatrix(value.data);
    }

    async updatedrmatrix(value) {
        this.leavesetupservice.updatedecimalroundingmatrix(value);
    }

    async deletedrmatrix(value) {
        this.leavesetupservice.Deletedecimalroundingmatrix(value.key);


    }

}
