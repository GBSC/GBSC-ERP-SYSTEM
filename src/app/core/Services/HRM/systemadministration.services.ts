import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { ApiService } from '../api.service';
import { Company } from '../../Models/HRM/company';
import { Branch } from '../../Models/HRM/branch';
import { Department } from '../../Models/HRM/department';
import { Role } from '../../Models/HRM/role';
import { Feature } from '../../Models/HRM/feature';
import { Module } from '../../Models/HRM/module';

export class Product {
    id: string;
    text: string;
    expanded?: boolean;
    selected?: boolean;
    items?: Product[];
}

@Injectable()
export class SystemAdministrationService {

    public companies: any;
    public branches: any;
    public departments: any;
    public roles: any;
    public features: any;
    //public modules: any;
    public data: any;

    private readonly API_URL = "systemadmin/api/setup/";
    // private baseUrl: string = "http://localhost:50908/api";
    public modules: any = [];


    constructor(private httpClient: HttpClient, private ApiService : ApiService) {
    }


    async saveNewRoleData(data) {
        let response = await this.ApiService.post(this.API_URL + 'addrole', data).toPromise();
        //console.log(response);
    }

    async getData() {
        
        let params = new HttpParams().set('companyId', '164');

        let response: any = await this.ApiService.get(this.API_URL + 'getmodules', params).toPromise();
        //console.log(response[0]);

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
                        permissions: f.permissions.map(p => {
                            return {
                                Attribute: p.attribute,
                                FeatureId: p.featureId
                            }
                        })
                    }
                })
            });
        }

        //console.log(this.modules);
    }


    async getPermissions() {
        let response = await this.ApiService.get(this.API_URL + 'getpermissions').toPromise();
        //console.log(response);
    }

    async getCompany() {
        this.companies = await this.ApiService.get(this.API_URL + 'GetCompanies').toPromise();
        //console.log(this.companies);
        return this.companies;
    }


    async addCompany(company: Company) {
        let abc = await this.ApiService.post(this.API_URL + 'addcompany', company).toPromise();
        //console.log(abc);
        return abc;
    }

    async updateCompany(company: Company) {
        let xyz = await this.ApiService.put(this.API_URL + 'UpdateCompany', company).toPromise();
        return xyz;
    }

    async deletCompany(id) {
        let deleteCompany = await this.ApiService.delete(this.API_URL + 'DeleteCompany/' + id).toPromise();
        return deleteCompany;
    }

    // for branches

    async getBranches() {
        this.branches = await this.ApiService.get(this.API_URL + 'GetBranches').toPromise();
        //console.log(this.branches);
        return this.branches;
    }

    async addBranches(branch: Branch) {
        let a = await this.ApiService.post(this.API_URL + 'AddBranch', branch).toPromise();
        //console.log(a);
        return a;
    }

    async updateBranch(branch: Branch) {
        let xyz = await this.ApiService.put(this.API_URL + 'UpdateBranch', branch).toPromise();
        return xyz;
    }

    async deletBranch(id) {
        let deleteBranch = await this.ApiService.delete(this.API_URL + 'DeleteBranch/' + id).toPromise();
        return deleteBranch;
    }



    // for branches


    // for department
    async getDepartments() {
        this.departments = await this.ApiService.get(this.API_URL + 'GetDepartments').toPromise();
        //console.log(this.departments);
        return this.departments;
    }

    async addDepartment(department: Department) {
        let d = await this.ApiService.post(this.API_URL + 'AddDepartment', department).toPromise();
        //console.log(d);
        return d;
    }

    async updateDepartment(department: Department) {
        let xyz = await this.ApiService.put(this.API_URL + 'UpdateDepartment', department).toPromise();
        return xyz;
    }

    async deletDepartment(id) {
        let deleteDepartment = await this.ApiService.delete(this.API_URL + 'DeleteDepartment/' + id).toPromise();
        return deleteDepartment;
    }

    //for department


    //for role

    async getRoles() {
        this.roles = await this.ApiService.get(this.API_URL + 'GetRoles').toPromise();
        //console.log(this.roles);
        return this.roles;
    }

    async addRole(role: Role) {
        let r = this.ApiService.post(this.API_URL + 'AddRole', role).toPromise();
        console.log(r);
        return r;
    }


    async updateRole(role: Role) {
        let r = await this.ApiService.put(this.API_URL + 'UpdateRole', role).toPromise();
        //console.log(r);
        return r;

    }

    async deletRole(id) {
        let deleteRole = await this.ApiService.delete(this.API_URL + 'DeleteRole/' + id).toPromise();
        return deleteRole;
    }
    // for role

    // for feature
    async getFeatures() {
        this.features = await this.ApiService.get(this.API_URL + 'GetFeatures').toPromise();
        //console.log(this.features);
        return this.features;

    }

    async addFeature(feature: Feature) {
        let x = await this.ApiService.post(this.API_URL + 'AddFeature', feature).toPromise();
        //console.log(x);
        return x;

    }
    async updateFeature(feature: Feature) {
        let y = this.ApiService.put(this.API_URL + 'UpdateFeature', feature).toPromise();
        // console.log(y);
        return y;

    }

    async deletFeature(id) {
        let deleteFeature = await this.ApiService.delete(this.API_URL + 'DeleteFeature/' + id).toPromise();
        return deleteFeature;
    }
    // for feature


    // for module

    async getModules() {
        this.modules = await this.ApiService.get(this.API_URL + 'GetModules').toPromise();
        // console.log(this.modules);
        return this.modules;
    }


    async addModule(module: Module) {
        let x = await this.ApiService.post(this.API_URL + 'AddModule', module).toPromise();
        // console.log(x);
        return x;
    }

    async updateModule(module: Module) {
        let y = await this.ApiService.put(this.API_URL + 'UpdateModule', module).toPromise();
        // console.log(y);
        return y;
    }

    async deletModule(id) {
        let deletemodule = await this.ApiService.delete(this.API_URL + 'DeleteModule/' + id).toPromise();
        // console.log(deletemodule);
        return deletemodule;

    }
    //for module

    async testCall() {
        let data = await this.ApiService.get('https://jsonplaceholder.typicode.com/posts').toPromise();
        // console.log(data);
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
        this.data = await this.ApiService.get(this.API_URL + 'GetModulesWithFeatures').toPromise();
        // console.log(this.data);
        return this.data;
    }

}