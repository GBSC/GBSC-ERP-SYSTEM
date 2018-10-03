import { Component, OnInit } from '@angular/core';
import { PharmacyService } from '../../core';

@Component({
  selector: 'app-purchase-order-details',
  templateUrl: './purchase-order-details.component.html',
  styleUrls: ['./purchase-order-details.component.scss']
})
export class PurchaseOrderDetailsComponent implements OnInit {

    private InventoryItem: any;
    private Inventory: any;
    private PurchaseOrder: any;
    private PurchaseOrderItem: any;

    constructor(private PharmacyService: PharmacyService) {

    }

    async ngOnInit() {
        this.InventoryItem = await this.PharmacyService.GetInventoryItems();
        this.Inventory = await this.PharmacyService.GetInventories();
        this.PurchaseOrder = await this.PharmacyService.GetPurchaseOrders();
        this.PurchaseOrderItem = await this.PharmacyService.GetPurchaseOrderItems();
    }

    async AddPurchaseOrderItem(value) {
        return await this.PharmacyService.AddPurchaseOrderItem(value);
    }

    async UpdatePurchaseOrderItem(value) {
        return await this.PharmacyService.UpdatePurchaseOrderItem(value.Key);
    }

    async DeletePurchaseOrderItem(value) {
        return await this.PharmacyService.DeletePurchaseOrderItem(value.Key.PurchaseOrderItemId);
    }

}
