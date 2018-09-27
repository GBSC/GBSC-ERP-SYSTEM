import { Component, OnInit } from '@angular/core';
import { InventorysystemService } from '../../service/Inventorysystem.service';

@Component({
    selector: 'app-customer-setup',
    templateUrl: './customer-setup.component.html',
    styleUrls: ['./customer-setup.component.scss']
})
export class CustomerSetupComponent implements OnInit {
    private Customers : any;
    private CustomerTypes : any;
    private SalesPeople : any;
    private ModeOfPayments : any;
    private UpdatedModel : any;

    constructor(private InventoryService : InventorysystemService) { }

    async ngOnInit() {
       this.Customers = await this.InventoryService.GetCustomers();
       this.CustomerTypes = await this.InventoryService.GetCustomerTypes();
       this.SalesPeople = await this.InventoryService.GetSalesPeople();
       this.ModeOfPayments = await this.InventoryService.GetModeOfPayments();
    }

    async AddCustomer(value) {
        //console.log(value.data);
        await this.InventoryService.AddCustomer(value.data);
        this.Customers = await this.InventoryService.GetCustomers();
        //console.log(this.Customers);
    }

    UpdateModel(value) {
        this.UpdatedModel = {...value.oldData, ...value.newData};
        //console.log(this.UpdatedModel);
    }

    async UpdateCustomer() {
        return await this.InventoryService.UpdateCustomer(this.UpdatedModel);
    }

    async DeleteCustomer(value) {
        return await this.InventoryService.DeleteCustomer(value.key);
    }

}