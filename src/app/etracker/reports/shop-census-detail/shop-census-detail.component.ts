// import { Component, OnInit, ElementRef, ViewChild, Renderer2, NgZone } from '@angular/core';
// import { AuthService, InventorysystemService, eTrackerUserService } from '../../../core';
// import { Region } from '../../../core/Models/Inventory/Setup/Region';
// import { Area } from '../../../core/Models/Inventory/Setup/Area';
// import { Distributor } from '../../../core/Models/Inventory/Setup/Distributor';
// import { Territory } from '../../../core/Models/Inventory/Setup/Territory';
// import { Employee } from '../../../core/Models/HRM/employee';
// import { City } from '../../../core/Models/HRM/city';

// import * as ko from "knockout";
// import { Html } from "devexpress-reporting/dx-web-document-viewer";
// import { environment } from '../../../../environments/environment';

import { StoreService } from '../../../../app/core/Services/ETracker/store.service';
import { DxPivotGridModule, DxCheckBoxModule, DxDataGridComponent } from 'devextreme-angular';
import PivotGridDataSource from 'devextreme/ui/pivot_grid/data_source';
import { AuthService } from '../../../../app/core';



import { AgGridNg2 } from 'ag-grid-angular';
import "ag-grid-enterprise";


import { NgModule, Component, ViewChild, AfterViewInit, enableProdMode , OnInit} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { DxChartModule, DxChartComponent, DxSelectBoxModule } from 'devextreme-angular';
import DataSource from 'devextreme/data/data_source';
import CustomStore from 'devextreme/data/custom_store';
import query from 'devextreme/data/query';
import DevExpress from 'devexpress-reporting/dx-web-document-viewer'
import { ToastrService } from 'ngx-toastr';
 

@Component({
  selector: 'app-shop-census-detail',
  templateUrl: './shop-census-detail.component.html' ,
  styleUrls: ['./shop-census-detail.component.scss']
})
export class ShopCensusDetailComponent implements OnInit {
  @ViewChild('agGrid') agGrid: AgGridNg2;


  public showHideFilter: boolean = false;
  public gridApi: any;
  public gridColumnApi: any;
  pivotGridDataSource: any;
  showDataFields: boolean = true;
  showRowFields: boolean = true;
  showColumnFields: boolean = true;
  showFilterFields: boolean = true;

  companyId: number;
  userId: number;
  public rowData: any;
  public rowData2: any;
  public columnDefs: any;
  public bottomOptions: any;
  public defaultColDef: any;
  public sideBar: any;

  public autoGroupColumnDef: any;
  public rowModelType: any;

  public currentdate: any;

  public dayone ="dali";

