import { Component, OnInit } from '@angular/core';
import { InventorysystemService } from '../../service/Inventorysystem.service';



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
    
    constructor(private InventoryService : InventorysystemService) {

    }

    async ngOnInit() {
        this.InventoryItems = await this.InventoryService.GetInventoryItems();
        this.Brands = await this.InventoryService.GetBrands();
        this.Units = await this.InventoryService.GetUnits();
        this.PackTypes = await this.InventoryService.GetPackTypes();
        this.PackSizes = await this.InventoryService.GetPackSizes();
        this.PackCategories = await this.InventoryService.GetPackCategories();
        this.ProductTypes = await this.InventoryService.GetProductTypes();
        this.InventoryItemCategories = await this.InventoryService.GetInventoryItemCategories();
        this.PackageTypes = await this.InventoryService.GetPackageTypes();
    }

    async AddInventoryItem(value) {
        await this.InventoryService.AddInventoryItem(value.data);
        this.InventoryItems = await this.InventoryService.GetInventoryItems();
    }

    UpdateModel(value) {
        this.UpdatedModel = {...value.oldData, ...value.newData};
    }

    async UpdateInventoryItem() {
        return await this.InventoryService.UpdateInventoryItem(this.UpdatedModel);
    }

    async DeleteInventoryItem(value) {
        return await this.InventoryService.DeleteInventoryItem(value.key);
    }

}
