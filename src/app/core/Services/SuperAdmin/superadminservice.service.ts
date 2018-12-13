import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';
import { environment } from '../../../../environments/environment';
import { Company } from '../../Models/HRM/company';
import { Module } from '../../Models/HRM/module';

@Injectable()
export class SuperadminserviceService {

    private SystemAdmin_API_URL = "systemadmin/api/";
    private AuthUrl = "authentication/api/"

    // private Account_API_URL = "http://localhost:61161/api/"

    constructor(private http: HttpClient, private ApiService: ApiService) {

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
