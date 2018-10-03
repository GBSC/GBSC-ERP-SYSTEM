import { Component, OnInit } from '@angular/core';
import { InventorysystemService } from '../../service/Inventorysystem.service';

@Component({
    selector: 'app-purchase-return',
    templateUrl: './purchase-return.component.html',
    styleUrls: ['./purchase-return.component.scss']
})
export class PurchaseReturnComponent implements OnInit {
    private GRN: any;
    private ReturnReason: any;
    private PurchaseReturn: any;

    constructor(private InventoryService: InventorysystemService) {

    }

    async ngOnInit() {
        this.GRN = await this.InventoryService.GetGRN();
        this.ReturnReason = await this.InventoryService.GetReturnReasons();
        this.PurchaseReturn = await this.InventoryService.GetPurchaseReturns();
    }

    async AddPurchaseReturn(value) {
        return await this.InventoryService.AddPurchaseReturn(value);
    }

    async UpdatePurchaseReturn(value) {
        return await this.InventoryService.UpdatePurchaseReturn(value.Key);
    }

    async DeletePurchaseReturn(value) {
        return await this.InventoryService.DeletePurchaseReturn(value.Key.PurchaseReturnId);
    }
}