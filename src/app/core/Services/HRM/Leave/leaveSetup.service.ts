import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ApiService } from '../../api.service';

@Injectable()
export class LeaveSetupService {
    public leaveyear;
    public leavepurpose;
    public leavepolicy;
    public uploadleave;
    public leavedaytype;
    public leaveeligibility;
    public leaveemppolicy;
    public leavetype = [];
    public leaveapprover;
    //private baseUrl: string = "http://localhost:58090/api/LeaveSetup";
    private baseUrl: string = "SystemAdmin/api/LeaveSetup";
    public proratematrix;
    public decimalroundingmatrix;
    public leavesubtype;
    public leavetypebalance;

    constructor(private ApiService: ApiService) { }

    
    /** Leave Policy CRUD METHODS */
    async getAllleavepolicy() {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

        return await this.ApiService.get(`${this.baseUrl}/GetLeavePolicies`).toPromise();
        // console.log(this.leavepolicy);
        // return this.leavepolicy;
    }

    async getdataToUpdate(leavesId, leavesUrl) {
        return await this.ApiService.get(`${this.baseUrl}/${leavesUrl}/${leavesId}`).toPromise();
    }


    // DEMO ONLY, you can find working methods below
    async addleavepolicy(data) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        let newleavepolicy = await this.ApiService.post(`${this.baseUrl}/AddLeavePolicy`, data).toPromise();
        console.log(newleavepolicy);

    }

    async updateleavepolicy(data) {   
        let headers = {headers: {'Content-Type':'application/json'}}
        return await this.ApiService.put(`${this.baseUrl}/UpdateLeavePolicy`, data).toPromise();
    }



    async Deleteleavpolicy(leavpolicyId) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
        return await this.ApiService.delete(`${this.baseUrl}/DeleteLeavePolicy/${leavpolicyId}`).toPromise();
    }


    /** Leave Purpose CRUD METHODS */
    async getleavepurpose() {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

        this.leavepurpose = await this.ApiService.get(`${this.baseUrl}/GetLeavePurposes`).toPromise();
        console.log(this.leavepurpose);
        return this.leavepurpose;
    }


    // DEMO ONLY, you can find working methods below
    async addleavepurpose(data) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        let newleavepurpose = await this.ApiService.post(`${this.baseUrl}/AddLeavePurpose`, data).toPromise();
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
        return await this.ApiService.put(`${this.baseUrl}/UpdateLeavePurpose`, leavpurpose).toPromise();

    }


    async Deleteleavpurpose(leavpurposeId) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
        return await this.ApiService.delete(`${this.baseUrl}/DeleteLeavePurpose/${leavpurposeId}`).toPromise();
    }

    /** CRUD METHODS */
    async getAllleaveyear() {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

        this.leaveyear = await this.ApiService.get(`${this.baseUrl}/GetLeaveYears`).toPromise();
        console.log(this.leaveyear);
        return this.leaveyear;
    }


    // DEMO ONLY, you can find working methods below
    async addleaveyear(data) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        let newleaveyear = await this.ApiService.post(`${this.baseUrl}/AddLeaveYear`, data).toPromise();
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
        return await this.ApiService.put(`${this.baseUrl}/UpdateLeaveYear`, leavyear).toPromise();

    }
 
    async Deleteleavyear(leavyearId) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
        return await this.ApiService.delete(`${this.baseUrl}/DeleteLeaveYear/${leavyearId}`).toPromise();
    }


    /** CRUD METHODS */
    async getleaveapprover() {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

        this.leaveapprover = await this.ApiService.get(`${this.baseUrl}/GetLeaveApprovers`).toPromise();
        console.log(this.leaveapprover);
        return this.leaveapprover;
    }


    // DEMO ONLY, you can find working methods below
    async addleaveapprover(data) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        let newleaveapprover = await this.ApiService.post(`${this.baseUrl}/AddLeaveApprover`, data).toPromise();
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
        return await this.ApiService.put(`${this.baseUrl}/UpdateLeaveApprover`, leaveapprover).toPromise();

    }



    async Deleteleaveapprover(leaveapproverId) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
        return await this.ApiService.delete(`${this.baseUrl}/DeleteLeaveApprover/${leaveapproverId}`).toPromise();
    }


    /** CRUD METHODS */
    async getAllleavedaytype() {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

        this.leavedaytype = await this.ApiService.get(`${this.baseUrl}/GetLeaveDayTypes`).toPromise();
        console.log(this.leavedaytype);
        return this.leavedaytype;
    }


    // DEMO ONLY, you can find working methods below
    async addleavedaytype(data) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        let newleavedaytype = await this.ApiService.post(`${this.baseUrl}/AddLeaveDayType`, data).toPromise();
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
        return await this.ApiService.put(`${this.baseUrl}/UpdateLeaveDayType`, leavedaytype).toPromise();

    }



    async Deleteleavedaytype(leavedaytypeId) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
        return await this.ApiService.delete(`${this.baseUrl}/DeleteLeaveDayType/${leavedaytypeId}`).toPromise();
    }

    /** CRUD METHODS */
    async getAllleaveeligibility() {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

        this.leaveeligibility = await this.ApiService.get(`${this.baseUrl}/GetLeaveEligibilities`).toPromise();
        console.log(this.leaveeligibility);
        return this.leaveeligibility;
    }


    // DEMO ONLY, you can find working methods below
    async addleaveeligibility(data) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        let newleaveeligibility = await this.ApiService.post(`${this.baseUrl}/AddLeaveEligibility`, data).toPromise();
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
        return await this.ApiService.put(`${this.baseUrl}/UpdateLeaveEligibility`, leaveeligibility).toPromise();

    }



    async Deleteleaveeligibility(leaveeligibilityId) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
        return await this.ApiService.delete(`${this.baseUrl}/DeleteLeaveEligibility/${leaveeligibilityId}`).toPromise();
    }

    /** CRUD METHODS */
    async getAllleaveemppolicy() {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

        this.leaveemppolicy = await this.ApiService.get(`${this.baseUrl}/GetLeavePolicyEmployees`).toPromise();
        console.log(this.leaveemppolicy);
        return this.leaveemppolicy;
    }


    // DEMO ONLY, you can find working methods below
    async addleaveemppolicy(data) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        let newleaveemppolicy = await this.ApiService.post(`${this.baseUrl}/AddLeavePolicyEmployee`, data).toPromise();
        console.log(newleaveemppolicy);

    }

    async updateleaveemppolicy(data) { 
        let authToken = localStorage.getItem('auth_token');  
        let headers = {headers: {'Content-Type':'application/json'}}
        return await this.ApiService.put(`${this.baseUrl}/UpdateLeavePolicyEmployee`, data).toPromise();

    }
 
    async Deleteleaveemppolicy(leaveemppolicyId) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
        return await this.ApiService.delete(`${this.baseUrl}/DeleteLeavePolicyEmployee/${leaveemppolicyId}`).toPromise();
    }

    /** CRUD METHODS */
    async getAllleavetype() {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

        let leaveTypes : any = await this.ApiService.get(`${this.baseUrl}/GetLeaveTypes`).toPromise();
        leaveTypes.forEach(element => {
            this.leavetype.push(element)
        });
        console.log(this.leavetype);
        return this.leavetype;
    }


    // DEMO ONLY, you can find working methods below
    async addleavetype(data) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        let newleavetype = await this.ApiService.post(`${this.baseUrl}/AddLeaveType`, data).toPromise();
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
        return await this.ApiService.put(`${this.baseUrl}/UpdateLeaveType`, leavetype).toPromise();

    }



    async Deleteleavetype(leaveTypeId) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
        return await this.ApiService.delete(`${this.baseUrl}/DeleteLeaveType/${leaveTypeId}`).toPromise();
    }




    /** CRUD METHODS */
    async getAllleavetypebalance() {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

        this.leavetypebalance = await this.ApiService.get(`${this.baseUrl}/GetLeaveTypeBalances`).toPromise();
        console.log(this.leavetypebalance);
        return this.leavetypebalance;
    }


    // DEMO ONLY, you can find working methods below
    async addleavetypebalance(data) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        let newleavetypebalance = await this.ApiService.post(`${this.baseUrl}/AddLeaveTypeBalance`, data).toPromise();
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
        return await this.ApiService.put(`${this.baseUrl}/UpdateLeaveTypeBalance`, leavetypebalance).toPromise();

    }



    async Deleteleavetypebalance(leavetypebalanceId) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
        return await this.ApiService.delete(`${this.baseUrl}/DeleteLeaveTypeBalance/${leavetypebalanceId}`).toPromise();
    }


    /** CRUD METHODS */
    async getdecimalroundingmatrix() {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

        this.decimalroundingmatrix = await this.ApiService.get(`${this.baseUrl}/GetDecimalRoundingMatrixs`).toPromise();
        console.log(this.decimalroundingmatrix);
        return this.decimalroundingmatrix;
    }


    // DEMO ONLY, you can find working methods below
    async addroundingmatrix(data) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        let newdecimalmatrix = await this.ApiService.post(`${this.baseUrl}/AddDecimalRoundingMatrix`, data).toPromise();
        console.log(newdecimalmatrix);

    }

    async updatedecimalroundingmatrix(data) {
        return await this.ApiService.put(`${this.baseUrl}/UpdateDecimalRoundingMatrix`, data).toPromise();

    }

    async Deletedecimalroundingmatrix(prrateId) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
        return await this.ApiService.delete(`${this.baseUrl}/DeleteDecimalRoundingMatrix/${prrateId}`).toPromise();
    }



    /** CRUD METHODS */
    async getproratematrix() {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

        this.proratematrix = await this.ApiService.get(`${this.baseUrl}/GetProrateMatrixs`).toPromise();
        console.log(this.proratematrix);
        return this.proratematrix;
    }


    // DEMO ONLY, you can find working methods below
    async addproratematrix(data) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        let newprmatrix = await this.ApiService.post(`${this.baseUrl}/AddProrateMatrix`, data).toPromise();
        console.log(newprmatrix);

    }

    async updateproratematrix(data) {
        return await this.ApiService.put(`${this.baseUrl}/UpdateProrateMatrix`, data).toPromise();
    }

    async Deleteproratematrix(prrateId) {
        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
        return await this.ApiService.delete(`${this.baseUrl}/DeleteProrateMatrix/${prrateId}`).toPromise();
    }


    /** CRUD METHODS */
    async getleavesubtype() {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

        this.leavesubtype = await this.ApiService.get(`${this.baseUrl}/GetLeaveSubTypes`).toPromise();
        console.log(this.leavesubtype);
        return this.leavesubtype;
    }


    // DEMO ONLY, you can find working methods below
    async addleavesubtype(data) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        let newprmatrix = await this.ApiService.post(`${this.baseUrl}/AddLeaveSubType`, data).toPromise();
        console.log(newprmatrix);

    }

    async updateleavesubtype(data) {
        let subtype = await this.getdataToUpdate(data.key, 'GetLeaveSubType');
        subtype = { ...subtype, ...data.data }
        console.log(subtype);
        return await this.ApiService.put(`${this.baseUrl}/UpdateLeaveSubType`, subtype).toPromise();

    }

    async Deleteleavesubtype(id) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
        return await this.ApiService.delete(`${this.baseUrl}/DeleteLeaveSubType/${id}`).toPromise();
    }

}