  constructor(public storeService: StoreService, public authService: AuthService , public toastr: ToastrService ) {
    this.companyId = authService.getUserCompanyId();
    this.userId = authService.getUserId();

    console.log(this.userId);

    this.columnDefs = [
      { headerName: 'Serial Number', field: 'serialNumber',  width: 100 ,filter: false, enableValue: true },
      { headerName: 'Store Name', field: 'storeName',  width: 100 , filter: false, enableValue: true },
      { headerName: 'Shop keeper Name', field: 'shopkeeperName',  width: 100 , filter: false, enableValue: true },
      { headerName: 'Contact', field: 'contactNumber',  width: 100 , filter: false, enableValue: true },
      { headerName: 'Address', field: 'address',  width: 100 , filter: false, enableValue: true },
      { headerName: 'N.I.C', field: 'cnic',  width: 100 , filter: false, enableValue: true },

      { headerName: "Region", field: "region",  width: 100 , enableRowGroup: true, enablePivot: true },
      { headerName: 'City', field: 'city',  width: 100 , enableRowGroup: true, enablePivot: true },
      { headerName: 'Area', field: 'area',  width: 100 , enableRowGroup: true, enablePivot: true },
      { headerName: 'Distributor', field: 'distributor',  width: 100 , enableRowGroup: true, enablePivot: true },
      { headerName: 'Territory', field: 'territory',  width: 100 , enableRowGroup: true, enablePivot: true },
      { headerName: 'section', field: 'section',  width: 100 , enableRowGroup: true, enablePivot: true, rowGroup: true },
      { headerName: 'Subsection', field: 'subsection',  width: 100 , enableRowGroup: true, enablePivot: true, rowGroup: true },
      { headerName: 'DSF', field: 'dsf',  width: 100 , enableRowGroup: true, enablePivot: true },
      { headerName: 'Visit Day', field: 'day',  width: 100 , enableRowGroup: true, enablePivot: true },
      { headerName: 'Store category', field: 'category',  width: 100 , enableRowGroup: true, enablePivot: true },
      { headerName: 'Store classification', field: 'classification',  width: 100 , enableRowGroup: true, enablePivot: true },
      { headerName: 'Create User', field: 'createUser',  width: 100 , enableRowGroup: true, enablePivot: true },
      { headerName: 'Create Date', field: 'createDate',  width: 100 , filter: false, enableValue: true },
      { headerName: 'Close Date', field: 'endTime',  width: 100 , filter: false, enableValue: true },
      { headerName: 'Registration Year', field: 'registrationYear',  width: 100 , enableRowGroup: true, enablePivot: true },
      { headerName: 'Registration Month', field: 'registrationMonth',  width: 100 , enableRowGroup: true, enablePivot: true },
      { headerName: 'shopMode', field: 'shopMode',  width: 100 , enableRowGroup: true, enablePivot: true },
      { headerName: 'Image Link', field: 'imageLink',  width: 100 , filter: false, enableValue: true },
      { headerName: 'Total Shop', valueGetter: 'data.shopNameCount',  width: 100 , cellClass: 'total-col', aggFunc: 'sum', editable: false },
      { headerName: 'Total Active', valueGetter: 'data.activeStore',  width: 100 , cellClass: 'total-col', aggFunc: 'sum', editable: false },
      { headerName: 'Total Closed', valueGetter: 'data.close',  width: 100 , cellClass: 'total-col', aggFunc: 'sum', editable: false }

    ];
    this.defaultColDef = {
      width: 100,
      allowedAggFuncs: ["sum", "min", "max", "random", "count"],
      sortable: true,
      resizable: true,
      filter: true
    };
    this.autoGroupColumnDef = { width: 150 };

    this.bottomOptions = [
      { headerName: 'Total Shop', field: 'shopNameCount', aggFunc: 'sum', editable: false }

    ];
    // this.rowModelType = "serverSide";
    // this.sideBar = "columns";
    //      this.rowModelType = "serverSide";


    //  this.columnDefs  = [
    // { headerName: "S No#",field: "serialNumber",width: 120, pivot: true,  enablePivot: true , rowGroup: true ,  enableRowGroup: true   },
    // {headerName: 'Store Name', field: 'storeName' , width: 90 },
    // {headerName: 'Shopkeeper Name', field: 'shopkeeperName',width: 110 }
    //   ]; 
    //   this.defaultColDef = {
    //     sortable: true,
    //     resizable: true,
    //     filter: true
    //   };
    //  this.sideBar = "columns";
    //   console.log(this.sideBar);
  }

public usr : any;
  ngOnInit() {
    console.log(this.userId);
    this.currentdate = this.formatDate(new Date());

    // this.employeeServiceObj.GetEmployee(this.userId).subscribe(res => {
    //   this.usr = res;
    //   console.log(this.usr)
    // })
    // console.log('asdas');
    // console.log(this.companyId);
    // console.log(this.userId);
    // let usrId = 350;
    // console.log(usrId)
    //     this.storeService.shopCensusDetailReport(this.companyId,usrId).subscribe(res => {
    //        this.rowData = res;
    //       console.log(this.rowData);
    //     });
  }

  formatDate(date: Date) {
    return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
}
public formDate  ='';

public toDate   ='';
  public abc: any = [];
  onGridReady(fromdate, todate ,params) {
    console.log(fromdate);
    console.log(todate);
        if(fromdate == '' &&  todate != ''){
          fromdate = '1-1-0001';
          console.log(todate);
          todate = todate
          this.formDate = fromdate;
          this.toDate = todate
          console.log(fromdate);
         
          this.storeService.shopCensusDetailReport(this.companyId, this.userId,this.formDate, this.toDate).subscribe(res => {
            this.rowData = res;
           console.log(this.rowData);
         });    
        
    }
    else if(fromdate != '' &&  todate != ''){
      this.formDate = fromdate 
      this.toDate = todate
      console.log(this.companyId);
      console.log(this.userId);
      let usrId = 350;
      console.log(usrId)
  
        this.storeService.shopCensusDetailReport(this.companyId, this.userId,this.formDate, this.toDate).subscribe(res => {
           this.rowData = res;
          console.log(this.rowData);
        });  
 
    }
    else if(fromdate == '' &&  todate == ''){
      this.formDate = '1-1-0001' 
      this.toDate = this.currentdate
      console.log(this.companyId);
      console.log(this.userId);
      let usrId = 350;
      console.log(usrId)
  
        this.storeService.shopCensusDetailReport(this.companyId, this.userId,this.formDate, this.toDate).subscribe(res => {
           this.rowData = res;
          console.log(this.rowData);
        });  
 
    }
    else{
      this.toastr.error("please Selet Both Dates")
    }
      
      // this.gridApi.expandAll();

  }

   

