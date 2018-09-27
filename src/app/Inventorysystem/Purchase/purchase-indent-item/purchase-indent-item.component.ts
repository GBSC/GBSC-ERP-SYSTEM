import { Component, OnInit } from '@angular/core';
import { InventorysystemService } from '../../service/Inventorysystem.service';

@Component({
    selector: 'app-purchase-indent-item',
    templateUrl: './purchase-indent-item.component.html',
    styleUrls: ['./purchase-indent-item.component.scss']
})
export class PurchaseIndentItemComponent implements OnInit {
    private PurchaseIndent: any;
    private InventoryItem: any;
    private Inventory: any;
    private PurchaseIndentItem: any;

    constructor(private InventoryService: InventorysystemService) {

    }

    async ngOnInit() {
        this.PurchaseIndent = await this.InventoryService.GetPurchaseIndents();
        this.InventoryItem = await this.InventoryService.GetInventoryItems();
        this.Inventory = await this.InventoryService.GetInventories();
        this.PurchaseIndentItem = await this.InventoryService.GetInventoryItems();
    }

    async AddPurchaseIndentItem(value) {
        return await this.InventoryService.AddPurchaseIndentItem(value);
    }

    async UpdatePurchaseIndentItem(value) {
        return await this.InventoryService.UpdatePurchaseIndentItem(value.Key);
    }

    async DeletePurchaseIndentItem(value) {
        return await this.InventoryService.DeletePurchaseIndentItem(value.Key.PurchaseIndentItemId);
    }
}