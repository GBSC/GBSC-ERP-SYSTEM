import { Component, OnInit ,ViewChild  } from '@angular/core';
import { StoreService } from '../../../../app/core/Services/ETracker/store.service';
import { AuthService } from '../../../../app/core';
import { AgGridNg2 } from 'ag-grid-angular';
import "ag-grid-enterprise";


@Component({
  selector: 'app-order-summary-detail',
  templateUrl: './order-summary-detail.component.html',
  styleUrls: ['./order-summary-detail.component.css']
})
export class OrderSummaryDetailComponent implements OnInit {

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
      // {headerName: 'Store Name', field: 'storeName' ,  filter: false, enableValue: true },
      // {headerName: 'Shop keeper Name', field: 'shopkeeperName' ,  filter: false, enableValue: true },
      // {headerName: 'Contact', field: 'contactNumber' ,  filter: false, enableValue: true },
      // {headerName: 'Address', field: 'address' ,  filter: false, enableValue: true },
      // {headerName: 'N.I.C', field: 'cnic' ,  filter: false, enableValue: true },
      
      { headerName: "Region",field: "region"    ,enableRowGroup: true,  enablePivot: true  },
      {headerName: 'City', field: 'city'      ,enableRowGroup: true,  enablePivot: true },
      {headerName: 'Area', field: 'area'     ,enableRowGroup: true,  enablePivot: true   },
      {headerName: 'Distributor', field: 'distributor'     ,enableRowGroup: true,  enablePivot: true  },
      {headerName: 'Territory', field: 'territory'     ,enableRowGroup: true,  enablePivot: true  },
      {headerName: 'section', field: 'section', enableRowGroup: true,  enablePivot: true,  rowGroup: true},
      {headerName: 'Subsection', field: 'subsection' ,enableRowGroup: true,  enablePivot: true,  rowGroup: true },
      
      // {headerName: 'DSF', field: 'dsf'    ,enableRowGroup: true,  enablePivot: true  },
      {headerName: 'Store category', field: 'category'    ,enableRowGroup: true,  enablePivot: true },
      {headerName: 'Store classification', field: 'classification'     ,enableRowGroup: true,  enablePivot: true  },
      {headerName: 'DSF', field: 'createUser'    ,enableRowGroup: true,  enablePivot: true  },
      {headerName: 'Shop', field: 'shop' ,enableRowGroup: true,  enablePivot: true  },
      {headerName: 'Product', field: 'product' ,enableRowGroup: true,  enablePivot: true  },
      {headerName: 'Product Category', field: 'productCategory' ,enableRowGroup: true,  enablePivot: true  },
      {headerName: 'Brand', field: ' brand' ,enableRowGroup: true,  enablePivot: true  },
      {headerName: 'Product Type', field: 'productType' ,enableRowGroup: true,  enablePivot: true  },
      {headerName: 'Pack Category', field: 'productPackCategory' ,enableRowGroup: true,  enablePivot: true  },
      {headerName: 'Pack Type', field: 'packType' ,enableRowGroup: true,  enablePivot: true  },
      {headerName: 'Pack Size', field: 'packSize' ,enableRowGroup: true,  enablePivot: true  },
      {headerName: 'Quantity',    valueGetter: 'data.quantity' , cellClass: 'total-col',aggFunc: 'sum', editable: false   },
      {headerName: 'Pkg Qty',    valueGetter: 'data.packSize' , cellClass: 'total-col',aggFunc: 'sum', editable: false   },
      {headerName: 'KG',  valueGetter: 'data.kg' , cellClass: 'total-col',aggFunc: 'sum', editable: false},
      {headerName: 'LTR',    valueGetter: 'data.ltr' , cellClass: 'total-col',aggFunc: 'sum', editable: false   }
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
          allowedAggFuncs: ["sum", "min", "max", "random" , "count"],
          sortable: true,
          resizable: true,
          filter: true
        };    
        this.autoGroupColumnDef = { width: 150 };
 
    }
 

     ngOnInit() {
    }
