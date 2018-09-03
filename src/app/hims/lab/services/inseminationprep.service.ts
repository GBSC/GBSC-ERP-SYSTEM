import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InseminationPrep } from '../../../models/inseminationprep';

@Injectable()
export class InseminationprepService {

  private readonly API_URL = 'http://gbsc-erp.azurewebsites.net/hims/api/InseminationPrep/';

  constructor(private http: HttpClient) { }

  getInseminationPrep(id) : Observable<InseminationPrep>
  {
    return this.http.get<InseminationPrep>(this.API_URL+'GetInseminationPrep/'+id);
  }

  addInseminationPrep(model : InseminationPrep){

    return this.http.post(this.API_URL+'AddInseminationPrep',model).subscribe(resp => console.log(resp));
    
  }

}
