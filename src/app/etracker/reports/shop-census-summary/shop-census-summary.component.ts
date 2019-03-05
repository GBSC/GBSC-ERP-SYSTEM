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
import { Component, OnInit ,ViewChild  } from '@angular/core';
import { StoreService } from '../../../../app/core/Services/ETracker/store.service';
import { DxPivotGridModule, DxCheckBoxModule } from 'devextreme-angular';
import PivotGridDataSource from 'devextreme/ui/pivot_grid/data_source';
import { AuthService } from '../../../../app/core';

  
 import { HttpClient } from '@angular/common/http';
   import { AgGridNg2 } from 'ag-grid-angular';
     import "ag-grid-enterprise";


@Component({
    selector: 'app-shop-census-summary',
    templateUrl: './shop-census-summary.component.html',
    styleUrls: ['./shop-census-summary.component.scss']
})
export class ShopCensusSummaryComponent implements OnInit {
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

    // public showHideFilter: boolean = false;
    // public DisableRegion: boolean = true;
    // public DisableCity: boolean = true;
    // public DisableArea: boolean = true;
    // public DistributorDisable: boolean = true;
    // public TerritoryDisable: boolean = true;
    // public SectionDisable: boolean = true;
    // public SubsectionDisable: boolean = true;
    // public DsfDisable: boolean = true;

    // public Regions: any;
    // public Cities: any[] = [];
    // public Areas: any;
    // public Distributors: any;
    // public Territories: any;
    // public Sections: any[] = [];
    // public Subsections: any[] = [];
    // public DSFs: any;
    // public Classifications: any[] = ['500 & Above', '250 to 499', '100 to 249', 'Less then 100'];
    // public Categories: any[] = ['LMT', 'V/S', 'Retail']


    // public IsAdmin: boolean = false;
    // public IsRsm: boolean = false;
    // public IsZsm: boolean = false;

    // public regionId: any;
    // public cityId: any;
    // public areaId: any;
    // public territoryId: any;
    // public sectionId: any;
    // public subsectionId: any;
    // public distributorId: any;
    // public dsfId: any;
    // public classification: any = '500 & Above';
    // public category: any = 'LMT';

    // public startDate: any;
    // public endDate: any;

    // @ViewChild('scripts')
    // scripts: ElementRef;

