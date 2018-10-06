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
    private SalesOrders : SalesOrder;
    private InventoryItems : InventoryItem;
    private Items : InventoryItem[] = [];
    private aaa : InventoryItem[] = []; 
    private FilteredItems : InventoryItem;
    private GridDataSource : any;
    private LookUpDataSource : any;



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
            InventoryItems : [''],
            itemCode:['']
        });
    }
public xcx : any;
  async  ngOnInit() {
        this.PharmacyService.GetSalesOrders().subscribe((res : SalesOrder) => this.SalesOrders = res);
      this.xcx =  this.PharmacyService.GetInventoryItems().subscribe((result : InventoryItem ) => { this.InventoryItems = result; console.log(this.InventoryItems); this.FilteredItems = result; this.aaa.push(result); console.log(this.aaa); });

         
       await this.PharmacyService.GetInventoryItemstest();
       this.ovais = this.PharmacyService.GetInventoryItemstestvar;
       console.log(this.ovais);

   
    }

    // getcellvalue(value)
    // {
    //     console.log(value);
    //     console.log(this.ovais);

    // }
  
    public data : any  = {};
    public arraydata =[];
    getcellvalue(value)
    {
        console.log(value);
        this.data = this.ovais.find(x=> x.itemCode === value);
        console.log(this.data)
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

    onsubmit(value , rate)
    {
        this.arraydata.push(this.data);
        console.log( this.total);

        this.total += Number.parseInt(rate);
        console.log(rate);
        console.log(value);
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
        this.IssuanceForm.value.InventoryItems = this.Items;
        console.log(this.IssuanceForm.value);
        console.log(this.ovais);

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
