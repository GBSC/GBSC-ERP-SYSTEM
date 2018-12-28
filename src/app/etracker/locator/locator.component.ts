// import { Component, OnInit } from '@angular/core';

// @Component({
//     selector: 'app-locator',
//     templateUrl: './locator.component.html',
//     styleUrls: ['./locator.component.scss']
// })
// export class LocatorComponent implements OnInit {

//     constructor() { }

//     ngOnInit() {
//     }

// }




import { Component, OnInit } from '@angular/core';
import { GoogleMapsAPIWrapper, MapsAPILoader } from '@agm/core';
import { eTrackerUserService } from '../../core/Services/ETracker/etrackeruser.service';


@Component({
    selector: 'app-locator',
    templateUrl: './locator.component.html',
    styleUrls: ['./locator.component.scss']
})
export class LocatorComponent implements OnInit {
    public title: string = 'Angular Map';
    public userLatestlocation: any;
    public userLocationHistory: any[];
    public selectedUser: any;
    protected agmMap: any;
    public dateRange: any = {};
    public zoomLevels: any = [];
    public selectedZoom: any = 15;
    public historyMakrer: any;
    public shopmarker: any;
    public currentLocationMarker: any;
    public mapHelper: any;
    public showSpinner: boolean = false;

    constructor(private eTrackerUserService: eTrackerUserService) { }

    ngOnInit() {
        this.mapHelper = this.eTrackerUserService.mapHelper;
        this.eTrackerUserService.fetchAllUsers();
        this.historyMakrer = this.mapHelper.createMarker(this.mapHelper.simpleIcon, 64);
        this.shopmarker = this.mapHelper.createMarker(this.mapHelper.shopIcon, 64);
        this.currentLocationMarker = this.mapHelper.createMarker(this.mapHelper.CurrentLocationIcon, 64);


        for (let i = 0; i <= 22; i++) {
            this.zoomLevels.push(i);
        }

        this.eTrackerUserService.realTimeTracking.subscribe(data => {
            this.userLatestlocation = data;
            console.log('latestLoc', this.userLatestlocation);
            this.eTrackerUserService.currentUser = this.userLatestlocation;
        });

    }

    mapReady(map) {
        this.agmMap = map;
        console.log(map);
    }


    selectUser(e) {
        this.eTrackerUserService.locationHistory = [];
        this.eTrackerUserService.setCurrentUser(e.target.value);
        this.agmMap.setCenter(this.eTrackerUserService.currentUser);
    }

    filterFromDate(e) {
        let date = new Date(e.target.value);
        this.dateRange.fromDate = date.getDate();
        this.dateRange.from = date.getTime() / 1000;
    }

    filterToDate(e) {
        let date = new Date(e.target.value);
        this.dateRange.toDate = date.getDate();
        this.dateRange.to = date.getTime() / 1000;
    }

    selectZoomLevel(e) {
        this.selectedZoom = Number.parseInt(e.target.value);
    }

    showVisitedShops(e) {
        this.eTrackerUserService.fetchVisitedShops(e);
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
}

