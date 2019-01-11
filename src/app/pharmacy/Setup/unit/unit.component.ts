import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { PharmacyService } from '../../../core';
import { Unit } from '../../../core/Models/Pharmacy/Unit';
import { InventoryItemComponent } from '../inventory-item/inventory-item.component';


@Component({
    selector: 'app-unit',
    templateUrl: './unit.component.html',
    styleUrls: ['./unit.component.css']
})
export class UnitComponent implements OnInit {

    @Output() UpdateUnitInInventoryItemComponent = new EventEmitter<any>();

    public Units: Unit;
    public UpdatedModel: any;

    constructor(public PharmacyService: PharmacyService) {

    }

    ngOnInit() {
        this.PharmacyService.GetUnits().subscribe((res: Unit) => this.Units = res);
    }

    async AddUnit(value) {
        await this.PharmacyService.AddUnit(value.data).toPromise();
        this.PharmacyService.GetUnits().subscribe((res: Unit) => {
            this.Units = res;
            this.UpdateUnitInInventoryItemComponent.emit(this.Units)
        });
    }

    UpdateModel(value) {
        this.UpdatedModel = { ...value.oldData, ...value.newData };
    }

    async UpdateUnit() {
        return await this.PharmacyService.UpdateUnit(this.UpdatedModel).toPromise();
    }

    async DeleteUnit(value) {
        return await this.PharmacyService.DeleteUnit(value.key).toPromise();
    }

}