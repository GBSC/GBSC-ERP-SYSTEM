import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../app/core';
import { StoreService } from '../../../app/core/Services/ETracker/store.service';
import { AgmCoreModule } from '@agm/core';


@Component({
    selector: 'app-stores',
    templateUrl: './stores.component.html',
    styleUrls: ['./stores.component.scss']
})
export class StoresComponent implements OnInit {

    public stores: any;
    public companyId: any;
    title: string = 'My first AGM project';
    public lat: number = 51.678418;
    public lng: number = 7.809007;
 
    public zoom  : number = 18;


    constructor(public authService: AuthService, public storeService: StoreService) {
        this.companyId = this.authService.getUserCompanyId();
    }

    ngOnInit() {

        this.storeService.getAllStoresByCompany(this.companyId).subscribe(stores => {

            this.stores = stores;
        })
    }

    getLatLog(value){
        this.lat = value.data.latitude;
        this.lng = value.data.longitude;
        console.log(value);
     }

    

}
