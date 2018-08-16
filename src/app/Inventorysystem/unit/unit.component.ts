import { Component, OnInit } from '@angular/core';

import { InventorysystemService } from '../../Inventorysystem/service/Inventorysystem.service';


@Component({
    selector: 'app-unit',
    templateUrl: './unit.component.html',
    styleUrls: ['./unit.component.css']
})
export class UnitComponent implements OnInit {

    constructor(private inventorysystemServiceobj: InventorysystemService) { }

    async ngOnInit() {
        await this.inventorysystemServiceobj.GetUnits();
        let x = this.inventorysystemServiceobj.units;
        console.log(x);
    }

    async AddUnit(value) {
        console.log(value.key);
        await this.inventorysystemServiceobj.AddUnits(value.key);
    }

    async UpdateUnit(value) {
        console.log(value.key);
        await this.inventorysystemServiceobj.UpdateUnit(value.key);
    }


    async DeleteUnit(value) {
        console.log(value.key.unitId);
        await this.inventorysystemServiceobj.DeleteUnit(value.key.unitId);

    }
}
