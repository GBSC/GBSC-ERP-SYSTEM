import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { ApiService } from '../../api.service';
import { Observable } from 'rxjs';
import { City } from '../../../../core/Models/HRM/city';


@Injectable()

export class HrmsService {

    public setupUrl: string = "SystemAdmin/api/Setup";

    constructor(public ApiService: ApiService) {
    }

    async getAllCountries() {

        return await this.ApiService.get(this.setupUrl + '/GetCountries').toPromise();
    }

    getCountriesByCompanyId(compid : number) : Observable<any[]> {

        return this.ApiService.get(this.setupUrl + '/GetCountriesByCompanyId/' + compid);
    }

    // DEMO ONLY, you can find working methods below
    async addCountry(data) {
        return await this.ApiService.post(this.setupUrl + '/AddCountry', data).toPromise();

    }

    async updateCountry(data) {
        return await this.ApiService.put(this.setupUrl + '/UpdateCountry', data).toPromise();
    }

    async DeleteCountry(countryId) {
        return await this.ApiService.delete(this.setupUrl + '/DeleteCountry/${countryId}').toPromise();
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
        return await this.ApiService.post(this.setupUrl + '/AddCity', data).toPromise();

    }

    async updateCity(data) {
        return await this.ApiService.put(this.setupUrl + '/UpdateCity', data).toPromise();
    }

    async deleteCity(cityId) {
        return await this.ApiService.delete(this.setupUrl + '/DeleteCity/${cityId}').toPromise();
    }


    async getAllDepartments() {

        return await this.ApiService.get(`${this.setupUrl}/GetDepartments`).toPromise();
    }

    // DEMO ONLY, you can find working methods below
    async addDepartment(data) {

        return await this.ApiService.post(`${this.setupUrl}/addDepartment`, data).toPromise();
    }

    async updateDepartment(data) {
        return await this.ApiService.post(`${this.setupUrl}/addDepartment`, data.key).toPromise();
    }

    async DeleteDepartment(data) {

        return await this.ApiService.get(`${this.setupUrl}/DeleteDepartment` + data.key).toPromise();
    }
}
