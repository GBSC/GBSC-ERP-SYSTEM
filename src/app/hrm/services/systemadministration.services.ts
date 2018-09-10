import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

import { Company } from '../model/company'
import { Branch } from '..//model/branch'
import { Department } from '../model/department'
import { Role } from '../model/role'
import { Feature } from '../model/feature'
import { Module } from '../model/module'



export class Product {
    id: string;
    text: string;
    expanded?: boolean;
    selected?: boolean;
    items?: Product[];
}

var products: Product[] = [{
    id: "1",
    text: "Staff",
    items: [{
        id: "1_1",
        text: "Employees"
    }, {
        id: "1_2",
        text: "Import Employees"
    }, {
        id: "1_3",
        text: "Staff Directory"
    }]
}, {
    id: "2",
    text: "Core HR",
    items: [{
        id: "2_1",
        text: "Awards"
    }, {
        id: "2_2",
        text: "Transfers"
    }, {
        id: "2_3",
        text: "Resignations"
    }, {
        id: "2_4",
        text: "Travels"
    }, {
        id: "2_5",
        text: "Promotions"
    }, {
        id: "2_6",
        text: "Complaints"
    }, {
        id: "2_7",
        text: "Warnings"
    }, {
        id: "2_8",
        text: "Terminations"
    }, {
        id: "2_9",
        text: "Employees Last Login"
    }, {
        id: "2_10",
        text: "Employees Exit"
    }]
}, {
    id: "3",
    text: "Organization",
    items: [{
        id: "3_1",
        text: "Announcements"
    }, {
        id: "3_2",
        text: "Company Policy"
    }, {
        id: "3_3",
        text: "Organization Chart"
    }, {
        id: "3_4",
        text: "Department"
    }, {
        id: "3_5",
        text: "Designation"
    }, {
        id: "3_6",
        text: "Company"
    }, {
        id: "3_7",
        text: "Location"
    }, {
        id: "3_8",
        text: "Office Shifts"
    }, {
        id: "3_9",
        text: "Holidayss"
    }, {
        id: "3_10",
        text: "Expense"
    }]
}, {
    id: "4",
    text: "Assets",
    items: [{
        id: "4_1",
        text: "Assets"
    }, {
        id: "4_2",
        text: "Category"
    }]
},];

@Injectable()
export class SystemAdministrationService {

    public companies: any;
    public branches: any;
    public departments: any;
    public roles: any;
    public features: any;
    //public modules: any;
    public data: any;

    private readonly API_URL = "http://gbsc-erp.azurewebsites.net/systemadmin/api/setup";
    private baseUrl: string = "http://localhost:50908/api";
    public modules: any = [];


    constructor(private httpClient: HttpClient) {
    }


    async saveNewRoleData(data) {
        let headers = { headers: { 'Content-Type': 'application/json' } }
        let response = await this.httpClient.post('http://gbsc-erp.azurewebsites.net/systemadmin/api/setup/addrole', data, headers).toPromise();
        console.log(response);
    }

    async getData() {
        let response: any = await this.httpClient.get('http://gbsc-erp.azurewebsites.net/systemadmin/api/setup/getmodules').toPromise();
        console.log(response[0]);

        for (let m of response) {
            this.modules.push({
                ModuleId: m.moduleId,
                name: m.name,
                expanded: false,
                features: m.features.map(f => {
                    return {
                        FeatureId: f.featureId,
                        name: f.name,
                        ModuleId: f.moduleId,
                        permissions: f.permissions.map( p => {
                            return {
                                Attribute: p.attribute,
                                FeatureId: p.featureId
                            }
                        })
                    }
                })
            });
        }

        console.log(this.modules);
    }
    //   async GetUserModulesById(userId) {

    //     let modules = await this.http.get(`${this.baseUrl}/Users/GetUserModules/${userId}`).toPromise();
    // // console.log(licenseId);
    // console.log(modules); 
    //     return modules;
    //   }

    async getPermissions() {
        let response = await this.httpClient.get('http://gbsc-erp.azurewebsites.net/systemadmin/api/setup/getpermissions').toPromise();
        console.log(response);
    }

    getProducts(): Product[] {
        return products;
    }

    async getCompany() {
        this.companies = await this.httpClient.get<Company>(this.API_URL + '/GetCompanies').toPromise();
        console.log(this.companies);
        return this.companies;
    }


    async addCompany(company: Company) {
        let abc = await this.httpClient.post(this.API_URL + '/addcompany', company).toPromise();
        console.log(abc);

        return abc;
    }

    async updateCompany(company: Company) {
        let xyz = await this.httpClient.put(`${this.API_URL}/UpdateCompany/`, company).toPromise();
        return xyz;
    }

