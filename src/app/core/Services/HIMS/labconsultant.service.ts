import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ApiService } from '../api.service';
import { Consultant } from '../../Models/HIMS/consultant';

@Injectable()
export class ConsultantService {

    private readonly API_URL = 'hims/api/HimsSetup/';

    constructor(private http: HttpClient, private ApiService: ApiService) { }

    getConsultants(): Observable<Consultant> {
        return this.ApiService.get(this.API_URL + 'GetConsultants');
        //return this.http.get<Consultant>(this.API_URL + '/HimsSetup/GetConsultants');
    }


}
