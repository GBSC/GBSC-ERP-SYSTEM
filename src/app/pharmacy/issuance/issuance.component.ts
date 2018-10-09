import { Component, OnInit, ViewChild } from '@angular/core';
import { DxSelectBoxComponent } from 'devextreme-angular';

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

    private IssuanceForm: FormGroup;
    private InventoryItemForm: FormGroup;
    private SalesOrders: SalesOrder;
    private InventoryItems: InventoryItem;
    private Items: InventoryItem[] = [];
    private aaa: InventoryItem[] = [];
    private FilteredItems: InventoryItem;
    private GridDataSource: any;
    private LookUpDataSource: any;
    private SalesOrderItemForm: FormGroup;
    private filterItems: InventoryItem[];



    private AllItems: any;
    private AllCustomers : any;
 


    constructor(private PharmacyService: PharmacyService, private FormBuilder: FormBuilder) {
 

        this.IssuanceForm = this.FormBuilder.group({
            Department: [''],
            Remarks: [''],
            OrderAmount: [''],
            SlipNumber: [''],
            IssuanceNo: [''],
            CRN: [''],
            IssuanceDate: [''],
            PatientName: [''],
            SpouseName: [''],

            SalesOrderItems: this.FormBuilder.array([]),
            // itemCode:['']
        });

        this.InventoryItemForm = FormBuilder.group({
            Description: [''],
            PackType: [''],
            PackSize: [''],
            PackQuantity: [''],
            UnitPrice: [''],
            InventoryItemId: [''],
            OrderUnitQuantity: [''],
            ItemTotalAmount: [''],
        });


    }
 
    async  ngOnInit() {
        this.PharmacyService.GetSalesOrders().subscribe((res: SalesOrder) => this.SalesOrders = res);
        this.PharmacyService.GetInventoryItems().subscribe((result: InventoryItem) => { this.InventoryItems = result; console.log(this.InventoryItems); this.FilteredItems = result; this.aaa.push(result); console.log(this.aaa); });
        this.AllItems = await this.PharmacyService.GetInventoryItemstest();
        this.filterItems = this.AllItems;
        console.log(this.AllItems);

        this.PharmacyService.getCustomers().subscribe(result => this.AllCustomers = result);
    }
   public customerdata : any ={};
    getcellvalueForCustomer(value){
        console.log(value);
        this.customerdata = this.AllCustomers.find(x => x.crn == value);
        console.log(this.customerdata);

    }




    public data: any = {};
    public arraydata = [];
    getcellvalue(value) {
        console.log(value);
        this.data = this.AllItems.find(x => x.inventoryItemId == value);
        console.log(this.AllItems);

        // this.InventoryItemForm.value.Description = this.data.description;
        // this.InventoryItemForm.value.PackType = this.data.packType.name;
        // this.InventoryItemForm.value.PackSize = this.data.packSize.size;
        console.log(this.data);
         // this.arraydata.push(this.data);

    }

    public total = 0;


 

    // async AddSalesOrder(value) {
    //     console.log(value);
    //     await this.PharmacyService.AddSalesOrder(value).toPromise();
    //     this.PharmacyService.GetSalesOrders().subscribe((res: SalesOrder) => this.SalesOrders = res);
    // }

    async UpdateSalesOrder(value) {
        return await this.PharmacyService.UpdateSalesOrder(value.Key).toPromise();
    }

    async DeleteSalesOrder(value) {
        return await this.PharmacyService.DeleteSalesOrder(value.Key.SalesOrderId).toPromise();
    }

    SubmitSalesOrderForm(value) {
        console.log(value);
    }

    onsubmit(value) {
        console.log(value)

    }
    public desc: any;
    onsubmitInventeryDetail(value) {
        console.log(this.data);
        // let item = this.data.find(d => d.inventoryItemId === value.inventoryItemId);
        let data = value;

        if (!this.data.packType) {
            this.data.packType = {};
            this.data.packType.name = '';
            this.InventoryItemForm.value.PackType = this.data.packType.name;
        } else {
            this.InventoryItemForm.value.PackType = this.data.packType.name;
        }
        this.InventoryItemForm.value.Description = this.data.description;
        this.InventoryItemForm.value.PackSize = this.data.packSize.size;
        this.InventoryItemForm.value.PackQuantity = (this.InventoryItemForm.value.OrderUnitQuantity / this.InventoryItemForm.value.PackSize).toFixed(0);
        this.InventoryItemForm.value.UnitPrice = this.data.unitPrice || '';
        this.InventoryItemForm.value.ItemTotalAmount = this.InventoryItemForm.value.PackQuantity * this.InventoryItemForm.value.UnitPrice;

        this.filterItems = this.filterItems.filter(a => a.itemCode != this.data.itemCode);

        this.arraydata.push(data);
      //  this.InventoryItemForm.value.inventoryItemId = this.data.name;
        this.total += Number.parseInt(this.InventoryItemForm.value.ItemTotalAmount);
        this.InventoryItemForm.reset();
    }

    AddItem(value) {
        var a: any = this.FilteredItems;
        this.FilteredItems = a.filter(a => a.itemCode != value.data.itemCode);
    }

    remove(index, value) {
        let item = this.arraydata.splice(index, 1);
        console.log(item)
        console.log(value);
        this.total -= Number.parseInt(value);

    }
    addfinal() {
        this.arraydata.filter(t => {
            delete t.Description;
            delete t.PackQuantity;
            delete t.PackSize;
            delete t.PackType;
            delete t.Rate;
        });

     delete  this.IssuanceForm.value.IssuanceNo;
     delete  this.IssuanceForm.value.MRN;
     delete  this.IssuanceForm.value.IssuanceDate;
     delete  this.IssuanceForm.value.PatientName;
     delete  this.IssuanceForm.value.SpouseName;

         this.IssuanceForm.value.SalesOrderItems = this.arraydata;
        console.log(this.IssuanceForm.value);
        this.IssuanceForm.value.OrderAmount = this.total;
       this.PharmacyService.AddSalesOrder(this.IssuanceForm.value).subscribe(r => console.log(r));
    }

}
