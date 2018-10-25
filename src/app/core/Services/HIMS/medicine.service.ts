import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';

@Injectable()
export class MedicineService {

  private Url = "Hims/api/Medicine/"

  constructor(private http: HttpClient, private ApiService: ApiService) { }

  getMedicines(): Observable<any> {
    return this.ApiService.get(this.Url + "GetAllMedicines");
  }

  getMedicine(id: number): Observable<any> {
    return this.ApiService.get(this.Url + "GetMedicine/" + id);
  }

  addMedicine(value): Observable<any> {
    return this.ApiService.post(this.Url + "AddMedicine", value);
  }

  updateMedicine(value): Observable<any> {
    return this.ApiService.put(this.Url + "UpdateMedicine", value);
  }

  deleteMedicine(id) {
    this.ApiService.delete(this.Url + "DeleteMedicine" + id);
  }


}
