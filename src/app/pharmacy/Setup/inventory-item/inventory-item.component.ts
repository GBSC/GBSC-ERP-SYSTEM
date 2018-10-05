import { Component, OnInit } from '@angular/core';
import { PharmacyService } from '../../../core';
import { InventoryItem } from '../../../core/Models/Pharmacy/InventoryItem';
import { Unit } from '../../../core/Models/Pharmacy/Unit';
import { PackType } from '../../../core/Models/Pharmacy/PackType';
import { PackSize } from '../../../core/Models/Pharmacy/PackSize';
import { PackCategory } from '../../../core/Models/Pharmacy/PackCategory';
import { ProductType } from '../../../core/Models/Pharmacy/ProductType';
import { InventoryItemCategory } from '../../../core/Models/Pharmacy/InventoryItemCategory';
import { PackageType } from '../../../core/Models/Pharmacy/PackageType';



@Component({
    selector: 'app-inventory-item',
    templateUrl: './inventory-item.component.html',
    styleUrls: ['./inventory-item.component.css']
})

export class InventoryItemComponent implements OnInit {
    private InventoryItems : InventoryItem;
    private Units : Unit;
    private PackTypes : PackType;
    private PackSizes : PackSize;
    private PackCategories : PackCategory;
    private ProductTypes : ProductType;
    private InventoryItemCategories : InventoryItemCategory;
    private PackageTypes : PackageType;
    private UpdatedModel : InventoryItem;
    
    constructor(private PharmacyService : PharmacyService) {

    }

    ngOnInit() {
        this.PharmacyService.GetInventoryItems().subscribe((res : InventoryItem) => { this.InventoryItems = res; console.log("InventoryItems = ", this.InventoryItems); console.log("Subscription Results = ", res); });
        this.PharmacyService.GetUnits().subscribe((res : Unit) => this.Units = res);
        this.PharmacyService.GetPackTypes().subscribe((res : PackType) => this.PackTypes = res);
        this.PharmacyService.GetPackSizes().subscribe((res : PackSize) => this.PackSizes = res);
        this.PharmacyService.GetPackCategories().subscribe((res : PackCategory) => this.PackCategories = res);
        this.PharmacyService.GetProductTypes().subscribe((res : ProductType) => this.ProductTypes = res);
        this.PharmacyService.GetInventoryItemCategories().subscribe((res : InventoryItemCategory) => this.InventoryItemCategories = res);
        this.PharmacyService.GetPackageTypes().subscribe((res : PackageType) => this.PackageTypes = res);
        console.log("InventoryItems", this.InventoryItems);
        console.log("Units", this.Units);
        console.log("PackTypes", this.PackTypes);
        console.log("PackSizes", this.PackSizes);
        console.log("PackCategories", this.PackCategories);
        console.log("ProductTypes", this.ProductTypes);
        console.log("InventoryItemCategories", this.InventoryItemCategories);
        console.log("PackageTypes", this.PackageTypes);
    }

    async AddInventoryItem(value) {
        await this.PharmacyService.AddInventoryItem(value.data).toPromise();
        this.PharmacyService.GetInventoryItems().subscribe((res : InventoryItem) => this.InventoryItems = res);
    }

    UpdateModel(value) {
        this.UpdatedModel = {...value.oldData, ...value.newData};
    }

    async UpdateInventoryItem() {
        return await this.PharmacyService.UpdateInventoryItem(this.UpdatedModel).toPromise();
    }

    async DeleteInventoryItem(value) {
        return await this.PharmacyService.DeleteInventoryItem(value.key).toPromise();
    }

}
