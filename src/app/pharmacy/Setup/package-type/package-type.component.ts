import { Component, OnInit } from '@angular/core';
import { PharmacyService } from '../../../core';

@Component({
    selector: 'app-package-type',
    templateUrl: './package-type.component.html',
    styleUrls: ['./package-type.component.scss']
})
export class PackageTypeComponent implements OnInit {
    private PackageTypes: any;
    private UpdatedModel : any;
    
    constructor(private PharmacyService: PharmacyService) {

    }

    async ngOnInit() {
        this.PackageTypes = await this.PharmacyService.GetPackageTypes();
    }

    async AddPackageType(value) {
        await this.PharmacyService.AddPackageType(value.data);
        this.PackageTypes = await this.PharmacyService.GetPackageTypes();
    }

    UpdateModel(value) {
        this.UpdatedModel = {...value.oldData, ...value.newData};
    }

    async UpdatePackageType() {
        return await this.PharmacyService.UpdatePackageType(this.UpdatedModel);
    }

    async DeletePackageType(value) {
        return await this.PharmacyService.DeletePackageType(value.key);
    }

}