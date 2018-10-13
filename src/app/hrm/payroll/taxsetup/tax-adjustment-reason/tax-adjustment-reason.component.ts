import { Component, OnInit } from '@angular/core';
import { PayrollSetupService } from '../../../../core';

@Component({
    selector: 'app-tax-adjustment-reason',
    templateUrl: './tax-adjustment-reason.component.html',
    styleUrls: ['./tax-adjustment-reason.component.scss']
})
export class TaxAdjustmentReasonComponent implements OnInit {

    public taxAdjustmentReason: any;
<<<<<<< HEAD
    Updatingreason: any;
=======
    public Updatingreason: any;
>>>>>>> master

    constructor(public payrollsetupservice: PayrollSetupService) { }

    async ngOnInit() {
<<<<<<< HEAD
        await this.payrollsetupservice.gettaxadjustmentreasons();
        this.taxAdjustmentReason = this.payrollsetupservice.taxadjustmentreason;
    }

    async addTaxAdjustmentReason(value) {
        await this.payrollsetupservice.addtaxadjustmentreason(value.data);
=======

        this.taxAdjustmentReason = await this.payrollsetupservice.getTaxAdjustmentReasons();
    }

    async addTaxAdjustmentReason(value) {
        await this.payrollsetupservice.addTaxAdjustmentReason(value.data);
>>>>>>> master
    }

    updatingAdjustmentReason(value) {
        this.Updatingreason = { ...value.oldData, ...value.newData };
    }

    async updateTaxAdjustmentReason() {
<<<<<<< HEAD
        await this.payrollsetupservice.updatetaxadjustmentreason(this.Updatingreason);
    }

    async deleteTaxAdjustmentReason(value) {
        await this.payrollsetupservice.Deletetaxadjustmentreason(value.key);
=======
        await this.payrollsetupservice.updateTaxAdjustmentReason(this.Updatingreason);
    }

    async deleteTaxAdjustmentReason(value) {
        await this.payrollsetupservice.DeleteTaxAdjustmentReason(value.key);
>>>>>>> master
    }

}