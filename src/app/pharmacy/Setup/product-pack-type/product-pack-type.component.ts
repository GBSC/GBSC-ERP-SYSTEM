import { Component, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';
import { PharmacyService } from '../../../core';
import { PackType } from '../../../core/Models/Pharmacy/PackType';
import { InventoryItemComponent } from '../inventory-item/inventory-item.component';

@Component({
    selector: 'app-product-pack-type',
    templateUrl: './product-pack-type.component.html',
    styleUrls: ['./product-pack-type.component.scss']
})
export class ProductPackTypeComponent implements OnInit {

    @Output() UpdatePackTypeInInventoryItemComponent = new EventEmitter<any>();
<<<<<<< HEAD

    private PackTypes: PackType;
    private UpdatedModel: any;
=======
>>>>>>> 989fc8cb58daeccd112ddd1a19627eb3494c5d9d

    public PackTypes: PackType;
    public UpdatedModel: any;

    constructor(public PharmacyService: PharmacyService) {

    }

    ngOnInit() {
        this.PharmacyService.GetPackTypes().subscribe((res: PackType) => this.PackTypes = res);
    }

    async AddPackType(value) {
        await this.PharmacyService.AddPackType(value.data).toPromise();
        this.PharmacyService.GetPackTypes().subscribe((res: PackType) => {
            this.PackTypes = res;
            this.UpdatePackTypeInInventoryItemComponent.emit(this.PackTypes);
        });
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