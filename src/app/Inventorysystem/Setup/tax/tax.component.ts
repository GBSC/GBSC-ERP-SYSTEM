import { Component, OnInit } from '@angular/core';
import { InventorysystemService } from '../../service/Inventorysystem.service';

@Component({
    selector: 'app-tax',
    templateUrl: './tax.component.html',
    styleUrls: ['./tax.component.scss']
})
export class TaxComponent implements OnInit {
    private Taxes : any;
    private UpdatedModel : any;

    constructor(private InventoryService : InventorysystemService) {

    }

    async ngOnInit() {
        this.Taxes = await this.InventoryService.GetTaxes();
    }

    async AddTax(value) {
        await this.InventoryService.AddTax(value.data);
    }

    UpdateModel(value) {
        this.UpdatedModel = {...value.oldData, ...value.newData};
    }

    async UpdateTax() {
        return await this.InventoryService.UpdateTax(this.UpdatedModel);
    }

    async Deletetax(value) {
        return await this.InventoryService.DeleteTax(value.key);
    }

}