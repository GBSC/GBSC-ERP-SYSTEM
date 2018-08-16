import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { PurchaseInvoice } from '../../../app/Inventorysystem/models/purchaseinvoice';
import { InventorysystemService } from '../../Inventorysystem/service/Inventorysystem.service';






@Component({
    selector: 'app-purchse-invoice',
    templateUrl: './purchse-invoice.component.html',
    styleUrls: ['./purchse-invoice.component.css']
})
export class PurchseInvoiceComponent implements OnInit {


    public PurchaseInvoiceForm: FormGroup;

    public supplierdata: any;


    constructor(private formBuilder: FormBuilder, private InventorysystemServiceobj: InventorysystemService) {
        this.PurchaseInvoiceForm = this.formBuilder.group(
            {
                'InvoiceNo': ['', Validators.required],
                'Status': ['', Validators.required],
                'InvoiceDate': ['', Validators.required],
                'SupplierId': ['', Validators.required],
                'Remarks': ['', Validators.required],
                'ItemNo': ['', Validators.required],
                'BetchNo': ['', Validators.required],
                'PackType': ['', Validators.required],
                'PackSize': ['', Validators.required],
                'ExpryDate': ['', Validators.required],
                'Quantity': ['', Validators.required],
                'Rate': ['', Validators.required],
                'SellingPrice': ['', Validators.required]
            }
        )
    }

    async  ngOnInit() {
        await this.InventorysystemServiceobj.GetSuppliers();
        this.supplierdata = this.InventorysystemServiceobj.Suppliers;
        console.log(this.supplierdata);
    }


}
