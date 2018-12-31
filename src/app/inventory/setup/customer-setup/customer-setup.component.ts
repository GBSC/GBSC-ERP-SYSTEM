import { Component, OnInit } from '@angular/core';
import { InventorysystemService, AuthService } from '../../../core';
import { Customer } from '../../../core/Models/Inventory/Setup/Customer';
import { CustomerType } from '../../../core/Models/Inventory/Setup/CustomerType';
import { SalesPerson } from '../../../core/Models/Inventory/Setup/SalesPerson';
import { ModeOfPayment } from '../../../core/Models/Inventory/Setup/ModeOfPayment';

@Component({
    selector: 'app-customer-setup',
    templateUrl: './customer-setup.component.html',
    styleUrls: ['./customer-setup.component.scss']
})
export class CustomerSetupComponent implements OnInit {
    public Customers: any;
    public CustomerTypes: any;
    public SalesPeople: any;
    public ModeOfPayments: any;
    public UpdatedModel: any;
    public CompanyId: number;

    constructor(public InventoryService: InventorysystemService, public AuthService: AuthService) { }

    ngOnInit() {
        this.AuthService.getUserCompanyId().subscribe((res: number) => {
            this.CompanyId = res;
        });
        this.InventoryService.GetCustomersByCompany(this.CompanyId).subscribe((res: Customer) => {
            this.Customers = res;
        });
        this.InventoryService.GetCustomerTypesByCompany(this.CompanyId).subscribe((res: CustomerType) => {
            this.CustomerTypes = res;
        });
        this.InventoryService.GetSalesPeopleByCompany(this.CompanyId).subscribe((res: SalesPerson) => {
            this.SalesPeople = res;
        });
        this.InventoryService.GetModeOfPaymentsByCompany(this.CompanyId).subscribe((res: ModeOfPayment) => {
            this.ModeOfPayments = res;
        });
    }

    AddCustomer(value) {
        //console.log(value.data);
        this.InventoryService.AddCustomer(value.data).subscribe(res => {
            this.InventoryService.GetCustomersByCompany(this.CompanyId).subscribe((res: Customer) => {
                this.Customers = res;
            });
        });
        //console.log(this.Customers);
    }

    UpdateModel(value) {
        this.UpdatedModel = { ...value.oldData, ...value.newData };
        //console.log(this.UpdatedModel);
    }

    UpdateCustomer() {
        return this.InventoryService.UpdateCustomer(this.UpdatedModel).subscribe();
    }

    DeleteCustomer(value) {
        return this.InventoryService.DeleteCustomer(value.key).subscribe();
    }

}