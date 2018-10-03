import { Component, OnInit } from '@angular/core';
import { InventorysystemService } from '../../service/Inventorysystem.service';

@Component({
    selector: 'app-product-pack-category',
    templateUrl: './product-pack-category.component.html',
    styleUrls: ['./product-pack-category.component.scss']
})
export class ProductPackCategoryComponent implements OnInit {
    private PackCategories : any;
    private UpdatedModel : any;

    constructor(private InventoryService : InventorysystemService) {

    }

    async ngOnInit() {
        this.PackCategories = await this.InventoryService.GetPackCategories();
    }

    async AddPackCategory(value) {
        await this.InventoryService.AddPackCategory(value.data);
        this.PackCategories = await this.InventoryService.GetPackCategories();
    }

    UpdateModel(value) {
        //console.log(value);
        this.UpdatedModel = { ...value.oldData, ...value.newData};
        //console.log(this.UpdatedModel);
    }

    async UpdatePackCategory() {
        return await this.InventoryService.UpdatePackCategory(this.UpdatedModel);
    }

    async DeletePackCategory(value) {
        return await this.InventoryService.DeletePackCategory(value.key);
    }

}