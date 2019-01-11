import { Component, OnInit, ViewChild } from '@angular/core';
import { DxDataGridComponent } from 'devextreme-angular';
import { InventorysystemService, eTrackerUserService, AuthService } from '../../../core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-indent-process',
  templateUrl: './indent-process.component.html',
  styleUrls: ['./indent-process.component.scss']
})
export class IndentProcessComponent implements OnInit {

  @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent;
  
  public UnprocessedSalesIndents : any[];
  public Stores : any = [];
  public StoreVisits : any = [];
  public Distributors : any;
  public InventoryItems : any;

  constructor(public InventoryService : InventorysystemService, public eTrackerService : eTrackerUserService, public Auth : AuthService, public Toastr : ToastrService) { }

  ngOnInit() {
    this.InventoryService.GetInventoryItems().subscribe( res => {
      this.InventoryItems = res;
      console.log(this.InventoryItems);
    });
    this.InventoryService.GetDistributors().subscribe( res => {
      this.Distributors = res;
      console.log(this.Distributors);
    });
    this.InventoryService.GetUnprocessedSalesIndents().subscribe( res => {
      this.UnprocessedSalesIndents = res;
      console.log(this.UnprocessedSalesIndents);
    });
  }

  ProcessSelectedIndents() {
    this.dataGrid.instance.getSelectedRowsData().then((rowdata : any[]) => {
      console.log(rowdata);
      let ProcessedIndents : any[] = [];

      rowdata.forEach(row => {

        let ProcessedIndentItems : any[] = [];
        row.salesIndentItems.forEach(item => {
          let b : any = {
            TradeOfferAmountPerUnit : item.tradeOfferPricePerUnit,
            TotalTradeOfferAmountPerItem : item.totalTradeOfferPerItem,
            ItemTotalAmount : item.itemNetAmount,
            BasicAmount : item.itemGrossAmount,
            OrderUnitQuantity : item.quantity,
            InventoryItemId : item.inventoryItemId
          };
          ProcessedIndentItems.push(b);

        });


        let a : any = {
          IssueDate : new Date(),
          IsIssued : true,
          Remarks : 'Processed from' + row.salesIndentNumber,
          TotalQuantity : row.totalQuantity,
          ExtendedAmount : row.totalTradeOffer,
          DiscountAmount : row.totalTradeOfferDiscount,
          SalesTaxAmount : row.totalTradeOffer * 0.10, //Update indent to get sales tax percentage from there
          OrderAmount : row.totalTradePrice,
          CompanyId : this.Auth.getUserCompanyId(),
          UserId : this.Auth.getUserId(),
          SalesIndentId : row.salesIndentId,
          SalesOrderItems : ProcessedIndentItems
        };
      ProcessedIndents.push(a);

      row.isProcessed = true;
      row.processedDate = new Date();
      });
      
      this.InventoryService.UpdateSalesIndents(rowdata).subscribe(res => {
        this.Toastr.info(res);
        this.InventoryService.AddSalesOrders(ProcessedIndents).subscribe(res => {
          this.Toastr.success(res);
          this.InventoryService.GetUnprocessedSalesIndents().subscribe( res => {
            this.UnprocessedSalesIndents = res;
            console.log(this.UnprocessedSalesIndents);
          });
        },
        err => this.Toastr.error(err));
      },
      err => this.Toastr.error(err));
    });
  }

  EditIndent(value) {

  }

  DeleteIndent(value) {

  }

  ProcessIndent(value) {

      let ProcessedIndentItems : any[] = [];
      value.salesIndentItems.forEach(item => {

        let b : any = {
          TradeOfferAmountPerUnit : item.tradeOfferPricePerUnit,
          TotalTradeOfferAmountPerItem : item.totalTradeOfferPerItem,
          ItemTotalAmount : item.itemNetAmount,
          BasicAmount : item.itemGrossAmount,
          OrderUnitQuantity : item.quantity,
          InventoryItemId : item.inventoryItemId
        };
        ProcessedIndentItems.push(b);

      });


      let a : any = {
        IssueDate : new Date(),
        IsIssued : true,
        Remarks : 'Processed from' + value.salesIndentNumber,
        TotalQuantity : value.totalQuantity,
        ExtendedAmount : value.totalTradeOffer,
        DiscountAmount : value.totalTradeOfferDiscount,
        SalesTaxAmount : value.totalTradeOffer * 0.10, //Update indent to get sales tax percentage from there
        OrderAmount : value.totalTradePrice,
        CompanyId : this.Auth.getUserCompanyId(),
        UserId : this.Auth.getUserId(),
        SalesIndentId : value.salesIndentId,
        SalesOrderItems : ProcessedIndentItems
      };

      value.isProcessed = true;
      value.processedDate = new Date();
      
      this.InventoryService.UpdateSalesIndent(value).subscribe(
      res => {
        this.Toastr.info(res);
        this.InventoryService.AddSalesOrder(a).subscribe(
        res => {
          this.Toastr.success(res);
          this.InventoryService.GetUnprocessedSalesIndents().subscribe(
          res => {
            this.UnprocessedSalesIndents = res;
            console.log(this.UnprocessedSalesIndents);
          },
          err => this.Toastr.error(err));
        },
        err => this.Toastr.error(err));
      },
      err => this.Toastr.error(err));
  }

}
