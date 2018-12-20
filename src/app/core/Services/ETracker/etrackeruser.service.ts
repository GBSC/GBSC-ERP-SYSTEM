import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';

@Injectable()

export class eTrackerUserService {

    private Url = "etracker/api/";

    constructor(private http: HttpClient, private ApiService: ApiService) { }

    getUser(userId: any) {
        return this.ApiService.get(this.Url + 'User/GetUser/' + userId);
    }

    getSalesUsersByCompany(companyId: any) {
        return this.ApiService.get(this.Url + 'User/GetSalesUsersByCompanyId/' + companyId);
    }

    assignUserSection(userId: any, distributorId: any, sectionId: any) {
        let params = "userId=" + userId + "&distributorId=" + distributorId + "&sectionId=" + sectionId;
        return this.ApiService.get(this.Url + 'User/AssignUserSection?' + params);
    }
}
