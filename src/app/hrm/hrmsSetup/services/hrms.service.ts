import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

import { HomeDetails } from '../models/home.details.interface';


import { Observable } from 'rxjs/Rx';


import { Country } from '../models/country,interface';

@Injectable()

export class HrmsService {


    baseUrl: string = '';

    public get: any;
    constructor(private http: Http) {

        // this.baseUrl = configService.getApiURI();
    }

    // getAllContries(): Observable<Country> {

    //   let headers = new Headers();
    //   headers.append('Content-Type', 'application/json');
    //   let authToken = localStorage.getItem('auth_token');
    //   headers.append('Authorization', `bearer ${authToken}`);

    //   return this.http.get(this.baseUrl + "api/setup/getallcountries", { headers })
    //     .map(res => {
    //       return res.json()
    //     })
    //     .catch(this.handleError);
    // }

    // DeleteCountry(id) {

    //       return this
    //           .http
    //           .get(this.baseUrl + 'api/setup/getallcountries/' + id)
    //           .map(res => {
    //             return res;
    //           });
    //         }

    EditCountry(Id) {

        return this
            .http
            .get(this.baseUrl + 'api/setup/getallcountries/' + Id)
            .map(res => {
                return res;
            });
    }

    UpdateCountry(Name, Code, Id) {
        //const uri = 'http://localhost:4000/coins/update/' + Id;

        const obj = {
            Name: Name,
            Code: Code
        };
        this
            .http
            .post(this.baseUrl + 'api/setup/getallcountries/' + Id, obj)
            .subscribe(res => console.log('Done'));
    }

}
