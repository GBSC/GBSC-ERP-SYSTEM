import { Component, OnInit } from '@angular/core';
import { InventorysystemService, AuthService } from '../../../../app/core';

@Component({
    selector: 'app-area',
    templateUrl: './area.component.html',
    styleUrls: ['./area.component.scss']
})
export class AreaComponent implements OnInit {

    public areas: any;
    public regions: any;
    public companyId: any;

    constructor(public inventoryService: InventorysystemService, public authService: AuthService) {
        this.companyId = this.authService.getUserCompanyId();
    }

    ngOnInit() {

        this.inventoryService.getAreasByCompany(this.companyId).subscribe(a => {
            this.areas = a;
        });

        this.inventoryService.getRegionsByCompany(this.companyId).subscribe(r => {
            this.regions = r;
        })
    }

    addArrea(area) {

    }

    updateArea(area) {

    }

    deleteArea(area) {

    }

}
