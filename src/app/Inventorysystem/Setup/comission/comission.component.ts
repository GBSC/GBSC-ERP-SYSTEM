import { Component, OnInit } from '@angular/core';
import { InventorysystemService } from '../../service/Inventorysystem.service';
import { Comission } from '../../models/Setup/Comission';

@Component({
    selector: 'app-comission',
    templateUrl: './comission.component.html',
    styleUrls: ['./comission.component.scss']
})
export class ComissionComponent implements OnInit {
    private Comissions : any;
    private updatedmodel : Comission;

    constructor(private InventoryService : InventorysystemService) { }

    async ngOnInit() {
        this.Comissions = await this.InventoryService.GetComissions();
    }

    UpdateModel(value) {
        this.updatedmodel = Object.assign(value.oldData, value.newData);
        console.log(this.updatedmodel);
    }

    async AddComission(value) {
        console.log(value.data);
        await this.InventoryService.AddComission(value.data);
        this.Comissions = await this.InventoryService.GetComissions();
    }

    async UpdateComission() {
        return await this.InventoryService.UpdateComission(this.updatedmodel);
    }

    async DeleteComission(value) {
        console.log(value);
        return await this.InventoryService.DeleteComission(value.key);
    }

}