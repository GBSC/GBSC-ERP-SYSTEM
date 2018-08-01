import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AccountService {

    private readonly API_URL = 'http://localhost:63449/api/Auth';

    constructor(private http: HttpClient) {

    }


    async login(credentials) {
        let res: any = await this.http.post(this.API_URL + '/login', credentials).toPromise();
        console.log(res);
        return res;
    }

}
