import { Component, OnInit } from '@angular/core';
import { InventorysystemService, AuthService } from '../../../core';
import { PackCategory } from '../../../core/Models/Inventory/Setup/PackCategory';

@Component({
    selector: 'app-product-pack-category',
    templateUrl: './product-pack-category.component.html',
    styleUrls: ['./product-pack-category.component.scss']
})
export class ProductPackCategoryComponent implements OnInit {
    public PackCategories: any;
    public UpdatedModel: any;
    private CompanyId: number;

    constructor(public InventoryService: InventorysystemService, private AuthService: AuthService) {

    }

    ngOnInit() {
        this.CompanyId = this.AuthService.getUserCompanyId();
        
        this.InventoryService.GetPackCategoriesByCompany(this.CompanyId).subscribe((res: PackCategory) => {
            this.PackCategories = res;
        });
    }

    AddPackCategory(value) {
        value.data.companyId = this.CompanyId;
        this.InventoryService.AddPackCategory(value.data).subscribe(res => {
            this.InventoryService.GetPackCategoriesByCompany(this.CompanyId).subscribe((res: PackCategory) => {
                this.PackCategories = res;
            });
        });
    }

    UpdateModel(value) {
        value.companyId = this.CompanyId;
        this.UpdatedModel = { ...value.oldData, ...value.newData };
        //console.log(this.UpdatedModel);
    }

    UpdatePackCategory() {
        return this.InventoryService.UpdatePackCategory(this.UpdatedModel).subscribe();
    }

    DeletePackCategory(value) {
        return this.InventoryService.DeletePackCategory(value.key).subscribe();
    }

}