import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { ApiService } from '../../api.service';


@Injectable()

export class HrmsService {

    private setupUrl: string = "SystemAdmin/api/Setup"; 

    constructor(private ApiService: ApiService) {
    }

    async getAllCountries() {
 
        return await this.ApiService.get(this.setupUrl + '/GetCountries').toPromise();
    }

    async getdataToUpdate(countryId, countryUrl) {
        return await this.ApiService.get(`${this.setupUrl}/${countryUrl}/${countryId}`).toPromise();
    }


    // DEMO ONLY, you can find working methods below
    async addCountry(data) {
        return await this.ApiService.post(this.setupUrl + '/AddCountry', data).toPromise();

    }

    async updateCountry(data) {

        let country = await this.getdataToUpdate(data.key, 'GetCountry');
        country = { ...country, ...data.data }
        return await this.ApiService.put(this.setupUrl + '/UpdateCountry', country).toPromise();
    }

    async DeleteCountry(countryId) {
        return await this.ApiService.delete(this.setupUrl + '/DeleteCountry/${countryId}').toPromise();
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
