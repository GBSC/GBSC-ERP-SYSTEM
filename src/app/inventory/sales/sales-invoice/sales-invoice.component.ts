import { Component, OnInit } from '@angular/core';
import { InventorysystemService } from '../../../core';

@Component({
    selector: 'app-sales-invoice',
    templateUrl: './sales-invoice.component.html',
    styleUrls: ['./sales-invoice.component.scss']
})
export class SalesInvoiceComponent implements OnInit {
    public DeliveryNote: any;
    public SalesReturn: any;
    public SalesInvoice: any;

    constructor(public InventoryService: InventorysystemService) {

    }

    async ngOnInit() {
        this.DeliveryNote = await this.InventoryService.GetDeliveryNotes();
        this.SalesReturn = await this.InventoryService.GetSalesReturns();
        this.SalesInvoice = await this.InventoryService.GetSalesInvoices();
    }

    async AddSalesInvoice(value) {
        return await this.InventoryService.AddSalesInvoice(value);
    }

    async UpdateSalesInvoice(value) {
        return await this.InventoryService.UpdateSalesInvoice(value.Key);
    }

    async DeleteSalesInvoice(value) {
        return await this.InventoryService.DeleteSalesInvoice(value.Key.SalesInvoiceId);
    }
}