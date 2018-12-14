import { Component, OnInit } from '@angular/core';
import { InventorysystemService } from '../../../core';

@Component({
    selector: 'app-sales-return',
    templateUrl: './sales-return.component.html',
    styleUrls: ['./sales-return.component.css']
})
export class SalesReturnComponent implements OnInit {
    public SalesInvoice: any;
    public ReturnReason: any;
    public SalesReturn: any;

    constructor(public InventoryService: InventorysystemService) {
    }

    async ngOnInit() {
        this.SalesInvoice = await this.InventoryService.GetSalesInvoices();
        this.ReturnReason = await this.InventoryService.GetReturnReasons();
        this.SalesReturn = await this.InventoryService.GetSalesReturns();
    }

    async AddSalesReturn(value) {
        return await this.InventoryService.AddSalesReturn(value);
    }

    async UpdateSalesReturn(value) {
        return await this.InventoryService.UpdateSalesReturn(value.Key);
    }

    async DeleteSalesReturn(value) {
        return await this.InventoryService.DeleteSalesReturn(value.Key.SalesReturnId);
    }

}
