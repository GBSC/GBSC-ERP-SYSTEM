import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';
import { Employee } from '../../Models/HRM/employee';

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()

export class eTrackerUserService {

    public Url = "etracker/api/";

    public allUsers: any = [];
    public locationHistory: any = [];
    public visitedShops: any = [];
    public productiveShops: any = [];
    public nonProductiveShops: any = [];
    public shopRouteTaken = [];
    public dayStartEndData: any = [];
    public mapHelper: MapHelper = MapHelper;
    public showSpinner: boolean = false;
    public currentUser: any = null;
    public realTimeTracking: BehaviorSubject<any> = new BehaviorSubject<any>(null);
<<<<<<< HEAD

    constructor(public firebase: AngularFirestore, private http: HttpClient, private ApiService: ApiService) { }
=======
    public allShops: boolean = false;


    constructor(public firebase: AngularFirestore, public http: HttpClient, public ApiService: ApiService) { }
>>>>>>> d51916d9e93536b321defeab6962c14758a32089

    getUser(userId: any) {
        return this.ApiService.get(this.Url + 'User/GetUser/' + userId);
    }

    assignUserLevel(model) {
        return this.ApiService.post(this.Url + 'User/AssignUserLevel', model);
    }

    getUsers(loggedinUserId) {
        return this.ApiService.get(this.Url + 'User/GetUsers/' + loggedinUserId);
    }

    getSalesUsersByCompany(companyId) {
        return this.ApiService.get(this.Url + 'User/GetUsersByCompanyId/' + companyId);
    }

    GetSalesUsersByCompany(companyId: number): Observable<Employee[]> {
        return this.ApiService.get(this.Url + 'User/GetUsersByCompanyId/' + companyId);
    }

    getAssignedSubsectionsBySection(sectionid, userid) {
        return this.ApiService.get(this.Url + 'Territory/GetAssignedSubsectionsBySection/' + sectionid + '/' + userid);
    }

    getUsersBySection(sectionid: number): Observable<Employee[]> {
        return this.ApiService.get(this.Url + 'Territory/GetUsersBySection/' + sectionid);
    }

