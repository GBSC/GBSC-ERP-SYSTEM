import { Component, OnInit } from '@angular/core';

import { InventorysystemService } from '../../service/Inventorysystem.service';


@Component({
    selector: 'app-unit',
    templateUrl: './unit.component.html',
    styleUrls: ['./unit.component.css']
})
export class UnitComponent implements OnInit {
    private Units : any;
    private UpdatedModel : any;

    constructor(private InventoryService : InventorysystemService) {

    }

    async ngOnInit() {
       this.Units = await this.InventoryService.GetUnits();
    }

    async AddUnit(value) {
        await this.InventoryService.AddUnit(value.data);
        this.Units = await this.InventoryService.GetUnits();
    }

    UpdateModel(value) {
        this.UpdatedModel = {...value.oldData, ...value.newData};
    }

    async UpdateUnit() {
        return await this.InventoryService.UpdateUnit(this.UpdatedModel);
    }

    async DeleteUnit(value) {
        return await this.InventoryService.DeleteUnit(value.key);
    }

}