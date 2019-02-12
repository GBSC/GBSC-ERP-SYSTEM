import { Component, OnInit } from '@angular/core';
import { InventorysystemService, AuthService } from '../../../../app/core';

@Component({
    selector: 'app-region',
    templateUrl: './region.component.html',
    styleUrls: ['./region.component.scss']
})
export class RegionComponent implements OnInit {

    public regions: any;
    public companyId: any;

    constructor(public inventoryService: InventorysystemService, public authService: AuthService) {
        this.companyId = this.authService.getUserCompanyId();
    }

    ngOnInit() {

        this.inventoryService.getRegionsByCompany(this.companyId).subscribe(reg => this.regions = reg);
    }

    addRegion(region) {

        region.data.companyId = this.companyId;
        this.inventoryService.AddRegion(region.data).subscribe(resp => console.log(resp));

    }

    updateRegion(region) {

        region.data.regionId = region.key;
        region.data.companyId = this.companyId;
        this.inventoryService.UpdateRegion(region.data).subscribe(resp => {
            console.log(resp);
        });
    }

    deleteRegion(region) {

        this.inventoryService.DeleteRegion(region.key).subscribe(resp=>console.log('Region Deleted'));

    }

}
