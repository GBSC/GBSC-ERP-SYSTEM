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
    public leaveapproval;
    private baseUrl: string = "http://localhost:58090/api/HrSetup";

    constructor(private httpClient: HttpClient) { }


    /** CRUD METHODS */
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


    /** CRUD METHODS */
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
        return await this.httpClient.delete(`${this.baseUrl}/DeleteLeaveYear/${leavyearId}`,headers).toPromise();
    }


        /** CRUD METHODS */
        async getAllleaveapproval() {

            let authToken = localStorage.getItem('auth_token');
            let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
    
            this.leaveapproval = await this.httpClient.get(`${this.baseUrl}/GetLeaveApprovals`).toPromise();
            console.log(this.leaveapproval);
            return this.leaveapproval;
        }
    
    
        // DEMO ONLY, you can find working methods below
        async addleaveapproval(data) {
    
            let authToken = localStorage.getItem('auth_token');
            let headers = { headers: { 'Content-Type': 'application/json' } }
            let newleaveapproval = await this.httpClient.post(`${this.baseUrl}/AddLeaveApproval`, data, headers).toPromise();
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
            return await this.httpClient.put(`${this.baseUrl}/UpdateLeaveApproval`, leaveapproval).toPromise();
    
        }
    
    
    
        async Deleteleaveapproval(leaveapprovalId) {
    
            let authToken = localStorage.getItem('auth_token');
            let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
            return await this.httpClient.delete(`${this.baseUrl}/DeleteLeaveApproval/${leaveapprovalId}`).toPromise();
        }


                   /** CRUD METHODS */
                   async getAllleavedaytype() {

                    let authToken = localStorage.getItem('auth_token');
                    let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
            
                    this. leavedaytype = await this.httpClient.get(`${this.baseUrl}/GetLeaveDayTypes`).toPromise();
                    console.log(this. leavedaytype);
                    return this. leavedaytype;
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
            
                    let  leavedaytype = await this.getdataToUpdate(data.key, 'Get leavedaytype');
                     leavedaytype = { ... leavedaytype, ...data.data }
                    console.log( leavedaytype);
                    // let authToken = localStorage.getItem('auth_token');  
                    // let headers = {headers: {'Content-Type':'application/json'}}
                    return await this.httpClient.put(`${this.baseUrl}/UpdateLeaveDayType`,  leavedaytype).toPromise();
            
                }
            
            
            
                async Deleteleavedaytype( leavedaytypeId) {
            
                    let authToken = localStorage.getItem('auth_token');
                    let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
                    return await this.httpClient.delete(`${this.baseUrl}/DeleteLeaveDayType/${ leavedaytypeId}`).toPromise();
                }

                                   /** CRUD METHODS */
                                   async getAllleaveeligibility() {

                                    let authToken = localStorage.getItem('auth_token');
                                    let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
                            
                                    this. leaveeligibility = await this.httpClient.get(`${this.baseUrl}/GetLeaveEligiblities`).toPromise();
                                    console.log(this. leaveeligibility);
                                    return this. leaveeligibility;
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
                            
                                    let  leaveeligibility = await this.getdataToUpdate(data.key, 'GetLeaveeligibility');
                                     leaveeligibility = { ... leaveeligibility, ...data.data }
                                    console.log(leaveeligibility);
                                    // let authToken = localStorage.getItem('auth_token');  
                                    // let headers = {headers: {'Content-Type':'application/json'}}
                                    return await this.httpClient.put(`${this.baseUrl}/UpdateLeaveEligibility`, leaveeligibility).toPromise();
                            
                                }
                            
                            
                            
                                async Deleteleaveeligibility( leaveeligibilityId) {
                            
                                    let authToken = localStorage.getItem('auth_token');
                                    let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
                                    return await this.httpClient.delete(`${this.baseUrl}/DeleteLeaveEligibility/${ leaveeligibilityId}`).toPromise();
                                }

                                                   /** CRUD METHODS */
                   async getAllleaveemppolicy() {

                    let authToken = localStorage.getItem('auth_token');
                    let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
            
                    this. leaveemppolicy = await this.httpClient.get(`${this.baseUrl}/GetLeavePolicyEmployees`).toPromise();
                    console.log(this. leaveemppolicy);
                    return this. leaveemppolicy;
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
            
                    let  leaveemppolicy = await this.getdataToUpdate(data.key, 'GetLeaveEmpPolicy');
                     leaveemppolicy = { ... leaveemppolicy, ...data.data }
                    console.log( leaveemppolicy);
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
                            
                                    this. leavetype = await this.httpClient.get(`${this.baseUrl}/GetLeaveTypes`).toPromise();
                                    console.log(this. leavetype);
                                    return this. leavetype;
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
                            
                                    let  leavetype = await this.getdataToUpdate(data.key, 'GetLeaveType');
                                     leavetype = { ... leavetype, ...data.data }
                                    console.log(leavetype);
                                    // let authToken = localStorage.getItem('auth_token');  
                                    // let headers = {headers: {'Content-Type':'application/json'}}
                                    return await this.httpClient.put(`${this.baseUrl}/UpdateLeaveType`, leavetype).toPromise();
                            
                                }
                            
                            
                            
                                async Deleteleavetype(leavetypeId) {
                            
                                    let authToken = localStorage.getItem('auth_token');
                                    let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
                                    return await this.httpClient.delete(`${this.baseUrl}/DeleteLeaveType/${leavetypeId}`).toPromise();
                                }
}

