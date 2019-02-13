import { Component, OnInit, EventEmitter, Output, ViewChild } from '@angular/core';
import { PharmacyService, AuthService } from '../../../core';
import { InventoryItem } from '../../../core/Models/Pharmacy/InventoryItem';
import { Unit } from '../../../core/Models/Pharmacy/Unit';
import { PackType } from '../../../core/Models/Pharmacy/PackType';
import { PackSize } from '../../../core/Models/Pharmacy/PackSize';
import { PackCategory } from '../../../core/Models/Pharmacy/PackCategory';
import { ProductType } from '../../../core/Models/Pharmacy/ProductType';
import { InventoryItemCategory } from '../../../core/Models/Pharmacy/InventoryItemCategory';
import { PackageType } from '../../../core/Models/Pharmacy/PackageType';
import { Observable } from 'rxjs';
import { InventoryComponent } from '../inventory/inventory.component';



@Component({
    selector: 'app-inventory-item',
    templateUrl: './inventory-item.component.html',
    styleUrls: ['./inventory-item.component.css']
})

export class InventoryItemComponent implements OnInit {

    @ViewChild(InventoryComponent) InventoryComponent: InventoryComponent;

    public InventoryItems: InventoryItem;
    public Units: Unit;
    public PackTypes: PackType;
    public PackSizes: PackSize;
    public PackCategories: PackCategory;
    public ProductTypes: ProductType;
    public InventoryItemCategories: InventoryItemCategory;
    public PackageTypes: PackageType;
    public UpdatedModel: InventoryItem;

    constructor(public PharmacyService: PharmacyService, public Auth: AuthService) {

    }

    ngOnInit() {
        this.PharmacyService.GetInventoryItems().subscribe((res: InventoryItem) => this.InventoryItems = res);
        this.PharmacyService.GetUnits().subscribe((res: Unit) => this.Units = res);
        this.PharmacyService.GetPackTypes().subscribe((res: PackType) => this.PackTypes = res);
        this.PharmacyService.GetPackSizes().subscribe((res: PackSize) => this.PackSizes = res);
        this.PharmacyService.GetPackCategories().subscribe((res: PackCategory) => this.PackCategories = res);
        this.PharmacyService.GetProductTypes().subscribe((res: ProductType) => this.ProductTypes = res);
        this.PharmacyService.GetInventoryItemCategories().subscribe((res: InventoryItemCategory) => this.InventoryItemCategories = res);
        this.PharmacyService.GetPackageTypes().subscribe((res: PackageType) => this.PackageTypes = res);
    }

    async AddInventoryItem(value) {
        value.data.companyId = this.Auth.getUserCompanyId();
        let a: any = await this.PharmacyService.AddInventoryItem(value.data).toPromise();
        this.PharmacyService.GetInventoryItems().subscribe((res: InventoryItem) => {
            this.InventoryItems = res;
            let b: any = res;
            this.InventoryComponent.AddNewInventoryItem(b.find(c => c.inventoryItemId === a.itemID));
        });
    }

    UpdateUnitInInventoryItemComponent(NewUnits) {
        this.Units = NewUnits;
    }

    UpdatePackTypeInInventoryItemComponent(NewPackTypes) {
        this.PackTypes = NewPackTypes;
    }

    UpdatePackSizeInInventoryItemComponent(NewPackSizes) {
        this.PackSizes = NewPackSizes;
    }

    UpdatePackCategoryInInventoryItemComponent(NewPackCategories) {
        this.PackCategories = NewPackCategories;
    }

    UpdateProductTypeInInventoryItemComponent(NewProductTypes) {
        this.ProductTypes = NewProductTypes;
    }

    UpdateInventoryItemCategoryInInventoryItemComponent(NewInventoryItemCategories) {
        this.InventoryItemCategories = NewInventoryItemCategories;
    }

    UpdatePackageTypeInInventoryItemComponent(NewPackageTypes) {
        this.PackageTypes = NewPackageTypes;
    }

    UpdateModel(value) {
        this.UpdatedModel = { ...value.oldData, ...value.newData };
    }

    async UpdateInventoryItem() {
        return await this.PharmacyService.UpdateInventoryItem(this.UpdatedModel).toPromise();
    }

    async DeleteInventoryItem(value) {
        return await this.PharmacyService.DeleteInventoryItem(value.key).toPromise();
    }

}
