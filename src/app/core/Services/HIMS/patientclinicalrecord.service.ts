import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';

@Injectable()
export class PatientclinicalrecordService {

  private Url = "Hims/api/PatientClinicalRecord/"

  constructor(private http: HttpClient, private ApiService: ApiService) { }

  getPatientClinicalRecords(): Observable<any> {
    return this.ApiService.get(this.Url + "GetAllPatientClinicalRecords");
  }

  getPatientClinicalRecord(id: number): Observable<any> {
    return this.ApiService.get(this.Url + "GetPatientClinicalRecord/" + id);
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
