import { Component, OnInit } from '@angular/core';
import { InventorysystemService } from '../../service/Inventorysystem.service';

@Component({
    selector: 'app-purchase-indent',
    templateUrl: './purchase-indent.component.html',
    styleUrls: ['./purchase-indent.component.scss']
})
export class PurchaseIndentComponent implements OnInit {
    private PurchaseOrder: any;
    private User: any;
    private PurchaseIndent: any;

    constructor(private InventoryService: InventorysystemService) {

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