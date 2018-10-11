import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';
import { environment } from '../../../../environments/environment';
import { Company } from '../../Models/HRM/company';
import { Module } from '../../Models/HRM/module';

@Injectable()
export class SuperadminserviceService {

    private SystemAdmin_API_URL = "systemadmin/api/";

    // private Account_API_URL = "http://localhost:61161/api/"

    constructor(private http: HttpClient, private ApiService: ApiService) {

    }

    async addCompany(company: Company) {
        let response = await this.ApiService.post(this.SystemAdmin_API_URL + 'Setup/AddCompany', company).toPromise();
        return response;
    }

    async addModule(module: Module) {
        let response = await this.ApiService.post(this.SystemAdmin_API_URL + 'Setup/AddModule', module).toPromise();
        return response;
    }

    async registerAdmin(admin: SystemAdminRegistrationViewModel) {
        let response = await this.ApiService.post(`${environment.api_url}api/accounts`, admin).toPromise();
        return response;
    }

}
