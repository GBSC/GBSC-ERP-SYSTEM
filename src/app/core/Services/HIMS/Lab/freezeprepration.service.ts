import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../api.service';
import { Observable } from 'rxjs';

@Injectable()
export class FreezepreprationService {

    private Url = "Hims/api/FreezePrepration/"


    constructor(private http: HttpClient, private ApiService: ApiService) { }

    getFreezePreprationByClinicalRecordId(id: number) {
        return this.ApiService.get(this.Url + 'GetFreezePreprationByClinicalRecordId/' + id);
    }

    getPatientEmbryologies(): Observable<any> {
        return this.ApiService.get(this.Url + "GetAllPatientEmbryologies");
    }

    getFreezePrepration(id: number): Observable<any> {
        return this.ApiService.get(this.Url + "GetFreezePrepration/" + id);
    }

    addFreezePrepration(value): Observable<any> {
        return this.ApiService.post(this.Url + "AddFreezePrepration", value);
    }

    updateFreezePrepration(value): Observable<any> {
        return this.ApiService.put(this.Url + "UpdateFreezePrepration", value);
    }

    deleteFreezePrepration(id) {
        this.ApiService.delete(this.Url + "DeleteFreezePrepration" + id);
    }
}
