import { Component, OnInit } from '@angular/core';
import { InventorysystemService } from '../../../core';



@Component({
    selector: 'app-inventory-item',
    templateUrl: './inventory-item.component.html',
    styleUrls: ['./inventory-item.component.css']
})

export class InventoryItemComponent implements OnInit {
    public InventoryItems: any;
    public Brands: any;
    public Units: any;
    public PackTypes: any;
    public PackSizes: any;
    public PackCategories: any;
    public ProductTypes: any;
    public InventoryItemCategories: any;
    public PackageTypes: any;
    public UpdatedModel: any;

    constructor(public InventoryService: InventorysystemService) {

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
        this.UpdatedModel = { ...value.oldData, ...value.newData };
    }

    async UpdateInventoryItem() {
        return await this.InventoryService.UpdateInventoryItem(this.UpdatedModel);
    }

    async DeleteInventoryItem(value) {
        return await this.InventoryService.DeleteInventoryItem(value.key);
    }

}
