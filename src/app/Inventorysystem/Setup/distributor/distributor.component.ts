import { Component, OnInit } from '@angular/core';
import { InventorysystemService } from '../../service/Inventorysystem.service';
import { Territory } from '../../models/Setup/Territory';
import { DxDataGridModule, DxPopupModule } from "devextreme-angular";


@Component({
    selector: 'app-distributor',
    templateUrl: './distributor.component.html',
    styleUrls: ['./distributor.component.scss']
})
export class DistributorComponent implements OnInit {
    private Distributors : any;
    private Territories : any;
    private UnassignedTerritories : any;
    private UpdatedModel : any;
    private DataSource : any;

    constructor(private InventoryService : InventorysystemService) {
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
        this.UpdatedModel = {...value.oldData, ...value.newData};
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