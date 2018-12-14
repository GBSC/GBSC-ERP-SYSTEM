import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';
import { environment } from '../../../../environments/environment';
import { Company } from '../../Models/HRM/company';
import { Module } from '../../Models/HRM/module';

@Injectable()
export class SuperadminserviceService {

    public SystemAdmin_API_URL = "systemadmin/api/";
    public AuthUrl = "authentication/api/"

    // public Account_API_URL = "http://localhost:61161/api/"

    constructor(public http: HttpClient, public ApiService: ApiService) {

    }

    addCompany(company: Company) {
        return this.ApiService.post(this.SystemAdmin_API_URL + 'Setup/AddCompany', company);
    }

    addModule(module: Module) {
        return this.ApiService.post(this.SystemAdmin_API_URL + 'CompanySetup/AddModuleWithAllFeatures', module);
    }

    registerAdmin(admin: SystemAdminRegistrationViewModel) {
        return this.ApiService.post(this.AuthUrl + '/accounts', admin);
    }

    getCompanyInfo(companyid: any) {
        return this.ApiService.get(this.SystemAdmin_API_URL + 'CompanySetup/GetCompanyInfo/' + companyid);
    }

}
