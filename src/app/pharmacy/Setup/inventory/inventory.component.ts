import { Component, OnInit, Input } from '@angular/core';
import { PharmacyService, AuthService } from '../../../core';
import { Inventory } from '../../../core/Models/Pharmacy/Inventory';
import { InventoryItem } from '../../../core/Models/Pharmacy/InventoryItem';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-inventory',
    templateUrl: './inventory.component.html',
    styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {

    public InventoryItems: InventoryItem;
    public Inventories: Inventory;
    public UpdatedModel: any;
    public UnassignedItems: any;
    public DataSource: any;

    constructor(public PharmacyService: PharmacyService, public Auth : AuthService) {
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
        this.PharmacyService.GetInventories().subscribe(res => {
            this.Inventories = res;
            // console.log(this.Inventories);
        });
        this.PharmacyService.GetInventoryItems().subscribe(res => {
            this.InventoryItems = res;
            this.CheckUnassignedItems();
        });
    }

    AddNewInventoryItem(NewItem: InventoryItem) {
        let a: any = this.InventoryItems;
        a.push(NewItem);
        this.InventoryItems = a;
        this.CheckUnassignedItems();
    }

    GetUpdatedInventoryItems(event) {
        console.log(event);
        console.log("Checking Event Emitter");
        this.PharmacyService.GetInventoryItems().subscribe(res => {
            this.InventoryItems = res;
            this.CheckUnassignedItems();
        });
    }

    UpdateModel(value) {
        this.UpdatedModel = { ...value.oldData, ...value.newData };
    }

    async AddInventory(value) {
        value.data.companyId = this.Auth.getUserCompanyId();
        await this.PharmacyService.AddInventory(value.data).toPromise();
        this.PharmacyService.GetInventories().subscribe(res => { this.Inventories = res; console.log(this.Inventories); });
        this.PharmacyService.GetInventoryItems().subscribe(res => {
            this.InventoryItems = res;
            this.CheckUnassignedItems();
        });
    }

    async UpdateInventory() {
        await this.PharmacyService.UpdateInventory(this.UpdatedModel).toPromise();
        this.CheckUnassignedItems();
    }

    async DeleteInventory(value) {
        await this.PharmacyService.DeleteInventory(value.key).toPromise();
        this.CheckUnassignedItems();
    }

    CheckUnassignedItems() {
        // this.PharmacyService.GetInventoryItems().subscribe(res => this.InventoryItems = res);
        // console.log(this.InventoryItems);
        this.DataSource = this.InventoryItems;
        var a: any = this.InventoryItems;
        // console.log(a);
        this.UnassignedItems = a.filter(a => a.inventory === null && a.inventoryId === null);
        // console.log(this.UnassignedItems);
    }
}
