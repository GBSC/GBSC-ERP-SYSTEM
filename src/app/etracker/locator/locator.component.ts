import { Component } from '@angular/core';
import { AuthService, InventorysystemService, eTrackerUserService } from '../../core';
import { Region } from '../../core/Models/Inventory/Setup/Region';
import { Area } from '../../core/Models/Inventory/Setup/Area';
import { Distributor } from '../../core/Models/Inventory/Setup/Distributor';
import { Territory } from '../../core/Models/Inventory/Setup/Territory';
import { Employee } from '../../core/Models/HRM/employee';
import { City } from '../../core/Models/HRM/city';

@Component({
    selector: 'app-locator',
    templateUrl: './locator.component.html',
    styleUrls: ['./locator.component.scss']
})

export class LocatorComponent {
    public showHideFilter: boolean = false;
    public userLatestlocation: any;
    public userLocationHistory: any[];
    public selectedUser: any;
    public agmMap: any;
    public dateRange: any = {};
    public zoomLevels: any = [];
    public selectedZoom: any = 18;
    public historyMakrer: any;
    public shopmarker: any;
    public currentLocationMarker: any;
    public dayStartEndMakrer: any;
    public mapHelper: any;
    public showSpinner: boolean = false;
    public mockCoordsForLiveTracking: any = [];
    public sampleTracking: any = [];
    public liveTracking: boolean = false;
    public shops: any = [];
    public productiveShopMarker: any;
    public productiveShopMarkerOther: any;
    public nonProductiveShopMarker: any;
    public nonProductiveShopMarkerOther: any;
    public liveTrackingRouteCoords: any = [];
    public dayStartEnd: any;
    public hours: any = [];
    public minutes: any = [];
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
    public userSelected: any;
    public mockUser : any =  { lat: 24.86218208911948, lng: 67.07455098524781 };
    public timeFilter : boolean = false;

    constructor(public eTrackerUserService: eTrackerUserService, public Auth: AuthService, public InventoryService: InventorysystemService) { }

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


        this.mockCoordsForLiveTracking = this.eTrackerUserService.addMockDataForLiveTracking();

        this.mapHelper = this.eTrackerUserService.mapHelper;
        let simpleMarker = this.eTrackerUserService.createMarkerLabel('black', '16', 'Lato', 'bold');
        console.log(simpleMarker);
        // this.eTrackerUserService.fetchAllUsers();
        this.historyMakrer = this.mapHelper.createMarker(this.mapHelper.simpleIcon, 45);
        this.shopmarker = this.mapHelper.createMarker(this.mapHelper.shopIcon, 45);
        this.productiveShopMarker = this.mapHelper.createMarker(this.mapHelper.productiveShopMarker, 45);
        this.productiveShopMarkerOther = this.mapHelper.createMarker(this.mapHelper.productiveShopMarkerOther, 45);
        this.nonProductiveShopMarker = this.mapHelper.createMarker(this.mapHelper.nonProductiveShopMarker, 45);
        this.nonProductiveShopMarkerOther = this.mapHelper.createMarker(this.mapHelper.nonProductiveShopMarkerOther, 45);
        this.currentLocationMarker = this.mapHelper.createMarker(this.mapHelper.CurrentLocationIcon, 45);
        this.dayStartEndMakrer = this.mapHelper.createMarker(this.mapHelper.dayStartEndMakrer, 45);

        this.mockCoordsForLiveTracking = this.eTrackerUserService.addMockDataForLiveTracking();
        this.shops = JSON.parse(localStorage.getItem('shops'));
        console.log(this.shops);

        for (let i = 0; i <= 22; i++) {
            this.zoomLevels.push(i);
        }

