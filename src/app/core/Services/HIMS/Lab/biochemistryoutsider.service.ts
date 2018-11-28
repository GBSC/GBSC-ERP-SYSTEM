import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../api.service';
import { Observable } from 'rxjs';

@Injectable()
export class BiochemistryoutsiderService {

    private Url = "Hims/api/BioChemistryTestOutsider/"

    constructor(private http: HttpClient, private ApiService: ApiService) { }

    getBioChemistryTestOutsiders(): Observable<any> {
        return this.ApiService.get(this.Url + "GetAllBioChemistryTestOutsiders");
    }

    getBioChemistryTestOutsider(id: number): Observable<any> {
        return this.ApiService.get(this.Url + "GetBioChemistryTestOutsider/" + id);
    }

    getBioChemistryTestOutsiderByPatientId(id: number): Observable<any> {
        return this.ApiService.get(this.Url + "GetBioChemistryTestOutsiderByPatientId/" + id);
    }

    addBioChemistryTestOutsider(value): Observable<any> {
        return this.ApiService.post(this.Url + "AddBioChemistryTestOutsider", value);
    }

    updateBioChemistryTestOutsider(value): Observable<any> {
        return this.ApiService.put(this.Url + "UpdateBioChemistryTestOutsider", value);
    }

    deleteBioChemistryTestOutsider(id) {
        this.ApiService.delete(this.Url + "DeleteBioChemistryTestOutsider" + id);
    }
}
