import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';
import { TreatmentService } from './treatment.service';

@Injectable()
export class PatientclinicalrecordService {

    public Url = "Hims/api/PatientClinicalRecord/"

    constructor(public http: HttpClient, public ApiService: ApiService) { }

    getPatientClinicalRecords(): Observable<any> {
        return this.ApiService.get(this.Url + "GetAllPatientClinicalRecords");
    }

    getClinicalRecordsByPatientId(id: number): Observable<any> {
        return this.ApiService.get(this.Url + "getClinicalRecordsByPatientId/" + id);
    }

    searchClinicalRecords(patientname, spousename, mrn, cyclenumber, treatmentnumber) {

        let params = "patientname=" + patientname + "&spousename=" + spousename + "&mrn=" + mrn + "&cyclenumber=" + cyclenumber + "&treatmentnumber=" + TreatmentService;

        return this.ApiService.get(this.Url + "SearchClinicalRecords?" + params);
    }

    getPatientClinicalRecord(id: number): Observable<any> {
        return this.ApiService.get(this.Url + "GetPatientClinicalRecord/" + id);
    }

    getPatientClinicalRecordWithChildren(id: number): Observable<any> {
        return this.ApiService.get(this.Url + "GetPatientClinicalRecordWithChildren/" + id);
    }

    addPatientClinicalRecord(value): Observable<any> {
        return this.ApiService.post(this.Url + "AddPatientClinicalRecord", value);
    }

    updatePatientClinicalRecord(value): Observable<any> {
        return this.ApiService.put(this.Url + "UpdatePatientClinicalRecord", value);
    }

    deletePatientClinicalRecord(id) {
        this.ApiService.delete(this.Url + "DeletePatientClinicalRecord" + id);
    }


}
