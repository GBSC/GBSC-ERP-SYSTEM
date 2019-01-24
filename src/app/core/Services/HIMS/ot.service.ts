import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OTService {
  public readonly API_URL = 'hims/api/';

  constructor(public ApiService: ApiService) { }

  getPatientCase():Observable<any>{
      return this.ApiService.get(this.API_URL+'OT/GetOtPatientCases');
  }

  getPatientCaseById(id):Observable<any>{
    return this.ApiService.get(this.API_URL+'OT/GetOtPatientCase/'+id);
    }

  addPatientCase(value):Observable<any>{
    return this.ApiService.post(this.API_URL+'OT/AddOtPatientCase',value);
   }

   updatePatientCase(value):Observable<any>{
    return this.ApiService.put(this.API_URL+'OT/UpdateOtPatientCase',value);
   }
   
 
}
 