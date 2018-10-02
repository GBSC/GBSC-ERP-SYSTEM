import { Component, OnInit, NgModule } from '@angular/core';
import { InventorysystemService } from '../../service/Inventorysystem.service';

@Component({
    selector: 'app-delivery-note',
    templateUrl: './delivery-note.component.html',
    styleUrls: ['./delivery-note.component.scss']
})
export class DeliveryNoteComponent implements OnInit {
    private DeliveryOrder: any;
    private Transport: any;
    private SalesInvoice: any;
    private DeliveryNote: any;
    minDate = new Date(2000, 0, 1);
    maxDate = new Date(2029, 11, 31);
    currentDate = new Date();

    constructor(private InventoryService: InventorysystemService) {

    }
   
    async ngOnInit() {
        this.DeliveryOrder = await this.InventoryService.GetDeliveryOrders();
        this.Transport = await this.InventoryService.GetTransports();
        this.SalesInvoice = await this.InventoryService.GetSalesInvoices();
        this.DeliveryNote = await this.InventoryService.GetDeliveryNotes();
    }

    async AddDeliveryNote(value) {
        return await this.InventoryService.AddDeliveryNote(value);
    }

    async UpdateDeliveryNote(value) {
        return await this.InventoryService.UpdateDeliveryNote(value.Key);
    }

    async DeleteDeliveryNote(value) {
        return await this.InventoryService.DeleteDeliveryNote(value.Key.DeliveryNoteId);
    }
}