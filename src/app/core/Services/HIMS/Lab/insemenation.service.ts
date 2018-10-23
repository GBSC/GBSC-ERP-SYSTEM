import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../api.service';

@Injectable()
export class InsemenationService {

  private Url = "Hims/api/PatientInsemenation/"


  constructor(private http: HttpClient, private ApiService: ApiService) { }

  getPatientInsemenationByClinicalRecordId(id: number) {
    return this.ApiService.get(this.Url + 'GetPatientInsemenationByClinicalRecordId/' + id);
  }

  getPatientInsemenations(): Observable<any> {
    return this.ApiService.get(this.Url + "GetPatientInsemenations");
  }

  getPatientInsemenation(id: number): Observable<any> {
    return this.ApiService.get(this.Url + "GetPatientInsemenation/" + id);
  }

  addPatientInsemenation(value): Observable<any> {
    return this.ApiService.post(this.Url + "AddPatientInsemenation", value);
  }

  updatePatientInsemenation(value): Observable<any> {
    return this.ApiService.put(this.Url + "UpdatePatientInsemenation", value);
  }

  deletePatientInsemenation(id) {
    this.ApiService.delete(this.Url + "DeletePatientInsemenation" + id);
  }
}
