import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LeaveService {

    public leaveopening;
    public leaveopeningdetail;
    public leaverequest;


    private baseUrl: string = "http://localhost:58090/api/HrSetup";
    constructor(private httpClient: HttpClient) { }

    /** CRUD METHODS LEAVE OPENING */
    async getAllemployeeleaveopening() {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

        this.leaveopening = await this.httpClient.get('http://localhost:58090/api/Setup/GetCountries').toPromise();
        //console.log(features);
        console.log(this.leaveopening);
        return this.leaveopening;
    }

    async getdataToUpdate(countryId, countryUrl) {
        return await this.httpClient.get(`${this.baseUrl}/${countryUrl}/${countryId}`).toPromise();
    }


    // DEMO ONLY, you can find working methods below
    async addLeaveopening(data) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        let newcountry = await this.httpClient.post('http://localhost:58090/api/Setup/AddCountry', data, headers).toPromise();
        console.log(newcountry);

    }

    async updateLeaveopening(data) {

        console.log(data.key);
        console.log(data);

        let country = await this.getdataToUpdate(data.key, 'GetCountry');
        country = { ...country, ...data.data }
        console.log(country);
        // let authToken = localStorage.getItem('auth_token');  
        // let headers = {headers: {'Content-Type':'application/json'}}
        return await this.httpClient.put('http://localhost:58090/api/Setup/UpdateCountry', country).toPromise();

    }



    async DeleteLeaveopening(leaveOpeningId) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
        return await this.httpClient.delete('http://localhost:58090/api/Setup/DeleteCountry/${countryId}').toPromise();
    }


    async getleaveopeningdetail() {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

        this.leaveopeningdetail = await this.httpClient.get('http://localhost:58090/api/Setup/GetCountries').toPromise();
        //console.log(features);
        console.log(this.leaveopeningdetail);
        return this.leaveopeningdetail;
    }

    async addLeaveopeningdetail(data) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        let newleaveopndetail = await this.httpClient.post('http://localhost:58090/api/Setup/AddCountry', data, headers).toPromise();
        console.log(newleaveopndetail);

    }

    async updateLeaveopeningdetail(data) {

        console.log(data.key);
        console.log(data);

        let levopendetail = await this.getdataToUpdate(data.key, 'GetleaveOpende');
        levopendetail = { ...levopendetail, ...data.data }
        console.log(levopendetail);
        // let authToken = localStorage.getItem('auth_token');  
        // let headers = {headers: {'Content-Type':'application/json'}}
        return await this.httpClient.put('http://localhost:58090/api/Setup/UpdateCountry', levopendetail).toPromise();

    }

    async DeleteLeaveopeningdetail(leaveOpeningdetailId) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
        return await this.httpClient.delete('http://localhost:58090/api/Setup/DeleteCountry/${countryId}').toPromise();
    }

    /** CRUD METHODS LEAVE REQUEST*/
    async getAllleaverequest() {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

        this.leaverequest = await this.httpClient.get('http://localhost:58090/api/Setup/GetCountries').toPromise();
        //console.log(features);
        console.log(this.leaveopening);
        return this.leaveopening;
    }


    // DEMO ONLY, you can find working methods below
    async addleaverequest(data) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        let newleaverequest = await this.httpClient.post('http://localhost:58090/api/Setup/AddCountry', data, headers).toPromise();
        console.log(newleaverequest);

    }

    async updateleaverequest(data) {

        console.log(data.key);
        console.log(data);

        let leaverqst = await this.getdataToUpdate(data.key, 'GetCountry');
        leaverqst = { ...leaverqst, ...data.data }
        console.log(leaverqst);
        // let authToken = localStorage.getItem('auth_token');  
        // let headers = {headers: {'Content-Type':'application/json'}}
        return await this.httpClient.put('http://localhost:58090/api/Setup/UpdateCountry', leaverqst).toPromise();

    }



    async Deleteleaverequest(leaverequestId) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
        return await this.httpClient.delete('http://localhost:58090/api/Setup/DeleteCountry/${countryId}').toPromise();
    }


}
