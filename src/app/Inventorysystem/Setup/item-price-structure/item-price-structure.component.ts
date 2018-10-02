import { Component, OnInit } from '@angular/core';
import { InventorysystemService } from '../../service/Inventorysystem.service';

@Component({
    selector: 'app-item-price-structure',
    templateUrl: './item-price-structure.component.html',
    styleUrls: ['./item-price-structure.component.scss']
})
export class ItemPriceStructureComponent implements OnInit {
    private ItemPriceStructures: any;
    private UpdatedModel : any;

    constructor(private InventoryService: InventorysystemService) {

    }

    async ngOnInit() {
        this.ItemPriceStructures = await this.InventoryService.GetItemPriceStructures();
    }

    async AddItemPriceStructure(value) {
        await this.InventoryService.AddItemPriceStructure(value.data);
        this.ItemPriceStructures = await this.InventoryService.GetItemPriceStructures();
    }

    UpdateModel(value) {
        this.UpdatedModel = {...value.oldData, ...value.newData};
    }

    async UpdateItemPriceStructure() {
        return await this.InventoryService.UpdateItemPriceStructure(this.UpdatedModel);
    }

    async DeleteItemPriceStructure(value) {
        return await this.InventoryService.DeleteItemPriceStructure(value.key);
    }
}