    async deletCompany(id) {
        let deleteCompany = await this.httpClient.delete(this.API_URL + '/DeleteCompany/' + id).toPromise();
        return deleteCompany;
    }

    // for branches

    async getBranches() {
        this.branches = await this.httpClient.get<Branch>(this.API_URL + '/GetBranches').toPromise();
        console.log(this.branches);
        return this.branches;
    }

    async addBranches(branch: Branch) {
        let a = await this.httpClient.post(this.API_URL + '/AddBranch', branch).toPromise();
        console.log(a);
        return a;
    }

    async updateBranch(branch: Branch) {
        let xyz = await this.httpClient.put(`${this.API_URL}/UpdateBranch/`, branch).toPromise();
        return xyz;
    }

    async deletBranch(id) {
        let deleteBranch = await this.httpClient.delete(this.API_URL + '/DeleteBranch/' + id).toPromise();
        return deleteBranch;
    }



    // for branches


    // for department
    async getDepartments() {
        this.departments = await this.httpClient.get<Department>(this.API_URL + '/GetDepartments').toPromise();
        console.log(this.departments);
        return this.departments;
    }

    async addDepartment(department: Department) {
        let d = await this.httpClient.post(this.API_URL + '/AddDepartment', department).toPromise();
        console.log(d);
        return d;
    }

    async updateDepartment(department: Department) {
        let xyz = await this.httpClient.put(`${this.API_URL}/UpdateDepartment`, department).toPromise();
        return xyz;
    }

    async deletDepartment(id) {
        let deleteDepartment = await this.httpClient.delete(this.API_URL + '/DeleteDepartment/' + id).toPromise();
        return deleteDepartment;
    }

    //for department


    //for role

    async getRoles() {
        this.roles = await this.httpClient.get<Role>(this.API_URL + '/GetRoles').toPromise();
        console.log(this.roles);
        return this.roles;
    }

    async addRole(role: Role) {
        let r = this.httpClient.post(this.API_URL + '/AddRole', role).toPromise();
        console.log(r);
        return r;
    }


    async updateRole(role: Role) {
        let r = await this.httpClient.put(`${this.API_URL}/UpdateRole`, role).toPromise();
        console.log(r);
        return r;

    }

    async deletRole(id) {
        let deleteRole = await this.httpClient.delete(this.API_URL + '/DeleteRole/' + id).toPromise();
        return deleteRole;
    }
    // for role

    // for feature
    async getFeatures() {
        this.features = await this.httpClient.get<Feature>(this.API_URL + '/GetFeatures').toPromise();
        console.log(this.features);
        return this.features;

    }

    async addFeature(feature: Feature) {
        let x = await this.httpClient.post(this.API_URL + '/AddFeature', feature).toPromise();
        console.log(x);
        return x;

    }
    async updateFeature(feature: Feature) {
        let y = this.httpClient.put(`${this.API_URL}/UpdateFeature`, feature).toPromise();
        console.log(y);
        return y;

    }

    async deletFeature(id) {
        let deleteFeature = await this.httpClient.delete(this.API_URL + '/DeleteFeature/' + id).toPromise();
        return deleteFeature;
    }
    // for feature


    // for module

    async getModules() {
        this.modules = await this.httpClient.get<Module>(this.API_URL + '/GetModules').toPromise();
        console.log(this.modules);
        return this.modules;
    }


    async addModule(module: Module) {
        let x = await this.httpClient.post(this.API_URL + '/AddModule', module).toPromise();
        console.log(x);
        return x;

    }

    async updateModule(module: Module) {
        let y = await this.httpClient.put(`${this.API_URL}/UpdateModule`, module).toPromise();
        console.log(y);
        return y;

    }

    async deletModule(id) {
        let deletemodule = await this.httpClient.delete(this.API_URL + '/DeleteModule/' + id).toPromise();
        console.log(deletemodule);
        return deletemodule;

    }
    //for module

    async testCall() {
        let data = await this.httpClient.get('https://jsonplaceholder.typicode.com/posts').toPromise();
        console.log(data);
        return data;
    }

    // async GetModulesWithFeatures() {

    //   var returnObj: any[];

    //   this.data = await this.http.get(this.API_URL + '/GetModulesWithFeatures').subscribe((data: any) => {
    //     data.forEach(res => {
    //       returnObj.push({
    //         moduleId: res.moduleId,
    //         name: res.name,
    //         roleId: res.roleId,
    //         features: res.features
    //       })
    //     });
    //   });

    //   console.log(returnObj);

    //   return this.data;
    // }


    async GetmyModulesWithFeatures() {
        this.data = await this.httpClient.get(this.API_URL + '/GetModulesWithFeatures').toPromise();
        console.log(this.data);
        return this.data;
    }

}