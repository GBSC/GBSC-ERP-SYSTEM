import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiService } from '../../api.service';

@Injectable()
export class ThawAssessmentService {

    private readonly API_URL = 'hims/api/ThawAssessment/';

    constructor(private http: HttpClient, private ApiService: ApiService) { }

    getThawAssessment(id): Observable<any> {
        return this.ApiService.get(this.API_URL + 'GetThawAssessment/' + id);
    }

    getThawAssessmentsByPatientId(patientId): Observable<any> {
        return this.ApiService.get(this.API_URL + 'GetThawAssessmentsByPatientId/' + patientId);
    }

    getThawAssessmentByClinicalRecordId(id): Observable<any> {

        return this.ApiService.get(this.API_URL + 'GetThawAssessmentByClinicalRecordId/' + id);
    }

    getThawAssessmentByTvopuId(id): Observable<any> {

        return this.ApiService.get(this.API_URL + 'GetThawAssessmentByTvopuId/' + id);
    }

    async getThawAssessments() {
        return this.ApiService.get(this.API_URL + 'GetThawAssessments').toPromise();
    }

    addThawAssessment(value: any): Observable<any> {
        return this.ApiService.post(this.API_URL + 'AddThawAssessment', value);
    }

    updateThawAssessment(value: any): Observable<any> {
        return this.ApiService.put(this.API_URL + 'UpdateThawAssessment', value);

    }

    async deleteThawAssessment(id) {
        return await this.ApiService.delete(this.API_URL + 'DeleteThawAssessment/' + id).toPromise();

    }
}
