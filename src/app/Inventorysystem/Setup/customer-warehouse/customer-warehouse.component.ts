import { Component, OnInit } from '@angular/core';
import { InventorysystemService } from '../../service/Inventorysystem.service';

@Component({
    selector: 'app-customer-warehouse',
    templateUrl: './customer-warehouse.component.html',
    styleUrls: ['./customer-warehouse.component.scss']
})
export class CustomerWarehouseComponent implements OnInit {
    private CustomerWarehouses : any;
    private CustomerTypes : any;
    private UpdatedModel : any;

    constructor(private InventoryService : InventorysystemService) {

    }

    async ngOnInit() {
        this.CustomerWarehouses = await this.InventoryService.GetCustomerWarehouses();
        this.CustomerTypes = await this.InventoryService.GetCustomerTypes();
    }

    async AddWarehouse(value) {
        //console.log(value.data);
        return await this.InventoryService.AddCustomerWarehouse(value.data);
    }

    UpdateModel(value) {
        this.UpdatedModel = {...value.oldData, ...value.newData};
        //console.log(this.UpdatedModel);
    }

    async UpdateWarehouse() {
        return await this.InventoryService.UpdateCustomerWarehouse(this.UpdatedModel);
    }

    async DeleteWarehouse(value) {
        //console.log(value.key);
        await this.InventoryService.DeleteCustomerWarehouse(value.key);
    }

}