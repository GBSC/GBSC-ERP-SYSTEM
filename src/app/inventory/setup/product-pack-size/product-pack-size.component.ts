import { Component, OnInit } from '@angular/core';
import { InventorysystemService } from '../../../core';
@Component({
    selector: 'app-product-pack-size',
    templateUrl: './product-pack-size.component.html',
    styleUrls: ['./product-pack-size.component.scss']
})
export class ProductPackSizeComponent implements OnInit {
    public PackSizes: any;
    public UpdatedModel: any;

    constructor(public InventoryService: InventorysystemService) {

    }

    async ngOnInit() {
        this.PackSizes = await this.InventoryService.GetPackSizes();
    }

    async AddPackSize(value) {
        await this.InventoryService.AddPackSize(value.data);
        this.PackSizes = await this.InventoryService.GetPackSizes();
    }

    UpdateModel(value) {
        this.UpdatedModel = { ...value.oldData, ...value.newData };
    }

    async UpdatePackSize() {
        return await this.InventoryService.UpdatePackSize(this.UpdatedModel);
    }

    async DeletePackSize(value) {
        return await this.InventoryService.DeletePackSize(value.key);
    }

}