    assignSubsections(subsections) {
        return this.ApiService.post(this.Url + 'User/AssignSubsections', subsections);
    }


<<<<<<< HEAD
    fetchAllUsers() {
        let data = this.firebase.collection('tbl_users').valueChanges();
        data.subscribe((data: any) => {
            this.allUsers = data.map(user => {
                user.lat = Number.parseFloat(user.lat),
                    user.lng = Number.parseFloat(user.lng)
                return user;
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


    fetchVisitedShops(dateRange) {
        this.visitedShops = [];
        this.shopRouteTaken = [];
        this.clearFilteredShops();
        let shopsObserable = this.firebase.collection(`tbl_shops`).valueChanges();
        shopsObserable.subscribe(shops => shops.forEach((shop: any) => {

            console.log(shop);

            let visit_summary = this.firebase.collection(`/tbl_shops/${shop.shopId}/visit_summary`, ref => ref.where('userId', '==', String(this.currentUser.userid)).where('timestamp', '>=', dateRange.from).where('timestamp', '<=', dateRange.to)).valueChanges();

            visit_summary.subscribe((d: any) => {
                console.log(d);
                d.forEach(p => {
                    p.lat = Number.parseFloat(p.lat),
                        p.lng = Number.parseFloat(p.lng)
                    this.visitedShops.push(p);
                    return p;
                })
                console.log('visitedShops', this.visitedShops);
            });


        }));

    }

    filterProductiveShops() {
        this.clearFilteredShops();
        this.productiveShops = this.visitedShops.filter(shop => shop.productive);
        console.log('productive', this.productiveShops);
    }
    filterNonProductiveShops() {
        this.clearFilteredShops();
        this.nonProductiveShops = this.visitedShops.filter(shop => !shop.productive);
        console.log('non productive', this.productiveShops);
    }

    clearFilteredShops() {
        this.productiveShops = [];
        this.nonProductiveShops = [];
        this.shopRouteTaken = [];
    }

    showRouteTaken() {
        if (this.shopRouteTaken.length) {
            this.shopRouteTaken = [];
        } else {
            if (this.productiveShops.length) {
                this.shopRouteTaken = this.productiveShops;
            } else if (this.nonProductiveShops.length) {
                this.shopRouteTaken = this.nonProductiveShops;
            }
        }
    }

    drawUserLocation(dateRange) {
        this.locationHistory = [];
        this.showSpinner = true;
        let days = dateRange.toDate - dateRange.fromDate;
        if (days <= 30) {

            let history = this.firebase.collection(
                `tbl_users/${this.currentUser.userid}/user_history`, ref => ref.where('timestamp', '>=', dateRange.from).where('timestamp', '<=', dateRange.to)).valueChanges();
            history.subscribe(data => {
                console.log(data);
                if (data.length < 200) {
                    this.locationHistory = data.map((h: any) => {
                        h.lat = parseFloat(h.lat);
                        h.lng = parseFloat(h.lng);
                        return h;
                    });
                } else {
                    alert('Data is too large to draw on map')
                }
                this.showSpinner = false;
                console.log(data)
            })

        } else {
            alert(`Please select days less than 4`)
        }
    }

    setCurrentUser(userIndex) {
        this.shopRouteTaken = [];
        this.visitedShops = [];
        this.clearFilteredShops();
        let currentUsers = this.firebase.collection('tbl_users', ref => ref.where('userid', '==', parseInt(userIndex))).valueChanges();
        currentUsers.subscribe(d => {
            this.currentUser = d[0];
            this.currentUser.lat = parseFloat(this.currentUser.lat);
            this.currentUser.lng = parseFloat(this.currentUser.lng);
            this.realTimeTracking.next(this.currentUser);
        });
    }

    createMarkerLabel(color, fontSize, fontFamily, fontWeight) {
        return {
            color,
            fontFamily,
            fontSize,
            fontWeight,
            text: ''
        }
    }
=======
    // fetchAllUsers() {
    //     let data = this.firebase.collection('tbl_users').valueChanges();
    //     data.subscribe((data: any) => {
    //         this.allUsers = data.map(user => {
    //             user.lat = Number.parseFloat(user.lat),
    //                 user.lng = Number.parseFloat(user.lng)
    //             return user;
    //         });

    //         console.log('users fetched', this.allUsers);


    //         // console.log(this.allUsers);
    //         // if (this.currentUser) {
    //         //     let user = this.allUsers.find(u => u.userId == this.currentUser.userId);
    //         //     this.realTimeTracking.next(user);
    //         //     console.log(user);
    //         // } else {
    //         //     this.realTimeTracking.next(this.allUsers[0]);
    //         // }
    //     });
    // }



    fetchVisitedShops(day) {
        this.clearOtherArrays();
        let shopsObserable = this.firebase.collection(`tbl_shops`).valueChanges();
        shopsObserable.subscribe(shops => shops.forEach((shop: any) => {
    
          console.log(shop);
    
          let visit_summary = this.firebase.collection(`/tbl_shops/${shop.shopId}/visit_summary`, ref => ref.where('userId', '==',this.currentUser.userId).where('timestamp', '>=', day.start).where('timestamp', '<=', day.end)).valueChanges();
    
          visit_summary.subscribe((d: any) => {
            console.log(d);
            d.forEach((p, i) => {
              p.lat = Number.parseFloat(p.lat);
              p.lng = Number.parseFloat(p.lng);
              this.visitedShops.push(p);
              return p;
            })
            this.allShops = true;
            console.log('visitedShops', this.visitedShops);
          });
    
    
        }));
    
      }
    
      filterProductiveShops() {
        this.clearFilteredShops();
        this.productiveShops = this.visitedShops.filter(shop => shop.productive);
        console.log('productive', this.productiveShops);
      }
      filterNonProductiveShops() {
        this.clearFilteredShops();
        this.nonProductiveShops = this.visitedShops.filter(shop => !shop.productive);
        console.log('non productive', this.productiveShops);
      }
    
      showAllShops() {
          this.clearFilteredShops();
          this.allShops = !this.allShops;
      }
    
      clearFilteredShops() {
        this.productiveShops = [];
        this.nonProductiveShops = [];
        this.shopRouteTaken = [];
        this.allShops = false;
      }
    
      showRouteTaken() {
        if (this.shopRouteTaken.length) {
          this.shopRouteTaken = [];
        } else {
          if (this.productiveShops.length) {
            this.shopRouteTaken = this.productiveShops;
          } else if (this.nonProductiveShops.length) {
            this.shopRouteTaken = this.nonProductiveShops;
          }else if(this.visitedShops.length && this.allShops) {
            this.shopRouteTaken = this.visitedShops;
          }
        }
      }
    
      // drawUserLocation(dateRange) {
      //   this.clearOtherArrays();
      //   this.locationHistory = [];
      //   this.showSpinner = true;
      //   let days = dateRange.toDate - dateRange.fromDate;
      //   if (days <= 30) {
    
      //     let history = this.firebase.collection(
      //       `tbl_users/${this.currentUser.userId}/user_history`, ref => ref.where('timestamp', '>=', dateRange.from).where('timestamp', '<=', dateRange.to)).valueChanges();
      //     history.subscribe(data => {
      //       console.log(data);
      //       if (data.length < 500) {
      //         this.locationHistory = data.map((h: any) => {
      //           h.lat = parseFloat(h.lat);
      //           h.lng = parseFloat(h.lng);
      //           return h;
      //         });
      //       } else {
      //         alert('Data is too large to draw on map')
      //       }
      //       this.showSpinner = false;
      //       console.log(data)
      //     })
    
      //   } else {
      //     alert(`Please select days less than 4`)
      //   }
      // }
    
      setCurrentUser(userIndex, DSFs, map) {
        console.log(DSFs);
        console.log('map',map);

        this.shopRouteTaken = [];
        this.visitedShops = [];
        this.clearFilteredShops();
        let currentUsers = this.firebase.collection('tbl_users', ref => ref.where('userId', '==', parseInt(userIndex))).valueChanges();
        currentUsers.subscribe(d => {
            console.log('current User', d);
            this.currentUser = d[0];
            console.log(this.currentUser, "Current user");
            this.currentUser.lat = parseFloat(this.currentUser.lat);
            this.currentUser.lng = parseFloat(this.currentUser.lng);
            this.realTimeTracking.next(this.currentUser);
            let user = DSFs.find(u => u.userId == this.currentUser.userId);
            this.currentUser.fullName = `${user.firstName} ${user.lastName}`;
            // map.setCenter(this.currentUser);

        });
        console.log(this.currentUser);
    }
    
      createMarkerLabel(color, fontSize, fontFamily, fontWeight) {
        return {
          color,
          fontFamily,
          fontSize,
          fontWeight,
          text: ''
        }
      }
    
      fetchPerDayData(day) {
        this.clearOtherArrays();
        console.log(day, this.currentUser.userId);
        let dayStartEnd = this.firebase.collection(
          `tbl_users/${this.currentUser.userId}/user_history`, ref => ref.where('timestamp', '>=', day.start).where('timestamp', '<=', day.end)).valueChanges();
    
        dayStartEnd.subscribe(d => {
          console.log(d);
          this.dayStartEndData = d;
        });
      }
    
      clearOtherArrays() {
        this.locationHistory = [];
        this.visitedShops = [];
        this.productiveShops = [];
        this.nonProductiveShops = [];
        this.shopRouteTaken = [];
        this.dayStartEndData = [];
      }
>>>>>>> d51916d9e93536b321defeab6962c14758a32089

    addMockDataForLiveTracking() {
        return [
            { lat: 24.86218208911948, lng: 67.07455098524781 },
            { lat: 24.862245363392216, lng: 67.07481384173127 },
            { lat: 24.862328106623085, lng: 67.07514107123109 },
            { lat: 24.86236704459494, lng: 67.07544147864076 },
            { lat: 24.86222589438867, lng: 67.0757740725586 },
            { lat: 24.862177221866375, lng: 67.07628369227143 },
            { lat: 24.862352442856917, lng: 67.07676648989411 },
            { lat: 24.862318372128218, lng: 67.07741022005769 },
            { lat: 24.862045805960523, lng: 67.07749605074616 },
            { lat: 24.861598017380675, lng: 67.07760870352479 },
            { lat: 24.861048013971086, lng: 67.07753360167237 },
            { lat: 24.860950667980067, lng: 67.07732438936921 },
            { lat: 24.860838719995634, lng: 67.07696497336121 },
            { lat: 24.86121350197994, lng: 67.07681476965638 },
            { lat: 24.86152500821935, lng: 67.07668065920564 },
            { lat: 24.8613351841981, lng: 67.07604765787812 },
            { lat: 24.861023677480517, lng: 67.07562386885377 },
            { lat: 24.86071216997818, lng: 67.07582235232087 },
            { lat: 24.860710514533228, lng: 67.07582653677241 },
            { lat: 24.860238384472684, lng: 67.07601429140345 },
            { lat: 24.859883068908424, lng: 67.07591773187892 },
            { lat: 24.85991714030814, lng: 67.07542420542018 },
            { lat: 24.860214047822755, lng: 67.0749789587237 },
            { lat: 24.860106966506237, lng: 67.07435668623225 },
            { lat: 24.860321129046557, lng: 67.07412601625697 }
        ];

    }
}

class MapHelper {

<<<<<<< HEAD
    static shopIcon: string = './assets/images/online-shop.gif';
    static CurrentLocationIcon: string = './assets/images/e7mkwk.gif';
    static simpleIcon: string = './assets/images/e7mkwk.gif';
    static productiveShopMarker: string = './assets/images/online-shop.gif';
    static nonProductiveShopMarker: string = './assets/images/visit.png';
    static nonProductiveShopMarkerOther: string = './assets/images/baseline-store_mall_directory-non-productive-other-24px.svg';

=======
    static shopIcon: string = './assets/images/baseline-store_mall_directory-24px.svg';
    static CurrentLocationIcon: string = './assets/images/e7mkwk.gif';
    static simpleIcon: string = './assets/images/daystart-dayend.png';
    static productiveShopMarker: string = './assets/images/productive-pjp.png';
    static productiveShopMarkerOther: string = './assets/images/productive-other.png';
    static nonProductiveShopMarker: string = './assets/images/none-productive-pjp.png';
    static nonProductiveShopMarkerOther: string = './assets/images/none-productive-other.png';
    static dayStartEndMakrer: string = './assets/images/daystart-dayend.png';
  
>>>>>>> d51916d9e93536b321defeab6962c14758a32089
    static createMarker(url, size) {
        return new MarkerIcon(url, size).init();
    }
<<<<<<< HEAD

}

class MarkerIcon {
    private url;
    private size;
=======
  
  }

class MarkerIcon {
    public url;
    public size;
>>>>>>> d51916d9e93536b321defeab6962c14758a32089
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