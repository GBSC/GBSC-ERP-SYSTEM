import { Component, OnInit ,ViewChild  } from '@angular/core';
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
  public columnDefs  : any;
  public defaultColDef : any;
  public sideBar : any;

  public autoGroupColumnDef : any;
  public rowModelType : any;
 
  constructor(public storeService: StoreService, public authService : AuthService) {
    this.companyId = authService.getUserCompanyId();
    // this.userId = authService.getUserId();
 
    this.columnDefs  = [
      { headerName: "Region",field: "region"    ,enableRowGroup: true,  enablePivot: true  },
      {headerName: 'City', field: 'city'      ,enableRowGroup: true,  enablePivot: true },
      {headerName: 'Area', field: 'area'     ,enableRowGroup: true,  enablePivot: true   },
      {headerName: 'Distributor', field: 'distributor'     ,enableRowGroup: true,  enablePivot: true  },
      {headerName: 'Territory', field: 'territory'     ,enableRowGroup: true,  enablePivot: true  },
      {headerName: 'section', field: 'section', enableRowGroup: true,  enablePivot: true,  rowGroup: true},
      {headerName: 'Subsection', field: 'subsection' ,enableRowGroup: true,  enablePivot: true,  rowGroup: true },
      {headerName: 'Store category', field: 'category'    ,enableRowGroup: true,  enablePivot: true },
      {headerName: 'Store classification', field: 'classification'     ,enableRowGroup: true,  enablePivot: true  },
      {headerName: 'DSF', field: 'dsf'    ,enableRowGroup: true,  enablePivot: true  },
      {headerName: 'Create User', field: 'createUser'    ,enableRowGroup: true,  enablePivot: true  },
      {headerName: 'Store Name', field: 'storeName' , aggFunc: "count",filter: false, enableValue: true },
 
         ]; 
        this.defaultColDef = {
          width: 100,
          allowedAggFuncs: ["sum", "min", "max", "random" , "count"],
          sortable: true,
          resizable: true,
          filter: true
        };    
        this.autoGroupColumnDef = { width: 150 };
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
      console.log('asdas');
      console.log(this.companyId);
      console.log(this.userId);
      let usrId = 332;
      console.log(usrId)
          this.storeService.shopCensusDetailReport(this.companyId,usrId).subscribe(res => {
            // console.log(res);
            this.rowData = res;
            console.log(this.rowData);      
          });
    }

    

  // autoGroupColumnDef = {
  //     headerName: 'Store Name',
  //     field: 'storeName',
  //     cellRenderer: 'agGroupCellRenderer',
  //     cellRendererParams: {
  //         checkbox: true
  //     }
  // };

}
