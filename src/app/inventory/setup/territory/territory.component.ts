import { Component, OnInit } from '@angular/core';
import { InventorysystemService } from '../../../core';

@Component({
    selector: 'app-territory',
    templateUrl: './territory.component.html',
    styleUrls: ['./territory.component.scss']
})
export class TerritoryComponent implements OnInit {
    public Territories: any;
    public Areas: any;
    public UpdatedModel: any;

    constructor(public InventoryService: InventorysystemService) {

    }

    async ngOnInit() {
        this.InventoryService.GetTerritories().subscribe(t=> this.Territories = t);
        this.InventoryService.GetAreas().subscribe(a=>this.Areas = a);
    }

    async AddTerritory(value) {
        this.InventoryService.AddTerritory(value.data).subscribe(resp=>{
            console.log(value);
            this.InventoryService.GetTerritories().subscribe(t=> this.Territories = t);
        });
    }

    UpdateModel(value) {
        this.UpdatedModel = { ...value.oldData, ...value.newData };
    }

    async UpdateTerritory() {
        this.InventoryService.UpdateTerritory(this.UpdatedModel).subscribe(resp=>console.log(resp));
    }

    async DeleteTerritory(value) {
        this.InventoryService.DeleteTerritory(value.key).subscribe(resp=>console.log(resp));
    }

}