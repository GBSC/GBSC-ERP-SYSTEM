import { Component, OnInit, ViewChild } from '@angular/core';
import { StoreService } from '../../../../app/core/Services/ETracker/store.service';
import { DxPivotGridModule, DxCheckBoxModule } from 'devextreme-angular';
import PivotGridDataSource from 'devextreme/ui/pivot_grid/data_source';
import { AuthService } from '../../../../app/core';

  
 import { HttpClient } from '@angular/common/http';
   import { AgGridNg2 } from 'ag-grid-angular';
     import "ag-grid-enterprise";


@Component({
  selector: 'app-test-report',
  templateUrl: './test-report.component.html',
  styleUrls: ['./test-report.component.css']
})
export class TestReportComponent implements OnInit {
  @ViewChild('agGrid') agGrid: AgGridNg2;


  pivotGridDataSource: any;
  showDataFields: boolean = true;
  showRowFields: boolean = true;
  showColumnFields: boolean = true;
  showFilterFields: boolean = true;

  companyId : number;
  userId : number ;
  public rowData : any;
  public rowData2 : any;
  public columnDefs  : any;
  public bottomOptions : any;
  public defaultColDef : any;
  public sideBar : any;

  public autoGroupColumnDef : any;
  public rowModelType : any;
 
  constructor(public storeService: StoreService, public authService : AuthService) {
    this.companyId = authService.getUserCompanyId();
      this.userId = authService.getUserId();
      console.log(this.userId);
 
    this.columnDefs  = [
       {headerName: 'Serial Number', field: 'serialNumber' ,  filter: false, enableValue: true  },
      {headerName: 'Store Name', field: 'storeName' ,  filter: false, enableValue: true },
      {headerName: 'Shop keeper Name', field: 'shopkeeperName' ,  filter: false, enableValue: true },
      {headerName: 'Contact', field: 'contactNumber' ,  filter: false, enableValue: true },
      {headerName: 'Address', field: 'address' ,  filter: false, enableValue: true },
      {headerName: 'N.I.C', field: 'cnic' ,  filter: false, enableValue: true },

      { headerName: "Region",field: "region"    ,enableRowGroup: true,  enablePivot: true  },
      {headerName: 'City', field: 'city'      ,enableRowGroup: true,  enablePivot: true },
      {headerName: 'Area', field: 'area'     ,enableRowGroup: true,  enablePivot: true   },
      {headerName: 'Distributor', field: 'distributor'     ,enableRowGroup: true,  enablePivot: true  },
      {headerName: 'Territory', field: 'territory'     ,enableRowGroup: true,  enablePivot: true  },
      {headerName: 'section', field: 'section', enableRowGroup: true,  enablePivot: true,  rowGroup: true},
      {headerName: 'Subsection', field: 'subsection' ,enableRowGroup: true,  enablePivot: true,  rowGroup: true },
      {headerName: 'DSF', field: 'dsf'    ,enableRowGroup: true,  enablePivot: true  },
      {headerName: 'Visit Day', field: 'day'    ,enableRowGroup: true,  enablePivot: true  },
      {headerName: 'Store category', field: 'category'    ,enableRowGroup: true,  enablePivot: true },
      {headerName: 'Store classification', field: 'classification'     ,enableRowGroup: true,  enablePivot: true  },
      {headerName: 'Create User', field: 'createUser'    ,enableRowGroup: true,  enablePivot: true  },
      {headerName: 'Create Date', field: 'createDate' ,  filter: false, enableValue: true },
      {headerName: 'Close Date', field: 'endTime' ,  filter: false, enableValue: true },
      {headerName: 'Registration Year', field: 'registrationYear'    ,enableRowGroup: true,  enablePivot: true  },
      {headerName: 'Registration Month', field: 'registrationMonth'    ,enableRowGroup: true,  enablePivot: true  },
      {headerName: 'shopMode', field: 'shopMode'    ,enableRowGroup: true,  enablePivot: true  },
      {headerName: 'Image Link', field: 'imageLink' ,  filter: false, enableValue: true } ,
      {  headerName: 'Total Shop', valueGetter: 'data.shopNameCount' , cellClass: 'total-col',aggFunc: 'sum', editable: false },
      {  headerName: 'Total Active', valueGetter: 'data.activeStore' , cellClass: 'total-col',aggFunc: 'sum', editable: false },
      {  headerName: 'Total Closed', valueGetter: 'data.close' , cellClass: 'total-col',aggFunc: 'sum', editable: false }

         ]; 
        this.defaultColDef = {
          width: 100,
          allowedAggFuncs: ["sum", "min", "max", "random" , "count"],
          sortable: true,
          resizable: true,
          filter: true
        };    
        this.autoGroupColumnDef = { width: 150 };

        this.bottomOptions  = [
          {  headerName: 'Total Shop', field: 'shopNameCount',  aggFunc: 'sum', editable: false }

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
public abc : any = [];
    onGridReady(){
      console.log('asdas');
      console.log(this.companyId);
      console.log(this.userId);
      let usrId = 350;
      console.log(usrId)
        //   this.storeService.shopCensusDetailReport(this.companyId,usrId).subscribe(res => {
        //      this.rowData = res;
        //     console.log(this.rowData);
        //  this.rowData2 =    this.rowData.filter(t=> t.shopNameCount);
        //  console.log(this.rowData2);
        //   });

    }

    onColumnRowGroupChanged(value2){
      // console.log(value)
      console.log(value2);
      // console.log('asdas');
      // console.log(this.companyId);
      // console.log(this.userId);
      // let usrId = 350;
      // console.log(usrId)
      //     this.storeService.shopCensusDetailReport(this.companyId,usrId).subscribe(res => {
      //        this.rowData = res;
      //       console.log(this.rowData);
      //       this.rowData.forEach(element => {
      //         if(element.storeName){
      //           console.log(element.storeName.length)
      //         //  let x =  element.serialNumber;
      //         //  this.abc.push(x);
      //         //  console.log(this.abc);
      //            }
      //       });
      //     });
    }

    
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
