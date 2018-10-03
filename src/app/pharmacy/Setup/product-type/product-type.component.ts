import { Component, OnInit } from '@angular/core';
import { PharmacyService } from '../../../core';

@Component({
    selector: 'app-product-type',
    templateUrl: './product-type.component.html',
    styleUrls: ['./product-type.component.scss']
})
export class ProductTypeComponent implements OnInit {
    private ProductTypes: any;
    private UpdatedModel : any;
    
    constructor(private PharmacyService: PharmacyService) {

    }

    async ngOnInit() {
        this.ProductTypes = await this.PharmacyService.GetProductTypes();
    }

    async AddProductType(value) {
        await this.PharmacyService.AddProductType(value.data);
        this.ProductTypes = await this.PharmacyService.GetProductTypes();
    }

    UpdateModel(value) {
        this.UpdatedModel = {...value.oldData, ...value.newData};
    }

    async UpdateProductType() {
        return await this.PharmacyService.UpdateProductType(this.UpdatedModel);
    }

    async DeleteProductType(value) {
        return await this.PharmacyService.DeleteProductType(value.key);
    }

}
