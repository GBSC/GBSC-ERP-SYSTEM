import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../api.service';
import { Observable } from 'rxjs';

@Injectable()
export class EmbryologyService {

    public Url = "Hims/api/PatientEmbryology/"


    constructor(public http: HttpClient, public ApiService: ApiService) { }

    getPatientEmbryologyByTvopuId(id: number) {
        return this.ApiService.get(this.Url + 'GetPatientEmbryologyByTvopuId/' + id);
    }

    getAllPatientEmbryologiesByPatientId(patientId: number) {
        return this.ApiService.get(this.Url + 'GetAllPatientEmbryologiesByPatientId/' + patientId);
    }

    getPatientEmbryologyDetailsByTvopuId(id: number) {
        return this.ApiService.get(this.Url + 'GetPatientEmbryologyDetailsByTvopuId/' + id);
    }

    getPatientEmbryologies(): Observable<any> {
        return this.ApiService.get(this.Url + "GetAllPatientEmbryologies");
    }

    getPatientEmbryology(id: number): Observable<any> {
        return this.ApiService.get(this.Url + "GetPatientEmbryology/" + id);
    }

    addPatientEmbryology(value): Observable<any> {
        return this.ApiService.post(this.Url + "AddPatientEmbryology", value);
    }

    updatePatientEmbryology(value): Observable<any> {
        return this.ApiService.put(this.Url + "UpdatePatientEmbryology", value);
    }

    deletePatientEmbryology(id) {
        this.ApiService.delete(this.Url + "DeletePatientEmbryology" + id);
    }


}
