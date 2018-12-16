import { Component, OnInit } from '@angular/core';
import { InventorysystemService } from '../../../core';

@Component({
    selector: 'app-package-type',
    templateUrl: './package-type.component.html',
    styleUrls: ['./package-type.component.scss']
})
export class PackageTypeComponent implements OnInit {
    public PackageTypes: any;
    public UpdatedModel: any;

    constructor(public InventoryService: InventorysystemService) {

    }

    async ngOnInit() {
        this.PackageTypes = await this.InventoryService.GetPackageTypes();
    }

    async AddPackageType(value) {
        await this.InventoryService.AddPackageType(value.data);
        this.PackageTypes = await this.InventoryService.GetPackageTypes();
    }

    UpdateModel(value) {
        this.UpdatedModel = { ...value.oldData, ...value.newData };
    }

    async UpdatePackageType() {
        return await this.InventoryService.UpdatePackageType(this.UpdatedModel);
    }

    async DeletePackageType(value) {
        return await this.InventoryService.DeletePackageType(value.key);
    }

}