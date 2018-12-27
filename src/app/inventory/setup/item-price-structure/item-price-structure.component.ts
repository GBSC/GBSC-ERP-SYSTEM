import { Component, OnInit } from '@angular/core';
import { InventorysystemService, AuthService } from '../../../core';
import { ItemPriceStructure } from '../../../core/Models/Inventory/Setup/ItemPriceStructure';

@Component({
    selector: 'app-item-price-structure',
    templateUrl: './item-price-structure.component.html',
    styleUrls: ['./item-price-structure.component.scss']
})
export class ItemPriceStructureComponent implements OnInit {
    public ItemPriceStructures: any;
    public UpdatedModel: any;
    private CompanyId: number;

    constructor(public InventoryService: InventorysystemService, private AuthService: AuthService) {

    }

    ngOnInit() {
        this.AuthService.getUserCompanyId().subscribe((res: number) => {
            this.CompanyId = res;
        });
        this.InventoryService.GetItemPriceStructuresByCompany(this.CompanyId).subscribe((res: ItemPriceStructure) => {
            this.ItemPriceStructures = res;
        });
    }

    AddItemPriceStructure(value) {
        this.InventoryService.AddItemPriceStructure(value.data).subscribe(res => {
            this.InventoryService.GetItemPriceStructuresByCompany(this.CompanyId).subscribe((res: ItemPriceStructure) => {
                this.ItemPriceStructures = res;
            });
        });
    }

    UpdateModel(value) {
        this.UpdatedModel = { ...value.oldData, ...value.newData };
    }

    UpdateItemPriceStructure() {
        return this.InventoryService.UpdateItemPriceStructure(this.UpdatedModel).subscribe();
    }

    DeleteItemPriceStructure(value) {
        return this.InventoryService.DeleteItemPriceStructure(value.key).subscribe();
    }
}
