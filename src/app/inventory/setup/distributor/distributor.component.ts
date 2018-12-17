import { Component, OnInit } from '@angular/core';
import { InventorysystemService } from '../../../core';
import { DxDataGridModule, DxPopupModule } from "devextreme-angular";


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

    constructor(public InventoryService: InventorysystemService) {
        this.onPopupShown = this.onPopupShown.bind(this);
        this.onPopupHide = this.onPopupHide.bind(this);
    }

    async onPopupShown() {
        await this.CheckUnassignedTerritories();
        this.DataSource = this.UnassignedTerritories;
    }

    async onPopupHide() {
        this.DataSource = this.Territories;
    }

    async ngOnInit() {
        this.Distributors = await this.InventoryService.GetDistributors();
        await this.CheckUnassignedTerritories();
    }

    async AddDistributor(value) {
        //console.log(this.DataSource);
        await this.InventoryService.AddDistributor(value.data);
        this.Distributors = await this.InventoryService.GetDistributors();
        await this.CheckUnassignedTerritories();
    }

    UpdateModel(value) {
        //console.log(value);
        this.UpdatedModel = { ...value.oldData, ...value.newData };
        //console.log(this.UpdatedModel);
    }

    async UpdateDistributor() {
        //console.log(this.DataSource);
        await this.InventoryService.UpdateDistributor(this.UpdatedModel);
        await this.CheckUnassignedTerritories();
    }

    async DeleteDistributor(value) {
        //console.log(this.DataSource);
        await this.InventoryService.DeleteDistributor(value.key);
        await this.CheckUnassignedTerritories();
    }

    async CheckUnassignedTerritories() {
        this.Territories = await this.InventoryService.GetTerritories();
        this.DataSource = this.Territories;
        this.UnassignedTerritories = this.Territories.filter(a => a.distributor === null);
        //console.log(this.UnassignedTerritories);
    }
}