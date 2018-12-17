import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { PharmacyService } from '../../../core';
import { ProductType } from '../../../core/Models/Pharmacy/ProductType';
import { InventoryItemComponent } from '../inventory-item/inventory-item.component';

@Component({
    selector: 'app-product-type',
    templateUrl: './product-type.component.html',
    styleUrls: ['./product-type.component.scss']
})
export class ProductTypeComponent implements OnInit {

    // @ViewChild(InventoryItemComponent) InventoryItemComponent : InventoryItemComponent;

    @Output() UpdateProductTypeInInventoryItemComponent = new EventEmitter<any>()

    public ProductTypes: ProductType;
    public UpdatedModel: any;

    constructor(public PharmacyService: PharmacyService) {

    }

    ngOnInit() {
        this.PharmacyService.GetProductTypes().subscribe((res: ProductType) => this.ProductTypes = res);
    }

    async AddProductType(value) {
        await this.PharmacyService.AddProductType(value.data).toPromise();
        this.PharmacyService.GetProductTypes().subscribe((res: ProductType) => {
            this.ProductTypes = res;
            this.UpdateProductTypeInInventoryItemComponent.emit(this.ProductTypes);
        });
    }

    UpdateModel(value) {
        this.UpdatedModel = { ...value.oldData, ...value.newData };
    }

    async UpdateProductType() {
        return await this.PharmacyService.UpdateProductType(this.UpdatedModel).toPromise();
    }

    async DeleteProductType(value) {
        return await this.PharmacyService.DeleteProductType(value.key).toPromise();
    }

}
