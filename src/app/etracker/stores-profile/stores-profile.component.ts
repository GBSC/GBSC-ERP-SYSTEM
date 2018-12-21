import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../app/core';
import { StoreService } from '../../../app/core/Services/ETracker/store.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-stores-profile',
    templateUrl: './stores-profile.component.html',
    styleUrls: ['./stores-profile.component.scss']
})
export class StoresProfileComponent implements OnInit {

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
