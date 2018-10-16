import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';

@Injectable()
export class TreatmentService {

  private Url = "Hims/api/TreatmentType/"


  constructor(private http: HttpClient, private ApiService: ApiService) { }

  gettreatmenttypes(): Observable<any> {
    return this.ApiService.get(this.Url + "GetAlltreatmenttypes");
  }

  gettreatmenttype(id: number): Observable<any> {
    return this.ApiService.get(this.Url + "Gettreatmenttype/" + id);
  }

  addtreatmenttype(value): Observable<any> {
    return this.ApiService.post(this.Url + "Addtreatmenttype", value);
  }

  updatetreatmenttype(value): Observable<any> {
    return this.ApiService.put(this.Url + "Updatetreatmenttype", value);
  }

  deletetreatmenttype(id) {
    this.ApiService.delete(this.Url + "Deletetreatmenttype" + id);
  }

}
