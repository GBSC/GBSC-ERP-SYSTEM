import { Component, OnInit } from '@angular/core';
import { PayrollSetupService } from '../../../../core';

@Component({
    selector: 'app-tax-adjustment-reason',
    templateUrl: './tax-adjustment-reason.component.html',
    styleUrls: ['./tax-adjustment-reason.component.scss']
})
export class TaxAdjustmentReasonComponent implements OnInit {

    public taxAdjustmentReason: any;
    public Updatingreason: any;

    constructor(public payrollsetupservice: PayrollSetupService) { }

    async ngOnInit() {

        this.taxAdjustmentReason = await this.payrollsetupservice.getTaxAdjustmentReasons();
    }

    async addTaxAdjustmentReason(value) {
        await this.payrollsetupservice.addTaxAdjustmentReason(value.data);
    }

    updatingAdjustmentReason(value) {
        this.Updatingreason = { ...value.oldData, ...value.newData };
    }

    async updateTaxAdjustmentReason() {
        await this.payrollsetupservice.updateTaxAdjustmentReason(this.Updatingreason);
    }

    async deleteTaxAdjustmentReason(value) {
        await this.payrollsetupservice.DeleteTaxAdjustmentReason(value.key);
    }

}