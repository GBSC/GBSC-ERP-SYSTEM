import { Component, OnInit } from '@angular/core';
import { InventorysystemService } from '../../service/Inventorysystem.service';

@Component({
    selector: 'app-sales-return',
    templateUrl: './sales-return.component.html',
    styleUrls: ['./sales-return.component.css']
})
export class SalesReturnComponent implements OnInit {
    private SalesInvoice: any;
    private ReturnReason: any;
    private SalesReturn: any;

    constructor(private InventoryService: InventorysystemService) {
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
