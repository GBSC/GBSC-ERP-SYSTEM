import { Component, OnInit } from '@angular/core';
import { PharmacyService } from '../../../core';
import { PackType } from '../../../core/Models/Pharmacy/PackType';

@Component({
    selector: 'app-product-pack-type',
    templateUrl: './product-pack-type.component.html',
    styleUrls: ['./product-pack-type.component.scss']
})
export class ProductPackTypeComponent implements OnInit {
    private PackTypes : PackType;
    private UpdatedModel : any;

    constructor(private PharmacyService : PharmacyService) {

    }

    ngOnInit() {
       this.PharmacyService.GetPackTypes().subscribe((res : PackType) => this.PackTypes = res);
    }

    async AddPackType(value) {
        await this.PharmacyService.AddPackType(value.data).toPromise();
        this.PharmacyService.GetPackTypes().subscribe((res : PackType) => this.PackTypes = res);
    }

    UpdateModel(value) {
        this.UpdatedModel = { ...value.oldData, ...value.newData };
    }

    async UpdatePackType() {
        return await this.PharmacyService.UpdatePackType(this.UpdatedModel).toPromise();
    }

    async DeletePackType(value) {
        return await this.PharmacyService.DeletePackType(value.key).toPromise();
    }
}