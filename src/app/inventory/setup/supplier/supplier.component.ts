import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { InventorysystemService, AuthService } from '../../../core';
import { Supplier } from '../../../core/Models/Inventory/Setup/Supplier';

@Component({
    selector: 'app-supplier',
    templateUrl: './supplier.component.html',
    styleUrls: ['./supplier.component.css']
})
export class SupplierComponent implements OnInit {
    public Supplier: any;
    public UpdatedModel: any;
    private CompanyId: number;

    constructor(public InventoryService: InventorysystemService, private AuthService: AuthService) {

    }

    ngOnInit() {
        this.CompanyId = this.AuthService.getUserCompanyId();

        this.InventoryService.GetSuppliersByCompany(this.CompanyId).subscribe((res: Supplier) => {
            this.Supplier = res;
        });
    }

    AddSupplier(value) {
        this.InventoryService.AddSupplier(value.data).subscribe(res => {
            this.InventoryService.GetSuppliersByCompany(this.CompanyId).subscribe((res: Supplier) => {
                this.Supplier = res;
            });
        });
    }

    UpdateModel(value) {
        this.UpdatedModel = { ...value.oldData, ...value.newData };
    }

    UpdateSupplier() {
        return this.InventoryService.UpdateSupplier(this.UpdatedModel).subscribe();
    }

    DeleteSupplier(value) {
        return this.InventoryService.DeleteSupplier(value.key).subscribe();
    }





}
