import { Component, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';
import { PharmacyService } from '../../../core';
import { PackageType } from '../../../core/Models/Pharmacy/PackageType';
import { InventoryItemComponent } from '../inventory-item/inventory-item.component';

@Component({
    selector: 'app-package-type',
    templateUrl: './package-type.component.html',
    styleUrls: ['./package-type.component.scss']
})
export class PackageTypeComponent implements OnInit {

    @Output() UpdatePackageTypeInInventoryItemComponent = new EventEmitter<any>();

    private PackageTypes: PackageType;
    private UpdatedModel: any;

    constructor(private PharmacyService: PharmacyService) {

    }

    ngOnInit() {
        this.PharmacyService.GetPackageTypes().subscribe((res: PackageType) => this.PackageTypes = res);
    }

    async AddPackageType(value) {
        await this.PharmacyService.AddPackageType(value.data).toPromise();
        this.PharmacyService.GetPackageTypes().subscribe((res: PackageType) => {
            this.PackageTypes = res;
            this.UpdatePackageTypeInInventoryItemComponent.emit(this.PackageTypes);
        });
    }

    UpdateModel(value) {
        this.UpdatedModel = { ...value.oldData, ...value.newData };
    }

    async UpdatePackageType() {
        return await this.PharmacyService.UpdatePackageType(this.UpdatedModel).toPromise();
    }

    async DeletePackageType(value) {
        return await this.PharmacyService.DeletePackageType(value.key).toPromise();
    }

}