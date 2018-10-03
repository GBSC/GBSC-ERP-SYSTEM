import { Component, OnInit } from '@angular/core';
import { PharmacyService } from '../../../core';

@Component({
    selector: 'app-product-pack-type',
    templateUrl: './product-pack-type.component.html',
    styleUrls: ['./product-pack-type.component.scss']
})
export class ProductPackTypeComponent implements OnInit {
    private PackTypes : any;
    private UpdatedModel : any;

    constructor(private PharmacyService : PharmacyService) {

    }

    async ngOnInit() {
       this.PackTypes = await this.PharmacyService.GetPackTypes();
    }

    async AddPackType(value) {
        await this.PharmacyService.AddPackType(value.data);
        this.PackTypes = await this.PharmacyService.GetPackTypes();
    }

    UpdateModel(value) {
        this.UpdatedModel = { ...value.oldData, ...value.newData };
    }

    async UpdatePackType() {
        return await this.PharmacyService.UpdatePackType(this.UpdatedModel);
    }

    async DeletePackType(value) {
        return await this.PharmacyService.DeletePackType(value.key);
    }
}