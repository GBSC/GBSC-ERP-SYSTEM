import { Injectable } from '@angular/core';
import { ApiService } from '../../api.service';

@Injectable()
export class LeaveService {

<<<<<<< HEAD
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

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
        this.leaveopening = await this.ApiService.get(`${this.baseUrl}/Leave/GetLeaveOpenings`).toPromise();
        console.log(this.leaveopening);
        return this.leaveopening;
=======
    private baseUrl: string = "SystemAdmin/api";

    constructor(private ApiService: ApiService) { }

    async getLeaveOpening() {

        return await this.ApiService.get(`${this.baseUrl}/Leave/GetLeaveOpenings`).toPromise();
>>>>>>> master
    }

    async getdataToUpdate(leaveId, leaveUrl) {
        return await this.ApiService.get(`${this.baseUrl}/${leaveUrl}/${leaveId}`).toPromise();
    }

    async addLeaveOpening(data) {

        return await this.ApiService.post(`${this.baseUrl}/Leave/AddLeaveOpening`, data).toPromise();
    }

    async updateLeaveOpening(data) {

        let leaveopen = await this.getdataToUpdate(data.key, 'GetLeaveOpening');
        leaveopen = { ...leaveopen, ...data.data }
        return await this.ApiService.put(`${this.baseUrl}/Leave/UpdateLeaveOpening`, leaveopen).toPromise();

    }

<<<<<<< HEAD


