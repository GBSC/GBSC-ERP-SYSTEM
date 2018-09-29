import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InseminationPrep } from '../../../models/inseminationprep';

@Injectable()
export class InseminationprepService {

    private readonly API_URL = 'http://gbsc-erp.azurewebsites.net/hims/api';

    constructor(private http: HttpClient) { }

    getInseminationPrep(id): Observable<InseminationPrep> {
        return this.http.get<InseminationPrep>(this.API_URL + '/InseminationPrep/' + id);
    }



    async addInseminationPrep(inseminationPrep: InseminationPrep) {
        let x = await this.http.post(this.API_URL + '/InseminationPrep/AddInseminationPrep/', inseminationPrep).toPromise();
        console.log(x);
        return x;
    }



    async updateInseminationPrep(inseminationPrep: InseminationPrep) {

        let x = await this.http.put(this.API_URL + '/InseminationPrep/UpdateInseminationPrep/', inseminationPrep).toPromise();
        console.log(x);
        return x;
    }

    async deleteInseminationPrep(id) {

        let x = await this.http.delete(this.API_URL + '///' + id).toPromise();
        console.log(x);
        return x;

    }




}
