import { Component, OnInit } from '@angular/core';
import { InventorysystemService, AuthService } from '../../../core';
import { FormGroup } from '@angular/forms';
import { Region } from '../../../core/Models/Inventory/Setup/Region';

@Component({
    selector: 'app-region',
    templateUrl: './region.component.html',
    styleUrls: ['./region.component.scss']
})
export class RegionComponent implements OnInit {
    public Regions: any;
    public updatedmodel: Region;
    public CompanyId: number;

    constructor(public InventoryService: InventorysystemService, public AuthService: AuthService) {
        // this.form = new FormGroup {

        // };
    }

    ngOnInit() {
        this.CompanyId = this.AuthService.getUserCompanyId();

        this.InventoryService.GetRegionsByCompany(this.CompanyId).subscribe((res: Region) => {
            this.Regions = res;
        });
    }

    AddRegion(value) {
        this.InventoryService.AddRegion(value.data).subscribe(res => {
            this.InventoryService.GetRegionsByCompany(this.CompanyId).subscribe((res: Region) => {
                this.Regions = res;
            });
        });
    }

    UpdateModel(value) {
        this.updatedmodel = Object.assign(value.oldData, value.newData);
        console.log(this.updatedmodel);
    }

    UpdateRegion(value) {
        var updateRow: Region = value.data;
        updateRow.regionId = value.key;
        this.InventoryService.UpdateRegion(updateRow).subscribe();
    }

    DeleteRegion(value) {
        this.InventoryService.DeleteRegion(value.data.regionId).subscribe();
    }

}