import { Component, OnInit } from '@angular/core';
import { InventorysystemService, AuthService } from '../../../core';
import { CustomerBank } from '../../../core/Models/Inventory/Setup/CustomerBank';
import { CustomerType } from '../../../core/Models/Inventory/Setup/CustomerType';
@Component({
    selector: 'app-customer-bank',
    templateUrl: './customer-bank.component.html',
    styleUrls: ['./customer-bank.component.scss']
})
export class CustomerBankComponent implements OnInit {
    public CustomerBanks: any;
    public CustomerTypes: any;
    public UpdatedModel: any;
    private CompanyId: number;

    constructor(public InventoryService: InventorysystemService, private AuthService: AuthService) {

    }

    ngOnInit() {
        this.CompanyId = this.AuthService.getUserCompanyId();
        
        this.InventoryService.GetCustomerBanksByCompany(this.CompanyId).subscribe((res: CustomerBank) => {
            this.CustomerBanks = res;
        });
        this.InventoryService.GetCustomerTypesByCompany(this.CompanyId).subscribe((res: CustomerType) => {
            this.CustomerTypes = res;
        });
    }

    AddCustomerBank(value) {
        //console.log(value);
        this.InventoryService.AddCustomerBank(value.data).subscribe(res => {
            this.InventoryService.GetCustomerBanksByCompany(this.CompanyId).subscribe((res: CustomerBank) => {
                this.CustomerBanks = res;
            });
        });
    }

    UpdateModel(value) {
        this.UpdatedModel = { ...value.oldData, ...value.newData };
        //console.log(this.UpdatedModel);
    }

    UpdateCustomerBank() {
        return this.InventoryService.UpdateCustomerBank(this.UpdatedModel).subscribe();
    }

    DeleteCustomerBank(value) {
        //console.log(value.key);
        return this.InventoryService.DeleteCustomerBank(value.key).subscribe();
    }

}
