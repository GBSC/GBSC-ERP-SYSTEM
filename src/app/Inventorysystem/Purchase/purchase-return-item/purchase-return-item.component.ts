import { Component, OnInit } from '@angular/core';
import { InventorysystemService } from '../../service/Inventorysystem.service';

@Component({
    selector: 'app-purchase-return-item',
    templateUrl: './purchase-return-item.component.html',
    styleUrls: ['./purchase-return-item.component.scss']
})
export class PurchaseReturnItemComponent implements OnInit {
    private PurchaseReturn: any;
    private Inventory: any;
    private PurchaseReturnItem: any;

    constructor(private InventoryService: InventorysystemService) {

    }

    async ngOnInit() {
        this.PurchaseReturn = await this.InventoryService.GetPurchaseReturns();
        this.Inventory = await this.InventoryService.GetInventories();
        this.PurchaseReturnItem = await this.InventoryService.GetPurchaseReturnItems();
    }

    async AddPurchaseReturnItem(value) {
        return await this.InventoryService.AddPurchaseReturnItem(value);
    }

    async UpdatePurchaseReturnItem(value) {
        return await this.InventoryService.UpdatePurchaseReturnItem(value.Key);
    }

    async DeletePurchaseReturnItem(value) {
        return await this.InventoryService.DeletePurchaseReturnItem(value.Key.PurchaseReturnItemId);
    }
}