import { Component, OnInit } from '@angular/core';
import { InventorysystemService } from '../../service/Inventorysystem.service';

@Component({
    selector: 'app-purchase-order-item',
    templateUrl: './purchase-order-item.component.html',
    styleUrls: ['./purchase-order-item.component.scss']
})
export class PurchaseOrderItemComponent implements OnInit {
    private InventoryItem: any;
    private Inventory: any;
    private PurchaseOrder: any;
    private PurchaseOrderItem: any;

    constructor(private InventoryService: InventorysystemService) {

    }

    async ngOnInit() {
        this.InventoryItem = await this.InventoryService.GetInventoryItems();
        this.Inventory = await this.InventoryService.GetInventories();
        this.PurchaseOrder = await this.InventoryService.GetPurchaseOrders();
        this.PurchaseOrderItem = await this.InventoryService.GetPurchaseOrderItems();
    }

    async AddPurchaseOrderItem(value) {
        return await this.InventoryService.AddPurchaseOrderItem(value);
    }

    async UpdatePurchaseOrderItem(value) {
        return await this.InventoryService.UpdatePurchaseOrderItem(value.Key);
    }

    async DeletePurchaseOrderItem(value) {
        return await this.InventoryService.DeletePurchaseOrderItem(value.Key.PurchaseOrderItemId);
    }
}
