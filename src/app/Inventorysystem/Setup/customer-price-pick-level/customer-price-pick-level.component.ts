import { Component, OnInit } from '@angular/core';
import { InventorysystemModule } from '../../Inventorysystem.module';
import { InventorysystemService } from '../../service/Inventorysystem.service';

@Component({
    selector: 'app-customer-price-pick-level',
    templateUrl: './customer-price-pick-level.component.html',
    styleUrls: ['./customer-price-pick-level.component.scss']
})
export class CustomerPricePickLevelComponent implements OnInit {
    private CustomerPrices : any;
    private CustomerTypes : any;
    private UpdatedModel : any;

    constructor(private InventoryService : InventorysystemService) {

    }

    async ngOnInit() {
        this.CustomerPrices = await this.InventoryService.GetPricePickLevels();
        this.CustomerTypes = await this.InventoryService.GetCustomerTypes();
    }

    async AddCustomerPrice(value) {
        await this.InventoryService.AddCustomerPricePickLevel(value.data);
        this.CustomerPrices = await this.InventoryService.GetPricePickLevels();
    }

    UpdateModel(value) {
        this.UpdatedModel = { ...value.oldData, ...value.newData };
    }

    async UpdateCustomerPrice() {
        return await this.InventoryService.UpdateCustomerPricePickLevel(this.UpdatedModel);
    }

    async DeleteCustomerPrice(value) {
        return await this.InventoryService.DeleteCustomerPricePickLevel(value.key);
    }

}