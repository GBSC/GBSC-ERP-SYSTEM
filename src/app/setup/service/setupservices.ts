import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Http, Response } from '@angular/http';
import { Company } from '../../setup/model/company';
import { Branch } from '../../setup/model/branch';
import { Department } from '../../setup/model/department';
import { Role } from '../../setup/model/role';
import { Feature } from '../../setup/model/feature';

import { Module } from '../../setup/model/module';


import 'rxjs/add/operator/map';





@Injectable()
export class SetupService {


    public companies: any;
    public branches: any;
    public departments: any;
    public roles: any;
    public features: any;
    public modules: any;
    public data: any;



    private readonly API_URL = "http://gbsc-erp.azurewebsites.net/systemadmin/api/setup";

    constructor(private http: HttpClient) {
    }


    async getCompany() {
        this.companies = await this.http.get<Company>(this.API_URL + '/GetCompanies').toPromise();
        console.log(this.companies);
        return this.companies;
    }


    async addCompany(company: Company) {
        let abc = await this.http.post(this.API_URL + '/addcompany', company).toPromise();
        console.log(abc);

        return abc;
    }

    async updateCompany(company: Company) {
        let xyz = await this.http.put(`${this.API_URL}/UpdateCompany/`, company).toPromise();
        return xyz;
    }

    async deletCompany(id) {
        let deleteCompany = await this.http.delete(this.API_URL + '/DeleteCompany/' + id).toPromise();
        return deleteCompany;
    }

    // for branches

    async getBranches() {
        this.branches = await this.http.get<Branch>(this.API_URL + '/GetBranches').toPromise();
        console.log(this.branches);
        return this.branches;
    }

    async addBranches(branch: Branch) {
        let a = await this.http.post(this.API_URL + '/AddBranch', branch).toPromise();
        console.log(a);
        return a;
    }

    async updateBranch(branch: Branch) {
        let xyz = await this.http.put(`${this.API_URL}/UpdateBranch/`, branch).toPromise();
        return xyz;
    }

    async deletBranch(id) {
        let deleteBranch = await this.http.delete(this.API_URL + '/DeleteBranch/' + id).toPromise();
        return deleteBranch;
    }



    // for branches


    // for department
    async getDepartments() {
        this.departments = await this.http.get<Department>(this.API_URL + '/GetDepartments').toPromise();
        console.log(this.departments);
        return this.departments;
    }

    async addDepartment(department: Department) {
        let d = await this.http.post(this.API_URL + '/AddDepartment', department).toPromise();
        console.log(d);
        return d;
    }

    async updateDepartment(department: Department) {
        let xyz = await this.http.put(`${this.API_URL}/UpdateDepartment`, department).toPromise();
        return xyz;
    }

    async deletDepartment(id) {
        let deleteDepartment = await this.http.delete(this.API_URL + '/DeleteDepartment/' + id).toPromise();
        return deleteDepartment;
    }

    //for department


    //for role

    async getRoles() {
        this.roles = await this.http.get<Role>(this.API_URL + '/GetRoles').toPromise();
        console.log(this.roles);
        return this.roles;
    }

    async addRole(role: Role) {
        let r = this.http.post(this.API_URL + '/AddRole', role).toPromise();
        console.log(r);
        return r;
    }


    async updateRole(role: Role) {
        let r = await this.http.put(`${this.API_URL}/UpdateRole`, role).toPromise();
        console.log(r);
        return r;

    }

    async deletRole(id) {
        let deleteRole = await this.http.delete(this.API_URL + '/DeleteRole/' + id).toPromise();
        return deleteRole;
    }
    // for role

    // for feature
    async getFeatures() {
        this.features = await this.http.get<Feature>(this.API_URL + '/GetFeatures').toPromise();
        console.log(this.features);
        return this.features;

    }

    async addFeature(feature: Feature) {
        let x = await this.http.post(this.API_URL + '/AddFeature', feature).toPromise();
        console.log(x);
        return x;

    }
    async updateFeature(feature: Feature) {
        let y = this.http.put(`${this.API_URL}/UpdateFeature`, feature).toPromise();
        console.log(y);
        return y;

    }

    async deletFeature(id) {
        let deleteFeature = await this.http.delete(this.API_URL + '/DeleteFeature/' + id).toPromise();
        return deleteFeature;
    }
    // for feature


    // for module

    async getModules() {
        this.modules = await this.http.get<Module>(this.API_URL + '/GetModules').toPromise();
        console.log(this.modules);
        return this.modules;
    }


    async addModule(module: Module) {
        let x = await this.http.post(this.API_URL + '/AddModule', module).toPromise();
        console.log(x);
        return x;

    }

    async updateModule(module: Module) {
        let y = await this.http.put(`${this.API_URL}/UpdateModule`, module).toPromise();
        console.log(y);
        return y;

    }

    async deletModule(id) {
        let deletemodule = await this.http.delete(this.API_URL + '/DeleteModule/' + id).toPromise();
        console.log(deletemodule);
        return deletemodule;

    }
    //for module

    async testCall() {
        let data = await this.http.get('https://jsonplaceholder.typicode.com/posts').toPromise();
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
        this.data = await this.http.get(this.API_URL + '/GetModulesWithFeatures').toPromise();
        console.log(this.data);
        return this.data;
    }

}