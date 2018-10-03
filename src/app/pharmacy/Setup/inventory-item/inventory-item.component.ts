import { Component, OnInit } from '@angular/core';
import { PharmacyService } from '../../../core';



@Component({
    selector: 'app-inventory-item',
    templateUrl: './inventory-item.component.html',
    styleUrls: ['./inventory-item.component.css']
})

export class InventoryItemComponent implements OnInit {
    private InventoryItems : any;
    private Brands : any;
    private Units : any;
    private PackTypes : any;
    private PackSizes : any;
    private PackCategories : any;
    private ProductTypes : any;
    private InventoryItemCategories : any;
    private PackageTypes : any;
    private UpdatedModel : any;
    
    constructor(private PharmacyService : PharmacyService) {

    }

    async ngOnInit() {
        this.InventoryItems = await this.PharmacyService.GetInventoryItems();
        this.Units = await this.PharmacyService.GetUnits();
        this.PackTypes = await this.PharmacyService.GetPackTypes();
        this.PackSizes = await this.PharmacyService.GetPackSizes();
        this.PackCategories = await this.PharmacyService.GetPackCategories();
        this.ProductTypes = await this.PharmacyService.GetProductTypes();
        this.InventoryItemCategories = await this.PharmacyService.GetInventoryItemCategories();
        this.PackageTypes = await this.PharmacyService.GetPackageTypes();
    }

    async AddInventoryItem(value) {
        await this.PharmacyService.AddInventoryItem(value.data);
        this.InventoryItems = await this.PharmacyService.GetInventoryItems();
    }

    UpdateModel(value) {
        this.UpdatedModel = {...value.oldData, ...value.newData};
    }

    async UpdateInventoryItem() {
        return await this.PharmacyService.UpdateInventoryItem(this.UpdatedModel);
    }

    async DeleteInventoryItem(value) {
        return await this.PharmacyService.DeleteInventoryItem(value.key);
    }

}
