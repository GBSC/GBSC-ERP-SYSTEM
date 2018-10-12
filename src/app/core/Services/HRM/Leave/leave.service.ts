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
    private baseUrl: string = "SystemAdmin/api";
    public leaveapproval;
    public leaveclosing: Object;
    public newleaverequest;
    public newleaveopen;

    constructor(private ApiService: ApiService) { }

    /** CRUD METHODS LEAVE OPENING */
    async getLeaveOpening() {
 
        return await this.ApiService.get(`${this.baseUrl}/Leave/GetLeaveOpenings`).toPromise();
    }

    async getdataToUpdate(leaveId, leaveUrl) {
        return await this.ApiService.get(`${this.baseUrl}/${leaveUrl}/${leaveId}`).toPromise();
    }


    // DEMO ONLY, you can find working methods below
    async addLeaveOpening(data) {
 
        return await this.ApiService.post(`${this.baseUrl}/Leave/AddLeaveOpening`, data).toPromise();
    }

    async updateLeaveOpening(data) { 

        let leaveopen = await this.getdataToUpdate(data.key, 'GetLeaveOpening');
        leaveopen = { ...leaveopen, ...data.data }  
        return await this.ApiService.put(`${this.baseUrl}/Leave/UpdateLeaveOpening`, leaveopen).toPromise();

    }



    async deleteLeaveOpening(leaveOpeningId) {

        return await this.ApiService.delete(`${this.baseUrl}/Leave/DeleteLeaveOpening/${leaveOpeningId}`).toPromise();
    }


    async getLeaveOpeningDetail() {

      return await this.ApiService.get(`${this.baseUrl}/Leave/GetLeaveOpeningDetails`).toPromise();
    }

    async addLeaveOpeningDetail(data) {

     return await this.ApiService.post(`${this.baseUrl}/Leave/AddLeaveOpeningDetail`, data).toPromise();
    }

    async updateLeaveOpeningDetail(data) {

        let levopendetail = await this.getdataToUpdate(data.key, 'GetleaveOpendetail');
        levopendetail = { ...levopendetail, ...data.data }
        return await this.ApiService.put(`${this.baseUrl}/Leave/UpdateLeaveOpeningDetail`, levopendetail).toPromise();

    }

    async DeleteLeaveOpeningDetail(leaveOpeningdetailId) {
         return await this.ApiService.delete(`${this.baseUrl}/Leave/DeleteLeaveOpeningDetail/${leaveOpeningdetailId}`).toPromise();
    }

    /** CRUD METHODS LEAVE REQUEST*/
    async getLeavePolicyEmployee() {
        return await this.ApiService.get(`${this.baseUrl}/Leave/GetLeavePolicyEmployees`).toPromise();
    }


    // DEMO ONLY, you can find working methods below
    async addLeavePolicyEmployee(data) {
        
        return await this.ApiService.post(`${this.baseUrl}/Leave/AddLeavePolicyEmployee`, data).toPromise();
        
    }

    async updateLeavePolicyEmployee(data) {
        
        return await this.ApiService.put(`${this.baseUrl}/Leave/UpdateLeavePolicyEmployee`, data).toPromise();

    }



    async DeleteLeavePolicyEmployee(id) {

        return await this.ApiService.delete(`${this.baseUrl}/Leave/DeleteLeavePolicyEmployee/${id}`).toPromise();
    }

    //   Leave Admin Methods

    /** CRUD METHODS LEAVE REQUEST*/
    async getAllleaverequest() {
        return await this.ApiService.get(`${this.baseUrl}/Leave/GetLeaveRequests`).toPromise();

    }


    // DEMO ONLY, you can find working methods below
    async addLeaveRequest(data) {
        return await this.ApiService.post(`${this.baseUrl}/Leave/AddLeaveRequest`, data).toPromise();
    }

    async updateLeaveRequest(data) {

        let leaverqst = await this.getdataToUpdate(data.key, 'GetLeaveRequest');
        leaverqst = { ...leaverqst, ...data.data } 
        return await this.ApiService.put(`${this.baseUrl}/Leave/UpdateLeaveRequest`, leaverqst).toPromise();
    }



    async DeleteLeaveRequest(leaverequestId) {
        return await this.ApiService.delete(`${this.baseUrl}/Leave/DeleteLeaveRequest/${leaverequestId}`).toPromise();
    }


    /** CRUD METHODS LEAVE REQUEST*/
    async getLeaveRequestDetails() {
       return await this.ApiService.get(`${this.baseUrl}/Leave/GetLeaveRequestDetails`).toPromise();
    }


    // DEMO ONLY, you can find working methods below
    async addLeaveRequestDetail(data) {
        return await this.ApiService.post(`${this.baseUrl}/Leave/AddLeaveRequestDetail`, data).toPromise();
    }

    async updateLeaveRequestDetail(data) {
        let leaverqst = await this.getdataToUpdate(data.key, 'Getleaverequestdetail');
        leaverqst = { ...leaverqst, ...data.data }
        return await this.ApiService.put(`${this.baseUrl}/Leave/Updateleaverequestdetail`, leaverqst).toPromise();

    }
 
    async DeleteLeaveRequestDetail(leaverequestdetailId) {
        return await this.ApiService.delete(`${this.baseUrl}/Leave/Deleteleaverequestdetail/${leaverequestdetailId}`).toPromise();
    }

    /** CRUD METHODS */
    async getLeaveApprovals() {

        return await this.ApiService.get(`${this.baseUrl}/Leave/GetLeaveApprovals`).toPromise();
    }


    // DEMO ONLY, you can find working methods below
    async addLeaveApproval(data) {
 
        return await this.ApiService.post(`${this.baseUrl}/Leave/AddLeaveApproval`, data).toPromise();
    }

    async updateLeaveApproval(data) {

        let leaveapproval = await this.getdataToUpdate(data.key, 'Leave/GetLeaveApproval');
        leaveapproval = { ...leaveapproval, ...data.data }
        return await this.ApiService.put(`${this.baseUrl}/Leave/UpdateLeaveApproval`, leaveapproval).toPromise();

    }

    async DeleteLeaveAapproval(leaveapprovalId) {
 
        return await this.ApiService.delete(`${this.baseUrl}/Leave/DeleteLeaveApproval/${leaveapprovalId}`).toPromise();
    }

    /** CRUD METHODS */
    async getleaveclosings() {
 
        return await this.ApiService.get(`${this.baseUrl}/Leave/GetLeaveClosings`).toPromise();
    }


    // DEMO ONLY, you can find working methods below
    async addleaveclosing(data) {
 
        return await this.ApiService.post(`${this.baseUrl}/Leave/AddLeaveClosing`, data).toPromise();
    }

    async updateleaveclosing(data) {

        let leaveclosing = await this.getdataToUpdate(data.key, 'Leave/GetLeaveClosing');
        leaveclosing = { ...leaveclosing, ...data.data }
         return await this.ApiService.put(`${this.baseUrl}/Leave/UpdateLeaveClosing`, leaveclosing).toPromise();

    }

    async Deleteleaveclosing(leaveclosingId) {
        return await this.ApiService.delete(`${this.baseUrl}/Leave/DeleteLeaveClosing/${leaveclosingId}`).toPromise();
    }
}