    // @ViewChild("control")
    // control: ElementRef
    constructor(public storeService: StoreService, public authService : AuthService) {
        this.companyId = authService.getUserCompanyId();
          this.userId = authService.getUserId();
          console.log(this.userId);
     
        this.columnDefs  = [
          {headerName: 'Serial Number', field: 'serialNumber' ,  filter: false, enableValue: true   ,hide :true },
        //   {headerName: '252', field: 'x' ,  filter: false, enableValue: true  },
          {headerName: 'Store Name', field: 'storeName' ,  filter: false, enableValue: true   ,hide :true},
          {headerName: 'Shop keeper Name', field: 'shopkeeperName' ,  filter: false, enableValue: true ,hide :true},
          {headerName: 'Contact', field: 'contactNumber' ,  filter: false, enableValue: true   ,hide :true},
          {headerName: 'Address', field: 'address' ,  filter: false, enableValue: true  ,hide :true},
          {headerName: 'N.I.C', field: 'cnic' ,  filter: false, enableValue: true  ,hide :true},

          { headerName: "Region",field: "region"    ,enableRowGroup: true,  enablePivot: true  ,hide :true},
          {headerName: 'City', field: 'city'      ,enableRowGroup: true,  enablePivot: true ,hide :true},
          {headerName: 'Area', field: 'area'     ,enableRowGroup: true,  enablePivot: true   ,hide :true },
          {headerName: 'Distributor', field: 'distributor'     ,enableRowGroup: true,  enablePivot: true ,hide :true},
          {headerName: 'Territory', field: 'territory'     ,enableRowGroup: true,  enablePivot: true  ,hide :true},
          {headerName: 'section', field: 'section', enableRowGroup: true,  enablePivot: true,  rowGroup: true ,hide :true},
          {headerName: 'Subsection', field: 'subsection' ,enableRowGroup: true,  enablePivot: true,  rowGroup: true  ,hide :true},
          {headerName: 'Store category', field: 'category'    ,enableRowGroup: true,  enablePivot: true ,hide :true },
          {headerName: 'Store classification', field: 'classification'     ,enableRowGroup: true,  enablePivot: true  ,hide :true},
          {headerName: 'DSF', field: 'dsf'    ,enableRowGroup: true,  enablePivot: true  ,hide :true},
          {headerName: 'Registration Year', field: 'registrationYear'    ,enableRowGroup: true,  enablePivot: true  ,hide :true},
          {headerName: 'Registration Month', field: 'registrationMonth'    ,enableRowGroup: true,  enablePivot: true   ,hide :true},
          {headerName: 'Create User', field: 'createUser'    ,enableRowGroup: true,  enablePivot: true   ,hide :true},
          {  headerName: 'Shop', valueGetter: 'data.shopNameCount' , cellClass: 'total-col',aggFunc: 'sum', editable: false, enableValue: true },
          {  headerName: 'Active', valueGetter: 'data.activeStore' , cellClass: 'total-col',aggFunc: 'sum', editable: false, enableValue: true },
          {  headerName: 'Close', valueGetter: 'data.close' , cellClass: 'total-col',aggFunc: 'sum', editable: false, enableValue: true },
          {  headerName: 'Total Persent', valueGetter: ' (data.activeStore *100 ) / (data.activeStore + data.close)' , cellClass: 'total-col',  aggFunc: 'avg', editable: false, enableValue: true }

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
        public x : any = [];
        ngOnInit() {

 

        }

        public abc : any = [];
    onGridReady(){
      console.log('asdas');
      console.log(this.companyId);
      console.log(this.userId);
      let usrId = 350;
      console.log(usrId)

          this.storeService.shopCensusSummary(this.companyId,usrId).subscribe(res => {
             this.rowData = res;
            console.log(this.rowData);
          });
          
        // this.rowData = [
        //     {
        //     serialNumber: 1,
        //     region: "Karachi Region",
        //     city: "Karachi",
        //     area: "Aron Area",
        //     distributor: "Aron Distributor",
        //     territory: "Aron Territory",
        //     section: "Aron Section",
        //     subsection: "Aron Subsection",
        //     category: "W/S",
        //     classification: "500 above",
        //     dsf: "Aron Paul",
        //     registrationYear: "2019",
        //     registrationMonth: "02",
        //     createUser: "Aron Paul",
        //     shopNameCount: 1,
        //     activeStore: 1,
        //     close: 0
        //     },
        //     {
        //     serialNumber: 2,
        //     region: "Karachi Region",
        //     city: "Karachi",
        //     area: "Aron Area",
        //     distributor: "Aron Distributor",
        //     territory: "Aron Territory",
        //     section: "Aron Section",
        //     subsection: "Aron Subsection",
        //     category: "W/S",
        //     classification: "500 above",
        //     dsf: "Aron Paul",
        //     registrationYear: "2019",
        //     registrationMonth: "02",
        //     createUser: "Aron Paul",
        //     shopNameCount: 1,
        //     activeStore: 0,
        //     close: 1
        //     },
        //     {
        //     serialNumber: 3,
        //     region: "Karachi Region",
        //     city: "Karachi",
        //     area: "Aron Area",
        //     distributor: "Aron Distributor",
        //     territory: "Aron Territory",
        //     section: "Aron Section",
        //     subsection: "Aron Subsection",
        //     category: "W/S",
        //     classification: "500 above",
        //     dsf: "Aron Paul",
        //     registrationYear: "2019",
        //     registrationMonth: "02",
        //     createUser: "Aron Paul",
        //     shopNameCount: 1,
        //     activeStore: 1,
        //     close: 0
        //     },
        //     {
        //     serialNumber: 4,
        //     region: "Karachi Region",
        //     city: "Karachi",
        //     area: "Aron Area",
        //     distributor: "Aron Distributor",
        //     territory: "Aron Territory",
        //     section: "Aron Section",
        //     subsection: "Aron Subsection",
        //     category: "W/S",
        //     classification: "500 above",
        //     dsf: "Aron Paul",
        //     registrationYear: "2019",
        //     registrationMonth: "02",
        //     createUser: "Aron Paul",
        //     shopNameCount: 1,
        //     activeStore: 1,
        //     close: 0
        //     },
        //     {
        //     serialNumber: 5,
        //     region: "Karachi Region",
        //     city: "Karachi",
        //     area: "Aron Area",
        //     distributor: "Aron Distributor",
        //     territory: "Aron Territory",
        //     section: "Aron Section",
        //     subsection: "Aron Subsection",
        //     category: "W/S",
        //     classification: "500 above",
        //     dsf: "Aron Paul",
        //     registrationYear: "2019",
        //     registrationMonth: "02",
        //     createUser: "Aron Paul",
        //     shopNameCount: 1,
        //     activeStore: 0,
        //     close: 1
        //     },
        //     {
        //     serialNumber: 6,
        //     region: "Karachi Region",
        //     city: "Karachi",
        //     area: "Aron Area",
        //     distributor: "Aron Distributor",
        //     territory: "Aron Territory",
        //     section: "Aron Section",
        //     subsection: "Shan Gbsc Subsection",
        //     category: "W/S",
        //     classification: "500 above",
        //     dsf: "Aron Paul",
        //     registrationYear: "2019",
        //     registrationMonth: "02",
        //     createUser: "Aron Paul",
        //     shopNameCount: 1,
        //     activeStore: 1,
        //     close: 0
        //     }
        //     ]
        // console.log(this.rowData);
    }

    onColumnRowGroupChanged(value){
        console.log(value)
    }

    // constructor(public renderer: Renderer2, public ngZone: NgZone, public Auth: AuthService, public InventoryService: InventorysystemService, public eTrackerUserService: eTrackerUserService) { }

    // ngOnInit() {

    //     this.InventoryService.getRegionsByCompany(this.Auth.getUserCompanyId()).subscribe((res: Region[]) => {
    //         this.Regions = res;
    //     });

    //     this.InventoryService.getCitiesByCompany(this.Auth.getUserCompanyId()).subscribe((res: City[]) => {
    //         this.Cities = res;
    //     });

    //     this.InventoryService.getAreasByCompany(this.Auth.getUserCompanyId()).subscribe((res: Area[]) => {
    //         this.Areas = res;
    //     });

    //     this.InventoryService.getDistributorsByCompany(this.Auth.getUserCompanyId()).subscribe((res: Distributor[]) => {
    //         this.Distributors = res;
    //     });

    //     this.InventoryService.getTerritoriesByCompany(this.Auth.getUserCompanyId()).subscribe((res: Territory[]) => {
    //         this.Territories = res;
    //     });

    //     this.InventoryService.getSectionsByCompany(this.Auth.getUserCompanyId()).subscribe((res: any[]) => {
    //         this.Sections = res;
    //     });

    //     this.InventoryService.getSubsectionsByCompany(this.Auth.getUserCompanyId()).subscribe((res: any[]) => {
    //         this.Subsections = res;
    //     });

    //     this.eTrackerUserService.getSalesUsersByCompany(this.Auth.getUserCompanyId()).subscribe((res: Employee[]) => {
    //         this.DSFs = res;
    //     });

    //     this.setDropboxValues();
    // }

    // ngAfterViewInit() {

    //     const reportUrl = ko["observable"]("ShopCensusSummary"),
    //     container = this.renderer.createElement("div");
    //     container.innerHTML = Html;
    //     // `${environment.repotr_url}`
    //     var host = 'http://localhost:57581/' ;
    //     this.renderer.appendChild(this.scripts.nativeElement, container);
    //     ko.applyBindings({
    //         reportUrl,
    //         requestOptions: {
    //             host,
    //             invokeAction: 'WebDocumentViewer/Invoke'
    //         },
    //         callbacks: {
    //             // For demonstration purposes. Get the "Search" action and hide it.  
    //             ParametersSubmitted: (s, e) => this.ngZone.run(() => {
    //                 if(this.subsectionId)
    //                 e.Parameters.filter(function (p) { return p.Key == "subsectionid"; })[0].Value = this.subsectionId;
    //                 if(this.sectionId)
    //                 e.Parameters.filter(function (p) { return p.Key == "sectionid"; })[0].Value = this.sectionId;
    //                 if(this.territoryId)
    //                 e.Parameters.filter(function (p) { return p.Key == "territoryid"; })[0].Value = this.territoryId;
    //                 if(this.areaId)
    //                 e.Parameters.filter(function (p) { return p.Key == "areaid"; })[0].Value = this.areaId;
    //                 if(this.cityId)
    //                 e.Parameters.filter(function (p) { return p.Key == "cityid"; })[0].Value = this.cityId;
    //                 if(this.regionId)
    //                 e.Parameters.filter(function (p) { return p.Key == "regionid"; })[0].Value = this.regionId;
    //                 if(this.distributorId)
    //                 e.Parameters.filter(function (p) { return p.Key == "distributorid"; })[0].Value = this.distributorId;
    //                 if(this.dsfId)
    //                 e.Parameters.filter(function (p) { return p.Key == "userid"; })[0].Value = this.dsfId;
    //                 if(this.category)
    //                 e.Parameters.filter(function (p) { return p.Key == "category"; })[0].Value = this.category;
    //                 if(this.classification)
    //                 e.Parameters.filter(function (p) { return p.Key == "classification"; })[0].Value = this.classification;

    //             })
    //         }
    //     }, this.control.nativeElement);
    // }

    // setDropboxValues() {

    //     if (this.Auth.getUserLevel() == 'Admin' || this.Auth.getUserLevel() == 'NSM' || this.Auth.getUserLevel() == 'HO') {
    //         this.IsAdmin = true;
    //         this.DisableRegion = false;
    //         this.DisableCity = false;
    //         this.DisableArea = false;
    //         this.DistributorDisable = false;
    //         this.TerritoryDisable = false;
    //         this.SectionDisable = false;
    //         this.SubsectionDisable = false;
    //         this.DsfDisable = false;

    //         this.Regions = this.Regions.filter(r => r.userId == this.Auth.getUserId());


    //     } else if (this.Auth.getUserLevel() == 'ZSM') {
    //         this.IsRsm = true;
    //         this.DisableCity = false;
    //         this.DisableArea = false;
    //         this.DistributorDisable = false;
    //         this.TerritoryDisable = false;
    //         this.SectionDisable = false;
    //         this.SubsectionDisable = false;
    //         this.DsfDisable = false;

    //         this.Cities = this.Cities.filter(c => c.userId == this.Auth.getUserId());

    //     } else if (this.Auth.getUserLevel() == 'ASM') {
    //         this.IsZsm = true;
    //         this.DisableArea = false;
    //         this.DistributorDisable = false;
    //         this.TerritoryDisable = false;
    //         this.SectionDisable = false;
    //         this.SubsectionDisable = false;
    //         this.DsfDisable = false;

    //         this.Areas = this.Areas.filter(a => a.userId == this.Auth.getUserId());

    //     } else {

    //     }
    // }


    // onRegionChange(value: number) {
    //     this.regionId = value;
    //     this.Cities = this.Cities.filter(a => a.regionId == value);
    // }

    // onCityChange(value: number) {
    //     this.cityId = value;
    //     let city = this.Cities.find(c => c.cityId == value);
    //     this.regionId = city.regionId;
    //     this.Areas = this.Areas.filter(a => a.cityId == value);
    // }

    // onAreaChange(value: number) {
    //     this.areaId = value;
    //     let area = this.Areas.find(a => a.areaId == value);
    //     this.cityId = area.cityId;
    //     this.Territories = this.Territories.filter(a => a.areaId == value);
    // }

    // onDistributorChange(value: number) {
    //     this.distributorId = value;
    //     this.Territories = this.Territories.filter(a => a.distributorId == value);
    // }

    // onTerritoryChange(value: number) {
    //     this.territoryId = value;
    //     let territory = this.Territories.find(t => t.territoryId == value);
    //     this.areaId = territory.areaId;
    //     this.Sections = this.Sections.filter(a => a.territoryId == value);
    // }

    // onSectionChange(value: number) {
    //     this.sectionId = value;
    //     let section = this.Sections.find(s => s.sectionId == value);
    //     this.territoryId = section.territoryId;
    //     this.Subsections = this.Subsections.filter(a => a.sectionId == value);
    //     this.DSFs = this.DSFs.filter(a => a.sectionId == value);
    // }

    // onSubsectionChange(value: number) {
    //     this.subsectionId = value;
    //     let subsection = this.Subsections.find(s => s.subsectionId == value);
    //     this.sectionId = subsection.sectionId;
    // }

    // onDsfChange(value) {
    //     this.dsfId = value;
    // }

    // onCategorySelect(value) {
    //     this.category = value;
    // }

    // onClassificationSelect(value) {
    //     this.classification = value;
    // }

    // toggleFilter() {
    //     this.showHideFilter = !this.showHideFilter;
    // }
}
