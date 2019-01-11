import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FinanceSetupService } from '../../../core/Services/Finance/financeSetup.service';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../../core';


@Component({
    selector: 'app-vouchertype',
    templateUrl: './vouchertype.component.html',
    styleUrls: ['./vouchertype.component.scss']
})
export class VouchertypeComponent implements OnInit {

    public voucherType: any;
    public VoucherTypeForm: any;
    public updateVoucherType: any;

    constructor(public toastr: ToastrService, public Auth: AuthService, public fb: FormBuilder, public financeService: FinanceSetupService) { }

    async ngOnInit() {

        this.VoucherTypeForm = this.fb.group({
            VoucherCode: [''],
            Name: ['']
        });

        this.financeService.GetVoucherTypesByCompany(this.Auth.getUserCompanyId()).subscribe((res : any[]) => {
            this.voucherType =  res;
        });
    }

    addVouchertype() {
        this.VoucherTypeForm.value.CompanyId = this.Auth.getUserCompanyId();
        this.financeService.AddVoucherType(this.VoucherTypeForm.value).subscribe((res : any) => {
            this.financeService.GetVoucherTypesByCompany(this.Auth.getUserCompanyId()).subscribe((res : any[]) => {
                this.voucherType =  res;
            });
            this.toastr.success("New Voucher Type Saved");
            this.VoucherTypeForm.reset();
        });
    }

    updatingVouchertype(value) {

        this.updateVoucherType = { ...value.oldData, ...value.newData };
    }
    updateVouchertype() {
        this.financeService.UpdateVoucherType(this.updateVoucherType).subscribe((res : any) => {
            this.toastr.success("Updated");
        });
    }

    deleteVouchertype(value) {
        this.financeService.deleteVoucherType(value.key).subscribe((res : any) => {
            this.toastr.success("Deleted");
        });
    }

}