public abc : any = [];
    onGridReady(){
      //  console.log(this.companyId);
      // console.log(this.userId);
      // let usrId = 332;
      // console.log(usrId)
          // this.storeService.orderSummaryDetail(this.companyId,usrId).subscribe(res => {
          //    this.rowData = res;
          // });
this.rowData = [
                  {
                  serialNumber: 1,
                  region: "amir region 2",
                  city: "amir city",
                  area: "amir area",
                  distributor: "amir dist2",
                  territory: "amir teeritory",
                  section: "amir section",
                  subsection: "amir subsection1",
                  category: "LMT",
                  classification: "250 to 499",
                  createUser: "ammir ali",
                  shop: "Ali Ahmed shop",
                  product: "Eva Canola Oil 600",
                  productCategory: "EVA COOKING OIL Cat3",
                  brand: "SOye Bean",
                  productType: "cooking",
                  productPackCategory: "Small",
                  packType: "Tin",
                  packSize: 4,
                  quantity: 5,
                  kg: 0,
                  ltr: 1
                  },
                  {
                  serialNumber: 2,
                  region: "amir region 2",
                  city: "amir city",
                  area: "amir area",
                  distributor: "amir dist2",
                  territory: "amir teeritory",
                  section: "amir section",
                  subsection: "amir subsection1",
                  category: "LMT",
                  classification: "250 to 499",
                  createUser: "ammir ali",
                  shop: "Ali Ahmed shop",
                  product: "Eva Cooking Oil 1x5 Pillow Pouch",
                  productCategory: "EVA COOKING OIL Cat3",
                  brand: "Eva",
                  productType: "cooking",
                  productPackCategory: "Bulk",
                  packType: "Pouch",
                  packSize: 10,
                  quantity: 7,
                  kg: 0,
                  ltr: 0
                  },
                  {
                  serialNumber: 3,
                  region: "amir region 2",
                  city: "amir city",
                  area: "amir area",
                  distributor: "amir dist2",
                  territory: "amir teeritory",
                  section: "amir section",
                  subsection: "amir subsection3",
                  category: "LMT",
                  classification: "250 to 499",
                  createUser: "ammir ali",
                  shop: "Amir new test shop123",
                  product: "Eva Canola Oil 600",
                  productCategory: "EVA COOKING OIL Cat3",
                  brand: "SOye Bean",
                  productType: "cooking",
                  productPackCategory: "Small",
                  packType: "Tin",
                  packSize: 4,
                  quantity: 5,
                  kg: 0,
                  ltr: 1
                  },
                  {
                  serialNumber: 4,
                  region: "amir region 2",
                  city: "amir city",
                  area: "amir area",
                  distributor: "amir dist2",
                  territory: "amir teeritory",
                  section: "amir section",
                  subsection: "amir subsection3",
                  category: "LMT",
                  classification: "250 to 499",
                  createUser: "ammir ali",
                  shop: "Amir new test shop123",
                  product: "Eva Cooking Oil 1x5 Pillow Pouch",
                  productCategory: "EVA COOKING OIL Cat3",
                  brand: "Eva",
                  productType: "cooking",
                  productPackCategory: "Bulk",
                  packType: "Pouch",
                  packSize: 10,
                  quantity: 8,
                  kg: 0,
                  ltr: 0
                  },
                  {
                  serialNumber: 5,
                  region: "amir region 2",
                  city: "amir city",
                  area: "amir area",
                  distributor: "amir dist2",
                  territory: "amir teeritory",
                  section: "amir section",
                  subsection: "amir subsection3",
                  category: "LMT",
                  classification: "250 to 499",
                  createUser: "ammir ali",
                  shop: "Amir new test shop123",
                  product: "Eva Sunflower Oil 3 Ltr PetBottle",
                  productCategory: "Eva Sunflower Cat5",
                  brand: "SOye Bean",
                  productType: "soybeen",
                  productPackCategory: "Tin",
                  packType: "Large Tin",
                  packSize: 10,
                  quantity: 8,
                  kg: 0,
                  ltr: 1
                  },
                  {
                  serialNumber: 6,
                  region: "amir region 2",
                  city: "amir city",
                  area: "amir area",
                  distributor: "amir dist2",
                  territory: "amir teeritory",
                  section: "amir section",
                  subsection: "amir subsection3",
                  category: "LMT",
                  classification: "250 to 499",
                  createUser: "ammir ali",
                  shop: "Amir shop test",
                  product: "Dalda Canola Oil Pouch",
                  productCategory: "EVA CANOLA OIL Cat4",
                  brand: "Dalda",
                  productType: "canola",
                  productPackCategory: "Medium",
                  packType: "Pouch",
                  packSize: 10,
                  quantity: 4,
                  kg: 1,
                  ltr: 0
                  },
                  {
                  serialNumber: 7,
                  region: "amir region 2",
                  city: "amir city",
                  area: "amir area",
                  distributor: "amir dist2",
                  territory: "amir teeritory",
                  section: "amir section",
                  subsection: "amir subsection3",
                  category: "LMT",
                  classification: "250 to 499",
                  createUser: "ammir ali",
                  shop: "Amir shop test",
                  product: "Dalda Canola Oil Pouch",
                  productCategory: "EVA CANOLA OIL Cat4",
                  brand: "Dalda",
                  productType: "canola",
                  productPackCategory: "Medium",
                  packType: "Pouch",
                  packSize: 10,
                  quantity: 5,
                  kg: 1,
                  ltr: 0
                  },
                  {
                  serialNumber: 8,
                  region: "amir region 2",
                  city: "amir city",
                  area: "amir area",
                  distributor: "amir dist2",
                  territory: "amir teeritory",
                  section: "amir section",
                  subsection: "amir subsection3",
                  category: "LMT",
                  classification: "250 to 499",
                  createUser: "ammir ali",
                  shop: "Amir shop test",
                  product: "Eva Sunflower Oil 3 Ltr PetBottle",
                  productCategory: "Eva Sunflower Cat5",
                  brand: "SOye Bean",
                  productType: "soybeen",
                  productPackCategory: "Tin",
                  packType: "Large Tin",
                  packSize: 10,
                  quantity: 5,
                  kg: 0,
                  ltr: 1
                  }
                ]
                console.log(this.rowData);
    }


}
