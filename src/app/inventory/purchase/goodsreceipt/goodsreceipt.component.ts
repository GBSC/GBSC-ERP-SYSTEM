import { Component, OnInit } from '@angular/core';
import { InventorysystemService } from '../../../core';

@Component({
    selector: 'app-goodsreceipt',
    templateUrl: './goodsreceipt.component.html',
    styleUrls: ['./goodsreceipt.component.css']
})
export class GoodsreceiptComponent implements OnInit {
    public PurchaseInvoice: any;
    public GRN: any;

    constructor(public InventoryService: InventorysystemService) {

    }

    async ngOnInit() {
        this.PurchaseInvoice = await this.InventoryService.GetPurchaseInvoices();
        this.GRN = await this.InventoryService.GetGRN();
    }

    async AddGRN(value) {
        await this.InventoryService.AddGRN(value);
    }

    async UpdateGRN(value) {
        await this.InventoryService.UpdateGRN(value.Key);
    }

    async DeleteGRN(value) {
        await this.InventoryService.DeleteGRN(value.Key.GRNId);
    }

}
