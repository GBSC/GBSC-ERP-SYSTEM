import { Component, OnInit } from '@angular/core';
import { InventorysystemService } from '../../../core';

@Component({
    selector: 'app-product-type',
    templateUrl: './product-type.component.html',
    styleUrls: ['./product-type.component.scss']
})
export class ProductTypeComponent implements OnInit {
    public ProductTypes: any;
    public UpdatedModel: any;

    constructor(public InventoryService: InventorysystemService) {

    }

    async ngOnInit() {
        this.ProductTypes = await this.InventoryService.GetProductTypes();
    }

    async AddProductType(value) {
        await this.InventoryService.AddProductType(value.data);
        this.ProductTypes = await this.InventoryService.GetProductTypes();
    }

    UpdateModel(value) {
        this.UpdatedModel = { ...value.oldData, ...value.newData };
    }

    async UpdateProductType() {
        return await this.InventoryService.UpdateProductType(this.UpdatedModel);
    }

    async DeleteProductType(value) {
        return await this.InventoryService.DeleteProductType(value.key);
    }

}
