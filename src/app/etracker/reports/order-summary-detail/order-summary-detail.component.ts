// import { Component, OnInit ,ViewChild  } from '@angular/core';
// import { StoreService } from '../../../../app/core/Services/ETracker/store.service';
// import { AuthService } from '../../../../app/core';
// import { AgGridNg2 } from 'ag-grid-angular';
// import "ag-grid-enterprise";
import { Component, OnInit, ElementRef, ViewChild, Renderer2, NgZone } from '@angular/core';
import { AuthService, InventorysystemService, eTrackerUserService } from '../../../core';
import { StoreService } from '../../../../app/core/Services/ETracker/store.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-order-summary-detail',
  templateUrl: './order-summary-detail.component.html',
  styleUrls: ['./order-summary-detail.component.css']
})
export class OrderSummaryDetailComponent implements OnInit {

  // @ViewChild('agGrid') agGrid: AgGridNg2;


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

  
  public startDate: any;
  public endDate: any;
 
  constructor(public storeService: StoreService, public authService : AuthService ,  public toastr: ToastrService ) {
    this.companyId = authService.getUserCompanyId();
      this.userId = authService.getUserId();
      console.log(this.userId);
 
    this.columnDefs  = [
       {headerName: 'Serial Number', field: 'serialNumber'  ,  filter: false, enableValue: true   ,hide :true },
      // {headerName: 'Store Name', field: 'storeName' ,  filter: false, enableValue: true },
      // {headerName: 'Shop keeper Name', field: 'shopkeeperName' ,  filter: false, enableValue: true },
      // {headerName: 'Contact', field: 'contactNumber' ,  filter: false, enableValue: true },
      // {headerName: 'Address', field: 'address' ,  filter: false, enableValue: true },
      // {headerName: 'N.I.C', field: 'cnic' ,  filter: false, enableValue: true },
      
      { headerName: "Region",field: "region"    ,  filter: false, enableValue: true   ,hide :true  },
      {headerName: 'City', field: 'city'      ,  filter: false, enableValue: true   ,hide :true },
      {headerName: 'Area', field: 'area' ,  filter: false, enableValue: true   ,hide :true},
      {headerName: 'Distributor', field: 'distributor'      ,  filter: false, enableValue: true   ,hide :true  },
      {headerName: 'Territory', field: 'territory'      ,  filter: false, enableValue: true   ,hide :true },
      {headerName: 'section', field: 'section' , enableRowGroup: true,  enablePivot: true,  rowGroup: true ,hide :true},
      {headerName: 'Subsection', field: 'subsection' ,enableRowGroup: true,  enablePivot: true,  rowGroup: true  ,hide :true },
      
      // {headerName: 'DSF', field: 'dsf'    ,enableRowGroup: true,  enablePivot: true  },
      {headerName: 'Store category', field: 'category' ,  filter: false, enableValue: true   ,hide :true },
      {headerName: 'Store classification', field: 'classification'     ,  filter: false, enableValue: true   ,hide :true },
      {headerName: 'DSF', field: 'createUser'   ,  filter: false, enableValue: true   ,hide :true},
      {headerName: 'Shop', field: 'shop'  ,  filter: false, enableValue: true   ,hide :true },
      {headerName: 'Product', field: 'product'  ,  filter: false, enableValue: true   ,hide :true  },
      {headerName: 'Product Category', field: 'productCategory'  ,  filter: false, enableValue: true   ,hide :true },
      {headerName: 'Brand', field: ' brand'  ,  filter: false, enableValue: true   ,hide :true  },
      {headerName: 'Product Type', field: 'productType' ,  filter: false, enableValue: true   ,hide :true },
      {headerName: 'Pack Category', field: 'productPackCategory' ,  filter: false, enableValue: true   ,hide :true },
      {headerName: 'Pack Type', field: 'packType'  ,  filter: false, enableValue: true   ,hide :true },
      {headerName: 'Pack Size', field: 'packSize'  ,  filter: false, enableValue: true   ,hide :true  },
      {headerName: 'Quantity',    valueGetter: 'data.quantity' , cellClass: 'total-col',aggFunc: 'sum', editable: false, enableValue: true  },
      {headerName: 'Pkg Qty',    valueGetter: 'data.packSize' , cellClass: 'total-col',aggFunc: 'sum', editable: false, enableValue: true  },
      {headerName: 'KG',  valueGetter: 'data.kg' , cellClass: 'total-col',aggFunc: 'sum', editable: false, enableValue: true},
      {headerName: 'LTR',    valueGetter: 'data.ltr' , cellClass: 'total-col',aggFunc: 'sum', editable: false, enableValue: true  }
       // {headerName: 'Create Date', field: 'createDate' ,  filter: false, enableValue: true },
      // {headerName: 'Close Date', field: 'endTime' ,  filter: false, enableValue: true },
      // {headerName: 'Registration Year', field: 'registrationYear'    ,enableRowGroup: true,  enablePivot: true  },
      // {headerName: 'Registration Month', field: 'registrationMonth'    ,enableRowGroup: true,  enablePivot: true  },
      // {headerName: 'shopMode', field: 'shopMode'    ,enableRowGroup: true,  enablePivot: true  },
      // {headerName: 'Image Link', field: 'imageLink' ,  filter: false, enableValue: true } ,
      // {  headerName: 'Total Shop', valueGetter: 'data.shopNameCount' , cellClass: 'total-col',aggFunc: 'sum', editable: false },
      // {  headerName: 'Total Active', valueGetter: 'data.activeStore' , cellClass: 'total-col',aggFunc: 'sum', editable: false },
      // {  headerName: 'Total Closed', valueGetter: 'data.close' , cellClass: 'total-col',aggFunc: 'sum', editable: false }

         ]; 
         this.defaultColDef = {
          width: 100,
          allowedAggFuncs: ["sum", "min", "max", "random" , "count" ,  "avg" , "round"],
          sortable: true,
          resizable: true,
          filter: true
        };    
        this.autoGroupColumnDef = { width: 150 };
 
    }
 

