import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Company } from '../systemadministration/model/company';
import { Module } from '../systemadministration/model/module';

@Injectable()
export class SuperadminserviceService {

  private SystemAdmin_API_URL = "http://gbsc-erp.azurewebsites.net/systemadmin/api/";

  private Account_API_URL = "http://localhost:61161/api/"

  constructor(private http: HttpClient) { 

  }

  async addCompany(company: Company) {
    let response = await this.http.post(this.SystemAdmin_API_URL + 'Setup/AddCompany', company).toPromise();
    return response;
}

async addModule(module: Module) {
  let response = await this.http.post(this.SystemAdmin_API_URL + 'Setup/AddModule', module).toPromise();
  return response;
}

async registerAdmin(admin : SystemAdminRegistrationViewModel)
{
  let response = await this.http.post(this.Account_API_URL+ 'accounts', admin).toPromise();
  return response;
} 

}