        this.eTrackerUserService.realTimeTracking.subscribe(data => {
            this.userLatestlocation = data;
            console.log('latestLoc', this.userLatestlocation);
            if (data) {
                this.liveTrackingRouteCoords.push(this.userLatestlocation);
                this.eTrackerUserService.currentUser = this.userLatestlocation;
            }
        });




    }

    toggleFilter() {
        this.showHideFilter = !this.showHideFilter;
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
            if (this.Regions && this.Regions.length) {
                this.Regions = this.Regions.filter(r => r.userId == this.Auth.getUserId());
            }


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


    selectUser(e) {
        this.eTrackerUserService.locationHistory = [];
        this.sampleTracking = [];
        this.liveTrackingRouteCoords = [];
        this.eTrackerUserService.setCurrentUser(e, this.DSFs, this.agmMap);
       

        console.log(this.eTrackerUserService.currentUser);
    }

    mapReady(map) {
        this.agmMap = map;
        console.log(map);
    }


    // filterFromDate(e) {
    //     let date = new Date(e.target.value);
    //     this.dateRange.fromDate = date.getDate();
    //     // this.dateRange.from = date.getTime() / 1000;
    //     this.dateRange.from = date;
    //     console.log(this.dateRange);
    // }

    // filterToDate(e) {
    //     let date = new Date(e.target.value);
    //     this.dateRange.toDate = date.getDate();
    //     // this.dateRange.to = date.getTime() / 1000;
    //     this.dateRange.to = date;
    // }

    selectZoomLevel(e) {
        this.selectedZoom = Number.parseInt(e.target.value);
    }

    showVisitedShops(e) {
        this.eTrackerUserService.fetchVisitedShops(this.dayStartEnd);
    }

    // go() {
    //     this.eTrackerUserService.drawUserLocation(this.dateRange);
    // }

    createDate(seconds) {
        let date: any = new Date();
        date.setTime(seconds * 1000);
        return date = date.toString();
    }

    getTime(seconds) {
        return `${this.createDate(seconds).substr(16, 8)}`
    }

    getDate(seconds) {
        return `${this.createDate(seconds).substr(0, 16)}`
    }


    showDayStartEnd(e) {
        let start = new Date(e.target.value);
        let end = new Date(e.target.value);
        start.setHours(0);
        end.setHours(23);
        this.dayStartEnd = { start, end }
        console.log(this.dayStartEnd);
    }

    showLiveTracking() {
        this.liveTracking = !this.liveTracking;
        this.sampleTracking = this.liveTrackingRouteCoords;
        console.log(this.liveTrackingRouteCoords);
    }


    showProductiveShops() {
        this.eTrackerUserService.filterProductiveShops();
    }
    showNonProductiveShops() {
        this.eTrackerUserService.filterNonProductiveShops();
    }

    showAllShops() {
        this.eTrackerUserService.fetchVisitedShops(this.dayStartEnd);
        // this.eTrackerUserService.showAllShops();
    }


    showRouteTaken() {
        this.eTrackerUserService.showRouteTaken()
    }


    getHour(e, startEnd) {
        let hours = e.target.value;
        if (startEnd === 'start') {
            this.dayStartEnd.start.setHours(hours);
        } else {
            this.dayStartEnd.end.setHours(hours);
        }
    }

    getMinutes(e, startEnd) {
        let minutes = e.target.value;
        if (startEnd === 'start') {
            this.dayStartEnd.start.setMinutes(minutes);
        } else {
            this.dayStartEnd.end.setMinutes(minutes);
        }
        console.log(this.dayStartEnd);
    }

    fetchDayStartEnd() {
        this.eTrackerUserService.fetchPerDayData(this.dayStartEnd);
    }


    

    showLiveTrackingSimulation() {
        let counter = 0;
        let currentUser = this.eTrackerUserService.currentUser;
        this.eTrackerUserService.currentUser = this.mockCoordsForLiveTracking[0];
        this.liveTracking = !this.liveTracking;

        let timer = setInterval(() => {
            if (counter < this.mockCoordsForLiveTracking.length && this.liveTracking) {
                this.eTrackerUserService.currentUser = this.mockCoordsForLiveTracking[counter];
                console.log(this.mockCoordsForLiveTracking);

                this.eTrackerUserService.currentUser.fullName = currentUser.fullName;

                this.sampleTracking.push(this.eTrackerUserService.currentUser);
                counter++;
            } else {
                clearInterval(timer);
                console.log('timer cleared');
                // this.eTrackerUserService.setCurrentUser(this.eTrackerUserService.addMockDataForLiveTracking()[0], this.DSFs, this.agmMap);
                this.eTrackerUserService.currentUser = currentUser;
                this.agmMap.setCenter(this.eTrackerUserService.currentUser);
                this.sampleTracking = [];
                this.liveTracking = false;

            }
        }, 1000);
    }

    showTimeFilter(e) {
        if(e.target.checked) {
            this.timeFilter = true;
        }else {
            this.timeFilter = false;
        }
    }



}

