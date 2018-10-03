import { Component, OnInit } from '@angular/core';
import { InventorysystemService } from '../../service/Inventorysystem.service';

@Component({
    selector: 'app-goodsreceipt',
    templateUrl: './goodsreceipt.component.html',
    styleUrls: ['./goodsreceipt.component.css']
})
export class GoodsreceiptComponent implements OnInit {
    private PurchaseInvoice: any;
    private GRN: any;

    constructor(private InventoryService: InventorysystemService) {

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