  onCellValueChanged(item) {
    console.log(item);
    item.newOrModified="Modified";
    console.log(item);
   }


  toggleFilter() {
    this.showHideFilter = !this.showHideFilter;
  }

  // onBtPrint(value, value2) {
  //   console.log(value)
  //   console.log(value2)
  //   var gridApi = this.gridApi;
  //   window.print();
    
  //   // this.setPrinterFriendly(gridApi);
  //   // setTimeout(function() {
  //   //   window.print();
  //   //     // this.printDiv(value);
  //   //   // this.setNormal(gridApi);
  //   // }, 2000);
  // }

  //   onBtPrint(agGrid) {

  //     console.log(agGrid)
  // //   // var gridApi = this.gridApi;
  // //   // this.setPrinterFriendly(gridApi);
  // //   // setTimeout(function() {
  // //   //   print();
  // //   //   this.setNormal(gridApi);
  // //   // }, 2000);
  //   }

  // printData() {
  //    var divToPrint=document.getElementById("printTable");
  //  let  newWin = window.open("");
  //    newWin.document.write(divToPrint.outerHTML);
  //    newWin.print();
  //    newWin.close();
  // }
    //   onBtPrint(param) {
    //   var params = {
    //     //skipHeader: getBooleanValue("#skipHeader"),
    //     columnGroups: this.getBooleanValue("#columnGroups"),
        
    //     skipFooters: this.getBooleanValue("#skipFooters"),
    //     skipGroups: this.getBooleanValue("#skipGroups"),
    //     skipPinnedTop: this.getBooleanValue("#skipPinnedTop"),
    //     skipPinnedBottom: this.getBooleanValue("#skipPinnedBottom"),
    //     allColumns: this.getBooleanValue("#allColumns"),
    //     onlySelected: this.getBooleanValue("#onlySelected"),
    //     suppressQuotes: this.getBooleanValue("#suppressQuotes")//,
    //     //fileName: document.querySelector("#fileName").nodeValue,
    //    // columnSeparator: document.querySelector("#columnSeparator").nodeValue
    //   };
  
    //   this.gridApi = param.api;

    //   param.api.expandAll();
    //   console.log(params)
    //   console.log(this.gridApi)

      
    // //   let divToPrint =document.getElementById("printableArea");
    // //   console.log(divToPrint);
    // // let  newWin= window.open("");
    // //      newWin.document.write();
    // //   newWin.print();
    // //   newWin.close();

    //  // this.gridApi.exportDataAsCsv(params); 
    //    print();
    //  // console.log(  this.gridApi.exportDataAsCsv(params))
    //   // this.gridApi.setDomLayout(params);
    //    // param.api.print();
            
    // } 

      getBooleanValue(cssSelector) {
        console.log(cssSelector)
       return document.querySelector(cssSelector).checked === true;
    }
    



    // setNormal(api) {
    //   var eGridDiv = document.querySelector("myGrid");
    //   eGridDiv.style.width = "600px";
    //   eGridDiv.style.height = "200px";
    //   api.setDomLayout(null);
    // }

//     onBtPrint(value , value2 ,printea, value3){
//     console.log(value);
//     console.log(value2);
//     console.log(printea);
//     console.log(value3);
//     console.log(   this.gridApi );
//     console.log(   this.gridColumnApi );
// //    var divToPrint = document.getElementById("printableArea");
// //   let  newWin =  window.open("");
// //    newWin.document.write(divToPrint.outerHTML);
// //    newWin.print();
// //    newWin.close();
//   }

  // public xy : any;
  // start(param){
  //   console.log(param)
  //     this.gridApi = param.api;
  //     this.gridColumnApi = param.columnApi;
  //     param.api.expandAll();
  // }



  // printDiv(value) {
  //   var printContents = document.getElementById(value).innerHTML;
  //   var originalContents = document.body.innerHTML;
  //   document.body.innerHTML = printContents;
  //   window.print();
  //   document.body.innerHTML = originalContents;
  // }

  

   


  // persentage (){
  //   console.log(this.rowData);
  //   this.rowData.forEach(element => {
  //       console.log(element);
  //     let x =  element.serialNumber *100/2
  //     console.log(x);
  //   });
  // }
  // autoGroupColumnDef = {
  //     headerName: 'Store Name',
  //     field: 'storeName',
  //     cellRenderer: 'agGroupCellRenderer',
  //     cellRendererParams: {
  //         checkbox: true
  //     }
  // };

  public Data : any = [] ;


  public sumTotalShop = [ ];
  public TShop = 0;


  public sumTotalActiveshop = [ ];
  public totalActiveshop = 0;

  
  public sumTotalCloseshop = [ ];
  public totalCloseshop = 0;

