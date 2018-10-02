import { Component, OnInit } from '@angular/core';
import { InventorysystemService } from '../../service/Inventorysystem.service';
import { CustomerType } from '../../models/Setup/CustomerType';

@Component({
    selector: 'app-customer-type',
    templateUrl: './customer-type.component.html',
    styleUrls: ['./customer-type.component.scss']
})
export class CustomerTypeComponent implements OnInit {
    private CustomerTypes : any;
    private newCusTyp : CustomerType;

    constructor(private InventoryService : InventorysystemService) {

    }

    async ngOnInit() {
        this.CustomerTypes = await this.InventoryService.GetCustomerTypes();
        console.log(this.CustomerTypes);
    }

    OldValue(value) {
        this.newCusTyp = { ...value.oldData, ...value.newData };
        console.log(this.newCusTyp);
    }

    async AddCustomerType(value) {
        console.log(value);
        await this.InventoryService.AddCustomerType(value.data);
        this.CustomerTypes = await this.InventoryService.GetCustomerTypes();
    }

    async UpdateCustomerType() {
        return this.InventoryService.UpdateCustomerType(this.newCusTyp);
    }

    async DeleteCustomerType(value) {
        console.log(value);
        return await this.InventoryService.DeleteCustomerType(value.key);
    }

}