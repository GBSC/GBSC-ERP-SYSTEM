import { Component, OnInit } from '@angular/core';
import { InventorysystemService, AuthService } from '../../../core';
import { ProductType } from '../../../core/Models/Inventory/Setup/ProductType';

@Component({
    selector: 'app-product-type',
    templateUrl: './product-type.component.html',
    styleUrls: ['./product-type.component.scss']
})
export class ProductTypeComponent implements OnInit {
    public ProductTypes: any;
    public UpdatedModel: any;
    public CompanyId: number;

    constructor(public InventoryService: InventorysystemService, public AuthService: AuthService) {

    }

    ngOnInit() {
        this.CompanyId = this.AuthService.getUserCompanyId();

        this.InventoryService.GetProductTypesByCompany(this.CompanyId).subscribe((res: ProductType) => {
            this.ProductTypes = res;
        });
    }

    AddProductType(value) {
        value.data.companyId = this.CompanyId;
        this.InventoryService.AddProductType(value.data).subscribe(res => {
            this.InventoryService.GetProductTypesByCompany(this.CompanyId).subscribe((res: ProductType) => {
                this.ProductTypes = res;
            });
        });
    }

    UpdateModel(value) {
        value.companyId = this.CompanyId;
        this.UpdatedModel = { ...value.oldData, ...value.newData };
    }

    UpdateProductType() {
        return this.InventoryService.UpdateProductType(this.UpdatedModel).subscribe();
    }

    DeleteProductType(value) {
        return this.InventoryService.DeleteProductType(value.key).subscribe();
    }

}
