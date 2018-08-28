import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Supplier } from '../../Inventorysystem/models/supplier';
import { InventorysystemService } from '../../Inventorysystem/service/Inventorysystem.service';


@Component({
    selector: 'app-addnewsupplier',
    templateUrl: './addnewsupplier.component.html',
    styleUrls: ['./addnewsupplier.component.css']
})
export class AddnewsupplierComponent implements OnInit {

    public SupplierForm: FormGroup;

    constructor(private formBuilder: FormBuilder, public InventorysystemServiceobj: InventorysystemService) {
        this.SupplierForm = this.formBuilder.group({
            'Code': ['', Validators.required],
            'Status': ['', Validators.required],
            'Name': ['', Validators.required],
            'Address': ['', Validators.required],
            'City': ['', Validators.required],
            'Country': ['', Validators.required],
            'LandlineNumber': ['', Validators.required],
            'MobilerNumber': ['', Validators.required],
            'FaxNumber': ['', Validators.required],
            'Email': ['', Validators.required],
            'Nature': ['', Validators.required],
            'ContactName': ['', Validators.required],
            'ContactNumber': ['', Validators.required],
            'GlAccount': ['', Validators.required],
        });
    }


    async onSubmit(value) {
        console.log(value);
        let x = await this.InventorysystemServiceobj.AddSupplier(value)
        console.log(x);
    }

    async UpdateSupplier(value) {
        console.log(value.key);
        await this.InventorysystemServiceobj.UpdateSupplier(value.key);
    }

    async DeleteSupplier(value) {
        console.log(value.key.supplierId);
        await this.InventorysystemServiceobj.DeleteSupplier(value.key.supplierId);

    }


    async  ngOnInit() {
        this.InventorysystemServiceobj.GetSuppliers();
        let x = this.InventorysystemServiceobj.Suppliers;
        console.log(x);
    }


}
