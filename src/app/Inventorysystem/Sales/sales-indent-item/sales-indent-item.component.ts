import { Component, OnInit } from '@angular/core';
import { InventorysystemService } from '../../service/Inventorysystem.service';

@Component({
    selector: 'app-sales-indent-item',
    templateUrl: './sales-indent-item.component.html',
    styleUrls: ['./sales-indent-item.component.scss']
})
export class SalesIndentItemComponent implements OnInit {
    private SalesIndent: any;
    private InventoryItem: any;
    private Inventory: any;
    private SalesIndentItem: any;

    constructor(private InventoryService: InventorysystemService) {

    }

    async ngOnInit() {
        this.SalesIndent = await this.InventoryService.GetSalesIndents();
        this.InventoryItem = await this.InventoryService.GetInventoryItems();
        this.Inventory = await this.InventoryService.GetInventories();
        this.SalesIndentItem = await this.InventoryService.GetSalesIndentItems();
    }

    async AddSalesIndentItem(value) {
        return await this.InventoryService.AddSalesIndentItem(value);
    }

    async UpdateSalesIndentItem(value) {
        return await this.InventoryService.UpdateSalesIndentItem(value.Key);
    }

    async DeleteSalesIndentItem(value) {
        return await this.InventoryService.DeleteSalesIndentItem(value.Key.SalesIndentItemId);
    }
}