import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../../../app/core/Services/ETracker/store.service';
import { DxPivotGridModule, DxCheckBoxModule } from 'devextreme-angular';
import PivotGridDataSource from 'devextreme/ui/pivot_grid/data_source';



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

  constructor(public storeService: StoreService) { }

  ngOnInit() {

    this.storeService.shopCensusDetailReport(198).subscribe(res => {
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
        }, {
          dataField: "createDate",
          dataType: "date",
          area: "column"
        }, {
          dataField: "storeName",
          dataType: "string",
          area: "data"
        }],
        store: res
      });
    });

  }


}
