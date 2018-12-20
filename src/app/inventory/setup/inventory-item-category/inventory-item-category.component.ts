import { Component, OnInit } from '@angular/core';
import { InventorysystemService, AuthService } from '../../../core';
import { InventoryItemCategory } from '../../../core/Models/Inventory/Setup/InventoryItemCategory';

@Component({
    selector: 'app-inventory-item-category',
    templateUrl: './inventory-item-category.component.html',
    styleUrls: ['./inventory-item-category.component.scss']
})
export class InventoryItemCategoryComponent implements OnInit {
    public ItemCategories: any;
    public UpdatedModel: any;
    private CompanyId: number;

    constructor(public InventoryService: InventorysystemService, private AuthService: AuthService) {

    }

    ngOnInit() {
        this.AuthService.getUserCompanyId().subscribe((res: number) => {
            this.CompanyId = res;
        });
        this.InventoryService.GetInventoryItemCategoriesByCompany(this.CompanyId).subscribe((res: InventoryItemCategory) => {
            this.ItemCategories = res;
        });
    }

    AddItemCategory(value) {
        this.InventoryService.AddInventoryItemCategory(value.data).subscribe(res => {
            this.InventoryService.GetInventoryItemCategoriesByCompany(this.CompanyId).subscribe((res: InventoryItemCategory) => {
                this.ItemCategories = res;
            });
        });
    }

    UpdateItemCategory() {
        return this.InventoryService.UpdateInventoryItemCategory(this.UpdatedModel).subscribe();
    }

    UpdateModel(value) {
        this.UpdatedModel = { ...value.oldData, ...value.newData };
    }

    DeleteItemCategory(value) {
        return this.InventoryService.DeleteInventoryItemCategory(value.key).subscribe();
    }

}