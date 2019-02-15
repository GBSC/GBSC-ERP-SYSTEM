import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';

@Injectable()
export class StoreService {

    public Url = "etracker/api/";

    constructor(public http: HttpClient, public ApiService: ApiService) {
    }

    getAllStoresByCompany(companyId: any) {
        return this.ApiService.get(this.Url + 'Store/GetStoresWithChildren/' + companyId);
    }

    getStore(storeId: any, companyId: any) {
        return this.ApiService.get(this.Url + 'Store/GetStore/' + storeId + "/" + companyId);
    }

    deleteStore(storeId: any) {
        return this.ApiService.delete(this.Url + 'Store/DeleteStore/' + storeId);
    }

    getStoreVisits(storeId: any) {
        return this.ApiService.get(this.Url + 'StoreVisit/GetVisits/' + storeId);
    }

    getStoreVisitById(id):Observable<any>{
       return this.ApiService.get(this.Url + 'StoreVisit/GetStoreVisit/' + id);
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

    getNonproductiveStoreVisitReasonsByCompany(companyid: number): Observable<any[]> {
        return this.ApiService.get(this.Url + 'StoreVisit/GetNonproductiveVisitReasonsByCompany/' + companyid);
    }

    addNonProductiveStoreVisitReason(model: any): Observable<any> {
        return this.ApiService.post(this.Url + 'StoreVisit/AddNonproductiveVisitReason', model);
    }

    updateNonProductiveStoreVisitReason(model: any): Observable<any> {
        return this.ApiService.put(this.Url + 'StoreVisit/UpdateNonproductiveVisitReason', model);
    }

    deleteNonProductiveStoreVisitReason(id: number): Observable<any> {
        return this.ApiService.delete(this.Url + 'StoreVisit/DeleteNonproductiveVisitReason/' + id);
    }

    //Reports
    shopCensusDetailReport(companyId: number): Observable<any> {
        return this.ApiService.get(this.Url + 'Report/GetShopCensusDetail/' + companyId);
    }
}
