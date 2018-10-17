import { Component, OnInit } from '@angular/core';
import { PharmacyService } from '../../core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { GRN } from '../../core/Models/Pharmacy/GRN';
import { Supplier } from '../../core/Models/Pharmacy/Supplier';

@Component({
    selector: 'app-goodsreceipt',
    templateUrl: './goodsreceipt.component.html',
    styleUrls: ['./goodsreceipt.component.css']
})
export class GoodsreceiptComponent implements OnInit {

    private GRN: GRN;
    private GoodReceiptNoteForm: FormGroup;
    public Suppliers: Supplier;

    constructor(private PharmacyService: PharmacyService, private formBuilder: FormBuilder) {

        this.GoodReceiptNoteForm = this.formBuilder.group({

            'GRN': [''],
            'GRNDate': [''],
            'SupplierId': [''],
            'Type': [''],
            'Manual': [''],
            'ManualDate': [''],
            'PoNo': [''],
            'Post': [''],
            'InventoryItems': ['']

        });

    }

    ngOnInit() {
        this.PharmacyService.GetGRN().subscribe ((res : GRN) => { 
            this.GRN = res;
            console.log(this.GRN);
        });

        this.PharmacyService.GetSuppliers().subscribe((result : Supplier) => {
            this.Suppliers = result
            console.log(this.Suppliers);
        })
    }
    
}