  public ActivePersent = 0;
  public groupSummary : any  = {};


    onBtPrint(param , value) {
 
      console.log(param)
      this.Data = []
      this.gridApi = param.api;
      console.log(this.gridApi)
      this.groupSummary = {}
      console.log(this.groupSummary)
      this.gridApi.forEachNode(res => 
     
    {
       console.log(res)

         if(res.leafGroup == false){
           console.log(this.groupSummary)
          if(this.groupSummary !== {}) {
            this.Data.push(this.groupSummary)
           }   
   
        
            let Group = res.key
            let dd = res.aggData;
            console.log(Group)
            // this.Data.push(groupSummary)
          let  c = {
            Group : Group  // ,
              // TotalShop : dd[0],
              // TotalActive : dd[1],
              // TotalClosed : dd[2]                     
           }

           this.groupSummary = {
              TotalShop : dd[0]+" "+"TotalShop",
              TotalActive :dd[1]+" "+"TotalActive",
              TotalClosed :dd[2]+" "+"TotalClosed"                     
           }

          this.Data.push(c)

          }

          if(res.leafGroup == true){
            let Group = res.key
            let x= {
              subGroup : Group,
            }
             this.Data.push(x)
          }

         

         
         if(res.data){
          this.Data.push( res.data)
          
          // this.sumTotalShop.push(res.data.shopNameCount)
          // this.sumTotalActiveshop.push(res.data.activeStore)
          // this.sumTotalCloseshop.push(res.data.close)
         }
            
          
           
      },
      
    ) ;
    if(this.groupSummary !== {}) {
      this.Data.push(this.groupSummary)
     }   

    console.log( this.Data)
     
   
    //   console.log(this.sumTotalShop)

    // for (let index = 0; index < this.sumTotalShop.length; index++) {

    //   this.TShop += (this.sumTotalShop[index])
    // }


    
    // for (let index = 0; index < this.sumTotalActiveshop.length; index++) {

    //   this.totalActiveshop += (this.sumTotalActiveshop[index])
    // }

    // for (let index = 0; index < this.sumTotalCloseshop.length; index++) {

    //   this.totalCloseshop += (this.sumTotalCloseshop[index])
    // }

    // console.log(this.TShop);


    // this.ActivePersent = (this.totalActiveshop / (this.totalActiveshop + this.totalCloseshop) )*100

    // console.log(this.ActivePersent);

    sessionStorage.setItem( "previewData" , JSON.stringify(this.Data))
    console.log(this.formDate);
    console.log(this.toDate);
    console.log(this.gridApi);
    window.open('http://erp.gbscsolutions.com/#/etracker/reports/shop-status-detail-report/'+ this.userId+'/'+this.formDate+'/'+this.toDate)
  }

 

  btn(){
    var divToPrint=document.getElementById("printTable");
    let newWin= window.open("");
     newWin.document.write(divToPrint.outerHTML);
     newWin.print();
     newWin.close();
    
  }
  
  export(param){
    this.gridApi =   param.api;
    console.log( this.gridApi)
    this.gridApi.exportDataAsCsv();
  }

 
  

  // onColumnPinned(e) {
  //   console.log( e);
  //   console.log("Column Event: " + e.type, e);
  // }

  // onColumnVisible(e) {
  //   console.log( e);
  //   console.log("Column Event: " + e.type, e);
  // }

  // onColumnResized(e) {
  //   console.log( e);
  //   console.log("Column Event: " + e.type, e);
  // }

  // onColumnMoved(e) {
  //   console.log( e);
  //   console.log("Column Event: " + e.type, e);
  // }

  // onColumnRowGroupChanged(e) {
  //   console.log( e);
  //   console.log("Column Event: " + e.type, e);
  // }

  // onColumnPivotChanged(e) {
  //   console.log("Column Event: " + e.type, e);
  // }



  // onNewColumnsLoaded(e) {
  //   console.log( e);
  //   console.log("Column Event: " + e.type, e);
  // }

  
  displayedColumnsChanged(e) {
    console.log( e);
    console.log("Column Event: " + e.type, e);
  }


 
  setPrinterFriendly(api) {
    var eGridDiv = document.getElementById("myGrid");
    eGridDiv.style.width = "1050px";
    eGridDiv.style.height = "200px";
    api.setDomLayout("print");
    console.log(eGridDiv.innerText)
    console.log(eGridDiv.innerHTML)
  }

  

  setNormal(api) {
    var eGridDiv = document.getElementById("myGrid");
    eGridDiv.style.width = "1050px";
    eGridDiv.style.height = "600px";
    api.setDomLayout(null);
    api.collapseAll();
  }

}