    async DeleteLeaveopening(leaveOpeningId) {
=======
    async deleteLeaveOpening(leaveOpeningId) {
>>>>>>> master

        return await this.ApiService.delete(`${this.baseUrl}/Leave/DeleteLeaveOpening/${leaveOpeningId}`).toPromise();
    }


    async getLeaveOpeningDetail() {

        return await this.ApiService.get(`${this.baseUrl}/Leave/GetLeaveOpeningDetails`).toPromise();
    }

<<<<<<< HEAD
    async addLeaveopeningdetail(data) {

        // let authToken = localStorage.getItem('auth_token');
        // let headers = { headers: { 'Content-Type': 'application/json' } }
        let newleaveopen = await this.ApiService.post(`${this.baseUrl}/Leave/AddLeaveOpeningDetail`, data).toPromise();

=======
    async addLeaveOpeningDetail(data) {
>>>>>>> master

        return await this.ApiService.post(`${this.baseUrl}/Leave/AddLeaveOpeningDetail`, data).toPromise();
    }

    async updateLeaveOpeningDetail(data) {

        let levopendetail = await this.getdataToUpdate(data.key, 'GetleaveOpendetail');
        levopendetail = { ...levopendetail, ...data.data }
        return await this.ApiService.put(`${this.baseUrl}/Leave/UpdateLeaveOpeningDetail`, levopendetail).toPromise();

    }
<<<<<<< HEAD

    async DeleteLeaveopeningdetail(leaveOpeningdetailId) {
=======
>>>>>>> master

    async DeleteLeaveOpeningDetail(leaveOpeningdetailId) {
        return await this.ApiService.delete(`${this.baseUrl}/Leave/DeleteLeaveOpeningDetail/${leaveOpeningdetailId}`).toPromise();
    }

<<<<<<< HEAD
    /** CRUD METHODS LEAVE REQUEST*/
    async getleavepolicyemployee() {
=======
>>>>>>> master

    async getLeavePolicyEmployee() {
        return await this.ApiService.get(`${this.baseUrl}/Leave/GetLeavePolicyEmployees`).toPromise();
    }

    async addLeavePolicyEmployee(data) {

        return await this.ApiService.post(`${this.baseUrl}/Leave/AddLeavePolicyEmployee`, data).toPromise();

    }

    async updateLeavePolicyEmployee(data) {

        return await this.ApiService.put(`${this.baseUrl}/Leave/UpdateLeavePolicyEmployee`, data).toPromise();

    }

    async DeleteLeavePolicyEmployee(id) {

        return await this.ApiService.delete(`${this.baseUrl}/Leave/DeleteLeavePolicyEmployee/${id}`).toPromise();
    }

<<<<<<< HEAD
    //   Leave Admin Methods

    /** CRUD METHODS LEAVE REQUEST*/
=======
>>>>>>> master
    async getAllleaverequest() {
        return await this.ApiService.get(`${this.baseUrl}/Leave/GetLeaveRequests`).toPromise();
<<<<<<< HEAD

    }


    // DEMO ONLY, you can find working methods below
    async addleaverequest(data) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        this.newleaverequest = await this.ApiService.post(`${this.baseUrl}/Leave/AddLeaveRequest`, data).toPromise();
        console.log(this.newleaverequest);
        return this.newleaverequest;
=======
>>>>>>> master

    }

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

    async getLeaveRequestDetails() {
        return await this.ApiService.get(`${this.baseUrl}/Leave/GetLeaveRequestDetails`).toPromise();
    }


<<<<<<< HEAD
    // DEMO ONLY, you can find working methods below
    async addleaverequestdetail(data) {

        console.log(data);
        // let authToken = localStorage.getItem('auth_token');
        // let headers = { headers: { 'Content-Type': 'application/json' } }
        let newleaverequestdetail = await this.ApiService.post(`${this.baseUrl}/Leave/AddLeaveRequestDetail`, data).toPromise();
=======
>>>>>>> master

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

<<<<<<< HEAD
    /** CRUD METHODS */
    async getleaveapprovals() {
=======
>>>>>>> master

    async getLeaveApprovals() {

        return await this.ApiService.get(`${this.baseUrl}/Leave/GetLeaveApprovals`).toPromise();
    }

    async addLeaveApproval(data) {

        return await this.ApiService.post(`${this.baseUrl}/Leave/AddLeaveApproval`, data).toPromise();
    }

    async updateLeaveApproval(data) {

        let leaveapproval = await this.getdataToUpdate(data.key, 'Leave/GetLeaveApproval');
        leaveapproval = { ...leaveapproval, ...data.data }
        return await this.ApiService.put(`${this.baseUrl}/Leave/UpdateLeaveApproval`, leaveapproval).toPromise();

    }
<<<<<<< HEAD

    async Deleteleaveapproval(leaveapprovalId) {
=======
>>>>>>> master

    async DeleteLeaveAapproval(leaveapprovalId) {

        return await this.ApiService.delete(`${this.baseUrl}/Leave/DeleteLeaveApproval/${leaveapprovalId}`).toPromise();
    }

<<<<<<< HEAD
    /** CRUD METHODS */
    async getleaveclosings() {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

        this.leaveclosing = await this.ApiService.get(`${this.baseUrl}/Leave/GetLeaveClosings`).toPromise();
        console.log(this.leaveclosing);
        return this.leaveclosing;
    }


    // DEMO ONLY, you can find working methods below
    async addleaveclosing(data) {

        let authToken = localStorage.getItem('auth_token');
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
        // let authToken = localStorage.getItem('auth_token');  
        // let headers = {headers: {'Content-Type':'application/json'}}
        return await this.ApiService.put(`${this.baseUrl}/Leave/UpdateLeaveClosing`, leaveclosing).toPromise();

    }

    async Deleteleaveclosing(leaveclosingId) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
=======
    async getLeaveClosings() {

        return await this.ApiService.get(`${this.baseUrl}/Leave/GetLeaveClosings`).toPromise();
    }

    async addLeaveClosing(data) {
        return await this.ApiService.post(`${this.baseUrl}/Leave/AddLeaveClosing`, data).toPromise();
    }

    async updateLeaveClosing(data) {

        let leaveclosing = await this.getdataToUpdate(data.key, 'Leave/GetLeaveClosing');
        leaveclosing = { ...leaveclosing, ...data.data }
        return await this.ApiService.put(`${this.baseUrl}/Leave/UpdateLeaveClosing`, leaveclosing).toPromise();
    }

    async DeleteLeaveClosing(leaveclosingId) {
>>>>>>> master
        return await this.ApiService.delete(`${this.baseUrl}/Leave/DeleteLeaveClosing/${leaveclosingId}`).toPromise();
    }
}
