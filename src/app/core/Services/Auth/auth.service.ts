import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Injectable()
export class AuthService {
    public accessibleModules: any = ['patient'];
    public readonly API_URL = 'authentication/api/auth/login';
    public loggedInUser: any;

    constructor(public http: HttpClient, public router: Router, public route: ActivatedRoute, public ApiService: ApiService) {
    }

    async login(credentials) {
        let response: any = await this.ApiService.post(this.API_URL, credentials).toPromise();

        if (response.status && response.message === 'Login Successful') {
            let userData = {
                credentials: response.response,
                assignedId: response.assignedId,
                accessibleModules: response.modules.map((m, i) => {
                    return {
                        Description: m,
                        SNo: i + 1
                    }
                })
            }
            localStorage.setItem('user', JSON.stringify(userData));
            this.loggedInUser = JSON.parse(localStorage.getItem('user'));
            this.router.navigate(['employee/dashboard']);
        } else if (response.status === false || response.message === 'Invalid username or passowrd') {
            alert(response.message);
        }
    }

    logout() {
        localStorage.removeItem('user');

        this.router.navigate(['login']);

    }

    isAuthenticated() {
        let user = JSON.parse(localStorage.getItem('user'));
        if (user) {
            this.accessibleModules = user.accessibleModules;
            return true;
        } else {
            return false;
        }
    }

    getUser() {
        return JSON.parse(localStorage.getItem('user'));
    }

    getUserCompanyId(){

        var user = this.getUser();
        return user.assignedId.companyId;
    }

    checkIfModuleIsAccessible(module) {
        let isAccessible;

        this.getAvailableModules().forEach(m => {
            if (m.route === module) {
                isAccessible = this.accessibleModules.find(mod => {
                    return mod.Description === m.module;
                });
            }
        });

        if (isAccessible) {
            return true;
        } else {
            return false;
        }
    }

    getAvailableModules() {
        return [
            { module: 'SystemAdministration', route: 'systemadministration' },
            { module: 'Human Resource Management', route: 'hrm' },
            { module: 'Hospital Management System', route: 'hims/patient' },
            { module: 'Inventory Management System', route: 'inventorysystem' },
            { module: 'Payroll Management System', route: 'payroll' },
            { module: 'Lab Information System', route: 'lab' },
            { module: 'Accounting System', route: 'accounting' }
        ];
    }

    findRouteModule(module) {
        return this.getAvailableModules().find(m => {
            return m.module === module.Description;
        });
    }

}