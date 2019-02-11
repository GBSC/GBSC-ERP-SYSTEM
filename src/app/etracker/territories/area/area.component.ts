import { Component, OnInit } from '@angular/core';
import { InventorysystemService, AuthService } from '../../../../app/core';

@Component({
    selector: 'app-area',
    templateUrl: './area.component.html',
    styleUrls: ['./area.component.scss']
})
export class AreaComponent implements OnInit {

    public areas: any;
    public cities: any;
    public companyId: any;

    constructor(public inventoryService: InventorysystemService, public authService: AuthService) {
        this.companyId = this.authService.getUserCompanyId();
    }

    ngOnInit() {

        this.inventoryService.getAreasByCompany(this.companyId).subscribe(a => {
            this.areas = a;
        });

        this.inventoryService.getCitiesByCompany(this.companyId).subscribe(r => {
            this.cities = r;
        })
    }

    addArea(area) {

        area.data.companyId = this.companyId;
        this.inventoryService.AddArea(area.data)
            .subscribe(s => console.log(s));

    }

    updateArea(value) {
        value.companyId = this.companyId;
        let model = { ...value.oldData, ...value.newData };
        this.inventoryService.UpdateArea(model)
            .subscribe(s => console.log(s));

    }

    deleteArea(area) {

        this.inventoryService.DeleteArea(area.key)
            .subscribe(s => console.log('Area Deleted'));

    }

}
