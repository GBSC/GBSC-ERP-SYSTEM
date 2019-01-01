import { Component, OnInit } from '@angular/core';
import { InventorysystemService, AuthService } from '../../../core';
import { CustomerAccount } from '../../../core/Models/Inventory/Setup/CustomerAccount';
import { CustomerType } from '../../../core/Models/Inventory/Setup/CustomerType';

@Component({
    selector: 'app-customer-account',
    templateUrl: './customer-account.component.html',
    styleUrls: ['./customer-account.component.scss']
})
export class CustomerAccountComponent implements OnInit {
    public CustomerAccounts: any;
    public CustomerTypes: any;
    public updatedmodel: CustomerAccount;
    private CompanyId: number;

    constructor(public InventoryService: InventorysystemService, private AuthService: AuthService) { }

    ngOnInit() {
        this.CompanyId = this.AuthService.getUserCompanyId();
        
        this.InventoryService.GetCustomerAccountsByCompany(this.CompanyId).subscribe((res: CustomerAccount) => {
            this.CustomerAccounts = res;
        });
        this.InventoryService.GetCustomerTypesByCompany(this.CompanyId).subscribe((res: CustomerType) => {
            this.CustomerTypes = res;
        });
    }

    AddCustomerAccount(value) {
        console.log(value);
        this.InventoryService.AddCustomerAccount(value.data).subscribe(res => {
            this.InventoryService.GetCustomerAccountsByCompany(this.CompanyId).subscribe((res: CustomerAccount) => {
                this.CustomerAccounts = res;
            });
        });
    }

    UpdateCustomerAccount() {
        return this.InventoryService.UpdateCustomerAccount(this.updatedmodel).subscribe();
    }

    DeleteCustomerAccount(value) {
        return this.InventoryService.DeleteCustomerAccount(value.key).subscribe();
    }

    UpdateModel(value) {
        //this.updatedmodel = Object.assign(value.oldData, value.newData);
        this.updatedmodel = { ...value.oldData, ...value.newData };
        console.log(this.updatedmodel);
    }

}


