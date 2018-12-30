import { Component, OnInit } from '@angular/core';
import { InventorysystemService, AuthService } from '../../../core';
import { ModeOfPayment } from '../../../core/Models/Inventory/Setup/ModeOfPayment';

@Component({
    selector: 'app-mode-of-payment',
    templateUrl: './mode-of-payment.component.html',
    styleUrls: ['./mode-of-payment.component.scss']
})
export class ModeOfPaymentComponent implements OnInit {
    public ModeOfPayments: any;
    public UpdatedModel: any;
    private CompanyId: number;

    constructor(public InventoryService: InventorysystemService, private AuthService: AuthService) { }

    ngOnInit() {
        this.AuthService.getUserCompanyId().subscribe((res: number) => {
            this.CompanyId = res;
        });
        this.InventoryService.GetModeOfPaymentsByCompany(this.CompanyId).subscribe((res: ModeOfPayment) => {
            this.ModeOfPayments = res;
        });
    }

    AddModeOfPayment(value) {
        //console.log(value.data);
        this.InventoryService.AddModeOfPayment(value.data).subscribe(res => {
            this.InventoryService.GetModeOfPaymentsByCompany(this.CompanyId).subscribe((res: ModeOfPayment) => {
                this.ModeOfPayments = res;
            });
        });
    }

    UpdateModel(value) {
        this.UpdatedModel = { ...value.oldData, ...value.newData };
    }

    UpdateModeOfPayment() {
        return this.InventoryService.UpdateModeOfPayment(this.UpdatedModel).subscribe();
    }

    DeleteModeOfPayment(value) {
        return this.InventoryService.DeleteModeOfPayment(value.key).subscribe();
    }

}