import { Component, OnInit } from '@angular/core';
import { PharmacyService } from '../../core/Services/Pharmacy/pharmacy.service';



@Component({
    selector: 'app-inventory-item',
    templateUrl: './inventory-item.component.html',
    styleUrls: ['./inventory-item.component.css']
})
export class InventoryItemComponent implements OnInit {
    public unit: any;
    public category: any;
    public inventryitem: any;


    constructor(public InventorysystemServiceobj: PharmacyService) {

    }

    async ngOnInit() {
        
        this.unit = await this.InventorysystemServiceobj.GetUnits();
        console.log(this.unit);

        this.category = await this.InventorysystemServiceobj.GetInventoryItemCategories();
        console.log(this.category);

        this.inventryitem = await this.InventorysystemServiceobj.GetInventoryItems();
        console.log(this.inventryitem);

    }


    async AddInventryItem(value) {
        console.log(value.Key);
        await this.InventorysystemServiceobj.AddInventoryItem(value.key);
    }

    async UpdateInventoryItem(value) {

        console.log(value.key);
        await this.InventorysystemServiceobj.UpdateInventoryItem(value.key)
    }

    async DeleteInventoryItem(value) {
        console.log(value.key.InventoryItemId);
        await this.InventorysystemServiceobj.DeleteInventoryItem(value.key.inventoryItemId);
    }

}
