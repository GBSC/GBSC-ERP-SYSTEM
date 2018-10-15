import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../api.service';

@Injectable()
export class LeaveService {

    public leaveopening;
    public leaveopeningdetail;
    public leaverequest;
    public leavepolicyemployee;
    public leaverequestdetail;
    //private baseUrl: string = "http://localhost:58090/api";
    private baseUrl: string = "/SystemAdmin/api";
    public leaveapproval;
    public leaveclosing: Object;
    public newleaverequest;
    public newleaveopen;

    constructor(private ApiService: ApiService) { }

    /** CRUD METHODS LEAVE OPENING */
    async getleaveopening() {

        
       
        this.leaveopening = await this.ApiService.get(`${this.baseUrl}/Leave/GetLeaveOpenings`).toPromise();
        console.log(this.leaveopening);
        return this.leaveopening;
    }

    async getdataToUpdate(leaveId, leaveUrl) {
        return await this.ApiService.get(`${this.baseUrl}/${leaveUrl}/${leaveId}`).toPromise();
    }


    // DEMO ONLY, you can find working methods below
    async addLeaveopening(data) {

        
        let headers = { headers: { 'Content-Type': 'application/json' } }
        this.newleaveopen = await this.ApiService.post(`${this.baseUrl}/Leave/AddLeaveOpening`, data).toPromise();
        console.log(this.newleaveopen);
        return this.newleaveopen;
    }

    async updateLeaveopening(data) {

        console.log(data.key);
        console.log(data);

        let leaveopen = await this.getdataToUpdate(data.key, 'GetLeaveOpening');
        leaveopen = { ...leaveopen, ...data.data }
        console.log(leaveopen);
        //   
        // let headers = {headers: {'Content-Type':'application/json'}}
        return await this.ApiService.put(`${this.baseUrl}/Leave/UpdateLeaveOpening`, leaveopen).toPromise();

    }



    async DeleteLeaveopening(leaveOpeningId) {

        
       
        return await this.ApiService.delete(`${this.baseUrl}/Leave/DeleteLeaveOpening/${leaveOpeningId}`).toPromise();
    }


    async getleaveopeningdetail() {

        
       

        this.leaveopeningdetail = await this.ApiService.get(`${this.baseUrl}/Leave/GetLeaveOpeningDetails`).toPromise();
        //console.log(features);
        console.log(this.leaveopeningdetail);
        return this.leaveopeningdetail;
    }

    async addLeaveopeningdetail(data) {

        // 
        // let headers = { headers: { 'Content-Type': 'application/json' } }
        let newleaveopen = await this.ApiService.post(`${this.baseUrl}/Leave/AddLeaveOpeningDetail`, data).toPromise();


    }

    async updateLeaveopeningdetail(data) {

        console.log(data.key);
        console.log(data);

        let levopendetail = await this.getdataToUpdate(data.key, 'GetleaveOpendetail');
        levopendetail = { ...levopendetail, ...data.data }
        console.log(levopendetail);
        //   
        // let headers = {headers: {'Content-Type':'application/json'}}
        return await this.ApiService.put(`${this.baseUrl}/Leave/UpdateLeaveOpeningDetail`, levopendetail).toPromise();

    }

    async DeleteLeaveopeningdetail(leaveOpeningdetailId) {

        
       
        return await this.ApiService.delete(`${this.baseUrl}/Leave/DeleteLeaveOpeningDetail/${leaveOpeningdetailId}`).toPromise();
    }

    /** CRUD METHODS LEAVE REQUEST*/
    async getleavepolicyemployee() {

        
       
        return await this.ApiService.get(`${this.baseUrl}/Leave/GetLeavePolicyEmployees`).toPromise();
    }


    // DEMO ONLY, you can find working methods below
    async addleavepolicyemployee(data) {

        
        let headers = { headers: { 'Content-Type': 'application/json' } }
        let newleavepolicyemployee = await this.ApiService.post(`${this.baseUrl}/Leave/AddLeavePolicyEmployee`, data).toPromise();
        console.log(newleavepolicyemployee);

    }

    async updateleavepolicyemployee(data) {

        console.log(data.key);
        console.log(data);

        let leaverqst = await this.getdataToUpdate(data.key, 'Getleavepolicyemployee');
        leaverqst = { ...leaverqst, ...data.data }
        console.log(leaverqst);
        //   
        // let headers = {headers: {'Content-Type':'application/json'}}
        return await this.ApiService.put(`${this.baseUrl}/Leave/Updateleavepolicyemployee`, leaverqst).toPromise();

    }



    async Deleteleavepolicyemployee(id) {

        
       
        return await this.ApiService.delete(`${this.baseUrl}/Leave/UpdateLeavePolicyEmployee/${id}`).toPromise();
    }

    //   Leave Admin Methods

    /** CRUD METHODS LEAVE REQUEST*/
    async getAllleaverequest() {

        
       
        return await this.ApiService.get(`${this.baseUrl}/Leave/GetLeaveRequests`).toPromise();

    }


