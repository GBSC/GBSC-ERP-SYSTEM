import { Component, OnInit } from '@angular/core';
import { InventorysystemService, AuthService } from '../../../core';
import { ReturnReason } from '../../../core/Models/Inventory/Setup/ReturnReason';

@Component({
    selector: 'app-return-reason',
    templateUrl: './return-reason.component.html',
    styleUrls: ['./return-reason.component.scss']
})
export class ReturnReasonComponent implements OnInit {
    public ReturnReasons: any;
    public UpdatedModel: any;
    public CompanyId: number;

    constructor(public InventoryService: InventorysystemService, public AuthService: AuthService) {

    }

    ngOnInit() {
        this.CompanyId = this.AuthService.getUserCompanyId();

        this.InventoryService.GetReturnReasonsByCompany(this.CompanyId).subscribe((res: ReturnReason) => {
            this.ReturnReasons = res;
        });
    }

    AddReturnReason(value) {
        this.InventoryService.AddReturnReason(value.data).subscribe(res => {
            this.InventoryService.GetReturnReasonsByCompany(this.CompanyId).subscribe((res: ReturnReason) => {
                this.ReturnReasons = res;
            });
        });
    }

    UpdateModel(value) {
        this.UpdatedModel = { ...value.oldData, ...value.newData };
    }

    UpdateReturnReason() {
        return this.InventoryService.UpdateReturnReason(this.UpdatedModel).subscribe();
    }

    DeleteReturnReason(value) {
        return this, this.InventoryService.DeleteReturnReason(value.key).subscribe();
    }

}