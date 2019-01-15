import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UltraSoundService {
  public readonly API_URL = 'hims/api/';

  constructor(public ApiService: ApiService) { }

  getSonologist():Observable<any>{
    return this.ApiService.get(this.API_URL+'HimsSetup/GetSonologists');
  }

  addSonologist(value):Observable<any>{
    return this.ApiService.post(this.API_URL+'HimsSetup/AddSonologist',value);
  }

  updateSonologist(value):Observable<any>{
    return this.ApiService.put(this.API_URL+'HimsSetup/UpdateSonologist',value);
  }

  deleteSonologist(id : number):Observable<any>{
    return this.ApiService.delete(this.API_URL+'HimsSetup/DeleteSonologist/'+id);
  }


  getUltraSoundPelvis():Observable<any>{
   return this.ApiService.get(this.API_URL+'UltraSound/GetUltraSoundPelvises');
  }

  getUltraSoundPelvisById(id : number):Observable<any>{
    return this.ApiService.get(this.API_URL+'UltraSound/GetUltraSoundPelvis/'+id);
  }

  addUltraSoundPelvis(value):Observable<any>{
    return this.ApiService.post(this.API_URL+'UltraSound/AddUltraSoundPelvis',value)
  }

  updateUltraSoundPelvis(value):Observable<any>{
    return this.ApiService.put(this.API_URL+'UltraSound/UpdateUltraSoundPelvis',value);
  }

   
}
 