import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';

@Injectable()
export class StoreService {

    private Url = "etracker/api/";

    constructor(private http: HttpClient, private ApiService: ApiService) {
    }

    getAllStoresByCompany(companyId: any) {
        return this.ApiService.get(this.Url + 'Store/GetStoresWithChildren/' + companyId);
    }

    getStore(storeId: any, companyId: any) {
        return this.ApiService.get(this.Url + 'Store/GetStore/' + storeId + "/" + companyId);
    }

    getStoreVisits(storeId: any) {
        return this.ApiService.get(this.Url + 'StoreVisit/GetVisits/' + storeId);
    }


    getOrdersByStoreVisitId(storeVisitid: any): Observable<any> {
        return this.ApiService.get(this.Url + 'StoreVisit/GetOrders/' + storeVisitid);
    }

    getStoreNoOrderReason(storeVisitid: any): Observable<any> {
        return this.ApiService.get(this.Url + 'StoreVisit/GetStoreNoOrderReason/' + storeVisitid);
    }

    getInventoriesByStoreVisitId(storeVisitid: any): Observable<any> {
        return this.ApiService.get(this.Url + 'StoreVisit/GetInventories/' + storeVisitid);
    }

}
