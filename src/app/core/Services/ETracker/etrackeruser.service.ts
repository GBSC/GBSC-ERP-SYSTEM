// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { ApiService } from '../api.service';

// @Injectable()

// export class eTrackerUserService {

//     private Url = "etracker/api/";

//     constructor(private http: HttpClient, private ApiService: ApiService) { }

//     getSalesUsersByCompany(companyId) {

//         return this.ApiService.get(this.Url + 'User/GetSalesUsersByCompanyId/' + companyId);

//     }
// }



import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()

export class eTrackerUserService {

    public allUsers: any = [];
    public locationHistory: any = [];
    public visitedShops: any = [];
    public currentUser: any = null;
    public mapHelper: any = MapHelper;
    public showSpinner: boolean = false;
    public realTimeTracking: BehaviorSubject<any> = new BehaviorSubject<any>(null);
    private Url = "etracker/api/";
    constructor(private firebase: AngularFirestore, private http: HttpClient, private ApiService: ApiService) { }


    getUser(userId: any) {
        return this.ApiService.get(this.Url + 'User/GetUser/' + userId);
    }

    assignUserLevel(model) {
        return this.ApiService.post(this.Url + 'User/AssignUserLevel', model);
    }

    getSalesUsersByCompany(companyId) {
        return this.ApiService.get(this.Url + 'User/GetUsersByCompanyId/' + companyId);
    }

    getAssignedSubsectionsBySection(sectionid, userid) {
        return this.ApiService.get(this.Url + 'Territory/GetAssignedSubsectionsBySection/' + sectionid + '/' + userid);
    }

    assignSubsections(subsections) {
        return this.ApiService.post(this.Url + 'User/AssignSubsections', subsections);
    }

    fetchAllUsers() {
        let data = this.firebase.collection('tbl_users').valueChanges();
        data.subscribe((d: any) => {
            this.allUsers = d.map(p => {
                p.lat = Number.parseFloat(p.lat),
                    p.lng = Number.parseFloat(p.lng)
                return p;
            });
            console.log(this.allUsers);
            if (this.currentUser) {
                let user = this.allUsers.find(u => u.userid == this.currentUser.userid);
                this.realTimeTracking.next(user);
            } else {
                this.realTimeTracking.next(this.allUsers[0]);
            }
        });
    }

    // 24.859973798919803
    // 67.04812597073291

    fetchVisitedShops(e) {

        console.log(e.target.checked);
        let that: any = this;
        if (e.target.checked) {

            let shops = this.firebase.collection(`tbl_shops`).valueChanges();

            shops.subscribe((d: any) => {
                console.log(d);
                this.visitedShops = d.map(p => {
                    p.lat = Number.parseFloat(p.lat),
                        p.lng = Number.parseFloat(p.lng)
                    return p;
                })
            });
        } else {
            that.visitedShops = [];
        }

        console.log('visitedShops', this.visitedShops);
    }

    drawUserLocation(dateRange) {
        this.showSpinner = true;
        let days = dateRange.toDate - dateRange.fromDate;
        if (days <= 30) {

            let history = this.firebase.collection(`tbl_users/${this.currentUser.userid}/user_history`).valueChanges();

            console.log(dateRange);

            history.subscribe((d: any) => {
                console.log(d.length);
                console.log(d);
                this.locationHistory = d.filter(p => {
                    let dateFilter = p.timestamp.seconds >= dateRange.from && p.timestamp.seconds <= dateRange.to;
                    console.log(dateFilter);
                    if (dateFilter) {
                        console.log('in condition');
                        p.lat = Number.parseFloat(p.lat),
                            p.lng = Number.parseFloat(p.lng)
                        return p;
                    }
                })
                this.showSpinner = false;
                console.log(this.locationHistory);
            });
        } else {
            alert(`Please select days less than 4`)
        }
    }

    setCurrentUser(userIndex) {
        let currentUsers = this.firebase.collection('tbl_users', ref => ref.where('userid', '==', parseInt(userIndex))).valueChanges();
        currentUsers.subscribe(d => {
            this.currentUser = d[0];
            this.currentUser.lat = parseFloat(this.currentUser.lat);
            this.currentUser.lng = parseFloat(this.currentUser.lng);
            this.realTimeTracking.next(this.currentUser);
        });
    }
}

class MapHelper {

    static shopIcon: string = './assets/images/online-shop.gif';
    static CurrentLocationIcon: string = './assets/images/e7mkwk.gif';
    static simpleIcon: string = './assets/images/visit.png';

    static createMarker(url, size) {
        return new MarkerIcon(url, size).init();
    }

    static setLabelOptions(text) {
        return new MarkerLabel(text);
    }

}

class MarkerIcon {
    private url;
    private size;
    constructor(url, size) {
        this.url = url;
        this.size = size;
    }

    init() {
        let url = this.url;
        return {
            url: this.url,
            scaledSize: {
                width: this.size,
                height: this.size
            }
        }
    }
}

class MarkerLabel {
    private _color: string = 'black';
    private _fontFamily: string = 'Arial, Helvetica, sans-serif';
    private _fontSize: string = '14px';
    private _fontWeight: string = 'normal';
    private _text: string = '';

    constructor(text) {
        this._text = text;
    }

    set color(value) {
        this._color = value;
    }
    set fontFamily(value) {
        this._fontFamily = value;
    }
    set fontSize(value) {
        this._fontSize = value;
    }
    set fontWeight(value) {
        this._fontWeight = value;
    }
    set text(value) {
        this._text = value;
    }


}
