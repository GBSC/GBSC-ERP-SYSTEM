import { Component, OnInit } from '@angular/core';
import { InventorysystemService } from '../../service/Inventorysystem.service';

@Component({
    selector: 'app-purchase-invoice',
    templateUrl: './purchase-invoice.component.html',
    styleUrls: ['./purchase-invoice.component.css']
})

export class PurchaseInvoiceComponent implements OnInit {
    private PurchaseOrder: any;
    private GRN: any;
    private PurchaseInvoice: any;

    // constructor(private formBuilder: FormBuilder, public InventorysystemServiceobj: InventorysystemService) {
    //     this.PurchaseInvoiceForm = this.formBuilder.group(
    //         {
    //             'InvoiceNo': ['', Validators.required],
    //             'Status': ['', Validators.required],
    //             'InvoiceDate': ['', Validators.required],
    //             'SupplierId': ['', Validators.required],
    //             'Remarks': ['', Validators.required],
    //             'ItemNo': ['', Validators.required],
    //             'BetchNo': ['', Validators.required],
    //             'PackType': ['', Validators.required],
    //             'PackSize': ['', Validators.required],
    //             'ExpryDate': ['', Validators.required],
    //             'Quantity': ['', Validators.required],
    //             'Rate': ['', Validators.required],
    //             'SellingPrice': ['', Validators.required]
    //         }
    //     )
    // }

    constructor(private InventoryService: InventorysystemService) {
    }

    async ngOnInit() {
        this.PurchaseOrder = await this.InventoryService.GetPurchaseOrders();
        this.GRN = await this.InventoryService.GetGRN();
        this.PurchaseInvoice = await this.InventoryService.GetPurchaseInvoices();
    }

    async AddPurchaseInvoice(value) {
        await this.InventoryService.AddPurchaseInvoice(value);
    }

    async UpdatePurchaseInvoice(value) {
        await this.InventoryService.UpdatePurchaseInvoice(value.Key);
    }

    async DeletePurchaseInvoice(value) {
        await this.InventoryService.DeletePurchaseInvoice(value.Key.PurchaseInvoiceId);
    }


}
