import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { ScriptLoaderService } from '../../../_services/script-loader.service';
import { Helpers } from '../../../helpers';
import { InventorysystemService } from '../../service/Inventorysystem.service';
import { DeliveryOrder } from '../../models/Sales/DeliveryOrder';
@Component({
    selector: 'DeliveryOrder',
    templateUrl: './delivery-order.component.html',
    styleUrls: ['./delivery-order.component.scss'],
    encapsulation: ViewEncapsulation.None

})
export class DeliveryOrderComponent implements OnInit {
    private SalesOrder: any;
    private DeliveryNote: any;
    private DeliveryOrder: any;

    constructor(private InventoryService: InventorysystemService) {
    }

    async ngOnInit() {
        this.SalesOrder = await this.InventoryService.GetSalesOrders();
        this.DeliveryNote = await this.InventoryService.GetDeliveryNotes();
        this.DeliveryOrder = await this.InventoryService.GetDeliveryOrders();
    }

    async AddDeliveryOrder(value) {
        return await this.InventoryService.AddDeliveryOrder(value);
    }

    async UpdateDeliveryOrder(value) {
        return await this.InventoryService.UpdateDeliveryOrder(value.Key);
    }

    async DeleteDeliveryOrder(value) {
        return await this.InventoryService.DeleteDeliveryOrder(value.Key.DeliveryOrderId);
    }
}
