import { Component, OnInit } from '@angular/core';
import { InventorysystemService } from '../../service/Inventorysystem.service';
import { CustomerAccount } from '../../models/Setup/CustomerAccount';

@Component({
    selector: 'app-customer-account',
    templateUrl: './customer-account.component.html',
    styleUrls: ['./customer-account.component.scss']
})
export class CustomerAccountComponent implements OnInit {
    private CustomerAccounts : any;
    private CustomerTypes : any;
    private updatedmodel : CustomerAccount;

    constructor(private InventoryService : InventorysystemService) { }

    async ngOnInit() {
        this.CustomerAccounts = await this.InventoryService.GetCustomerAccounts();
        this.CustomerTypes = await this.InventoryService.GetCustomerTypes();
    }

    async AddCustomerAccount(value) {
        console.log(value);
        await this.InventoryService.AddCustomerAccount(value.data);
        this.CustomerAccounts = await this.InventoryService.GetCustomerAccounts();
    }

    async UpdateCustomerAccount() {
        return await this.InventoryService.UpdateCustomerAccount(this.updatedmodel);
    }

    async DeleteCustomerAccount(value) {
        return await this.InventoryService.DeleteCustomerAccount(value.key);
    }

    UpdateModel(value) {
        //this.updatedmodel = Object.assign(value.oldData, value.newData);
        this.updatedmodel = {...value.oldData, ...value.newData};
        console.log(this.updatedmodel);
    }

}


