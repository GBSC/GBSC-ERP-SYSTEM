import { Component, OnInit } from '@angular/core';
import { InventorysystemService } from '../../../core';

@Component({
    selector: 'app-sales-indent',
    templateUrl: './sales-indent.component.html',
    styleUrls: ['./sales-indent.component.scss']
})
export class SalesIndentComponent implements OnInit {

    public SalesOrder: any;
    public DeliveryOrder: any;
    public SalesInvoice: any;
    public DeliveryNote: any;
    public SalesIndent: any;

    constructor(public InventoryService: InventorysystemService) {
    }

    async ngOnInit() {
        this.SalesOrder = await this.InventoryService.GetSalesOrders();
        this.DeliveryOrder = await this.InventoryService.GetDeliveryOrders();
        this.SalesInvoice = await this.InventoryService.GetSalesInvoices();
        this.DeliveryNote = await this.InventoryService.GetDeliveryNotes();
        this.SalesIndent = await this.InventoryService.GetSalesIndents();
    }

    async AddSalesIndent(value) {
        await this.InventoryService.AddSalesIndent(value);
    }

    async UpdateSalesIndent(value) {
        await this.InventoryService.UpdateSalesIndent(value.Key);
    }

    async DeleteSalesIndent(value) {
        await this.InventoryService.DeleteSalesIndent(value.Key.SalesIndentId);
    }

}
