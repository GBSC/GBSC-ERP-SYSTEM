import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ApiService } from '../../api.service';
import { Observable } from 'rxjs';

@Injectable()
export class BiopsyService {

    private Url = "Hims/api/Biopsy/"


    constructor(private http: HttpClient, private ApiService: ApiService) { }

    getPatientBiopsyByClinicalRecordId(id: number) {
        return this.ApiService.get(this.Url + 'GetPatientBiopsyByClinicalRecordId/' + id);
    }

    getPatientBiopsies(): Observable<any> {
        return this.ApiService.get(this.Url + "GetAllBiopsies");
    }

    getPatientBiopsiesbyPatientId(patientId): Observable<any> {
        return this.ApiService.get(this.Url + "GetBiopsiesByPatientId/" + patientId);
    }

    getPatientBiopsy(id: number): Observable<any> {
        return this.ApiService.get(this.Url + "GetBiopsyById/" + id);
    }

    getPatientBiopsyByCollectionDate(date: string, patientid: string): Observable<any> {

        let params = `date=${date}&patientid=${patientid}`;
        return this.ApiService.get(this.Url + "GetBiopsyByCollectionDate?" + params);

    }

    addPatientBiopsy(value): Observable<any> {
        return this.ApiService.post(this.Url + "AddBiopsy", value);
    }

    updatePatientBiopsy(value): Observable<any> {
        return this.ApiService.put(this.Url + "UpdateBiopsy", value);
    }

    deletePatientBiopsy(id) {
        this.ApiService.delete(this.Url + "DeleteBiopsy" + id);
    }
}
