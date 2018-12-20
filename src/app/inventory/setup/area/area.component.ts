import { Component, OnInit, OnChanges } from '@angular/core';
import { InventorysystemService, AuthService } from '../../../core';
import { DxDataGridComponent } from "devextreme-angular";
import { ValidationStatesModule } from '../../../theme/pages/default/components/forms/validation/validation-states/validation-states.module';
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
    private CompanyId: number;

    constructor(public InventoryService: InventorysystemService, private AuthService: AuthService) {

    }

    ngOnInit() {

        this.AuthService.getUserCompanyId().subscribe((res: number) => {
            this.CompanyId = res;
        });

        this.InventoryService.GetRegionsByCompany(this.CompanyId).subscribe((res: Region) => {
            this.Regions = res;
        });
        this.InventoryService.GetAreasByCompany(this.CompanyId).subscribe((res: Area) => {
            this.Areas = res;
        });
    }

    mergeArea(value) {
        this.newarea = Object.assign(value.oldData, value.newData);
        console.log(this.newarea);
    }

    AddArea(value) {
        this.InventoryService.AddArea(value.data).subscribe((res: any) => {
            this.InventoryService.GetAreasByCompany(this.CompanyId).subscribe((res: Area) => {
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