import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BioChemistryTest } from '../../../models/biochemistrytest';
import { referenceRange } from '../../../models/referenceRange';
import { Observable } from 'rxjs/Observable';
import { TestUnit } from '../../../models/testunit';

@Injectable()
export class BioChemistryService {

  public referencerange : any;

  private readonly API_URL = 'http://gbsc-erp.azurewebsites.net/hims/api/BioChemistry';

  constructor(private http: HttpClient) { }

  getTests(): Observable<BioChemistryTest> {
    return this.http.get<BioChemistryTest>(this.API_URL + '/GetBioChemistryTests');
  }

  getUnits() : Observable<TestUnit>{
    return this.http.get<TestUnit>(this.API_URL+"/GetTestUnits");
  }

  addTest(test : BioChemistryTest){

    this.http.post(this.API_URL+'/AddBioChemistryTest',test).subscribe(resp=>console.log(resp));
  }

  addUnit(test : TestUnit){

    this.http.post(this.API_URL+'/AddTestUnit',test).subscribe(resp=>console.log(resp));
  }

 async getReferenceRanges()
  {
   this.referencerange =  await this.http.get<referenceRange>(this.API_URL+'/GetReferenceRanges').toPromise()
   console.log(this.referencerange);
   return this.referencerange;
  }

  async addReferenceRange(ReferenceRange :  referenceRange)
  {
    let x = this.http.post(this.API_URL+'/AddReferenceRange/',ReferenceRange).toPromise();
    console.log(x);
    return x;
  }

  async updateReferenceRange(ReferenceRange :  referenceRange)
  {
 
    let x = await this.http.put(`${this.API_URL}/BioChemistry/UpdateReferenceRange/`,ReferenceRange).toPromise();
    console.log(x);
    return x;
    
  }

}
