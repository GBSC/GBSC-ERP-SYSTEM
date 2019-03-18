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

  public currentdate: any;


  constructor(public storeService: StoreService, public authService: AuthService) {
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


  ngOnInit() {

    this.currentdate = this.formatDate(new Date());
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
    // this.storeService.shopCensusDetailReport(this.companyId, this.userId, '0001-01-01', '2020-01-01').subscribe(res => {
    //    this.rowData = res;
    //   console.log(this.rowData);
    // });


    this.rowData = [
      {
      serialNumber: 1,
      storeName: "Shan 13-3-2019",
      shopkeeperName: "Tyregtr",
      contactNumber: "79797979797",
      address: "hshssjj",
      cnic: "9494464994949",
      distributor: "Aron Distributor",
      city: "Karachi",
      area: "Aron Area",
      region: "Karachi Region",
      territory: "Aron Territory",
      section: "Aron Section",
      subsection: "Aron Subsection",
      dsf: "Aron Paul",
      category: "Retail",
      classification: "Less then 100",
      day: "Wednesday",
      createDate: "2019-03-13T13:33:00",
      createUser: "Aron Paul",
      imageLink: "StoreImages\Store_350\image-3a9097cc-c97d-42c3-a885-6b98c102f3d2.jpg",
      startTime: "13-03-2019",
      endTime: "13-03-2019",
      registrationYear: "2019",
      registrationMonth: "03",
      shopMode: "Active",
      shopNameCount: 1,
      activeStore: 1,
      close: 0
      },
      {
      serialNumber: 2,
      storeName: "Ghani",
      shopkeeperName: "Yasir",
      contactNumber: "88555555555",
      address: "Dhshs gbsv",
      cnic: "7657657657657",
      distributor: "Aron Distributor",
      city: "Karachi",
      area: "Aron Area",
      region: "Karachi Region",
      territory: "Aron Territory",
      section: "Aron Section",
      subsection: "Aron Subsection",
      dsf: "Aron Paul",
      category: "Retail",
      classification: "Less then 100",
      day: "Tuesday",
      createDate: "2019-03-05T16:34:00",
      createUser: "Aron Paul",
      imageLink: "StoreImages\Store_350\image-b0e43053-8f62-4f22-88bc-c3e048af44e7.jpg",
      startTime: "05-03-2019",
      endTime: "05-03-2019",
      registrationYear: "2019",
      registrationMonth: "03",
      shopMode: "Active",
      shopNameCount: 1,
      activeStore: 1,
      close: 0
      },
      {
      serialNumber: 3,
      storeName: "Yala gala",
      shopkeeperName: "Rafiq",
      contactNumber: "94994446464",
      address: "Jssks ksskskka ",
      cnic: "7673734357657",
      distributor: "Aron Distributor",
      city: "Karachi",
      area: "Aron Area",
      region: "Karachi Region",
      territory: "Aron Territory",
      section: "Aron Section",
      subsection: "Aron Subsection",
      dsf: "Aron Paul",
      category: "Retail",
      classification: "Less then 100",
      day: "Tuesday",
      createDate: "2019-03-05T16:17:00",
      createUser: "Aron Paul",
      imageLink: "StoreImages\Store_350\image-90e789f3-9169-4667-9fbd-c5f769c5754f.jpg",
      startTime: "05-03-2019",
      endTime: "05-03-2019",
      registrationYear: "2019",
      registrationMonth: "03",
      shopMode: "Closed",
      shopNameCount: 1,
      activeStore: 0,
      close: 1
      },
      {
      serialNumber: 4,
      storeName: "J.shan",
      shopkeeperName: "Unnecessary",
      contactNumber: "64649499446",
      address: "Bjjaba gbsc",
      cnic: "6464646464664",
      distributor: "Aron Distributor",
      city: "Karachi",
      area: "Aron Area",
      region: "Karachi Region",
      territory: "Aron Territory",
      section: "Aron Section",
      subsection: "Aron Subsection",
      dsf: "Aron Paul",
      category: "Retail",
      classification: "Less then 100",
      day: "Tuesday",
      createDate: "2019-03-05T16:17:00",
      createUser: "Aron Paul",
      imageLink: "StoreImages\Store_350\image-346cbfaa-7819-4bba-92fd-69f32f376ee2.jpg",
      startTime: "05-03-2019",
      endTime: "05-03-2019",
      registrationYear: "2019",
      registrationMonth: "03",
      shopMode: "Active",
      shopNameCount: 1,
      activeStore: 1,
      close: 0
      },
      {
      serialNumber: 5,
      storeName: "First Form",
      shopkeeperName: "formfor",
      contactNumber: "23423423423",
      address: "test address",
      cnic: "",
      distributor: "Aron Distributor",
      city: "Karachi",
      area: "Aron Area",
      region: "Karachi Region",
      territory: "Aron Territory",
      section: "Aron Section",
      subsection: "Aron Subsection",
      dsf: "Aron Paul",
      category: "LMT",
      classification: "500 & Above",
      day: "Wednesday, Tuesday, Monday",
      createDate: "2019-03-05T15:39:00",
      createUser: "Aron Paul",
      imageLink: "StoreImages\Store_350\Screen Shot 2019-02-08 at 6.14.31 PM.png",
      startTime: "05-03-2019",
      endTime: "05-03-2019",
      registrationYear: "2019",
      registrationMonth: "03",
      shopMode: "Active",
      shopNameCount: 1,
      activeStore: 1,
      close: 0
      },
      {
      serialNumber: 6,
      storeName: "Rest Form",
      shopkeeperName: "Shamss",
      contactNumber: "23232323232",
      address: "test",
      cnic: "",
      distributor: "Aron Distributor",
      city: "Karachi",
      area: "Aron Area",
      region: "Karachi Region",
      territory: "Aron Territory",
      section: "Aron Section",
      subsection: "Shan Gbsc Subsection",
      dsf: "Aron Paul",
      category: "LMT",
      classification: "500 & Above",
      day: "Thursday, Wednesday, Tuesday, Monday",
      createDate: "2019-03-05T15:39:00",
      createUser: "Aron Paul",
      imageLink: "StoreImages\Store_350\Screen Shot 2019-02-08 at 6.14.31 PM.png",
      startTime: "05-03-2019",
      endTime: "05-03-2019",
      registrationYear: "2019",
      registrationMonth: "03",
      shopMode: "Active",
      shopNameCount: 1,
      activeStore: 1,
      close: 0
      },
      {
      serialNumber: 7,
      storeName: "Ten Desk",
      shopkeeperName: "Irfan Test",
      contactNumber: "48",
      address: "Cv",
      cnic: "58",
      distributor: "Aron Distributor",
      city: "Karachi",
      area: "Aron Area",
      region: "Karachi Region",
      territory: "Aron Territory",
      section: "Aron Section",
      subsection: "Aron Subsection",
      dsf: "Aron Paul",
      category: "W/S",
      classification: "500 above",
      day: "Sunday, Friday, Thursday, Wednesday, Tuesday, Monday",
      createDate: "2019-02-26T14:25:57",
      createUser: "Aron Paul",
      imageLink: null,
      startTime: "26-02-2019",
      endTime: "26-02-2019",
      registrationYear: "2019",
      registrationMonth: "02",
      shopMode: "Closed",
      shopNameCount: 1,
      activeStore: 0,
      close: 1
      },
      {
      serialNumber: 8,
      storeName: "PingTen Desk",
      shopkeeperName: "Irfan Test",
      contactNumber: "48",
      address: "Cv",
      cnic: "58",
      distributor: "Aron Distributor",
      city: "Karachi",
      area: "Aron Area",
      region: "Karachi Region",
      territory: "Aron Territory",
      section: "Aron Section",
      subsection: "Aron Subsection",
      dsf: "Aron Paul",
      category: "W/S",
      classification: "500 above",
      day: "Sunday, Friday, Thursday, Wednesday, Tuesday",
      createDate: "2019-02-26T14:25:57",
      createUser: "Aron Paul",
      imageLink: null,
      startTime: "26-02-2019",
      endTime: "26-02-2019",
      registrationYear: "2019",
      registrationMonth: "02",
      shopMode: "Active",
      shopNameCount: 1,
      activeStore: 1,
      close: 0
      },
      {
      serialNumber: 9,
      storeName: "PingTen",
      shopkeeperName: "Irfan Test",
      contactNumber: "48",
      address: "Cv",
      cnic: "58",
      distributor: "Aron Distributor",
      city: "Karachi",
      area: "Aron Area",
      region: "Karachi Region",
      territory: "Aron Territory",
      section: "Aron Section",
      subsection: "Aron Subsection",
      dsf: "Aron Paul",
      category: "W/S",
      classification: "500 above",
      day: "Sunday, Friday, Thursday, Wednesday, Tuesday",
      createDate: "2019-02-26T14:25:57",
      createUser: "Aron Paul",
      imageLink: null,
      startTime: "26-02-2019",
      endTime: "26-02-2019",
      registrationYear: "2019",
      registrationMonth: "02",
      shopMode: "Active",
      shopNameCount: 1,
      activeStore: 1,
      close: 0
      },
      {
      serialNumber: 10,
      storeName: "Mest Oil Shop",
      shopkeeperName: "Irfan Test",
      contactNumber: "48",
      address: "Cv",
      cnic: "58",
      distributor: "Aron Distributor",
      city: "Karachi",
      area: "Aron Area",
      region: "Karachi Region",
      territory: "Aron Territory",
      section: "Aron Section",
      subsection: "Aron Subsection",
      dsf: "Aron Paul",
      category: "W/S",
      classification: "500 above",
      day: "Sunday, Friday, Thursday, Wednesday, Tuesday",
      createDate: "2019-02-26T14:25:57",
      createUser: "Aron Paul",
      imageLink: null,
      startTime: "26-02-2019",
      endTime: "26-02-2019",
      registrationYear: "2019",
      registrationMonth: "02",
      shopMode: "Closed",
      shopNameCount: 1,
      activeStore: 0,
      close: 1
      },
      {
      serialNumber: 11,
      storeName: "Rest House",
      shopkeeperName: "Irfan Test",
      contactNumber: "48",
      address: "Cv",
      cnic: "58",
      distributor: "Aron Distributor",
      city: "Karachi",
      area: "Aron Area",
      region: "Karachi Region",
      territory: "Aron Territory",
      section: "Aron Section",
      subsection: "Aron Subsection",
      dsf: "Aron Paul",
      category: "W/S",
      classification: "500 above",
      day: "Sunday, Friday, Thursday, Wednesday, Tuesday",
      createDate: "2019-02-26T14:25:57",
      createUser: "Aron Paul",
      imageLink: null,
      startTime: "26-02-2019",
      endTime: "26-02-2019",
      registrationYear: "2019",
      registrationMonth: "02",
      shopMode: "Active",
      shopNameCount: 1,
      activeStore: 1,
      close: 0
      },
      {
      serialNumber: 12,
      storeName: "Irfan Test122",
      shopkeeperName: "Irfan Test",
      contactNumber: "48",
      address: "Cv",
      cnic: "58",
      distributor: "Aron Distributor",
      city: "Karachi",
      area: "Aron Area",
      region: "Karachi Region",
      territory: "Aron Territory",
      section: "Aron Section",
      subsection: "Shan Gbsc Subsection",
      dsf: "Aron Paul",
      category: "W/S",
      classification: "500 above",
      day: "Sunday, Friday, Thursday, Wednesday, Tuesday",
      createDate: "2019-02-26T14:25:57",
      createUser: "Aron Paul",
      imageLink: null,
      startTime: "26-02-2019",
      endTime: "26-02-2019",
      registrationYear: "2019",
      registrationMonth: "02",
      shopMode: "Active",
      shopNameCount: 1,
      activeStore: 1,
      close: 0
      },
      {
      serialNumber: 13,
      storeName: "Irfan Test12",
      shopkeeperName: "Irfan Test",
      contactNumber: "48",
      address: "Cv",
      cnic: "58",
      distributor: "Aron Distributor",
      city: "Karachi",
      area: "Aron Area",
      region: "Karachi Region",
      territory: "Aron Territory",
      section: "Aron Section",
      subsection: "Shan Gbsc Subsection",
      dsf: "Gabby Paul",
      category: "W/S",
      classification: "500 above",
      day: "Sunday, Friday, Thursday, Wednesday, Tuesday",
      createDate: "2019-02-26T14:25:57",
      createUser: "Gabby Paul",
      imageLink: null,
      startTime: "26-02-2019",
      endTime: "26-02-2019",
      registrationYear: "2019",
      registrationMonth: "02",
      shopMode: "Closed",
      shopNameCount: 1,
      activeStore: 0,
      close: 0
      },
      {
      serialNumber: 14,
      storeName: "Irfan Test1",
      shopkeeperName: "Irfan Test",
      contactNumber: "48",
      address: "Cv",
      cnic: "58",
      distributor: "Aron Distributor",
      city: "Karachi",
      area: "Aron Area",
      region: "Karachi Region",
      territory: "Aron Territory",
      section: "Aron Section",
      subsection: "Shan Gbsc Subsection",
      dsf: "Dale Paul",
      category: "W/S",
      classification: "500 above",
      day: "Sunday, Friday, Thursday, Wednesday, Tuesday",
      createDate: "2019-02-26T14:25:57",
      createUser: "Dale Paul",
      imageLink: null,
      startTime: "26-02-2019",
      endTime: "26-02-2019",
      registrationYear: "2019",
      registrationMonth: "02",
      shopMode: "Closed",
      shopNameCount: 1,
      activeStore: 0,
      close: 0
      }
      ]

  }

   

  onCellValueChanged(item  ) {
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

  public Data = [];


  public sumTotalShop = [ ];
  public TShop = 0;


  public sumTotalActiveshop = [ ];
  public totalActiveshop = 0;

  
  public sumTotalCloseshop = [ ];
  public totalCloseshop = 0;

  public ActivePersent = 0;


    onBtPrint(param , value) {

    this.Data = []
    this.gridApi = param.api;
    
    this.gridApi.forEachNode(res => 
         {
          
           if(res.key  , res.aggData){
           let Group = res.key
            let dd = res.aggData;
            console.log(dd)
           let c = {
             Group : Group,
             TotalShop : " TotalShop   " + dd[0],
             TotalActive : " TotalActive   " + dd[1],
             TotalClosed : " TotalClosed   " + dd[2]
            }
           this.Data.push(c)
        
           }
           if(res.data){
            this.Data.push( res.data)

            this.sumTotalShop.push(res.data.shopNameCount)
            this.sumTotalActiveshop.push(res.data.activeStore)
            this.sumTotalCloseshop.push(res.data.close)
           }


            
             
        }
      );
      console.log( this.Data)
        console.log(this.sumTotalShop)

      for (let index = 0; index < this.sumTotalShop.length; index++) {

        this.TShop += (this.sumTotalShop[index])
      }


      
      for (let index = 0; index < this.sumTotalActiveshop.length; index++) {

        this.totalActiveshop += (this.sumTotalActiveshop[index])
      }

      for (let index = 0; index < this.sumTotalCloseshop.length; index++) {

        this.totalCloseshop += (this.sumTotalCloseshop[index])
      }

      console.log(this.TShop);


      this.ActivePersent = (this.totalActiveshop / (this.totalActiveshop + this.totalCloseshop) )*100
 
      console.log(this.ActivePersent);
      return  this.Data;
 


    // console.log(param);
  
    //   this.gridApi = param.api;
    //   let rowData = [];
    //   this.gridApi.forEachNode(node => 
    //      {
    //       if(node.data == undefined){
    //          console.log('hello')
    //       }
    //     rowData.push(node.data)}
    //   );
    //   console.log(rowData)
    //   return rowData;
      
      // console.log(this.gridApi)
      // param.api.expandAll();
      // var gridApi = this.gridApi;
    
      // this.setPrinterFriendly(gridApi)
      // print( );
      // this.setNormal(gridApi);
      // console.log(value)
  }

  btn(){
    var divToPrint=document.getElementById("printTable");
    let newWin= window.open("");
     newWin.document.write(divToPrint.outerHTML);
     newWin.print();
     newWin.close();
    
  }
  
  export(){
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
    eGridDiv.style.height = "200px";
    api.setDomLayout(null);
    api.collapseAll();
  }

}
