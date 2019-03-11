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
import { DxPivotGridModule, DxCheckBoxModule } from 'devextreme-angular';
import PivotGridDataSource from 'devextreme/ui/pivot_grid/data_source';
import { AuthService } from '../../../../app/core';


import { HttpClient } from '@angular/common/http';
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
      { headerName: 'Serial Number', field: 'serialNumber', filter: false, enableValue: true },
      { headerName: 'Store Name', field: 'storeName', filter: false, enableValue: true },
      { headerName: 'Shop keeper Name', field: 'shopkeeperName', filter: false, enableValue: true },
      { headerName: 'Contact', field: 'contactNumber', filter: false, enableValue: true },
      { headerName: 'Address', field: 'address', filter: false, enableValue: true },
      { headerName: 'N.I.C', field: 'cnic', filter: false, enableValue: true },

      { headerName: "Region", field: "region", enableRowGroup: true, enablePivot: true },
      { headerName: 'City', field: 'city', enableRowGroup: true, enablePivot: true },
      { headerName: 'Area', field: 'area', enableRowGroup: true, enablePivot: true },
      { headerName: 'Distributor', field: 'distributor', enableRowGroup: true, enablePivot: true },
      { headerName: 'Territory', field: 'territory', enableRowGroup: true, enablePivot: true },
      { headerName: 'section', field: 'section', enableRowGroup: true, enablePivot: true, rowGroup: true },
      { headerName: 'Subsection', field: 'subsection', enableRowGroup: true, enablePivot: true, rowGroup: true },
      { headerName: 'DSF', field: 'dsf', enableRowGroup: true, enablePivot: true },
      { headerName: 'Visit Day', field: 'day', enableRowGroup: true, enablePivot: true },
      { headerName: 'Store category', field: 'category', enableRowGroup: true, enablePivot: true },
      { headerName: 'Store classification', field: 'classification', enableRowGroup: true, enablePivot: true },
      { headerName: 'Create User', field: 'createUser', enableRowGroup: true, enablePivot: true },
      { headerName: 'Create Date', field: 'createDate', filter: false, enableValue: true },
      { headerName: 'Close Date', field: 'endTime', filter: false, enableValue: true },
      { headerName: 'Registration Year', field: 'registrationYear', enableRowGroup: true, enablePivot: true },
      { headerName: 'Registration Month', field: 'registrationMonth', enableRowGroup: true, enablePivot: true },
      { headerName: 'shopMode', field: 'shopMode', enableRowGroup: true, enablePivot: true },
      { headerName: 'Image Link', field: 'imageLink', filter: false, enableValue: true },
      { headerName: 'Total Shop', valueGetter: 'data.shopNameCount', cellClass: 'total-col', aggFunc: 'sum', editable: false },
      { headerName: 'Total Active', valueGetter: 'data.activeStore', cellClass: 'total-col', aggFunc: 'sum', editable: false },
      { headerName: 'Total Closed', valueGetter: 'data.close', cellClass: 'total-col', aggFunc: 'sum', editable: false }

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
  onGridReady(fromdate, todate) {
    console.log(fromdate);
    console.log(todate);

    console.log(this.companyId);
    console.log(this.userId);
    let usrId = 350;
    console.log(usrId)

    this.storeService.shopCensusDetailReport(this.companyId, this.userId, fromdate, todate).subscribe(res => {
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


    // onBtPrint() {
    //   var gridApi = this.gridApi;
    //   this.setPrinterFriendly(gridApi);
    //   setTimeout(function() {
    //     print();
    //     this.setNormal(gridApi);
    //   }, 2000);
    // }


    setPrinterFriendly(api) {
      var eGridDiv = document.getElementById("myGrid");
      eGridDiv.style.width = "";
      eGridDiv.style.height = "";
      api.setDomLayout("print");
    }

    setNormal(api) {
      var eGridDiv = document.getElementById("myGrid");
      eGridDiv.style.width = "600px";
      eGridDiv.style.height = "200px";
      api.setDomLayout(null);
    }

//   onBtPrint()
// {
//    var divToPrint = document.getElementById("printableArea");
//   let  newWin =  window.open("");
//    newWin.document.write(divToPrint.outerHTML);
//    newWin.print();
//    newWin.close();
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

}
