import { Component, OnInit } from '@angular/core';
import { PharmacyService } from '../../../core';

@Component({
    selector: 'app-product-pack-category',
    templateUrl: './product-pack-category.component.html',
    styleUrls: ['./product-pack-category.component.scss']
})
export class ProductPackCategoryComponent implements OnInit {
    private PackCategories : any;
    private UpdatedModel : any;

    constructor(private PharmacyService : PharmacyService) {

    }

    async ngOnInit() {
        this.PackCategories = await this.PharmacyService.GetPackCategories();
    }

    async AddPackCategory(value) {
        await this.PharmacyService.AddPackCategory(value.data);
        this.PackCategories = await this.PharmacyService.GetPackCategories();
    }

    UpdateModel(value) {
        //console.log(value);
        this.UpdatedModel = { ...value.oldData, ...value.newData};
        //console.log(this.UpdatedModel);
    }

    async UpdatePackCategory() {
        return await this.PharmacyService.UpdatePackCategory(this.UpdatedModel);
    }

    async DeletePackCategory(value) {
        return await this.PharmacyService.DeletePackCategory(value.key);
    }

}