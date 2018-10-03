import { Component, OnInit } from '@angular/core';
import { PharmacyService } from '../../../core';

@Component({
    selector: 'app-product-pack-size',
    templateUrl: './product-pack-size.component.html',
    styleUrls: ['./product-pack-size.component.scss']
})
export class ProductPackSizeComponent implements OnInit {
    private PackSizes : any;
    private UpdatedModel : any;

    constructor(private PharmacyService : PharmacyService) {

    }

    async ngOnInit() {
       this.PackSizes = await this.PharmacyService.GetPackSizes();
    }

    async AddPackSize(value) {
        await this.PharmacyService.AddPackSize(value.data);
        this.PackSizes = await this.PharmacyService.GetPackSizes();
    }

    UpdateModel(value) {
        this.UpdatedModel = { ...value.oldData, ...value.newData };
    }

    async UpdatePackSize() {
        return await this.PharmacyService.UpdatePackSize(this.UpdatedModel);
    }

    async DeletePackSize(value) {
        return await this.PharmacyService.DeletePackSize(value.key);
    }

}