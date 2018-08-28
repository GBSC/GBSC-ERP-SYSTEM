import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class LeaveService {
    public leaveyear;
    public leavepurpose;
    public leavepolicy;

    public uploadleave;

    public leavedaytype;
    public leaveeligibility;
    public leaveemppolicy;
    public leavetype;
    public leaveapproval;
    private baseUrl: string = "http://localhost:58090/api/HrSetup";

    constructor(private httpClient: HttpClient) { }


    /** CRUD METHODS */
    async getAllleaverpolicy() {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

        this.leavepolicy = await this.httpClient.get('http://localhost:58090/api/Setup/GetCountries').toPromise();
        console.log(this.leavepolicy);
        return this.leavepolicy;
    }

    async getdataToUpdate(countryId, countryUrl) {
        return await this.httpClient.get(`${this.baseUrl}/${countryUrl}/${countryId}`).toPromise();
    }


    // DEMO ONLY, you can find working methods below
    async addleavepolicy(data) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        let newleavepolicy = await this.httpClient.post('http://localhost:58090/api/Setup/AddCountry', data, headers).toPromise();
        console.log(newleavepolicy);

    }

    async updateleavepolicy(data) {

        console.log(data.key);
        console.log(data);

        let leavpolicy = await this.getdataToUpdate(data.key, 'GetCountry');
        leavpolicy = { ...leavpolicy, ...data.data }
        console.log(leavpolicy);
        // let authToken = localStorage.getItem('auth_token');  
        // let headers = {headers: {'Content-Type':'application/json'}}
        return await this.httpClient.put('http://localhost:58090/api/Setup/UpdateCountry', leavpolicy).toPromise();

    }



    async Deleteleavpolicy(leavpolicyId) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
        return await this.httpClient.delete('http://localhost:58090/api/Setup/DeleteCountry/${countryId}').toPromise();
    }


    /** CRUD METHODS */
    async getleavepurpose() {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

        this.leavepurpose = await this.httpClient.get('http://localhost:58090/api/Setup/GetCountries').toPromise();
        console.log(this.leavepurpose);
        return this.leavepurpose;
    }


    // DEMO ONLY, you can find working methods below
    async addleavepurpose(data) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        let newleavepurpose = await this.httpClient.post('http://localhost:58090/api/Setup/AddCountry', data, headers).toPromise();
        console.log(newleavepurpose);

    }

    async updatepurpose(data) {

        console.log(data.key);
        console.log(data);

        let leavpurpose = await this.getdataToUpdate(data.key, 'GetCountry');
        leavpurpose = { ...leavpurpose, ...data.data }
        console.log(leavpurpose);
        // let authToken = localStorage.getItem('auth_token');  
        // let headers = {headers: {'Content-Type':'application/json'}}
        return await this.httpClient.put('http://localhost:58090/api/Setup/UpdateCountry', leavpurpose).toPromise();

    }


    async Deleteleavpurpose(leavpurposeId) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
        return await this.httpClient.delete('http://localhost:58090/api/Setup/DeleteCountry/${countryId}').toPromise();
    }

    /** CRUD METHODS */
    async getAllleaveyear() {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

        this.leaveyear = await this.httpClient.get('http://localhost:58090/api/Setup/GetCountries').toPromise();
        console.log(this.leaveyear);
        return this.leaveyear;
    }


    // DEMO ONLY, you can find working methods below
    async addleaveyear(data) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        let newleaveyear = await this.httpClient.post('http://localhost:58090/api/Setup/AddCountry', data, headers).toPromise();
        console.log(newleaveyear);

    }

    async updateleaveyear(data) {

        console.log(data.key);
        console.log(data);

        let leavyear = await this.getdataToUpdate(data.key, 'GetCountry');
        leavyear = { ...leavyear, ...data.data }
        console.log(leavyear);
        // let authToken = localStorage.getItem('auth_token');  
        // let headers = {headers: {'Content-Type':'application/json'}}
        return await this.httpClient.put('http://localhost:58090/api/Setup/UpdateCountry', leavyear).toPromise();

    }



    async Deleteleavyear(leavyearId) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
        return await this.httpClient.delete('http://localhost:58090/api/Setup/DeleteCountry/${countryId}').toPromise();
    }


}
