import { Component, OnInit } from '@angular/core';
import { InventorysystemService } from '../../../core';

@Component({
    selector: 'app-product-pack-type',
    templateUrl: './product-pack-type.component.html',
    styleUrls: ['./product-pack-type.component.scss']
})
export class ProductPackTypeComponent implements OnInit {
    public PackTypes: any;
    public UpdatedModel: any;

    constructor(public InventoryService: InventorysystemService) {

    }

    async ngOnInit() {
        this.PackTypes = await this.InventoryService.GetPackTypes();
    }

    async AddPackType(value) {
        await this.InventoryService.AddPackType(value.data);
        this.PackTypes = await this.InventoryService.GetPackTypes();
    }

    UpdateModel(value) {
        this.UpdatedModel = { ...value.oldData, ...value.newData };
    }

    async UpdatePackType() {
        return await this.InventoryService.UpdatePackType(this.UpdatedModel);
    }

    async DeletePackType(value) {
        return await this.InventoryService.DeletePackType(value.key);
    }
}