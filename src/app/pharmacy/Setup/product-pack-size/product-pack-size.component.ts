import { Component, OnInit } from '@angular/core';
import { PharmacyService } from '../../../core';
import { PackSize } from '../../../core/Models/Pharmacy/PackSize';

@Component({
    selector: 'app-product-pack-size',
    templateUrl: './product-pack-size.component.html',
    styleUrls: ['./product-pack-size.component.scss']
})
export class ProductPackSizeComponent implements OnInit {
    private PackSizes : PackSize;
    private UpdatedModel : any;

    constructor(private PharmacyService : PharmacyService) {

    }

    ngOnInit() {
       this.PharmacyService.GetPackSizes().subscribe((res : PackSize) => this.PackSizes = res);
    }

    async AddPackSize(value) {
        await this.PharmacyService.AddPackSize(value.data).toPromise();
        this.PharmacyService.GetPackSizes().subscribe((res : PackSize) => this.PackSizes = res);
    }

    UpdateModel(value) {
        this.UpdatedModel = { ...value.oldData, ...value.newData };
    }

    async UpdatePackSize() {
        return await this.PharmacyService.UpdatePackSize(this.UpdatedModel).toPromise();
    }

    async DeletePackSize(value) {
        return await this.PharmacyService.DeletePackSize(value.key).toPromise();
    }

}