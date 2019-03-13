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

import { Component, OnInit, ViewChild } from '@angular/core';
import { StoreService } from '../../../../app/core/Services/ETracker/store.service';
import { AuthService } from '../../../../app/core';
import { AgGridNg2 } from 'ag-grid-angular';
import "ag-grid-enterprise";


@Component({
  selector: 'app-shop-census-detail',
  templateUrl: './shop-census-detail.component.html',
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

  constructor(public storeService: StoreService, public authService: AuthService) {
    this.companyId = authService.getUserCompanyId();
    this.userId = authService.getUserId();
    console.log(this.userId);

    this.columnDefs = [
      { headerName: '#S.No', field: 'serialNumber',  width: 30 ,filter: false, enableValue: true },
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
      { headerName: 'Total Shop', valueGetter: 'data.shopNameCount',  width: 50 , cellClass: 'total-col', aggFunc: 'sum', editable: false },
      { headerName: 'Total Active', valueGetter: 'data.activeStore',  width: 50 , cellClass: 'total-col', aggFunc: 'sum', editable: false },
      { headerName: 'Total Closed', valueGetter: 'data.close',  width: 50 , cellClass: 'total-col', aggFunc: 'sum', editable: false }

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


  ngOnInit() {
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
  public abc: any = [];
  onGridReady(fromdate, todate ,params) {
    console.log(fromdate);
    console.log(todate);

    console.log(this.companyId);
    console.log(this.userId);
    let usrId = 350;
    console.log(usrId)
    console.log('0001-01-01')   
     console.log('2020-01-01')

     

      this.storeService.shopCensusDetailReport(this.companyId, this.userId, '0001-01-01', '2020-01-01').subscribe(res => {
         this.rowData = res;
        console.log(this.rowData);
       });




  }

  onColumnRowGroupChanged(value2) {
    console.log(value2);
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


  onBtPrint(param) {

    this.gridApi = param.api;
    console.log(this.gridApi)
    param.api.expandAll();
    var gridApi = this.gridApi;
    
    this.setPrinterFriendly(gridApi)
    print();
      this.setNormal(gridApi);
    
  }
  
  setPrinterFriendly(api) {
     var eGridDiv = document.getElementById("myGrid");
    eGridDiv.style.width = "1050px";
    eGridDiv.style.height = "100%";
    api.setDomLayout("print");
    var eGridDiv = document.getElementById("#myGrid")
    eGridDiv.style.width = "";  
    eGridDiv.style.height = "";
  }

  
 

  setNormal(api) {
    var eGridDiv = document.getElementById("#myGrid")
     eGridDiv.style.width = "1300px";
    eGridDiv.style.height = "600px";
    api.setDomLayout(null);
    api.collapseAll();
  }

}
