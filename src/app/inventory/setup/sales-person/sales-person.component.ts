import { Component, OnInit } from '@angular/core';
import { InventorysystemService } from '../../../core';

@Component({
    selector: 'app-sales-person',
    templateUrl: './sales-person.component.html',
    styleUrls: ['./sales-person.component.scss']
})
export class SalesPersonComponent implements OnInit {
    public SalesPeople: any;
    public Distributors: any;
    public Areas: any;
    public Territories: any;
    public UpdatedModel: any;

    constructor(public InventoryService: InventorysystemService) {
        this.getFilteredDistributors = this.getFilteredDistributors.bind(this);
        this.getFilteredTerritories = this.getFilteredTerritories.bind(this);
    }

    async ngOnInit() {
        this.SalesPeople = await this.InventoryService.GetSalesPeople();
        this.Areas = await this.InventoryService.GetAreas();
        this.Territories = await this.InventoryService.GetTerritories();
        this.Distributors = await this.InventoryService.GetDistributors();
    }

    async AddSalesPerson(value) {
        await this.InventoryService.AddSalesPerson(value.data);
        this.SalesPeople = await this.InventoryService.GetSalesPeople();
    }

    UpdateModel(value) {
        this.UpdatedModel = { ...value.oldData, ...value.newData };
    }

    async UpdateSalesPerson() {
        return await this.InventoryService.UpdateSalesPerson(this.UpdatedModel);
    }

    async DeleteSalesPerson(value) {
        return await this.InventoryService.DeleteSalesPerson(value.key);
    }

    getFilteredTerritories(options) {
        return {
            store: this.Territories,
            filter: options.data ? ["areaId", "=", options.data.areaId] : null
        };
    }

    getFilteredDistributors(options) {
        return {
            store: this.Distributors,
            filter: options.data ? ["territoryId", "=", options.data.territoryId] : null
        };
    }

    onEditorPreparing(e) {
        if (e.parentType === "dataRow" && e.dataField === "territoryId") {
            e.editorOptions.disabled = (typeof e.row.data.areaId !== "number");
        }
        if (e.parentType === "dataRow" && e.dataField === "distributorId") {
            e.editorOptions.disabled = (typeof e.row.data.territoryId !== "number");
        }
    }

    setTerritoryValue(rowData: any, value: any): void {
        rowData.territoryId = null;
        (<any>this).defaultSetCellValue(rowData, value);
    }

    setAreaValue(rowData: any, value: any): void {
        rowData.areaId = null;
        (<any>this).defaultSetCellValue(rowData, value);
    }

}