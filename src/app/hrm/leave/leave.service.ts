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
    public leaveapproval;

    constructor(private httpClient: HttpClient) { }

    /** CRUD METHODS LEAVE OPENING */
    async getAllemployeeleaveopening() {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
        this.leaveopening = await this.httpClient.get(`${this.baseUrl}/LeaveAdmin/GetLeaveOpenings`).toPromise();
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
        let newcountry = await this.httpClient.post(`${this.baseUrl}/LeaveAdmin/AddLeaveOpening`, data, headers).toPromise();
        console.log(newcountry);

    }

    async updateLeaveopening(data) {

        console.log(data.key);
        console.log(data);

        let leaveopen = await this.getdataToUpdate(data.key, 'GetLeaveOpening');
        leaveopen = { ...leaveopen, ...data.data }
        console.log(leaveopen);
        // let authToken = localStorage.getItem('auth_token');  
        // let headers = {headers: {'Content-Type':'application/json'}}
        return await this.httpClient.put(`${this.baseUrl}/LeaveAdmin/UpdateLeaveOpening`, leaveopen).toPromise();

    }


    async DeleteLeaveopening(leaveOpeningId) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
        return await this.httpClient.delete(`${this.baseUrl}/LeaveAdmin/DeleteLeaveOpening/${leaveOpeningId}`).toPromise();
    }


    async getleaveopeningdetail() {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

        this.leaveopeningdetail = await this.httpClient.get(`${this.baseUrl}/LeaveAdmin/GetLeaveOpeningDetails`).toPromise();
        //console.log(features);
        console.log(this.leaveopeningdetail);
        return this.leaveopeningdetail;
    }

    async addLeaveopeningdetail(data) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        let newleaveopndetail = await this.httpClient.post(`${this.baseUrl}/LeaveAdmin/AddLeaveOpeningDetail`, data, headers).toPromise();
        console.log(newleaveopndetail);

    }

    async updateLeaveopeningdetail(data) {

        console.log(data.key);
        console.log(data);

        let levopendetail = await this.getdataToUpdate(data.key, 'GetleaveOpendetail');
        levopendetail = { ...levopendetail, ...data.data }
        console.log(levopendetail);
        // let authToken = localStorage.getItem('auth_token');  
        // let headers = {headers: {'Content-Type':'application/json'}}
        return await this.httpClient.put(`${this.baseUrl}/LeaveAdmin/UpdateLeaveOpeningDetail`, levopendetail).toPromise();

    }
    DeleteLeaveOpeningDetail
    async DeleteLeaveopeningdetail(leaveOpeningdetailId) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
        return await this.httpClient.delete(`${this.baseUrl}/LeaveAdmin/DeleteLeaveOpeningDetail/${leaveOpeningdetailId}`).toPromise();
    }

    /** CRUD METHODS LEAVE REQUEST*/
    async getAllleavepolicyemployee() {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

        this.leavepolicyemployee = await this.httpClient.get(`${this.baseUrl}/Leave/Getleavepolicyemployees`).toPromise();
        //console.log(features);
        console.log(this.leaveopening);
        return this.leaveopening;
    }


    // DEMO ONLY, you can find working methods below
    async addleavepolicyemployee(data) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        let newleavepolicyemployee = await this.httpClient.post(`${this.baseUrl}/Leave/Addleavepolicyemployee`, data, headers).toPromise();
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
        return await this.httpClient.delete(`${this.baseUrl}/Leave/Deleteleavepolicyemployee/${id}`).toPromise();
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
        let newleaverequest = await this.httpClient.post(`${this.baseUrl}/Leave/AddLeaveRequest`, data, headers).toPromise();
        console.log(newleaverequest);

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

        this.leaverequestdetail = await this.httpClient.get(`${this.baseUrl}/Leave/Getleaverequestdetails`).toPromise();
        //console.log(features);
        console.log(this.leaverequestdetail);
        return this.leaverequestdetail;
    }


    // DEMO ONLY, you can find working methods below
    async addleaverequestdetail(data) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        let newleaverequestdetail = await this.httpClient.post(`${this.baseUrl}/Leave/Addleaverequestdetail`, data, headers).toPromise();
        console.log(newleaverequestdetail);

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
    async getAllleaveapproval() {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

        this.leaveapproval = await this.httpClient.get(`${this.baseUrl}/Getleaveapprovals`).toPromise();
        console.log(this.leaveapproval);
        return this.leaveapproval;
    }


    // DEMO ONLY, you can find working methods below
    async addleaveapproval(data) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        let newleaveapproval = await this.httpClient.post(`${this.baseUrl}/Addleaveapproval`, data, headers).toPromise();
        console.log(newleaveapproval);

    }

    async updateleaveapproval(data) {

        console.log(data.key);
        console.log(data);

        let leaveapproval = await this.getdataToUpdate(data.key, 'Getleaveapproval');
        leaveapproval = { ...leaveapproval, ...data.data }
        console.log(leaveapproval);
        // let authToken = localStorage.getItem('auth_token');  
        // let headers = {headers: {'Content-Type':'application/json'}}
        return await this.httpClient.put(`${this.baseUrl}/Updateleaveapproval`, leaveapproval).toPromise();

    }



    async Deleteleaveapproval(leaveapprovalId) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
        return await this.httpClient.delete(`${this.baseUrl}/Deleteleaveapproval/${leaveapprovalId}`).toPromise();
    }
}
