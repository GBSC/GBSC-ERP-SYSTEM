import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class PayrollService {

    //private baseUrl: string = "http://gbsc-erp.azurewebsites.net/SystemAdmin/api";
    private baseUrl: string = "http://localhost:58090/api";
    public stopsalary;
    
    constructor(private httpClient: HttpClient) { }

    async getstopsalaries() {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
    
        this.stopsalary = await this.httpClient.get(`${this.baseUrl}/GetStopSalaries`).toPromise();
        console.log(this.stopsalary);
        return this.stopsalary;
      }
    
      async getdataToUpdate(payrollId, payrollUrl) {
        return await this.httpClient.get(`${this.baseUrl}/${payrollUrl}/${payrollId}`).toPromise();
      }
    
    
      async addstopsalary(data) {
    
        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        let newstopsalary = await this.httpClient.post(`${this.baseUrl}/AddStopSalary`, data, headers).toPromise();
        console.log(newstopsalary);
    
      }
    
      async updatestopsalary(data) {
    
        let stopsalary = await this.getdataToUpdate(data.key, 'GetStopSalary');
        stopsalary = { ...stopsalary, ...data.data }
        let headers = { headers: { 'Content-Type': 'application/json' } }
        return await this.httpClient.put(`${this.baseUrl}/UpdateStopSalary`, stopsalary, headers).toPromise();
      }
    
      async Deletestopsalary(stopsalaryId) {
    
        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
        return await this.httpClient.delete(`${this.baseUrl}/DeleteStopSalary/${stopsalaryId}`).toPromise();
      }


}
