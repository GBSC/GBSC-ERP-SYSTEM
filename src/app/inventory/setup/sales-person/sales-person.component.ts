import { Component, OnInit } from '@angular/core';
import { InventorysystemService, AuthService } from '../../../core';
import { SalesPerson } from '../../../core/Models/Inventory/Setup/SalesPerson';
import { Area } from '../../../core/Models/Inventory/Setup/Area';
import { Territory } from '../../../core/Models/Inventory/Setup/Territory';
import { Distributor } from '../../../core/Models/Inventory/Setup/Distributor';

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
    private CompanyId: number;

    constructor(public InventoryService: InventorysystemService, private AuthService: AuthService) {
        this.getFilteredDistributors = this.getFilteredDistributors.bind(this);
        this.getFilteredTerritories = this.getFilteredTerritories.bind(this);
    }

    ngOnInit() {
        this.AuthService.getUserCompanyId().subscribe((res: number) => {
            this.CompanyId = res;
        });
        this.InventoryService.GetSalesPeopleByCompany(this.CompanyId).subscribe((res: SalesPerson) => {
            this.SalesPeople = res;
        });
        this.InventoryService.GetAreasByCompany(this.CompanyId).subscribe((res: Area) => {
            this.Areas = res;
        });
        this.InventoryService.getTerritoriesByCompany(this.CompanyId).subscribe((res: Territory) => {
            this.Territories = res;
        });
        this.InventoryService.GetDistributorsByCompany(this.CompanyId).subscribe((res: Distributor) => {
            this.Distributors = res;
        });
    }

    AddSalesPerson(value) {
        this.InventoryService.AddSalesPerson(value.data).subscribe(res => {
            this.InventoryService.GetSalesPeopleByCompany(this.CompanyId).subscribe((res: SalesPerson) => {
                this.SalesPeople = res;
            });
        });
    }

    UpdateModel(value) {
        this.UpdatedModel = { ...value.oldData, ...value.newData };
    }

    UpdateSalesPerson() {
        return this.InventoryService.UpdateSalesPerson(this.UpdatedModel).subscribe();
    }

    DeleteSalesPerson(value) {
        return this.InventoryService.DeleteSalesPerson(value.key).subscribe();
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