import { Component, OnInit, OnChanges } from '@angular/core';
import { InventorysystemService, AuthService } from '../../../core';
import { Area } from '../../../core/Models/Inventory/Setup/Area';
import { Region } from '../../../core/Models/Inventory/Setup/Region';

@Component({
    selector: 'app-area',
    templateUrl: './area.component.html',
    styleUrls: ['./area.component.scss']
})



export class AreaComponent implements OnInit {
    public Regions: any;
    public Areas: any;
    public newarea: Area;
    public CompanyId: number;

    constructor(public InventoryService: InventorysystemService, public AuthService: AuthService) {

    }

    ngOnInit() {

        this.CompanyId = this.AuthService.getUserCompanyId();

        this.InventoryService.GetRegionsByCompany(this.CompanyId).subscribe((res: Region) => {
            this.Regions = res;
        });
        this.InventoryService.getAreasByCompany(this.CompanyId).subscribe((res: Area) => {
            this.Areas = res;
        });
    }

    mergeArea(value) {
        this.newarea = Object.assign(value.oldData, value.newData);
        console.log(this.newarea);
    }

    AddArea(value) {
        this.InventoryService.AddArea(value.data).subscribe((res: any) => {
            this.InventoryService.getAreasByCompany(this.CompanyId).subscribe((res: Area) => {
                this.Areas = res;
            });
        });
    }

    UpdateArea() {
        this.InventoryService.UpdateArea(this.newarea).subscribe();
    }

    DeleteArea(value) {
        console.log(value);
        this.InventoryService.DeleteArea(value.data.areaId).subscribe();
    }

}