    // DEMO ONLY, you can find working methods below
    async addleaverequest(data) {

        
        let headers = { headers: { 'Content-Type': 'application/json' } }
        this.newleaverequest = await this.ApiService.post(`${this.baseUrl}/Leave/AddLeaveRequest`, data).toPromise();
        console.log(this.newleaverequest);
        return this.newleaverequest;

    }

    async updateleaverequest(data) {

        console.log(data.key);
        console.log(data);

        let leaverqst = await this.getdataToUpdate(data.key, 'GetLeaveRequest');
        leaverqst = { ...leaverqst, ...data.data }
        console.log(leaverqst);
        return await this.ApiService.put(`${this.baseUrl}/Leave/UpdateLeaveRequest`, leaverqst).toPromise();
    }



    async Deleteleaverequest(leaverequestId) {
        
       
        return await this.ApiService.delete(`${this.baseUrl}/Leave/DeleteLeaveRequest/${leaverequestId}`).toPromise();
    }


    /** CRUD METHODS LEAVE REQUEST*/
    async getAllleaverequestdetail() {

        
       

        this.leaverequestdetail = await this.ApiService.get(`${this.baseUrl}/Leave/GetLeaveRequestDetails`).toPromise();
        console.log(this.leaverequestdetail);
        return this.leaverequestdetail;
    }


    // DEMO ONLY, you can find working methods below
    async addleaverequestdetail(data) {

        console.log(data);
        // 
        // let headers = { headers: { 'Content-Type': 'application/json' } }
        let newleaverequestdetail = await this.ApiService.post(`${this.baseUrl}/Leave/AddLeaveRequestDetail`, data).toPromise();

    }

    async updateleaverequestdetail(data) {

        console.log(data.key);
        console.log(data);

        let leaverqst = await this.getdataToUpdate(data.key, 'Getleaverequestdetail');
        leaverqst = { ...leaverqst, ...data.data }
        console.log(leaverqst);
        return await this.ApiService.put(`${this.baseUrl}/Leave/Updateleaverequestdetail`, leaverqst).toPromise();

    }



    async Deleteleaverequestdetail(leaverequestdetailId) {
        
       
        return await this.ApiService.delete(`${this.baseUrl}/Leave/Deleteleaverequestdetail/${leaverequestdetailId}`).toPromise();
    }

    /** CRUD METHODS */
    async getleaveapprovals() {

        
       

        this.leaveapproval = await this.ApiService.get(`${this.baseUrl}/Leave/GetLeaveApprovals`).toPromise();
        console.log(this.leaveapproval);
        return this.leaveapproval;
    }


    // DEMO ONLY, you can find working methods below
    async addleaveapproval(data) {

        
        let headers = { headers: { 'Content-Type': 'application/json' } }
        let newleaveapproval = await this.ApiService.post(`${this.baseUrl}/Leave/AddLeaveApproval`, data).toPromise();
        console.log(newleaveapproval);

    }

    async updateleaveapproval(data) {

        console.log(data.key);
        console.log(data);

        let leaveapproval = await this.getdataToUpdate(data.key, 'Leave/GetLeaveApproval');
        leaveapproval = { ...leaveapproval, ...data.data }
        console.log(leaveapproval);
        //   
        // let headers = {headers: {'Content-Type':'application/json'}}
        return await this.ApiService.put(`${this.baseUrl}/Leave/UpdateLeaveApproval`, leaveapproval).toPromise();

    }

    async Deleteleaveapproval(leaveapprovalId) {

        
       
        return await this.ApiService.delete(`${this.baseUrl}/Leave/DeleteLeaveApproval/${leaveapprovalId}`).toPromise();
    }

    /** CRUD METHODS */
    async getleaveclosings() {

        
       

        this.leaveclosing = await this.ApiService.get(`${this.baseUrl}/Leave/GetLeaveClosings`).toPromise();
        console.log(this.leaveclosing);
        return this.leaveclosing;
    }


    // DEMO ONLY, you can find working methods below
    async addleaveclosing(data) {

        
        let headers = { headers: { 'Content-Type': 'application/json' } }
        let newleaveclosing = await this.ApiService.post(`${this.baseUrl}/Leave/AddLeaveClosing`, data).toPromise();
        console.log(newleaveclosing);

    }

    async updateleaveclosing(data) {

        console.log(data.key);
        console.log(data);

        let leaveclosing = await this.getdataToUpdate(data.key, 'Leave/GetLeaveClosing');
        leaveclosing = { ...leaveclosing, ...data.data }
        console.log(leaveclosing);
        //   
        // let headers = {headers: {'Content-Type':'application/json'}}
        return await this.ApiService.put(`${this.baseUrl}/Leave/UpdateLeaveClosing`, leaveclosing).toPromise();

    }

    async Deleteleaveclosing(leaveclosingId) {

        
       
        return await this.ApiService.delete(`${this.baseUrl}/Leave/DeleteLeaveClosing/${leaveclosingId}`).toPromise();
    }
}
