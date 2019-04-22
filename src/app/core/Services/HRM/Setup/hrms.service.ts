import { Injectable } from '@angular/core';
import { ApiService } from '../../api.service';
import { Observable } from 'rxjs';
import { City } from '../../../../core/Models/HRM/city';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment.prod';


@Injectable()

export class HrmsService {

    public setupUrl: string = "SystemAdmin/api/Setup";
    public setupUrl2: string = environment.api_url + "SystemAdmin/api/Setup";
    
    constructor(public ApiService: ApiService,public httpService : HttpClient) {
    }

    async getAllCountries() {

        return await this.ApiService.get(this.setupUrl + '/GetCountries').toPromise();
    }

    getCountriesByCompanyId(compid : number) : Observable<any[]> {

        return this.ApiService.get(this.setupUrl + '/GetCountriesByCompanyId/' + compid);
    }
 
    async addCountry(data) {
         return await this.httpService.post(this.setupUrl2 + '/AddCountry', data).toPromise();

    }

    async updateCountry(data) {
        return await this.httpService.put(this.setupUrl2 + '/UpdateCountry', data).toPromise();
    }

    async DeleteCountry(countryId) {
        return await this.httpService.delete(this.setupUrl2 + '/DeleteCountry/' + countryId).toPromise();
    }

    async getAllCities() {

        return await this.ApiService.get(this.setupUrl + '/GetCities').toPromise();
    }

    getCitiesByCompanyId(companyId: any) {

        return this.ApiService.get(this.setupUrl + '/GetCitiesByCompanyId/' + companyId)
    }

    GetCitiesByCompanyId(companyId: any): Observable<City[]> {
        return this.ApiService.get(this.setupUrl + '/GetCitiesByCompanyId/' + companyId)
    }

    async addCity(data) { 
        return await this.httpService.post(this.setupUrl2 + '/AddCity', data).toPromise();

    }

    updateCity(data) : Observable<any> {
        return this.httpService.put(this.setupUrl2 + '/UpdateCity', data);
    }

    deleteCity(cityId): Observable<any>  { 
        return this.httpService.delete(this.setupUrl2 + '/DeleteCity/'+ cityId);
    }


    async getAllDepartments() {

        return await this.ApiService.get(`${this.setupUrl}/GetDepartments`).toPromise();
    }

    GetAllDepartments() : Observable<any[]> {

        return this.ApiService.get(`${this.setupUrl}/GetDepartments`)
    }

    GetAllDepartmentsByCompany(companyid : number) : Observable<any[]> {

        return this.ApiService.get(`${this.setupUrl}/GetDepartmentsByCompanyId/` + companyid)
    }

    GetBranchesByCompany(companyid : number) : Observable<any[]> {
        return this.ApiService.get(`${this.setupUrl}/GetBranchesByCompanyId/` + companyid)
    }

    GetBranches() : Observable<any[]> {
        return this.ApiService.get(`${this.setupUrl}/GetBranches`)
    }
}
