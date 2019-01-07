import { Component, OnInit } from '@angular/core';
import { PharmacyService } from '../../core';

@Component({
    selector: 'app-issuance-detail',
    templateUrl: './issuance-detail.component.html',
    styleUrls: ['./issuance-detail.component.scss']
})
export class IssuanceDetailComponent implements OnInit {

    public PackType: any;
    public SalesOrder: any;
    public InventoryItem: any;
    public Inventory: any;
    public SalesOrderItem: any;

    constructor(public PharmacyService: PharmacyService) {

    }

    async ngOnInit() {
        this.PackType = await this.PharmacyService.GetPackTypes();
        this.SalesOrder = await this.PharmacyService.GetSalesOrders();
        this.InventoryItem = await this.PharmacyService.GetInventoryItems();
        this.Inventory = await this.PharmacyService.GetInventories();
        this.SalesOrderItem = await this.PharmacyService.GetSalesOrderItems();
    }

    async AddSalesOrderItem(value) {
        return await this.PharmacyService.AddSalesOrderItem(value);
    }

    async UpdateSalesOrderItem(value) {
        return await this.PharmacyService.UpdateSalesOrderItem(value.Key);
    }

    async DeleteSalesOrderItem(value) {
        return await this.PharmacyService.DeleteSalesOrderItem(value.Key.SalesOrderItemId);
    }
}
