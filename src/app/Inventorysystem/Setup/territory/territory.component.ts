import { Component, OnInit } from '@angular/core';
import { InventorysystemService } from '../../service/Inventorysystem.service';

@Component({
    selector: 'app-territory',
    templateUrl: './territory.component.html',
    styleUrls: ['./territory.component.scss']
})
export class TerritoryComponent implements OnInit {
    private Territories : any;
    private Areas : any;
    private UpdatedModel : any;

    constructor(private InventoryService : InventorysystemService) {

    }

    async ngOnInit() {
        this.Territories = await this.InventoryService.GetTerritories();
        this.Areas = await this.InventoryService.GetAreas();
    }

    async AddTerritory(value) {
        await this.InventoryService.AddTerritory(value.data);
        this.Territories = await this.InventoryService.GetTerritories();
    }

    UpdateModel(value) {
        this.UpdatedModel = {...value.oldData, ...value.newData};
    }

    async UpdateTerritory() {
        return await this.InventoryService.UpdateTerritory(this.UpdatedModel);
    }

    async DeleteTerritory(value) {
        return await this.InventoryService.DeleteTerritory(value.key);
    }

}