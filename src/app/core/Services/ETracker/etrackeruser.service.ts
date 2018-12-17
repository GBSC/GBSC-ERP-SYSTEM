import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';

@Injectable()

export class eTrackerUserService {

  private Url = "etracker/api/";

  constructor(private http: HttpClient, private ApiService: ApiService) { }

  getSalesUsersByCompany(companyId){

    return this.ApiService.get(this.Url+'User/GetSalesUsersByCompanyId/'+companyId);

  }
}
