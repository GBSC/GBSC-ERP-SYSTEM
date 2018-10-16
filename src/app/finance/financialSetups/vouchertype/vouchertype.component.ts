import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FinanceSetupService } from '../../../core/Services/Finance/financeSetup.service';


@Component({
    selector: 'app-vouchertype',
    templateUrl: './vouchertype.component.html',
    styleUrls: ['./vouchertype.component.scss']
})
export class VouchertypeComponent implements OnInit {

    voucherType: any;
    VoucherTypeForm: any;
    updateVoucherType: any;

    constructor(private fb: FormBuilder, public financeService: FinanceSetupService) { }

    async ngOnInit() {

        this.VoucherTypeForm = this.fb.group({
            VoucherCode: [''],
            Name: [''] 
        });

        this.voucherType = await this.financeService.getVoucherTypes();
    }

    async addVouchertype() {

        await this.financeService.addVoucherType(this.VoucherTypeForm.value);
    }

    async updatingVouchertype(value) {

        this.updateVoucherType = { ...value.oldData, ...value.newData };
    }
    async updateVouchertype() {

        await this.financeService.updateVoucherType(this.updateVoucherType);
    }

    async deleteVouchertype(value) {

        await this.financeService.DeleteVoucherType(value.data);
    }

}
