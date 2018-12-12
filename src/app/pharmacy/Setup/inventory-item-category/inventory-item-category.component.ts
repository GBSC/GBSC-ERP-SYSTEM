import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { PharmacyService } from '../../../core';
import { InventoryItemCategory } from '../../../core/Models/Pharmacy/InventoryItemCategory';
import { InventoryItemComponent } from '../inventory-item/inventory-item.component';

@Component({
    selector: 'app-inventory-item-category',
    templateUrl: './inventory-item-category.component.html',
    styleUrls: ['./inventory-item-category.component.scss']
})
export class InventoryItemCategoryComponent implements OnInit {

    @Output() UpdateInventoryItemCategoryInInventoryItemComponent = new EventEmitter<any>();

    private ItemCategories: InventoryItemCategory;
    private UpdatedModel: any;

    constructor(private PharmacyService: PharmacyService) {

    }

    ngOnInit() {
        this.PharmacyService.GetInventoryItemCategories().subscribe((res: InventoryItemCategory) => this.ItemCategories = res);
    }

    async AddItemCategory(value) {
        await this.PharmacyService.AddInventoryItemCategory(value.data).toPromise();
        this.PharmacyService.GetInventoryItemCategories().subscribe((res: InventoryItemCategory) => {
            this.ItemCategories = res;
            this.UpdateInventoryItemCategoryInInventoryItemComponent.emit(this.ItemCategories);
        });
    }

    async UpdateItemCategory() {
        return await this.PharmacyService.UpdateInventoryItemCategory(this.UpdatedModel).toPromise();
    }

    UpdateModel(value) {
        this.UpdatedModel = { ...value.oldData, ...value.newData };
    }

    async DeleteItemCategory(value) {
        return await this.PharmacyService.DeleteInventoryItemCategory(value.key).toPromise();
    }

}