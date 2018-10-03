import { Component, OnInit } from '@angular/core';
import { InventorysystemService } from '../../service/Inventorysystem.service';

@Component({
    selector: 'app-customer-bank',
    templateUrl: './customer-bank.component.html',
    styleUrls: ['./customer-bank.component.scss']
})
export class CustomerBankComponent implements OnInit {
    private CustomerBanks : any;
    private CustomerTypes : any;
    private UpdatedModel : any;

    constructor(private InventoryService : InventorysystemService){

     }

    async ngOnInit() {
        this.CustomerBanks = await this.InventoryService.GetCustomerBanks();
        this.CustomerTypes= await this.InventoryService.GetCustomerTypes();
    }

    async AddCustomerBank(value) {
        //console.log(value);
        await this.InventoryService.AddCustomerBank(value.data);
        this.CustomerBanks = await this.InventoryService.GetCustomerBanks();
    }

    UpdateModel(value) {
        this.UpdatedModel = {...value.oldData, ...value.newData};
        //console.log(this.UpdatedModel);
    }

    async UpdateCustomerBank() {
        return await this.InventoryService.UpdateCustomerBank(this.UpdatedModel);
    }

    async DeleteCustomerBank(value) {
        //console.log(value.key);
        return await this.InventoryService.DeleteCustomerBank(value.key);
    }

}
