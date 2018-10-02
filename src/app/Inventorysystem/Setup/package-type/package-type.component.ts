import { Component, OnInit } from '@angular/core';
import { InventorysystemService } from '../../service/Inventorysystem.service';

@Component({
    selector: 'app-package-type',
    templateUrl: './package-type.component.html',
    styleUrls: ['./package-type.component.scss']
})
export class PackageTypeComponent implements OnInit {
    private PackageTypes: any;
    private UpdatedModel : any;
    
    constructor(private InventoryService: InventorysystemService) {

    }

    async ngOnInit() {
        this.PackageTypes = await this.InventoryService.GetPackageTypes();
    }

    async AddPackageType(value) {
        await this.InventoryService.AddPackageType(value.data);
        this.PackageTypes = await this.InventoryService.GetPackageTypes();
    }

    UpdateModel(value) {
        this.UpdatedModel = {...value.oldData, ...value.newData};
    }

    async UpdatePackageType() {
        return await this.InventoryService.UpdatePackageType(this.UpdatedModel);
    }

    async DeletePackageType(value) {
        return await this.InventoryService.DeletePackageType(value.key);
    }

}