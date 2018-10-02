import { Component, OnInit } from '@angular/core';
import { InventorysystemService } from '../../service/Inventorysystem.service';

@Component({
    selector: 'app-inventory-item-category',
    templateUrl: './inventory-item-category.component.html',
    styleUrls: ['./inventory-item-category.component.scss']
})
export class InventoryItemCategoryComponent implements OnInit {
    private ItemCategories : any;
    private UpdatedModel : any;

    constructor(private InventoryService : InventorysystemService) {

    }

    async ngOnInit() {
        this.ItemCategories = await this.InventoryService.GetInventoryItemCategories();
    }

    async AddItemCategory(value) {
        await this.InventoryService.AddInventoryItemCategory(value.data);
        this.ItemCategories = await this.InventoryService.GetInventoryItemCategories();
    }

    async UpdateItemCategory() {
        return await this.InventoryService.UpdateInventoryItemCategory(this.UpdatedModel);
    }

    UpdateModel(value) {
        this.UpdatedModel = {...value.oldData, ...value.newData};
    }

    async DeleteItemCategory(value) {
        return await this.InventoryService.DeleteInventoryItemCategory(value.key);
    }

}