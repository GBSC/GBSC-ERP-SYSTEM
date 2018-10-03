import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LeaveService {

    public leaveopening;
    public leaveopeningdetail;
    public leaverequest;
    public leavepolicyemployee;
    public leaverequestdetail;
    private baseUrl: string = "http://localhost:58090/api";
    //private baseUrl: string = "http://gbsc-erp.azurewebsites.net/SystemAdmin/api";
    public leaveapproval;
    public leaveclosing: Object;
    public newleaverequest;
    public newleaveopen;

    constructor(private httpClient: HttpClient) { }

    /** CRUD METHODS LEAVE OPENING */
    async getleaveopening() {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
        this.leaveopening = await this.httpClient.get(`${this.baseUrl}/Leave/GetLeaveOpenings`).toPromise();
        console.log(this.leaveopening);
        return this.leaveopening;
    }

    async getdataToUpdate(leaveId, leaveUrl) {
        return await this.httpClient.get(`${this.baseUrl}/${leaveUrl}/${leaveId}`).toPromise();
    }


    // DEMO ONLY, you can find working methods below
    async addLeaveopening(data) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        this.newleaveopen = await this.httpClient.post(`${this.baseUrl}/Leave/AddLeaveOpening`, data, headers).toPromise();
        console.log(this.newleaveopen);
        return this.newleaveopen;
    }

    async updateLeaveopening(data) {

        console.log(data.key);
        console.log(data);

        let leaveopen = await this.getdataToUpdate(data.key, 'GetLeaveOpening');
        leaveopen = { ...leaveopen, ...data.data }
        console.log(leaveopen);
        // let authToken = localStorage.getItem('auth_token');  
        // let headers = {headers: {'Content-Type':'application/json'}}
        return await this.httpClient.put(`${this.baseUrl}/Leave/UpdateLeaveOpening`, leaveopen).toPromise();

    }

    

    async DeleteLeaveopening(leaveOpeningId) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
        return await this.httpClient.delete(`${this.baseUrl}/Leave/DeleteLeaveOpening/${leaveOpeningId}`).toPromise();
    }


    async getleaveopeningdetail() {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

        this.leaveopeningdetail = await this.httpClient.get(`${this.baseUrl}/Leave/GetLeaveOpeningDetails`).toPromise();
        //console.log(features);
        console.log(this.leaveopeningdetail);
        return this.leaveopeningdetail;
    }

    async addLeaveopeningdetail(data) {

        // let authToken = localStorage.getItem('auth_token');
        // let headers = { headers: { 'Content-Type': 'application/json' } }
        let newleaveopen = await this.httpClient.post(`${this.baseUrl}/Leave/AddLeaveOpeningDetail`, data).toPromise();
      

    }

    async updateLeaveopeningdetail(data) {

        console.log(data.key);
        console.log(data);

        let levopendetail = await this.getdataToUpdate(data.key, 'GetleaveOpendetail');
        levopendetail = { ...levopendetail, ...data.data }
        console.log(levopendetail);
        // let authToken = localStorage.getItem('auth_token');  
        // let headers = {headers: {'Content-Type':'application/json'}}
        return await this.httpClient.put(`${this.baseUrl}/Leave/UpdateLeaveOpeningDetail`, levopendetail).toPromise();

    }
   
    async DeleteLeaveopeningdetail(leaveOpeningdetailId) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
        return await this.httpClient.delete(`${this.baseUrl}/Leave/DeleteLeaveOpeningDetail/${leaveOpeningdetailId}`).toPromise();
    }

    /** CRUD METHODS LEAVE REQUEST*/
    async getleavepolicyemployee() {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
        return await this.httpClient.get(`${this.baseUrl}/Leave/GetLeavePolicyEmployees`).toPromise();
    }


    // DEMO ONLY, you can find working methods below
    async addleavepolicyemployee(data) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        let newleavepolicyemployee = await this.httpClient.post(`${this.baseUrl}/Leave/AddLeavePolicyEmployee`, data, headers).toPromise();
        console.log(newleavepolicyemployee);

    }

    async updateleavepolicyemployee(data) {

        console.log(data.key);
        console.log(data);

        let leaverqst = await this.getdataToUpdate(data.key, 'Getleavepolicyemployee');
        leaverqst = { ...leaverqst, ...data.data }
        console.log(leaverqst);
        // let authToken = localStorage.getItem('auth_token');  
        // let headers = {headers: {'Content-Type':'application/json'}}
        return await this.httpClient.put(`${this.baseUrl}/Leave/Updateleavepolicyemployee`, leaverqst).toPromise();

    }



    async Deleteleavepolicyemployee(id) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
        return await this.httpClient.delete(`${this.baseUrl}/Leave/UpdateLeavePolicyEmployee/${id}`).toPromise();
    }


    //   Leave Admin Methods

    /** CRUD METHODS LEAVE REQUEST*/
    async getAllleaverequest() {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

        this.leaverequest = await this.httpClient.get(`${this.baseUrl}/Leave/GetLeaveRequests`).toPromise();
        //console.log(features);
        console.log(this.leaverequest);
        return this.leaverequest;
    }


    // DEMO ONLY, you can find working methods below
    async addleaverequest(data) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        this.newleaverequest = await this.httpClient.post(`${this.baseUrl}/Leave/AddLeaveRequest`, data, headers).toPromise();
        console.log(this.newleaverequest);
        return this.newleaverequest;

    }

    async updateleaverequest(data) {

        console.log(data.key);
        console.log(data);

        let leaverqst = await this.getdataToUpdate(data.key, 'GetLeaveRequest');
        leaverqst = { ...leaverqst, ...data.data }
        console.log(leaverqst);
        return await this.httpClient.put(`${this.baseUrl}/Leave/UpdateLeaveRequest`, leaverqst).toPromise();
    }



    async Deleteleaverequest(leaverequestId) {
        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
        return await this.httpClient.delete(`${this.baseUrl}/Leave/DeleteLeaveRequest/${leaverequestId}`).toPromise();
    }


    /** CRUD METHODS LEAVE REQUEST*/
    async getAllleaverequestdetail() {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

        this.leaverequestdetail = await this.httpClient.get(`${this.baseUrl}/Leave/GetLeaveRequestDetails`).toPromise();
        console.log(this.leaverequestdetail);
        return this.leaverequestdetail;
    }


    // DEMO ONLY, you can find working methods below
    async addleaverequestdetail(data) {

        console.log(data);
        // let authToken = localStorage.getItem('auth_token');
        // let headers = { headers: { 'Content-Type': 'application/json' } }
      let newleaverequestdetail = await this.httpClient.post(`${this.baseUrl}/Leave/AddLeaveRequestDetail`, data).toPromise();

    }

    async updateleaverequestdetail(data) {

        console.log(data.key);
        console.log(data);

        let leaverqst = await this.getdataToUpdate(data.key, 'Getleaverequestdetail');
        leaverqst = { ...leaverqst, ...data.data }
        console.log(leaverqst);
        return await this.httpClient.put(`${this.baseUrl}/Leave/Updateleaverequestdetail`, leaverqst).toPromise();

    }



    async Deleteleaverequestdetail(leaverequestdetailId) {
        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
        return await this.httpClient.delete(`${this.baseUrl}/Leave/Deleteleaverequestdetail/${leaverequestdetailId}`).toPromise();
    }

       /** CRUD METHODS */
       async getleaveapprovals() {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

        this.leaveapproval = await this.httpClient.get(`${this.baseUrl}/Leave/GetLeaveApprovals`).toPromise();
        console.log(this.leaveapproval);
        return this.leaveapproval;
    }


    // DEMO ONLY, you can find working methods below
    async addleaveapproval(data) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        let newleaveapproval = await this.httpClient.post(`${this.baseUrl}/Leave/AddLeaveApproval`, data, headers).toPromise();
        console.log(newleaveapproval);

    }

    async updateleaveapproval(data) {

        console.log(data.key);
        console.log(data);

        let leaveapproval = await this.getdataToUpdate(data.key, 'Leave/GetLeaveApproval');
        leaveapproval = { ...leaveapproval, ...data.data }
        console.log(leaveapproval);
        // let authToken = localStorage.getItem('auth_token');  
        // let headers = {headers: {'Content-Type':'application/json'}}
        return await this.httpClient.put(`${this.baseUrl}/Leave/UpdateLeaveApproval`, leaveapproval).toPromise();

    }
 
    async Deleteleaveapproval(leaveapprovalId) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
        return await this.httpClient.delete(`${this.baseUrl}/Leave/DeleteLeaveApproval/${leaveapprovalId}`).toPromise();
    }

           /** CRUD METHODS */
           async getleaveclosings() {

            let authToken = localStorage.getItem('auth_token');
            let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
    
            this.leaveclosing = await this.httpClient.get(`${this.baseUrl}/Leave/GetLeaveClosings`, headers).toPromise();
            console.log(this.leaveclosing);
            return this.leaveclosing;
        }
    
    
        // DEMO ONLY, you can find working methods below
        async addleaveclosing(data) {
    
            let authToken = localStorage.getItem('auth_token');
            let headers = { headers: { 'Content-Type': 'application/json' } }
            let newleaveclosing = await this.httpClient.post(`${this.baseUrl}/Leave/AddLeaveClosing`, data, headers).toPromise();
            console.log(newleaveclosing);
    
        }
    
        async updateleaveclosing(data) {
    
            console.log(data.key);
            console.log(data);
    
            let leaveclosing = await this.getdataToUpdate(data.key, 'Leave/GetLeaveClosing');
            leaveclosing = { ...leaveclosing, ...data.data }
            console.log(leaveclosing);
            // let authToken = localStorage.getItem('auth_token');  
            // let headers = {headers: {'Content-Type':'application/json'}}
            return await this.httpClient.put(`${this.baseUrl}/Leave/UpdateLeaveClosing`, leaveclosing).toPromise();
    
        }
     
        async Deleteleaveclosing(leaveclosingId) {
    
            let authToken = localStorage.getItem('auth_token');
            let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
            return await this.httpClient.delete(`${this.baseUrl}/Leave/DeleteLeaveClosing/${leaveclosingId}`).toPromise();
        }
}
