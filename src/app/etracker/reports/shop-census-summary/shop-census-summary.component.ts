import { Component, OnInit, ElementRef, ViewChild, Renderer2, NgZone } from '@angular/core';
import { AuthService, InventorysystemService, eTrackerUserService } from '../../../core';
import { Region } from '../../../core/Models/Inventory/Setup/Region';
import { Area } from '../../../core/Models/Inventory/Setup/Area';
import { Distributor } from '../../../core/Models/Inventory/Setup/Distributor';
import { Territory } from '../../../core/Models/Inventory/Setup/Territory';
import { Employee } from '../../../core/Models/HRM/employee';
import { City } from '../../../core/Models/HRM/city';

import * as ko from "knockout";
import { Html } from "devexpress-reporting/dx-web-document-viewer";
import { environment } from '../../../../environments/environment';

@Component({
    selector: 'app-shop-census-summary',
    templateUrl: './shop-census-summary.component.html',
    styleUrls: ['./shop-census-summary.component.scss']
})
export class ShopCensusSummaryComponent implements OnInit {

    public showHideFilter: boolean = false;
    public DisableRegion: boolean = true;
    public DisableCity: boolean = true;
    public DisableArea: boolean = true;
    public DistributorDisable: boolean = true;
    public TerritoryDisable: boolean = true;
    public SectionDisable: boolean = true;
    public SubsectionDisable: boolean = true;
    public DsfDisable: boolean = true;

    public Regions: any;
    public Cities: any[] = [];
    public Areas: any;
    public Distributors: any;
    public Territories: any;
    public Sections: any[] = [];
    public Subsections: any[] = [];
    public DSFs: any;
    public Classifications: any[] = ['500 & Above', '250 to 499', '100 to 249', 'Less then 100'];
    public Categories: any[] = ['LMT', 'V/S', 'Retail']


    public IsAdmin: boolean = false;
    public IsRsm: boolean = false;
    public IsZsm: boolean = false;

    public regionId: any;
    public cityId: any;
    public areaId: any;
    public territoryId: any;
    public sectionId: any;
    public subsectionId: any;
    public distributorId: any;
    public dsfId: any;
    public classification: any = '500 & Above';
    public category: any = 'LMT';

    public startDate: any;
    public endDate: any;

    @ViewChild('scripts')
    scripts: ElementRef;

    @ViewChild("control")
    control: ElementRef

    constructor(public renderer: Renderer2, public ngZone: NgZone, public Auth: AuthService, public InventoryService: InventorysystemService, public eTrackerUserService: eTrackerUserService) { }

    ngOnInit() {

        this.InventoryService.getRegionsByCompany(this.Auth.getUserCompanyId()).subscribe((res: Region[]) => {
            this.Regions = res;
        });

        this.InventoryService.getCitiesByCompany(this.Auth.getUserCompanyId()).subscribe((res: City[]) => {
            this.Cities = res;
        });

        this.InventoryService.getAreasByCompany(this.Auth.getUserCompanyId()).subscribe((res: Area[]) => {
            this.Areas = res;
        });

        this.InventoryService.getDistributorsByCompany(this.Auth.getUserCompanyId()).subscribe((res: Distributor[]) => {
            this.Distributors = res;
        });

        this.InventoryService.getTerritoriesByCompany(this.Auth.getUserCompanyId()).subscribe((res: Territory[]) => {
            this.Territories = res;
        });

        this.InventoryService.getSectionsByCompany(this.Auth.getUserCompanyId()).subscribe((res: any[]) => {
            this.Sections = res;
        });

        this.InventoryService.getSubsectionsByCompany(this.Auth.getUserCompanyId()).subscribe((res: any[]) => {
            this.Subsections = res;
        });

        this.eTrackerUserService.getSalesUsersByCompany(this.Auth.getUserCompanyId()).subscribe((res: Employee[]) => {
            this.DSFs = res;
        });

        this.setDropboxValues();
    }

