import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../app/core';
import { StoreService } from '../../../app/core/Services/ETracker/store.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-visit-summary',
    templateUrl: './visit-summary.component.html',
    styleUrls: ['./visit-summary.component.scss']
})
export class VisitSummaryComponent implements OnInit {

    public companyId: any;
    public store: any;
    public storeVisits: any;
    public storeId: any;
    public Storevisitdetail: any = [];
    public Storevisitdetails: any = [];
    public StoreVisitInventories: any = [];
    public StoreNoOrderReason: any = {};
    public storeVisit : any;

    constructor(public authService: AuthService, public storeService: StoreService, public route: ActivatedRoute) {
        this.companyId = this.authService.getUserCompanyId();
    }

    ngOnInit() {

        this.route.params.subscribe((params) => {
            this.storeId = +params['id'];
            console.log(this.storeId);

            console.log(this.companyId);

            this.storeService.getStoreVisitById(this.storeId).subscribe(res=>{
                this.storeVisit = res;
                console.log(this.storeVisit);
            })

            this.storeService.getStore(this.storeId).subscribe(s => {
                this.store = s;
                console.log(this.store)
            });

            this.storeService.getStoreVisits(this.storeId).subscribe(s => {
                this.storeVisits = s;
                console.log(this.storeVisits)
            });

            this.storeService.getOrdersByStoreVisitId(this.storeId).subscribe(sv => {
                this.Storevisitdetail = sv;
                if (this.Storevisitdetail.length) {
                    this.Storevisitdetails = this.Storevisitdetail
                    console.log('yes');
                    console.log(this.Storevisitdetails);
                }
                else {
                    this.storeService.getStoreNoOrderReason(this.storeId).subscribe(res => {
                        this.StoreNoOrderReason = res;
                        console.log(this.StoreNoOrderReason);
                    });
                }
            });


            this.storeService.getInventoriesByStoreVisitId(this.storeId).subscribe(sv => {
                this.StoreVisitInventories = sv;
                console.log(this.StoreVisitInventories)

            });



        });

    }

}
