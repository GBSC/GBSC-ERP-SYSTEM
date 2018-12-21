import { Component, OnInit } from '@angular/core';
import { AuthService} from '../../../app/core';
import { StoreService } from '../../../app/core/Services/ETracker/store.service';

@Component({
    selector: 'app-stores',
    templateUrl: './stores.component.html',
    styleUrls: ['./stores.component.scss']
})
export class StoresComponent implements OnInit {

    public stores : any;
    public companyId : any;

    constructor(public authService : AuthService, public storeService : StoreService) {
        this.companyId = this.authService.getUserCompanyId();
     }

    ngOnInit() {

        this.storeService.getAllStoresByCompany(this.companyId).subscribe(stores=>{

            this.stores = stores;
        })
    }

}
