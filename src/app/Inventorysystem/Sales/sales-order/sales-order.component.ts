import { Component, OnInit } from '@angular/core';
import { InventorysystemService } from '../../service/Inventorysystem.service';

@Component({
    selector: 'app-sales-order',
    templateUrl: './sales-order.component.html',
    styleUrls: ['./sales-order.component.scss']
})
export class SalesOrderComponent implements OnInit {
    private User: any;
    private DeliveryOrder: any;
    private SalesIndent: any;
    private SalesPerson: any;
    private ModeOfPayment: any;
    private Customer: any;
    private Tax: any;
    private SalesOrder: any;

    constructor(private InventoryService: InventorysystemService) {

    }

    async ngOnInit() {
        this.DeliveryOrder = await this.InventoryService.GetDeliveryOrders();
        this.SalesIndent = await this.InventoryService.GetSalesIndents();
        this.SalesPerson = await this.InventoryService.GetSalesPeople();
        this.ModeOfPayment = await this.InventoryService.GetModeOfPayments();
        this.Customer = await this.InventoryService.GetCustomers();
        this.Tax = await this.InventoryService.GetTaxes();
        this.SalesOrder = await this.InventoryService.GetSalesOrders();
    }

    async AddSalesOrder(value) {
        return await this.InventoryService.AddSalesOrder(value);
    }

    async UpdateSalesOrder(value) {
        return await this.InventoryService.UpdateSalesOrder(value.Key);
    }

    async DeleteSalesOrder(value) {
        return await this.InventoryService.DeleteSalesOrder(value.Key.SalesOrderId);
    }

}
