import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { PharmacyService } from '../../../core';
import { Supplier } from '../../../core/Models/Pharmacy/Supplier';


@Component({
    selector: 'app-supplier',
    templateUrl: './supplier.component.html',
    styleUrls: ['./supplier.component.css']
})
export class SupplierComponent implements OnInit {
    public Suppliers: any;
    public UpdatedModel: any;

    constructor(private PharmacyService: PharmacyService) {

    }

    ngOnInit() {
        this.PharmacyService.GetSuppliers().subscribe((res: Supplier) => this.Suppliers = res);
    }

    async AddSupplier(value) {
        await this.PharmacyService.AddSupplier(value.data).toPromise();
        this.PharmacyService.GetSuppliers().subscribe((res: Supplier) => this.Suppliers = res);
    }

    UpdateModel(value) {
        this.UpdatedModel = { ...value.oldData, ...value.newData };
    }

    async UpdateSupplier() {
        return await this.PharmacyService.UpdateSupplier(this.UpdatedModel).toPromise();
    }

    async DeleteSupplier(value) {
        return await this.PharmacyService.DeleteSupplier(value.key).toPromise();
    }





}
