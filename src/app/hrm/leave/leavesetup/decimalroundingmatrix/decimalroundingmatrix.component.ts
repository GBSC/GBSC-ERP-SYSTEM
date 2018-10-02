import { Component, OnInit } from '@angular/core';
import { LeaveSetupService } from '../../leaveSetup.service';

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

<<<<<<< HEAD
    async adddrmatrix(drmatrix) {
        this.leavesetupservice.adddecimalroundingmatrix(drmatrix.data);
    }

    async updatedrmatrix(drmatrix) {
        this.leavesetupservice.updatedecimalroundingmatrix(drmatrix);
    }

    async deletedrmatrix(drmatrix) {
        this.leavesetupservice.Deletedecimalroundingmatrix(drmatrix.key);
=======
    async adddrmatrix(value) {
        this.leavesetupservice.addroundingmatrix(value.data);
    }

    async updatedrmatrix(value) {
        this.leavesetupservice.updatedecimalroundingmatrix(value);
    }

    async deletedrmatrix(value) {
        this.leavesetupservice.Deletedecimalroundingmatrix(value.key);
>>>>>>> master


    }

}
