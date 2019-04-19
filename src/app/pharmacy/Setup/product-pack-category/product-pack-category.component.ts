import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { PharmacyService, AuthService } from '../../../core';
import { PackCategory } from '../../../core/Models/Pharmacy/PackCategory';
import { InventoryItemComponent } from '../inventory-item/inventory-item.component';

@Component({
    selector: 'app-product-pack-category',
    templateUrl: './product-pack-category.component.html',
    styleUrls: ['./product-pack-category.component.scss']
})
export class ProductPackCategoryComponent implements OnInit {

    @Output() UpdatePackCategoryInInventoryItemComponent = new EventEmitter<any>();

    public PackCategories: PackCategory;
    public UpdatedModel: any;

    constructor(public PharmacyService: PharmacyService, public Auth : AuthService) {

    }

    ngOnInit() {
        this.PharmacyService.GetPackCategories().subscribe((res: PackCategory) => this.PackCategories = res);
    }

    async AddPackCategory(value) {
        value.data.companyId = this.Auth.getUserCompanyId();
        await this.PharmacyService.AddPackCategory(value.data).toPromise();
        this.PharmacyService.GetPackCategories().subscribe((res: PackCategory) => {
            this.PackCategories = res;
            this.UpdatePackCategoryInInventoryItemComponent.emit(this.PackCategories);
        });
    }

    UpdateModel(value) {
         this.UpdatedModel = { ...value.oldData, ...value.newData };
     }

    async UpdatePackCategory() {
        return await this.PharmacyService.UpdatePackCategory(this.UpdatedModel).toPromise();
    }

    async DeletePackCategory(value) {
        return await this.PharmacyService.DeletePackCategory(value.key).toPromise();
    }

}