import { Component, OnInit } from '@angular/core';
import { PharmacyService } from '../../../core';


@Component({
    selector: 'app-unit',
    templateUrl: './unit.component.html',
    styleUrls: ['./unit.component.css']
})
export class UnitComponent implements OnInit {
    private Units : any;
    private UpdatedModel : any;

    constructor(private PharmacyService : PharmacyService) {

    }

    async ngOnInit() {
       this.Units = await this.PharmacyService.GetUnits();
    }

    async AddUnit(value) {
        await this.PharmacyService.AddUnit(value.data);
        this.Units = await this.PharmacyService.GetUnits();
    }

    UpdateModel(value) {
        this.UpdatedModel = {...value.oldData, ...value.newData};
    }

    async UpdateUnit() {
        return await this.PharmacyService.UpdateUnit(this.UpdatedModel);
    }

    async DeleteUnit(value) {
        return await this.PharmacyService.DeleteUnit(value.key);
    }

}