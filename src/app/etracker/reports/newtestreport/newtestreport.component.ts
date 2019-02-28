import { Component, OnInit ,ViewChild  } from '@angular/core';
import { StoreService } from '../../../../app/core/Services/ETracker/store.service';
import { DxPivotGridModule, DxCheckBoxModule } from 'devextreme-angular';
import PivotGridDataSource from 'devextreme/ui/pivot_grid/data_source';
import { AuthService } from '../../../../app/core';

  
 import { HttpClient } from '@angular/common/http';
   import { AgGridNg2 } from 'ag-grid-angular';
 
  

@Component({
  selector: 'app-newtestreport',
  templateUrl: './newtestreport.component.html',
  styleUrls: ['./newtestreport.component.css']
})
export class newtestreport implements OnInit {
    @ViewChild('agGrid') agGrid: AgGridNg2;


  pivotGridDataSource: any;
  showDataFields: boolean = true;
  showRowFields: boolean = true;
  showColumnFields: boolean = true;
  showFilterFields: boolean = true;

  companyId : number;
  userId : number ;
  public rowData : any;
 
 
//   columnDefs = [
//     {headerName: 'S No#', field: 'serialNumber', sortable: true, filter: true, checkboxSelection: true },
//     {headerName: 'Store Name', field: 'storeName', sortable: true, filter: true },
//     {headerName: 'Shopkeeper Name', field: 'shopkeeperName', sortable: true, filter: true }
// ];

  // autoGroupColumnDef = {
  //     headerName: 'Model',
  //     field: 'model',
  //     cellRenderer: 'agGroupCellRenderer',
  //     cellRendererParams: {
  //         checkbox: true
  //     }
  // };

  constructor(public storeService: StoreService, public authService : AuthService) {
    this.companyId = authService.getUserCompanyId();
    // this.userId = authService.getUserId();
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
 
}