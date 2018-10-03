import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { InventorysystemService } from '../../service/Inventorysystem.service';

@Component({
    selector: 'DeliveryOrderItem',
    templateUrl: './delivery-order-item.component.html',
    styleUrls: ['./delivery-order-item.component.scss'],
    encapsulation: ViewEncapsulation.None

})
export class DeliveryOrderItemComponent implements OnInit {
    private DeliveryOrder: any;
    private InventoryItem: any;
    private Inventory: any;
    private DeliveryOrderItem: any;

    constructor(private InventoryService: InventorysystemService) {
    }

    async ngOnInit() {
        this.DeliveryOrder = await this.InventoryService.GetDeliveryOrders();
        this.InventoryItem = await this.InventoryService.GetInventoryItems();
        this.Inventory = await this.InventoryService.GetInventories();
        this.DeliveryOrderItem = await this.InventoryService.GetDeliveryOrderItems();
    }

    async AddDeliveryOrderItem(value) {
        return await this.InventoryService.AddDeliveryOrderItem(value);
    }

    async UpdateDeliveryOrderItem(value) {
        return await this.InventoryService.UpdateDeliveryOrderItem(value.Key);
    }

    async DeleteDeliveryOrderItem(value) {
        return await this.InventoryService.DeleteDeliveryOrderItem(value.Key.DeliveryOrderItemId);
    }
}
