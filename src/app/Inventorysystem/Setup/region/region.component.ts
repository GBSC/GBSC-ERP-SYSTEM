import { Component, OnInit } from '@angular/core';
import { InventorysystemModule } from '../../Inventorysystem.module';
import { InventorysystemService } from '../../service/Inventorysystem.service';
import { FormGroup } from '@angular/forms';
import { Region } from '../../models/Setup/Region';

@Component({
    selector: 'app-region',
    templateUrl: './region.component.html',
    styleUrls: ['./region.component.scss']
})
export class RegionComponent implements OnInit {
    private Regions : any;
    private updatedmodel : Region;

    constructor(private InventoryService : InventorysystemService) {
        // this.form = new FormGroup {

        // };
     }

    async ngOnInit() {
        this.Regions = await this.InventoryService.GetRegions();
    }

    async AddRegion(value)
    {
        await this.InventoryService.AddRegion(value.data);
    }

    UpdateModel(value) {
        this.updatedmodel = Object.assign(value.oldData, value.newData);
        console.log(this.updatedmodel);
    }
    
    async UpdateRegion(value)
    {
        var updateRow : Region = value.data;
        updateRow.regionId = value.key;
        await this.InventoryService.UpdateRegion(updateRow);
    }

    async DeleteRegion(value)
    {
        await this.InventoryService.DeleteRegion(value.data.regionId);
    }

}