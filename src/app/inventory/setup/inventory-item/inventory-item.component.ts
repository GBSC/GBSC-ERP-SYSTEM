import { Component, OnInit } from '@angular/core';
import { InventorysystemService, AuthService } from '../../../core';
import { InventoryItem } from '../../../core/Models/Inventory/Setup/InventoryItem';
import { Brand } from '../../../core/Models/Inventory/Setup/Brand';
import { Unit } from '../../../core/Models/Inventory/Setup/Unit';
import { PackType } from '../../../core/Models/Inventory/Setup/PackType';
import { PackSize } from '../../../core/Models/Inventory/Setup/PackSize';
import { PackCategory } from '../../../core/Models/Inventory/Setup/PackCategory';
import { ProductType } from '../../../core/Models/Inventory/Setup/ProductType';
import { InventoryItemCategory } from '../../../core/Models/Inventory/Setup/InventoryItemCategory';
import { PackageType } from '../../../core/Models/Inventory/Setup/PackageType';



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
    private CompanyId: number;

    constructor(public InventoryService: InventorysystemService, private AuthService: AuthService) {

    }

    ngOnInit() {
        this.CompanyId = this.AuthService.getUserCompanyId();
        
        this.InventoryService.GetInventoryItemsByCompany(this.CompanyId).subscribe((res: InventoryItem) => {
            this.InventoryItems = res;
        });
        this.InventoryService.GetBrandsByCompany(this.CompanyId).subscribe((res: Brand) => {
            this.Brands = res;
        });
        this.InventoryService.GetUnitsByCompany(this.CompanyId).subscribe((res: Unit) => {
            this.Units = res;
        });
        this.InventoryService.GetPackTypesByCompany(this.CompanyId).subscribe((res: PackType) => {
            this.PackTypes = res;
        });
        this.InventoryService.GetPackSizesByCompany(this.CompanyId).subscribe((res: PackSize) => {
            this.PackSizes = res;
        });
        this.InventoryService.GetPackCategoriesByCompany(this.CompanyId).subscribe((res: PackCategory) => {
            this.PackCategories = res;
        });
        this.InventoryService.GetProductTypesByCompany(this.CompanyId).subscribe((res: ProductType) => {
            this.ProductTypes = res;
        });
        this.InventoryService.GetInventoryItemCategoriesByCompany(this.CompanyId).subscribe((res: InventoryItemCategory) => {
            this.InventoryItemCategories = res;
        });
        this.InventoryService.GetPackageTypesByCompany(this.CompanyId).subscribe((res: PackageType) => {
            this.PackageTypes = res;
        });
    }

    AddInventoryItem(value) {
        value.data.companyId = this.CompanyId;
        this.InventoryService.AddInventoryItem(value.data).subscribe();
        this.InventoryService.GetInventoryItemsByCompany(this.CompanyId).subscribe((res: InventoryItem) => {
            this.InventoryItems = res;
        });
    }

    UpdateModel(value) {
        value.companyId = this.CompanyId;
        this.UpdatedModel = { ...value.oldData, ...value.newData };
    }

    UpdateInventoryItem() {
        return this.InventoryService.UpdateInventoryItem(this.UpdatedModel).subscribe();
    }

    DeleteInventoryItem(value) {
        return this.InventoryService.DeleteInventoryItem(value.key).subscribe();
    }

}
