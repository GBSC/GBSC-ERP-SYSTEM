import { Component, OnInit } from '@angular/core';
import { InventorysystemService } from '../../service/Inventorysystem.service';

@Component({
    selector: 'app-inventory',
    templateUrl: './inventory.component.html',
    styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {
    private InventoryItems: any;
    private Inventories: any;
    private UpdatedModel : any;
    private UnassignedItems : any;
    private DataSource : any;

    constructor(private InventoryService: InventorysystemService) {
        this.onPopupShown = this.onPopupShown.bind(this);
        this.onPopupHide = this.onPopupHide.bind(this);
    }

    async onPopupShown() {
        await this.CheckUnassignedItems();
        this.DataSource = this.UnassignedItems;
    }

    async onPopupHide() {
        this.DataSource = this.InventoryItems;
        //await this.CheckUnassignedItems();
    }


    async ngOnInit() {
        this.Inventories = await this.InventoryService.GetInventories();
        console.log(this.Inventories);
        await this.CheckUnassignedItems();
    }

    UpdateModel(value) {
        this.UpdatedModel = {...value.oldData, ...value.newData};
    }

    async AddInventory(value) {
        await this.InventoryService.AddInventory(value.data);
        this.InventoryItems = await this.InventoryService.GetInventoryItems();
        await this.CheckUnassignedItems();
    }

    async UpdateInventory(value) {
        await this.InventoryService.UpdateInventory(this.UpdatedModel);
        await this.CheckUnassignedItems();
    }

    async DeleteInventory(value) {
        await this.InventoryService.DeleteInventory(value.key);
        await this.CheckUnassignedItems();
    }

    async CheckUnassignedItems() {
        this.InventoryItems = await this.InventoryService.GetInventoryItems();
        console.log(this.InventoryItems);
        this.DataSource = this.InventoryItems;
        this.UnassignedItems = this.InventoryItems.filter(a => a.inventory === null);
        console.log(this.UnassignedItems);
    }
}
