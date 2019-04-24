import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';
import { environment } from '../../../../environments/environment';
import { Company } from '../../Models/HRM/company';
import { Module } from '../../Models/HRM/module';
import { Observable } from 'rxjs';

@Injectable()
export class SuperadminserviceService {

    public SystemAdmin_API_URL = "systemadmin/api/";
    public fullUrlPath = environment.api_url + this.SystemAdmin_API_URL;
    public AuthUrl = "authentication/api/"

    // public Account_API_URL = "http://localhost:61161/api/"

    constructor(public http: HttpClient, public ApiService: ApiService) {

    }

    addCompany(company: Company): Observable<any> {
        return this.http.post(this.fullUrlPath + 'Setup/AddCompany', company);
    }

    addModule(module: Module): Observable<any> {
        return this.http.post(this.fullUrlPath + 'CompanySetup/AddModuleWithAllFeatures', module);
    }

    registerAdmin(admin: SystemAdminRegistrationViewModel) {
        return this.http.post(environment.api_url + this.AuthUrl + '/accounts', admin);
    }

    getCompanyInfo(companyid: any): Observable<any> {
        return this.http.get(this.fullUrlPath + 'CompanySetup/GetCompanyInfo/' + companyid);
    }

    getModulesByCompany(companyid: number) {
        return this.http.get(this.fullUrlPath + 'Setup/GetModulesByCompany/' + companyid);
    }

    getFeaturesByModules(moduleids: number[]) {
        return this.http.post(this.fullUrlPath + 'Setup/GetFeaturesByModules', moduleids);
    }

    getAllModuleFeatures(moduleids: number[]) {
        return this.http.post(this.fullUrlPath + 'CompanySetup/GetAllModuleFeatures', moduleids);
    }

    addCompanyFeatures(features: any[]): Observable<any> {
        return this.http.post(this.fullUrlPath + 'CompanySetup/AddCompanyFeatures', features);
    }

}