     ngOnInit() {
      this.currentdate = this.formatDate(new Date());

    }
    public x : any = [];
     

    public formDate  ='';

    public toDate    ='';
    public currentdate: any;
      public abc: any = [];
      onGridReady(fromdate , todate){

        if(fromdate == '' &&  todate != ''){
          fromdate = '1-1-0001';
          console.log(todate);
          todate = todate
          this.formDate = fromdate;
          this.toDate = todate
          console.log(fromdate);
          this.storeService.orderSummaryDetail(this.companyId,this.userId , this.formDate,  this.toDate).subscribe(res => {
            console.log(res);
            this.rowData = res;
           console.log(this.rowData);
         });
        }
        else if(fromdate != '' &&  todate != ''){
          this.formDate = fromdate 
        this.toDate = todate
        console.log(this.companyId);
        console.log(this.userId);
        let usrId = 350;
        console.log(usrId)
          this.storeService.shopCensusSummary(this.companyId,this.userId ,  this.formDate, this.toDate).subscribe(res => {
            this.rowData = res;
           console.log(this.rowData);
         });
        }
        else if(fromdate == '' &&  todate == ''){
          this.formDate = '1-1-0001' 
          this.toDate = this.currentdate
          console.log(this.companyId);
          console.log(this.userId);
          let usrId = 350;
          console.log(usrId)
      
            this.storeService.orderSummaryDetail(this.companyId, this.userId,this.formDate, this.toDate).subscribe(res => {
               this.rowData = res;
              console.log(this.rowData);
            });  
        }
  
        else{
          this.toastr.error("please Selet Both Dates")
        }
      }
  
      formatDate(date: Date) {
        return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
    }
    
  
 
 


}
