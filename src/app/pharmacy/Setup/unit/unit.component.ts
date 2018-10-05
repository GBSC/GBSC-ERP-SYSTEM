import { Component, OnInit } from '@angular/core';
import { PharmacyService } from '../../../core';
import { Unit } from '../../../core/Models/Pharmacy/Unit';


@Component({
    selector: 'app-unit',
    templateUrl: './unit.component.html',
    styleUrls: ['./unit.component.css']
})
export class UnitComponent implements OnInit {
    private Units : Unit;
    private UpdatedModel : any;

    constructor(private PharmacyService : PharmacyService) {

    }

    ngOnInit() {
       this.PharmacyService.GetUnits().subscribe((res : Unit) => this.Units = res);
    }

    async AddUnit(value) {
        await this.PharmacyService.AddUnit(value.data).toPromise();
        this.PharmacyService.GetUnits().subscribe((res : Unit) => this.Units = res);
    }

    UpdateModel(value) {
        this.UpdatedModel = {...value.oldData, ...value.newData};
    }

    async UpdateUnit() {
        return await this.PharmacyService.UpdateUnit(this.UpdatedModel).toPromise();
    }

    async DeleteUnit(value) {
        return await this.PharmacyService.DeleteUnit(value.key).toPromise();
    }

}