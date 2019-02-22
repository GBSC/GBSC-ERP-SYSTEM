import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../../../app/core/Services/ETracker/store.service';
import { DxPivotGridModule, DxCheckBoxModule } from 'devextreme-angular';
import PivotGridDataSource from 'devextreme/ui/pivot_grid/data_source';
import { AuthService } from '../../../../app/core';



@Component({
  selector: 'app-newtestreport',
  templateUrl: './newtestreport.component.html',
  styleUrls: ['./newtestreport.component.css']
})
export class NewtestreportComponent implements OnInit {

  pivotGridDataSource: any;
  showDataFields: boolean = true;
  showRowFields: boolean = true;
  showColumnFields: boolean = true;
  showFilterFields: boolean = true;

  companyId : number;
  userId : number;

  constructor(public storeService: StoreService, public authService : AuthService) {
    this.companyId = authService.getUserCompanyId();
    this.userId = authService.getUserId();
   }

  ngOnInit() {

    this.storeService.shopCensusDetailReport(this.companyId, this.userId).subscribe(res => {
      this.pivotGridDataSource = new PivotGridDataSource({
        fields: [{
          caption: "Region",
          width: 120,
          dataField: "region",
          area: "row"
        }, {
          caption: "City",
          dataField: "city",
          width: 150,
          area: "row"
        }, 
        {
          caption: "Store",
          dataField: "storeName",
          width: 150,
          area: "row"
        },
        {
          dataField: "createDate",
          dataType: "date",
          area: "filter"
        }],
        store: res
      });
    });

  }


}
