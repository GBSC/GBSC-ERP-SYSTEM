import { Component, OnInit } from '@angular/core';
import { PharmacyService } from '../../core/Services/Pharmacy/pharmacy.service';


@Component({
    selector: 'app-unit',
    templateUrl: './unit.component.html',
    styleUrls: ['./unit.component.css']
})

export class UnitComponent implements OnInit {

    constructor(public InventorysystemServiceobj: PharmacyService) { }

    async ngOnInit() {
        let x = await this.InventorysystemServiceobj.GetUnits();
        console.log(x);
    }

    async AddUnit(value) {
        console.log(value.key);
        await this.InventorysystemServiceobj.AddUnit(value.key);
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
