import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { PharmacyService } from '../../../core';


@Component({
    selector: 'app-supplier',
    templateUrl: './supplier.component.html',
    styleUrls: ['./supplier.component.css']
})
export class SupplierComponent implements OnInit {
    public Supplier: any;
    public UpdatedModel : any;

    constructor(private PharmacyService: PharmacyService) {
       
    }

    async  ngOnInit() {
        this.Supplier = await this.PharmacyService.GetSuppliers();
    }

    async AddSupplier(value) {
        await this.PharmacyService.AddSupplier(value.data);
        this.Supplier = await this.PharmacyService.GetSuppliers();
    }

    UpdateModel(value) {
        this.UpdatedModel = {...value.oldData, ...value.newData};
    }

    async UpdateSupplier() {
        return await this.PharmacyService.UpdateSupplier(this.UpdatedModel);
    }

    async DeleteSupplier(value) {
        return await this.PharmacyService.DeleteSupplier(value.key);
    }





}
