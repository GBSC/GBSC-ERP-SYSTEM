import { Component, OnInit } from '@angular/core';
import { InventorysystemService } from '../../service/Inventorysystem.service';

@Component({
    selector: 'app-sales-return-item',
    templateUrl: './sales-return-item.component.html',
    styleUrls: ['./sales-return-item.component.scss']
})
export class SalesReturnItemComponent implements OnInit {
    private SalesReturn: any;
    private Inventory: any;
    private SalesReturnItem: any;

    constructor(private InventoryService: InventorysystemService) {

    }

    async ngOnInit() {
        this.SalesReturn = await this.InventoryService.GetSalesReturns();
        this.Inventory = await this.InventoryService.GetInventories();
        this.SalesReturnItem = await this.InventoryService.GetSalesReturnItems();
    }

    async AddSalesReturnItem(value) {
        return await this.InventoryService.AddSalesReturnItem(value);
    }

    async UpdateSalesReturnItem(value) {
        return await this.InventoryService.UpdateSalesReturnItem(value.Key);
    }

    async DeleteSalesReturnItem(value) {
        return await this.InventoryService.DeleteSalesReturnItem(value.Key.SalesReturnItemId);
    }
}