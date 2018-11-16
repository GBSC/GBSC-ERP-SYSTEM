import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiService } from '../../api.service';
import { InseminationPrep } from '../../../Models/HIMS/inseminationprep';

@Injectable()
export class InseminationprepService {

    private readonly API_URL = 'hims/api/InseminationPrep/';

    constructor(private http: HttpClient, private ApiService: ApiService) { }

    getInseminationPrep(id): Observable<InseminationPrep> {
        return this.ApiService.get(this.API_URL + 'GetInesminationPrep/' + id);
        //return this.http.get<InseminationPrep>(this.API_URL + '/InseminationPrep/' + id);
    }

    getInsemenationPrepByClinicalRecordId(id): Observable<any> {

        return this.ApiService.get(this.API_URL + 'GetInsemenationPrepByClinicalRecordId/' + id);
    }

    async getInseminationPreps() {
        return this.ApiService.get(this.API_URL + 'GetInseminationPreps').toPromise();
    }

    addInseminationPrep(inseminationPrep: InseminationPrep): Observable<any> {
        return this.ApiService.post(this.API_URL + 'AddInseminationPrep', inseminationPrep);
    }

    updateInseminationPrep(inseminationPrep: InseminationPrep): Observable<any> {
        return this.ApiService.put(this.API_URL + 'UpdateInseminationPrep', inseminationPrep);

    }

    async deleteInseminationPrep(id) {
        return await this.ApiService.delete(this.API_URL + 'DeleteInseminationPrep/' + id).toPromise();
        // let x = await this.http.delete(this.API_URL + '///' + id).toPromise();
        // console.log(x);
        // return x;
    }
}
