import { Component, OnInit } from '@angular/core';
import { InventorysystemService, AuthService } from '../../../core';
import { Unit } from '../../../core/Models/Inventory/Setup/Unit';

@Component({
    selector: 'app-unit',
    templateUrl: './unit.component.html',
    styleUrls: ['./unit.component.css']
})
export class UnitComponent implements OnInit {
    public Units: any;
    public UpdatedModel: any;
    private CompanyId: number;

    constructor(public InventoryService: InventorysystemService, private AuthService: AuthService) {

    }

    ngOnInit() {
        this.CompanyId = this.AuthService.getUserCompanyId();
        
        this.InventoryService.GetUnitsByCompany(this.CompanyId).subscribe((res: Unit) => {
            this.Units = res;
        });
    }

    AddUnit(value) {
        value.companyId = this.CompanyId;
        this.InventoryService.AddUnit(value.data).subscribe(res => {
            this.InventoryService.GetUnitsByCompany(this.CompanyId).subscribe((res: Unit) => {
                this.Units = res;
            });
        });
    }

    UpdateModel(value) {
        value.companyId = this.CompanyId;
        this.UpdatedModel = { ...value.oldData, ...value.newData };
    }

    UpdateUnit() {
        return this.InventoryService.UpdateUnit(this.UpdatedModel).subscribe();
    }

    DeleteUnit(value) {
        return this.InventoryService.DeleteUnit(value.key).subscribe();
    }

}