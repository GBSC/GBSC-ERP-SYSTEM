import { Component, OnInit } from '@angular/core';
import { GoogleMapsAPIWrapper, MapsAPILoader } from '@agm/core';
import { eTrackerUserService } from '../../core/Services/ETracker/etrackeruser.service';


@Component({
    selector: 'app-locator',
    templateUrl: './locator.component.html',
    styleUrls: ['./locator.component.scss']
})

export class LocatorComponent {
    public title: string = 'Angular Map';
    public userLatestlocation: any;
    public userLocationHistory: any[];
    public selectedUser: any;
    protected agmMap: any;
    public dateRange: any = {};
    public zoomLevels: any = [];
    public selectedZoom: any = 18;
    public historyMakrer: any;
    public shopmarker: any;
    public currentLocationMarker: any;
    public mapHelper: any;
    public showSpinner: boolean = false;
    public mockCoordsForLiveTracking: any = [];
    public sampleTracking: any = [];
    public liveTracking: boolean = false;
    public shops: any = [];
    public productiveShopMarker: any;
    public nonProductiveShopMarker: any;
    public nonProductiveShopMarkerOther: any;
    public liveTrackingRouteCoords: any = [];

    constructor(private eTrackerUserService: eTrackerUserService) { }

    ngOnInit() {

        
        this.mapHelper = this.eTrackerUserService.mapHelper;
        let simpleMarker = this.eTrackerUserService.createMarkerLabel('black', '16', 'Lato', 'bold');
        console.log(simpleMarker);
        this.eTrackerUserService.fetchAllUsers();
        this.historyMakrer = this.mapHelper.createMarker(this.mapHelper.simpleIcon, 45);
        this.shopmarker = this.mapHelper.createMarker(this.mapHelper.shopIcon, 45);
        this.productiveShopMarker = this.mapHelper.createMarker(this.mapHelper.productiveShopMarker, 45);
        this.nonProductiveShopMarker = this.mapHelper.createMarker(this.mapHelper.nonProductiveShopMarker, 45);
        this.nonProductiveShopMarkerOther = this.mapHelper.createMarker(this.mapHelper.nonProductiveShopMarkerOther, 45);
        this.currentLocationMarker = this.mapHelper.createMarker(this.mapHelper.CurrentLocationIcon, 45);

        this.mockCoordsForLiveTracking = this.eTrackerUserService.addMockDataForLiveTracking();
        this.shops = JSON.parse(localStorage.getItem('shops'));
        console.log(this.shops);

        for (let i = 0; i <= 22; i++) {
            this.zoomLevels.push(i);
        }

        this.eTrackerUserService.realTimeTracking.subscribe(data => {
            this.userLatestlocation = data;
            console.log('latestLoc', this.userLatestlocation);
            if(data) {
                this.liveTrackingRouteCoords.push(this.userLatestlocation);
                this.eTrackerUserService.currentUser = this.userLatestlocation;
            }
        });

    }

    mapReady(map) {
        this.agmMap = map;
        console.log(map);
    }


    selectUser(e) {
        this.eTrackerUserService.locationHistory = [];
        this.sampleTracking = [];
        this.liveTrackingRouteCoords = [];
        this.eTrackerUserService.setCurrentUser(e.target.value);
        this.agmMap.setCenter(this.eTrackerUserService.currentUser);
    }

    filterFromDate(e) {
        let date = new Date(e.target.value);
        this.dateRange.fromDate = date.getDate();
        // this.dateRange.from = date.getTime() / 1000;
        this.dateRange.from = date;
        console.log(this.dateRange);
    }

    filterToDate(e) {
        let date = new Date(e.target.value);
        this.dateRange.toDate = date.getDate();
        // this.dateRange.to = date.getTime() / 1000;
        this.dateRange.to = date;
    }

    selectZoomLevel(e) {
        this.selectedZoom = Number.parseInt(e.target.value);
    }

    showVisitedShops(e) {
        this.eTrackerUserService.fetchVisitedShops(this.dateRange);
    }

    go() {
        this.eTrackerUserService.drawUserLocation(this.dateRange);
    }

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

    showLiveTrackingSimulation() {
        let counter = 0;
        this.liveTracking = !this.liveTracking;

        let timer = setInterval(() => {
            if (counter < this.mockCoordsForLiveTracking.length && this.liveTracking) {
                this.eTrackerUserService.currentUser = this.mockCoordsForLiveTracking[counter];
                this.eTrackerUserService.currentUser.userid = 0;
                this.sampleTracking.push(this.eTrackerUserService.currentUser);
                counter++;
            } else {
                clearInterval(timer);
                console.log('timer cleared');
                this.eTrackerUserService.setCurrentUser(0);
                this.agmMap.setCenter(this.eTrackerUserService.currentUser);
                this.sampleTracking = [];

            }
        }, 1000);
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


    showRouteTaken() {
        this.eTrackerUserService.showRouteTaken()
    }



}

