import { Component, OnInit } from '@angular/core';
import { InventorysystemService } from '../../../core';

@Component({
    selector: 'app-purchase-indent',
    templateUrl: './purchase-indent.component.html',
    styleUrls: ['./purchase-indent.component.scss']
})
export class PurchaseIndentComponent implements OnInit {
    public PurchaseOrder: any;
    public User: any;
    public PurchaseIndent: any;

    constructor(public InventoryService: InventorysystemService) {

    }

    async ngOnInit() {
        this.PurchaseOrder = await this.InventoryService.GetPurchaseOrders();
        this.PurchaseIndent = await this.InventoryService.GetPurchaseIndents();
    }

    async AddPurchaseIndent(value) {
        return await this.InventoryService.AddPurchaseIndent(value);
    }

    async UpdatePurchaseIndent(value) {
        return await this.InventoryService.UpdatePurchaseIndent(value.Key);
    }

    async DeletePurchaseIndent(value) {
        return await this.InventoryService.DeletePurchaseIndent(value.Key.PurchaseIndentId);
    }
}