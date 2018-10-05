import { Component, OnInit } from '@angular/core';

import { PharmacyService } from '../../core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { InventoryItem } from '../../core/Models/Pharmacy/InventoryItem';
import { SalesOrder } from '../../core/Models/Pharmacy/SalesOrder';

@Component({
    selector: 'app-issuance',
    templateUrl: './issuance.component.html',
    styleUrls: ['./issuance.component.css']
})
export class IssuanceComponent implements OnInit {
    
    private IssuanceForm : FormGroup;
    private SalesOrders : SalesOrder;
    private InventoryItems : InventoryItem;
    private Items : InventoryItem[] = [];
    private FilteredItems : InventoryItem;
    private GridDataSource : any;
    private LookUpDataSource : any;

    constructor(private PharmacyService: PharmacyService, private FormBuilder : FormBuilder) {
        this.onPopupShown = this.onPopupShown.bind(this);
        this.onPopupHide = this.onPopupHide.bind(this);
        this.IssuanceForm = this.FormBuilder.group({
            MRN : [''],
            IssuanceNo:[''],
            IssuanceDate : [''],
            SlipNo : [''],
            PatientName : [''],
            SpouseName : [''],
            Remarks:[''],
            Department :[''],
            InventoryItems : ['']
        });
    }

    ngOnInit() {
        this.PharmacyService.GetSalesOrders().subscribe((res : SalesOrder) => this.SalesOrders = res);
        this.PharmacyService.GetInventoryItems().subscribe((result : InventoryItem ) => { this.InventoryItems = result; this.FilteredItems = result; });
    }

    async onPopupShown() {
        ///console.log("Popup Shown");
        //this.GridDataSource = this.InventoryItems;
        this.LookUpDataSource = this.FilteredItems;
    }

    async onPopupHide() {
        //console.log("Popup Hidden");
        //this.GridDataSource = this.Items;
        this.LookUpDataSource = this.Items;
    }

    async AddSalesOrder(value) {
        console.log(value);
        await this.PharmacyService.AddSalesOrder(value).toPromise();
        this.PharmacyService.GetSalesOrders().subscribe((res : SalesOrder) => this.SalesOrders = res);
    }

    async UpdateSalesOrder(value) {
        return await this.PharmacyService.UpdateSalesOrder(value.Key).toPromise();
    }

    async DeleteSalesOrder(value) {
        return await this.PharmacyService.DeleteSalesOrder(value.Key.SalesOrderId).toPromise();
    }

    SubmitSalesOrderForm(value) {
        console.log(value);
    }

    onsubmit(value)
    {
        console.log(value);
    }
    
    AddItem(value)
    {
        var a : any  = this.FilteredItems;
        this.FilteredItems = a.filter(a => a.itemCode != value.data.itemCode);
    }

    addfinal()
    {
        this.IssuanceForm.value.InventoryItems = this.Items;
        console.log(this.IssuanceForm.value);
    }

}
