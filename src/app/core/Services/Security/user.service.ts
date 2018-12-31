import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';
import { environment } from '../../../../environments/environment';
import { Employee } from '../../Models/HRM/employee';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {

    private SystemAdmin_API_URL = "systemadmin/api/";
    private Auth_Url = "authentication/api/";

    constructor(private http: HttpClient, private ApiService: ApiService) {

    }

    createAppUser(user: any) {
        return this.ApiService.post(this.Auth_Url + 'accounts', user);
    }

    editUser(user: any) {
        return this.ApiService.put(this.Auth_Url + 'accounts/UpdateProfile', user);
    }

    EditUser(user: any): Observable<any> {
        return this.ApiService.put(this.Auth_Url + 'accounts/UpdateProfile', user);
    }

    getUsersByCompany(comapnyId: number) {
        return this.ApiService.get(this.SystemAdmin_API_URL + 'Users/GetUsersByCompany/' + comapnyId);
    }

    getUser(userId: any) {
        return this.ApiService.get(this.SystemAdmin_API_URL + 'Users/GetUser/' + userId);
    }

    changePassword(model: any): Observable<string> {
        return this.ApiService.post(this.Auth_Url + 'accounts/ChangePassword', model);
    }

}
