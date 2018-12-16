import { Component, OnInit } from '@angular/core';
import { InventorysystemService } from '../../../core';


@Component({
    selector: 'app-unit',
    templateUrl: './unit.component.html',
    styleUrls: ['./unit.component.css']
})
export class UnitComponent implements OnInit {
    public Units: any;
    public UpdatedModel: any;

    constructor(public InventoryService: InventorysystemService) {

    }

    async ngOnInit() {
        this.Units = await this.InventoryService.GetUnits();
    }

    async AddUnit(value) {
        await this.InventoryService.AddUnit(value.data);
        this.Units = await this.InventoryService.GetUnits();
    }

    UpdateModel(value) {
        this.UpdatedModel = { ...value.oldData, ...value.newData };
    }

    async UpdateUnit() {
        return await this.InventoryService.UpdateUnit(this.UpdatedModel);
    }

    async DeleteUnit(value) {
        return await this.InventoryService.DeleteUnit(value.key);
    }

}