import { Component, OnInit } from '@angular/core';
import { PharmacyService } from '../../../core';

@Component({
    selector: 'app-inventory-item-category',
    templateUrl: './inventory-item-category.component.html',
    styleUrls: ['./inventory-item-category.component.scss']
})
export class InventoryItemCategoryComponent implements OnInit {
    private ItemCategories : any;
    private UpdatedModel : any;

    constructor(private PharmacyService : PharmacyService) {

    }

    async ngOnInit() {
        this.ItemCategories = await this.PharmacyService.GetInventoryItemCategories();
    }

    async AddItemCategory(value) {
        await this.PharmacyService.AddInventoryItemCategory(value.data);
        this.ItemCategories = await this.PharmacyService.GetInventoryItemCategories();
    }

    async UpdateItemCategory() {
        return await this.PharmacyService.UpdateInventoryItemCategory(this.UpdatedModel);
    }

    UpdateModel(value) {
        this.UpdatedModel = {...value.oldData, ...value.newData};
    }

    async DeleteItemCategory(value) {
        return await this.PharmacyService.DeleteInventoryItemCategory(value.key);
    }

}