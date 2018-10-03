import { Component, OnInit } from '@angular/core';
import { InventorysystemService } from '../../service/Inventorysystem.service';
import { InventorysystemModule } from '../../Inventorysystem.module';

@Component({
    selector: 'app-sales-order-item',
    templateUrl: './sales-order-item.component.html',
    styleUrls: ['./sales-order-item.component.scss']
})
export class SalesOrderItemComponent implements OnInit {
    private PackType: any;
    private SalesOrder: any;
    private InventoryItem: any;
    private Inventory: any;
    private Comission: any;
    private SalesOrderItem: any;

    constructor(private InventoryService: InventorysystemService) {

    }

    async ngOnInit() {
        this.PackType = await this.InventoryService.GetPackTypes();
        this.SalesOrder = await this.InventoryService.GetSalesOrders();
        this.InventoryItem = await this.InventoryService.GetInventoryItems();
        this.Inventory = await this.InventoryService.GetInventories();
        this.Comission = await this.InventoryService.GetComissions();
        this.SalesOrderItem = await this.InventoryService.GetSalesOrderItems();
    }

    async AddSalesOrderItem(value) {
        return await this.InventoryService.AddSalesOrderItem(value);
    }

    async UpdateSalesOrderItem(value) {
        return await this.InventoryService.UpdateSalesOrderItem(value.Key);
    }

    async DeleteSalesOrderItem(value) {
        return await this.InventoryService.DeleteSalesOrderItem(value.Key.SalesOrderItemId);
    }

}