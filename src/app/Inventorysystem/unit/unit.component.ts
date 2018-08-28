import { Component, OnInit } from '@angular/core';

import { InventorysystemService } from '../../Inventorysystem/service/Inventorysystem.service';


@Component({
    selector: 'app-unit',
    templateUrl: './unit.component.html',
    styleUrls: ['./unit.component.css']
})
export class UnitComponent implements OnInit {

    constructor(public InventorysystemServiceobj: InventorysystemService) { }

    async ngOnInit() {
        await this.InventorysystemServiceobj.GetUnits();
        let x = this.InventorysystemServiceobj.units;
        console.log(x);
    }

    async AddUnit(value) {
        console.log(value.key);
        await this.InventorysystemServiceobj.AddUnits(value.key);
    }

    async UpdateUnit(value) {
        console.log(value.key);
        await this.InventorysystemServiceobj.UpdateUnit(value.key);
    }


    async DeleteUnit(value) {
        console.log(value.key.unitId);
        await this.InventorysystemServiceobj.DeleteUnit(value.key.unitId);

    }
}
