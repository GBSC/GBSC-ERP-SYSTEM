import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PartialObserver, Observable } from 'rxjs';
import { ApiService } from '../core/Services/api.service';
import { Feature } from '../core/Models/HRM/feature';
// import { Company } from '../systemadministration/model/Company';
// import { Module } from '../systemadministration/model/module';

@Injectable()
export class SuperadminserviceService {

    private SystemAdmin_API_URL = "http://evasalesforcedev.azurewebsites.net/systemadmin/api/";
    private Account_API_URL = "http://evasalesforcedev.azurewebsites.net/authentication/api/"

    constructor(private http: HttpClient, public ApiService : ApiService) {

    }

    async addCompany(company) {
        let response = await this.http.post(this.SystemAdmin_API_URL + 'Setup/AddCompany', company).toPromise();
        return response;
    }

    async addModule(module) {
        let response = await this.http.post(this.SystemAdmin_API_URL + 'Setup/AddModuleWithAllFeatures', module).toPromise();
        return response;
    }

    async registerAdmin(admin: SystemAdminRegistrationViewModel) {
        let response = await this.http.post(this.Account_API_URL + 'accounts', admin).toPromise();
        return response;
    }

    getModulesByCompany(companyid : number) : Observable<any[]> {
        return this.ApiService.get(this.SystemAdmin_API_URL + 'Setup/GetModulesByCompany/' + companyid);
    }

    getFeaturesByModules(moduleids : number[]) : Observable<any[]> {
        return this.ApiService.post(this.SystemAdmin_API_URL + 'Setup/GetFeaturesByModules', moduleids);
    }

}
