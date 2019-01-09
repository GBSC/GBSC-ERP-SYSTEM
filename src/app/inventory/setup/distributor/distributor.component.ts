import { Component, OnInit } from '@angular/core';
import { InventorysystemService, AuthService } from '../../../core';
import { DxDataGridModule, DxPopupModule } from "devextreme-angular";
import { Territory } from '../../../core/Models/Inventory/Setup/Territory';
import { Distributor } from '../../../core/Models/Inventory/Setup/Distributor';


@Component({
    selector: 'app-distributor',
    templateUrl: './distributor.component.html',
    styleUrls: ['./distributor.component.scss']
})
export class DistributorComponent implements OnInit {
    public Distributors: any;
    public Territories: any;
    public UnassignedTerritories: any;
    public UpdatedModel: any;
    public DataSource: any;
    public CompanyId: number;

    constructor(public InventoryService: InventorysystemService, public AuthService: AuthService) {
        this.onPopupShown = this.onPopupShown.bind(this);
        this.onPopupHide = this.onPopupHide.bind(this);
    }

    onPopupShown() {
        this.CheckUnassignedTerritories();
        this.DataSource = this.UnassignedTerritories;
    }

    onPopupHide() {
        this.DataSource = this.Territories;
    }

    ngOnInit() {
        this.CompanyId = this.AuthService.getUserCompanyId();

        this.InventoryService.GetDistributorsByCompany(this.CompanyId).subscribe((res: Distributor) => {
            this.Distributors = res;
            this.CheckUnassignedTerritories();
        });
    }

    AddDistributor(value) {
        //console.log(this.DataSource);
        this.InventoryService.AddDistributor(value.data).subscribe(res => {
            this.InventoryService.GetDistributorsByCompany(this.CompanyId).subscribe((res: Distributor) => {
                this.Distributors = res;
                this.CheckUnassignedTerritories();
            });
        });

    }

    UpdateModel(value) {
        //console.log(value);
        this.UpdatedModel = { ...value.oldData, ...value.newData };
        //console.log(this.UpdatedModel);
    }

    UpdateDistributor() {
        //console.log(this.DataSource);
        this.InventoryService.UpdateDistributor(this.UpdatedModel).subscribe(res => this.CheckUnassignedTerritories());

    }

    DeleteDistributor(value) {
        //console.log(this.DataSource);
        this.InventoryService.DeleteDistributor(value.key).subscribe(res => this.CheckUnassignedTerritories());
    }

    CheckUnassignedTerritories() {
        this.InventoryService.getTerritoriesByCompany(this.CompanyId).subscribe((res: Territory) => {
            this.Territories = res;
            this.DataSource = this.Territories;
            this.UnassignedTerritories = this.Territories.filter(a => a.distributor === null);
        });

        //console.log(this.UnassignedTerritories);
    }
}