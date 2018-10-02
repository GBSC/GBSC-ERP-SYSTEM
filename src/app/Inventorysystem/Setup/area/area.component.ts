import { Component, OnInit, OnChanges } from '@angular/core';
import { InventorysystemService } from '../../service/Inventorysystem.service';
import { Area } from '../../models/Setup/Area';
import { DxDataGridComponent } from "devextreme-angular";
import { ValidationStatesModule } from '../../../theme/pages/default/components/forms/validation/validation-states/validation-states.module';

@Component({
    selector: 'app-area',
    templateUrl: './area.component.html',
    styleUrls: ['./area.component.scss']
})



export class AreaComponent implements OnInit  {
    private Regions : any;
    private Areas : any;
    private newarea : Area;

    constructor(private InventoryService : InventorysystemService) {

    }

    async ngOnInit() {
        this.Regions = await this.InventoryService.GetRegions();
        this.Areas = await this.InventoryService.GetAreas();
    }

    mergeArea(value) {
        this.newarea = Object.assign(value.oldData, value.newData);
        console.log(this.newarea);
    }

    async AddArea(value) {
        await this.InventoryService.AddArea(value.data);
        this.Areas = await this.InventoryService.GetAreas();
    }

    async UpdateArea() {
        await this.InventoryService.UpdateArea(this.newarea);
    }

    async DeleteArea(value) {
        console.log(value);
        await this.InventoryService.DeleteArea(value.data.areaId);
    }

}