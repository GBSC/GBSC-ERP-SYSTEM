import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class LeaveSetupService {
    public leaveyear;
    public leavepurpose;
    public leavepolicy;
    public uploadleave;
    public leavedaytype;
    public leaveeligibility;
    public leaveemppolicy;
    public leavetype;
    public leaveapprover;
    private baseUrl: string = "http://localhost:58090/api/Leavesetup";
    // private baseUrl: string = "http://gbsc-erp.azurewebsites.net/SystemAdmin/api/LeaveSetup";
    public proratematrix;
    public decimalroundingmatrix;
    public leavesubtype;
    public leavetypebalance;

    constructor(private httpClient: HttpClient) { }


    /** Leave Policy CRUD METHODS */
    async getAllleavepolicy() {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

        this.leavepolicy = await this.httpClient.get(`${this.baseUrl}/GetLeavePolicies`).toPromise();
        console.log(this.leavepolicy);
        return this.leavepolicy;
    }

    async getdataToUpdate(leavesId, leavesUrl) {
        return await this.httpClient.get(`${this.baseUrl}/${leavesUrl}/${leavesId}`).toPromise();
    }


    // DEMO ONLY, you can find working methods below
    async addleavepolicy(data) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        let newleavepolicy = await this.httpClient.post(`${this.baseUrl}/AddLeavePolicy`, data, headers).toPromise();
        console.log(newleavepolicy);

    }

    async updateleavepolicy(data) {

        console.log(data.key);
        console.log(data);

        let leavpolicy = await this.getdataToUpdate(data.key, 'GetLeavePolicy');
        leavpolicy = { ...leavpolicy, ...data.data }
        console.log(leavpolicy);
        // let authToken = localStorage.getItem('auth_token');  
        // let headers = {headers: {'Content-Type':'application/json'}}
        return await this.httpClient.put(`${this.baseUrl}/UpdateLeavePolicy`, leavpolicy).toPromise();

    }



    async Deleteleavpolicy(leavpolicyId) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
        return await this.httpClient.delete(`${this.baseUrl}/DeleteLeavePolicy/${leavpolicyId}`).toPromise();
    }


    /** Leave Purpose CRUD METHODS */
    async getleavepurpose() {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

        this.leavepurpose = await this.httpClient.get(`${this.baseUrl}/GetLeavePurposes`).toPromise();
        console.log(this.leavepurpose);
        return this.leavepurpose;
    }


    // DEMO ONLY, you can find working methods below
    async addleavepurpose(data) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        let newleavepurpose = await this.httpClient.post(`${this.baseUrl}/AddLeavePurpose`, data, headers).toPromise();
        console.log(newleavepurpose);

    }

    async updatepurpose(data) {

        console.log(data.key);
        console.log(data);

        let leavpurpose = await this.getdataToUpdate(data.key, 'GetLeavePurpose');
        leavpurpose = { ...leavpurpose, ...data.data }
        console.log(leavpurpose);
        // let authToken = localStorage.getItem('auth_token');  
        // let headers = {headers: {'Content-Type':'application/json'}}
        return await this.httpClient.put(`${this.baseUrl}/UpdateLeavePurpose`, leavpurpose).toPromise();

    }


    async Deleteleavpurpose(leavpurposeId) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
        return await this.httpClient.delete(`${this.baseUrl}/DeleteLeavePurpose/${leavpurposeId}`).toPromise();
    }

    /** CRUD METHODS */
    async getAllleaveyear() {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

        this.leaveyear = await this.httpClient.get(`${this.baseUrl}/GetLeaveYears`).toPromise();
        console.log(this.leaveyear);
        return this.leaveyear;
    }


    // DEMO ONLY, you can find working methods below
    async addleaveyear(data) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        let newleaveyear = await this.httpClient.post(`${this.baseUrl}/AddLeaveYear`, data, headers).toPromise();
        console.log(newleaveyear);

    }

    async updateleaveyear(data) {

        console.log(data.key);
        console.log(data);

        let leavyear = await this.getdataToUpdate(data.key, 'GetLeaveYear');
        leavyear = { ...leavyear, ...data.data }
        console.log(leavyear);
        // let authToken = localStorage.getItem('auth_token');  
        // let headers = {headers: {'Content-Type':'application/json'}}
        return await this.httpClient.put(`${this.baseUrl}/UpdateLeaveYear`, leavyear).toPromise();

    }



    async Deleteleavyear(leavyearId) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
        return await this.httpClient.delete(`${this.baseUrl}/DeleteLeaveYear/${leavyearId}`, headers).toPromise();
    }


    /** CRUD METHODS */
    async getAllleaveapprover() {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

        this.leaveapprover = await this.httpClient.get(`${this.baseUrl}/GetLeaveApprovers`).toPromise();
        console.log(this.leaveapprover);
        return this.leaveapprover;
    }


    // DEMO ONLY, you can find working methods below
    async addleaveapprover(data) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        let newleaveapprover = await this.httpClient.post(`${this.baseUrl}/AddLeaveApprover`, data, headers).toPromise();
        console.log(newleaveapprover);

    }

    async updateleaveapprover(data) {

        console.log(data.key);
        console.log(data);

        let leaveapprover = await this.getdataToUpdate(data.key, 'GetLeaveApprover');
        leaveapprover = { ...leaveapprover, ...data.data }
        console.log(leaveapprover);
        // let authToken = localStorage.getItem('auth_token');  
        // let headers = {headers: {'Content-Type':'application/json'}}
        return await this.httpClient.put(`${this.baseUrl}/UpdateLeaveApprover`, leaveapprover).toPromise();

    }



    async Deleteleaveapprover(leaveapproverId) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
        return await this.httpClient.delete(`${this.baseUrl}/DeleteLeaveApprover/${leaveapproverId}`).toPromise();
    }


    /** CRUD METHODS */
    async getAllleavedaytype() {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

        this.leavedaytype = await this.httpClient.get(`${this.baseUrl}/GetLeaveDayTypes`).toPromise();
        console.log(this.leavedaytype);
        return this.leavedaytype;
    }


    // DEMO ONLY, you can find working methods below
    async addleavedaytype(data) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        let newleavedaytype = await this.httpClient.post(`${this.baseUrl}/AddLeaveDayType`, data, headers).toPromise();
        console.log(newleavedaytype);

    }

    async updateleavedaytype(data) {

        console.log(data.key);
        console.log(data);

        let leavedaytype = await this.getdataToUpdate(data.key, 'Getleavedaytype');
        leavedaytype = { ...leavedaytype, ...data.data }
        console.log(leavedaytype);
        // let authToken = localStorage.getItem('auth_token');  
        // let headers = {headers: {'Content-Type':'application/json'}}
        return await this.httpClient.put(`${this.baseUrl}/UpdateLeaveDayType`, leavedaytype).toPromise();

    }



    async Deleteleavedaytype(leavedaytypeId) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
        return await this.httpClient.delete(`${this.baseUrl}/DeleteLeaveDayType/${leavedaytypeId}`).toPromise();
    }

    /** CRUD METHODS */
    async getAllleaveeligibility() {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

        this.leaveeligibility = await this.httpClient.get(`${this.baseUrl}/GetLeaveEligibilities`).toPromise();
        console.log(this.leaveeligibility);
        return this.leaveeligibility;
    }


    // DEMO ONLY, you can find working methods below
    async addleaveeligibility(data) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        let newleaveeligibility = await this.httpClient.post(`${this.baseUrl}/AddLeaveEligibility`, data, headers).toPromise();
        console.log(newleaveeligibility);

    }

    async updateleaveeligibility(data) {
        console.log(data.key);
        console.log(data);

        let leaveeligibility = await this.getdataToUpdate(data.key, 'GetLeaveeligibility');
        leaveeligibility = { ...leaveeligibility, ...data.data }
        console.log(leaveeligibility);
        // let authToken = localStorage.getItem('auth_token');  
        // let headers = {headers: {'Content-Type':'application/json'}}
        return await this.httpClient.put(`${this.baseUrl}/UpdateLeaveEligibility`, leaveeligibility).toPromise();

    }



    async Deleteleaveeligibility(leaveeligibilityId) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
        return await this.httpClient.delete(`${this.baseUrl}/DeleteLeaveEligibility/${leaveeligibilityId}`).toPromise();
    }

    /** CRUD METHODS */
    async getAllleaveemppolicy() {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

        this.leaveemppolicy = await this.httpClient.get(`${this.baseUrl}/GetLeavePolicyEmployees`).toPromise();
        console.log(this.leaveemppolicy);
        return this.leaveemppolicy;
    }


    // DEMO ONLY, you can find working methods below
    async addleaveemppolicy(data) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        let newleaveemppolicy = await this.httpClient.post(`${this.baseUrl}/AddLeavePolicyEmployee`, data, headers).toPromise();
        console.log(newleaveemppolicy);

    }

    async updateleaveemppolicy(data) {

        console.log(data.key);
        console.log(data);

        let leaveemppolicy = await this.getdataToUpdate(data.key, 'GetLeaveEmpPolicy');
        leaveemppolicy = { ...leaveemppolicy, ...data.data }
        console.log(leaveemppolicy);
        // let authToken = localStorage.getItem('auth_token');  
        // let headers = {headers: {'Content-Type':'application/json'}}
        return await this.httpClient.put(`${this.baseUrl}/UpdateLeavePolicyEmployee`, leaveemppolicy).toPromise();

    }



    async Deleteleaveemppolicy(leaveemppolicyId) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
        return await this.httpClient.delete(`${this.baseUrl}/DeleteLeavePolicyEmployee/${leaveemppolicyId}`).toPromise();
    }

    /** CRUD METHODS */
    async getAllleavetype() {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

        this.leavetype = await this.httpClient.get(`${this.baseUrl}/GetLeaveTypes`).toPromise();
        console.log(this.leavetype);
        return this.leavetype;
    }


    // DEMO ONLY, you can find working methods below
    async addleavetype(data) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        let newleavetype = await this.httpClient.post(`${this.baseUrl}/AddLeaveType`, data, headers).toPromise();
        console.log(newleavetype);

    }

    async updateleavetype(data) {

        console.log(data.key);
        console.log(data);

        let leavetype = await this.getdataToUpdate(data.key, 'GetLeaveType');
        leavetype = { ...leavetype, ...data.data }
        console.log(leavetype);
        // let authToken = localStorage.getItem('auth_token');  
        // let headers = {headers: {'Content-Type':'application/json'}}
        return await this.httpClient.put(`${this.baseUrl}/UpdateLeaveType`, leavetype).toPromise();

    }



    async Deleteleavetype(leaveTypeId) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
        return await this.httpClient.delete(`${this.baseUrl}/DeleteLeaveType/${leaveTypeId}`).toPromise();
    }




    /** CRUD METHODS */
    async getAllleavetypebalance() {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

        this.leavetypebalance = await this.httpClient.get(`${this.baseUrl}/GetLeaveTypeBalances`).toPromise();
        console.log(this.leavetypebalance);
        return this.leavetypebalance;
    }


    // DEMO ONLY, you can find working methods below
    async addleavetypebalance(data) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        let newleavetypebalance = await this.httpClient.post(`${this.baseUrl}/AddLeaveTypeBalance`, data, headers).toPromise();
        console.log(newleavetypebalance);

    }

    async updateleavetypebalance(data) {

        console.log(data.key);
        console.log(data);

        let leavetypebalance = await this.getdataToUpdate(data.key, 'GetLeaveTypeBalance');
        leavetypebalance = { ...leavetypebalance, ...data.data }
        console.log(leavetypebalance);
        // let authToken = localStorage.getItem('auth_token');  
        // let headers = {headers: {'Content-Type':'application/json'}}
        return await this.httpClient.put(`${this.baseUrl}/UpdateLeaveTypeBalance`, leavetypebalance).toPromise();

    }



    async Deleteleavetypebalance(leavetypebalanceId) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
        return await this.httpClient.delete(`${this.baseUrl}/DeleteLeaveTypeBalance/${leavetypebalanceId}`).toPromise();
    }


    /** CRUD METHODS */
    async getdecimalroundingmatrix() {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

        this.decimalroundingmatrix = await this.httpClient.get(`${this.baseUrl}/GetDecimalRoundingMatrixs`).toPromise();
        console.log(this.decimalroundingmatrix);
        return this.decimalroundingmatrix;
    }


    // DEMO ONLY, you can find working methods below
    async adddecimalroundingmatrix(data) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        let newprmatrix = await this.httpClient.post(`${this.baseUrl}/AddDecimalRoundingMatrix`, data, headers).toPromise();
        console.log(newprmatrix);

    }

    async updatedecimalroundingmatrix(data) {
        let promatrix = await this.getdataToUpdate(data.key, 'GetdecimalroundingMatrix');
        promatrix = { ...promatrix, ...data.data }
        console.log(promatrix);
        return await this.httpClient.put(`${this.baseUrl}/UpdateDecimalRoundingMatrix`, promatrix).toPromise();

    }

    async Deletedecimalroundingmatrix(prrateId) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
        return await this.httpClient.delete(`${this.baseUrl}/DeleteDecimalRoundingMatrix/${prrateId}`).toPromise();
    }



    /** CRUD METHODS */
    async getproratematrix() {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

        this.proratematrix = await this.httpClient.get(`${this.baseUrl}/GetProrateMatrixs`).toPromise();
        console.log(this.proratematrix);
        return this.proratematrix;
    }


    // DEMO ONLY, you can find working methods below
    async addproratematrix(data) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        let newprmatrix = await this.httpClient.post(`${this.baseUrl}/AddProrateMatrix`, data, headers).toPromise();
        console.log(newprmatrix);

    }

    async updateproratematrix(data) {
        let promatrix = await this.getdataToUpdate(data.key, 'GetprorateMatrix');
        promatrix = { ...promatrix, ...data.data }
        console.log(promatrix);
        return await this.httpClient.put(`${this.baseUrl}/UpdateProrateMatrix`, promatrix).toPromise();

    }

    async Deleteproratematrix(prrateId) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
        return await this.httpClient.delete(`${this.baseUrl}/DeleteProrateMatrix/${prrateId}`).toPromise();
    }


    /** CRUD METHODS */
    async getleavesubtype() {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

        this.leavesubtype = await this.httpClient.get(`${this.baseUrl}/GetLeaveSubTypes`).toPromise();
        console.log(this.leavesubtype);
        return this.leavesubtype;
    }


    // DEMO ONLY, you can find working methods below
    async addleavesubtype(data) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        let newprmatrix = await this.httpClient.post(`${this.baseUrl}/AddLeaveSubType`, data, headers).toPromise();
        console.log(newprmatrix);

    }

    async updateleavesubtype(data) {
        let promatrix = await this.getdataToUpdate(data.key, 'Getleavesubtype');
        promatrix = { ...promatrix, ...data.data }
        console.log(promatrix);
        return await this.httpClient.put(`${this.baseUrl}/UpdateLeaveSubType`, promatrix).toPromise();

    }

    async Deleteleavesubtype(id) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
        return await this.httpClient.delete(`${this.baseUrl}/DeleteLeaveSubType/${id}`).toPromise();
    }

}

