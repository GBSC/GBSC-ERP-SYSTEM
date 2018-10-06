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
    
    private IssuanceForm : FormGroup;
    private InventoryItemForm : FormGroup;
    private SalesOrders : SalesOrder;
    private InventoryItems : InventoryItem;
    private Items : InventoryItem[] = [];
    private aaa : InventoryItem[] = []; 
    private FilteredItems : InventoryItem;
    private GridDataSource : any;
    private LookUpDataSource : any;
    private SalesOrderItemForm : FormGroup;



    private ovais : any;

 

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
            InventoryItems : this.FormBuilder.array([])
            // itemCode:['']
        });

        this.InventoryItemForm = FormBuilder.group({
           Description:[''],
           PackType:[''],
           PackSize:[''],
           PackQuantity:[''],
           Rate :[''],
           InventoryItemId :[''],
           OrderUnitQuantity :[''],
           ItemTotalAmount :[''],
        });

        // this.DispForm = FormBuilder.group({
        //     Description:[''],
        //     PackType:[''],
        //     PackSize:[''],
        //     PackQuantity:[''],
        //     Rate :['']
        //     InventoryItemId :[''],
        //     OrderUnitQuantity :[''],
        //     ItemTotalAmount :[''],
        //  });

        // this.SalesOrderItemForm = FormBuilder.group({
        //     InventoryItem : [this.InventoryItemForm],
        //     OrderUnitQuantity :[''],
        //     ItemTotalAmount :[''],

        //  });

     
    }
public xcx : any;
  async  ngOnInit() {
        this.PharmacyService.GetSalesOrders().subscribe((res : SalesOrder) => this.SalesOrders = res);
      this.xcx =  this.PharmacyService.GetInventoryItems().subscribe((result : InventoryItem ) => { this.InventoryItems = result; console.log(this.InventoryItems); this.FilteredItems = result; this.aaa.push(result); console.log(this.aaa); });

         
      this.ovais = await this.PharmacyService.GetInventoryItemstest();
       console.log(this.ovais);

   
    }


 
  
    public data : any  = {};
    public arraydata =[];
    getcellvalue(value)
    {
        console.log(value);
        this.data = this.ovais.find(x=> x.itemCode === value);
        // this.InventoryItemForm.value.Description = this.data.description;
        // this.InventoryItemForm.value.PackType = this.data.packType.name;
        // this.InventoryItemForm.value.PackSize = this.data.packSize.size;
        console.log(this.data);

        // this.arraydata.push(this.data);

    }

    public total = 0;


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
        console.log(value)

    }
    public desc : any;
    onsubmitInventeryDetail(value , rate , Description)
    {
        let data = value;
        console.log(value);
        this.InventoryItemForm.value.Description = this.data.description;
        this.InventoryItemForm.value.PackType = this.data.packType.name;
        this.InventoryItemForm.value.PackSize = this.data.packSize.size;
        // let x : number = 45.4646;
        // console.log(x.toFixed(0));
        this.InventoryItemForm.value.PackQuantity =  (this.InventoryItemForm.value.OrderUnitQuantity / this.InventoryItemForm.value.PackSize).toFixed(0);
        console.log(this.InventoryItemForm.value.PackQuantity);

        console.log(this.InventoryItemForm.value.Description);
        console.log(this.InventoryItemForm.value);
        this.arraydata.push(data);

 
 
        // console.log( this.total);
        // this.total += Number.parseInt(rate);
        // console.log( this.total);
        // console.log(rate);
        console.log(this.IssuanceForm.value);
        console.log(this.arraydata);
        // console.log(value);
    }
    
    AddItem(value)
    {
        var a : any  = this.FilteredItems;
        this.FilteredItems = a.filter(a => a.itemCode != value.data.itemCode);
    }

    remove(index) {
        this.arraydata.splice(index, 1);
    }

    addfinal()
    {


        
        delete this.InventoryItemForm.value.Description;
        delete this.InventoryItemForm.value.PackQuantity;
        delete this.InventoryItemForm.value.PackSize;
        delete this.InventoryItemForm.value.PackType;
        delete this.InventoryItemForm.value.Rate;

        this.IssuanceForm.value.InventoryItems = this.arraydata;
        console.log(this.IssuanceForm.value);

        // this.IssuanceForm.value.InventoryItems = this.Items;
        // console.log(this.IssuanceForm.value);
        // console.log(this.ovais);

    }
    // setAreaValue(rowData: any, value: any): void {
    //     console.log(rowData)
    //     console.log(value);
    //     // rowData.inventoryItemId = null;
    //     //  (<any>this).defaultSetCellValue(rowData, value);
    // }

    public val : any;
        setAreaValue(rowData: any,value : any) : void {
            this.val = value;
            console.log(value);
            console.log(this.ovais);
                    // console.log(this.aaa);
                    // let dddd = this.ovais.find(t => t.itemCode === value);
                    // console.log(dddd)
            // this.aaa = this.xcx.find(x=> x.itemCode == value)
           //  console.log(this.aaa.find(a => a.itemCode === value));
 
        }
 

}
