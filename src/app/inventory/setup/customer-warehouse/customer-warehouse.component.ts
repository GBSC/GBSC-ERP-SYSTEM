import { Component, OnInit } from '@angular/core';
import { InventorysystemService, AuthService } from '../../../core';
import { CustomerWarehouse } from '../../../core/Models/Inventory/Setup/CustomerWarehouse';
import { CustomerType } from '../../../core/Models/Inventory/Setup/CustomerType';

@Component({
    selector: 'app-customer-warehouse',
    templateUrl: './customer-warehouse.component.html',
    styleUrls: ['./customer-warehouse.component.scss']
})
export class CustomerWarehouseComponent implements OnInit {
    public CustomerWarehouses: any;
    public CustomerTypes: any;
    public UpdatedModel: any;
    public CompanyId: number;

    constructor(public InventoryService: InventorysystemService, public AuthService: AuthService) {

    }

    ngOnInit() {
        this.AuthService.getUserCompanyId().subscribe((res: number) => {
            this.CompanyId = res;
        });
        this.InventoryService.GetCustomerWarehousesByCompany(this.CompanyId).subscribe((res: CustomerWarehouse) => {
            this.CustomerWarehouses = res;
        });
        this.InventoryService.GetCustomerTypesByCompany(this.CompanyId).subscribe((res: CustomerType) => {
            this.CustomerTypes = res;
        });
    }

    AddWarehouse(value) {
        //console.log(value.data);
        this.InventoryService.AddCustomerWarehouse(value.data).subscribe(res => {
            this.InventoryService.GetCustomerWarehousesByCompany(this.CompanyId).subscribe((res: CustomerWarehouse) => {
                this.CustomerWarehouses = res;
            });
        });
    }

    UpdateModel(value) {
        this.UpdatedModel = { ...value.oldData, ...value.newData };
        //console.log(this.UpdatedModel);
    }

    UpdateWarehouse() {
        this.InventoryService.UpdateCustomerWarehouse(this.UpdatedModel).subscribe();
    }

    DeleteWarehouse(value) {
        //console.log(value.key);
        this.InventoryService.DeleteCustomerWarehouse(value.key).subscribe();
    }

}