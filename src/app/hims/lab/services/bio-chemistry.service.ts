import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BioChemistryTest } from '../../../models/biochemistrytest';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class BioChemistryService {

  private readonly API_URL = 'http://gbsc-erp.azurewebsites.net/hims/api';

  constructor(private http: HttpClient) { }

  getTests(): Observable<BioChemistryTest> {
    return this.http.get<BioChemistryTest>(this.API_URL + '/BioChemistry/GetBioChemistryTests');
  }

  addTest(test : BioChemistryTest){

    this.http.post(this.API_URL+'/BioChemistry/AddBioChemistryTest',test).subscribe(resp=>console.log(resp));
  }

}
