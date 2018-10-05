import { Component, OnInit } from '@angular/core';
import { PharmacyService } from '../../../core';
import { PackCategory } from '../../../core/Models/Pharmacy/PackCategory';

@Component({
    selector: 'app-product-pack-category',
    templateUrl: './product-pack-category.component.html',
    styleUrls: ['./product-pack-category.component.scss']
})
export class ProductPackCategoryComponent implements OnInit {
    private PackCategories : PackCategory;
    private UpdatedModel : any;

    constructor(private PharmacyService : PharmacyService) {

    }

    ngOnInit() {
        this.PharmacyService.GetPackCategories().subscribe((res : PackCategory) => this.PackCategories =  res);
    }

    async AddPackCategory(value) {
        await this.PharmacyService.AddPackCategory(value.data).toPromise();
        this.PharmacyService.GetPackCategories().subscribe((res : PackCategory) => this.PackCategories =  res);
    }

    UpdateModel(value) {
        //console.log(value);
        this.UpdatedModel = { ...value.oldData, ...value.newData};
        //console.log(this.UpdatedModel);
    }

    async UpdatePackCategory() {
        return await this.PharmacyService.UpdatePackCategory(this.UpdatedModel).toPromise();
    }

    async DeletePackCategory(value) {
        return await this.PharmacyService.DeletePackCategory(value.key).toPromise();
    }

}