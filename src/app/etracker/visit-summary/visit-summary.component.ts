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

    constructor(public authService: AuthService, public storeService: StoreService, public route: ActivatedRoute) {

        this.companyId = this.authService.getUserCompanyId();
    }

    ngOnInit() {

        this.route.params.subscribe((params) => {
            this.storeId = +params['id'];

            this.storeService.getStore(this.storeId, this.companyId).subscribe(s => {
                this.store = s;
            });

            this.storeService.getStoreVisits(this.storeId).subscribe(s => {
                this.storeVisits = s;
            });

        });

    }

}
