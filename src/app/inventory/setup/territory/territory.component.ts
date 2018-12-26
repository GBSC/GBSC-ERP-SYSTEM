import { Component, OnInit } from '@angular/core';
import { InventorysystemService, AuthService } from '../../../core';

@Component({
    selector: 'app-territory',
    templateUrl: './territory.component.html',
    styleUrls: ['./territory.component.scss']
})
export class TerritoryComponent implements OnInit {
    public Territories: any;
    public Areas: any;
    public UpdatedModel: any;
    private CompanyId: number;

    constructor(public InventoryService: InventorysystemService, private AuthService: AuthService) {

    }

    async ngOnInit() {
        this.AuthService.getUserCompanyId().subscribe((res: number) => {
            this.CompanyId = res;
        });
        this.InventoryService.getTerritoriesByCompany(this.CompanyId).subscribe(t => this.Territories = t);
        this.InventoryService.getAreasByCompany(this.CompanyId).subscribe(a => this.Areas = a);
    }

    async AddTerritory(value) {
        this.InventoryService.AddTerritory(value.data).subscribe(resp => {
            // console.log(value);
            this.InventoryService.getTerritoriesByCompany(this.CompanyId).subscribe(t => this.Territories = t);
        });
    }

    UpdateModel(value) {
        this.UpdatedModel = { ...value.oldData, ...value.newData };
    }

    async UpdateTerritory() {
        this.InventoryService.UpdateTerritory(this.UpdatedModel).subscribe();
    }

    async DeleteTerritory(value) {
        this.InventoryService.DeleteTerritory(value.key).subscribe();
    }

}