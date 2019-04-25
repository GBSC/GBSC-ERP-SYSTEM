import { Component, OnInit } from '@angular/core';
import { InventorysystemService, AuthService } from '../../../core';
import { CustomerPricePickLevel } from '../../../core/Models/Inventory/Setup/CustomerPricePickLevel';
import { CustomerType } from '../../../core/Models/Inventory/Setup/CustomerType';

@Component({
    selector: 'app-customer-price-pick-level',
    templateUrl: './customer-price-pick-level.component.html',
    styleUrls: ['./customer-price-pick-level.component.scss']
})
export class CustomerPricePickLevelComponent implements OnInit {
    public CustomerPrices: any;
    public CustomerTypes: any;
    public UpdatedModel: any;
    public CompanyId: number;

    constructor(public InventoryService: InventorysystemService, public AuthService: AuthService) {

    }

    ngOnInit() {
        this.CompanyId = this.AuthService.getUserCompanyId();
        
        this.InventoryService.GetPricePickLevelsByCompany(this.CompanyId).subscribe((res: CustomerPricePickLevel) => {
            this.CustomerPrices = res;
        });
        this.InventoryService.GetCustomerTypesByCompany(this.CompanyId).subscribe((res: CustomerType) => {
            this.CustomerTypes = res;
        });
    }

    AddCustomerPrice(value) {
        this.InventoryService.AddCustomerPricePickLevel(value.data).subscribe(res => {
            this.InventoryService.GetPricePickLevelsByCompany(this.CompanyId).subscribe((res: CustomerPricePickLevel) => {
                this.CustomerPrices = res;
            });
        });
    }

    UpdateModel(value) {
        this.UpdatedModel = { ...value.oldData, ...value.newData };
    }

    UpdateCustomerPrice() {
        return this.InventoryService.UpdateCustomerPricePickLevel(this.UpdatedModel).subscribe();
    }

    DeleteCustomerPrice(value) {
        return this.InventoryService.DeleteCustomerPricePickLevel(value.key).subscribe();
    }

}