    ngAfterViewInit() {

        const reportUrl = ko["observable"]("ShopCensusSummary"),
            container = this.renderer.createElement("div");
        container.innerHTML = Html;
        var host = 'http://localhost:57581/';
        this.renderer.appendChild(this.scripts.nativeElement, container);
        ko.applyBindings({
            reportUrl,
            requestOptions: {
                host,
                invokeAction: 'WebDocumentViewer/Invoke'
            },
            callbacks: {
                // For demonstration purposes. Get the "Search" action and hide it.  
                ParametersSubmitted: (s, e) => this.ngZone.run(() => {
<<<<<<< HEAD
                    if(this.subsectionId)
                    e.Parameters.filter(function (p) { return p.Key == "subsectionid"; })[0].Value = this.subsectionId;
                    if(this.sectionId)
                    e.Parameters.filter(function (p) { return p.Key == "sectionid"; })[0].Value = this.sectionId;
                    if(this.territoryId)
                    e.Parameters.filter(function (p) { return p.Key == "territoryid"; })[0].Value = this.territoryId;
                    if(this.areaId)
                    e.Parameters.filter(function (p) { return p.Key == "areaid"; })[0].Value = this.areaId;
                    if(this.cityId)
                    e.Parameters.filter(function (p) { return p.Key == "cityid"; })[0].Value = this.cityId;
                    if(this.regionId)
                    e.Parameters.filter(function (p) { return p.Key == "regionid"; })[0].Value = this.regionId;
                    if(this.distributorId)
                    e.Parameters.filter(function (p) { return p.Key == "distributorid"; })[0].Value = this.distributorId;
                    if(this.dsfId)
                    e.Parameters.filter(function (p) { return p.Key == "userid"; })[0].Value = this.dsfId;
                    if(this.category)
                    e.Parameters.filter(function (p) { return p.Key == "category"; })[0].Value = this.category;
                    if(this.classification)
                    e.Parameters.filter(function (p) { return p.Key == "classification"; })[0].Value = this.classification;
=======
                    e.Parameters.filter(function(p) { return p.Key == "subsectionid"; })[0].Value = this.subsectionId || "";
                    e.Parameters.filter(function(p) { return p.Key == "sectionid"; })[0].Value = this.sectionId || "";
                    e.Parameters.filter(function(p) { return p.Key == "territoryid"; })[0].Value = this.territoryId || "";
                    e.Parameters.filter(function(p) { return p.Key == "areaid"; })[0].Value = this.areaId || "";
                    e.Parameters.filter(function(p) { return p.Key == "cityid"; })[0].Value = this.cityId || "";
                    e.Parameters.filter(function(p) { return p.Key == "regionid"; })[0].Value = this.regionId || "";
                    e.Parameters.filter(function(p) { return p.Key == "distributorid"; })[0].Value = this.distributorId || "";
                    e.Parameters.filter(function(p) { return p.Key == "userid"; })[0].Value = this.dsfId || "";
                    e.Parameters.filter(function(p) { return p.Key == "category"; })[0].Value = this.category || "";
                    e.Parameters.filter(function(p) { return p.Key == "classification"; })[0].Value = this.classification || "";
>>>>>>> master

                })
            }
        }, this.control.nativeElement);
    }

    setDropboxValues() {

        if (this.Auth.getUserLevel() == 'Admin' || this.Auth.getUserLevel() == 'NSM' || this.Auth.getUserLevel() == 'HO') {
            this.IsAdmin = true;
            this.DisableRegion = false;
            this.DisableCity = false;
            this.DisableArea = false;
            this.DistributorDisable = false;
            this.TerritoryDisable = false;
            this.SectionDisable = false;
            this.SubsectionDisable = false;
            this.DsfDisable = false;

            this.Regions = this.Regions.filter(r => r.userId == this.Auth.getUserId());


        } else if (this.Auth.getUserLevel() == 'ZSM') {
            this.IsRsm = true;
            this.DisableCity = false;
            this.DisableArea = false;
            this.DistributorDisable = false;
            this.TerritoryDisable = false;
            this.SectionDisable = false;
            this.SubsectionDisable = false;
            this.DsfDisable = false;

            this.Cities = this.Cities.filter(c => c.userId == this.Auth.getUserId());

        } else if (this.Auth.getUserLevel() == 'ASM') {
            this.IsZsm = true;
            this.DisableArea = false;
            this.DistributorDisable = false;
            this.TerritoryDisable = false;
            this.SectionDisable = false;
            this.SubsectionDisable = false;
            this.DsfDisable = false;

            this.Areas = this.Areas.filter(a => a.userId == this.Auth.getUserId());

        } else {

        }
    }


    onRegionChange(value: number) {
        this.regionId = value;
        this.Cities = this.Cities.filter(a => a.regionId == value);
    }

    onCityChange(value: number) {
        this.cityId = value;
        let city = this.Cities.find(c => c.cityId == value);
        this.regionId = city.regionId;
        this.Areas = this.Areas.filter(a => a.cityId == value);
    }

    onAreaChange(value: number) {
        this.areaId = value;
        let area = this.Areas.find(a => a.areaId == value);
        this.cityId = area.cityId;
        this.Territories = this.Territories.filter(a => a.areaId == value);
    }

    onDistributorChange(value: number) {
        this.distributorId = value;
        this.Territories = this.Territories.filter(a => a.distributorId == value);
    }

    onTerritoryChange(value: number) {
        this.territoryId = value;
        let territory = this.Territories.find(t => t.territoryId == value);
        this.areaId = territory.areaId;
        this.Sections = this.Sections.filter(a => a.territoryId == value);
    }

    onSectionChange(value: number) {
        this.sectionId = value;
        let section = this.Sections.find(s => s.sectionId == value);
        this.territoryId = section.territoryId;
        this.Subsections = this.Subsections.filter(a => a.sectionId == value);
        this.DSFs = this.DSFs.filter(a => a.sectionId == value);
    }

    onSubsectionChange(value: number) {
        this.subsectionId = value;
        let subsection = this.Subsections.find(s => s.subsectionId == value);
        this.sectionId = subsection.sectionId;
    }

    onDsfChange(value) {
        this.dsfId = value;
    }

    onCategorySelect(value) {
        this.category = value;
    }

    onClassificationSelect(value) {
        this.classification = value;
    }

    toggleFilter() {
        this.showHideFilter = !this.showHideFilter;
    }
}
