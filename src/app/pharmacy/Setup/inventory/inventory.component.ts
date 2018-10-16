import { Component, OnInit } from '@angular/core';
import { PharmacyService } from '../../../core';
import { Inventory } from '../../../core/Models/Pharmacy/Inventory';
import { InventoryItem } from '../../../core/Models/Pharmacy/InventoryItem';

@Component({
    selector: 'app-inventory',
    templateUrl: './inventory.component.html',
    styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {
    private InventoryItems: InventoryItem;
    private Inventories: Inventory;
    private UpdatedModel: any;
    private UnassignedItems: any;
    private DataSource: any;

    constructor(private PharmacyService: PharmacyService) {
        this.onPopupShown = this.onPopupShown.bind(this);
        this.onPopupHide = this.onPopupHide.bind(this);
    }

    async onPopupShown() {
        this.CheckUnassignedItems();
        this.DataSource = this.UnassignedItems;
    }

    async onPopupHide() {
        this.DataSource = this.InventoryItems;
        //await this.CheckUnassignedItems();
    }


    ngOnInit() {
        this.PharmacyService.GetInventories().subscribe(res => this.Inventories = res);
        this.CheckUnassignedItems();
    }

    UpdateModel(value) {
        this.UpdatedModel = { ...value.oldData, ...value.newData };
    }

    async AddInventory(value) {
        await this.PharmacyService.AddInventory(value.data).toPromise();
        this.PharmacyService.GetInventoryItems().subscribe(res => this.InventoryItems = res);
        this.CheckUnassignedItems();
    }

    async UpdateInventory(value) {
        await this.PharmacyService.UpdateInventory(this.UpdatedModel).toPromise();
        this.CheckUnassignedItems();
    }

    async DeleteInventory(value) {
        await this.PharmacyService.DeleteInventory(value.key).toPromise();
        this.CheckUnassignedItems();
    }

    CheckUnassignedItems() {
        this.PharmacyService.GetInventoryItems().subscribe(res => this.InventoryItems = res);
        console.log(this.InventoryItems);
        this.DataSource = this.InventoryItems;
        var a: any = this.InventoryItems;
        console.log(a);
        this.UnassignedItems = a.filter(a => a.inventory === null);
        console.log(this.UnassignedItems);
    }
}
