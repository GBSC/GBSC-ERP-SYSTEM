import { Component, OnInit, ViewChild } from '@angular/core';
import { DxDataGridComponent } from 'devextreme-angular';
import { InventorysystemService, eTrackerUserService } from '../../../core';

@Component({
  selector: 'app-indent-process',
  templateUrl: './indent-process.component.html',
  styleUrls: ['./indent-process.component.scss']
})
export class IndentProcessComponent implements OnInit {

  @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent;
  
  private UnprocessedSalesIndents : any;
  private Stores : any = [];
  private StoreVisits : any = [];
  private Distributors : any;
  private InventoryItems : any;


  constructor(private InventoryService : InventorysystemService, private eTrackerService : eTrackerUserService) { }

  ngOnInit() {
    this.InventoryService.GetInventoryItems().subscribe( res => {
      this.InventoryItems = res;
      console.log(this.InventoryItems);
    });
    this.InventoryService.GetDistributors().subscribe( res => {
      this.Distributors = res;
      console.log(this.Distributors);
    });
    this.InventoryService.GetSalesIndents().subscribe( res => {
      this.UnprocessedSalesIndents = res;
      console.log(this.UnprocessedSalesIndents);
    });
  }

  ProcessSelectedIndents() {

  }

  EditIndent(value) {

  }

  DeleteIndent(value) {

  }

  ProcessIndent(value) {
    console.log(value);
  }

}
