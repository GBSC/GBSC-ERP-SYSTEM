import { Component, OnInit } from '@angular/core';
import { InventorysystemService, AuthService } from '../../../core';
import { CustomerType } from '../../../core/Models/Inventory/Setup/CustomerType';

@Component({
    selector: 'app-customer-type',
    templateUrl: './customer-type.component.html',
    styleUrls: ['./customer-type.component.scss']
})
export class CustomerTypeComponent implements OnInit {
    public CustomerTypes: any;
    public newCusTyp: CustomerType;
    private CompanyId: number;

    constructor(public InventoryService: InventorysystemService, private AuthService: AuthService) {

    }

    ngOnInit() {
        this.CompanyId = this.AuthService.getUserCompanyId();

        this.InventoryService.GetCustomerTypesByCompany(this.CompanyId).subscribe((res: CustomerType) => {
            this.CustomerTypes = res;
        });
        // console.log(this.CustomerTypes);
    }

    OldValue(value) {
        this.newCusTyp = { ...value.oldData, ...value.newData };
        // console.log(this.newCusTyp);
    }

    AddCustomerType(value) {
        // console.log(value);
        this.InventoryService.AddCustomerType(value.data).subscribe();
        this.InventoryService.GetCustomerTypesByCompany(this.CompanyId).subscribe((res: CustomerType) => {
            this.CustomerTypes = res;
        });
    }

    UpdateCustomerType() {
        return this.InventoryService.UpdateCustomerType(this.newCusTyp).subscribe();
    }

    DeleteCustomerType(value) {
        // console.log(value);
        return this.InventoryService.DeleteCustomerType(value.key).subscribe();
    }

}