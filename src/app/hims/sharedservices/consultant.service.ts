import { Injectable } from '@angular/core';
import { Consultant } from '../../models/consultant';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ConsultantService {

    private readonly API_URL = 'http://gbsc-erp.azurewebsites.net/hims/api';

    constructor(private http: HttpClient) { }

    getConsultants(): Observable<Consultant> {
        return this.http.get<Consultant>(this.API_URL + '/HimsSetup/GetConsultants');
    }


}
