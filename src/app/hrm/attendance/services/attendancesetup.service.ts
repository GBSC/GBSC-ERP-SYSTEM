import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AttendancesetupService {

    private baseUrl: string = "http://localhost:58090/api/AttendanceSetup";
    public asignroster;
    public attendanceflag;
    public attendancerequestapprover;
    public attendanceRequestType;
    public flagCategory;
    public flagEffecttype;
    public flagtype;
    public flagvalue;
    public roster;
    public shift;
    constructor(public httpClient: HttpClient) { }


    /** Assign Roster CRUD METHODS */
    async getasignrosters() {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

        this.asignroster = await this.httpClient.get(`${this.baseUrl}/GetAssignRosters`).toPromise();
        console.log(this.asignroster);
        return this.asignroster;
    }

    async getdataToUpdate(attendanceId, attendanceUrl) {
        return await this.httpClient.get(`${this.baseUrl}/${attendanceId}/${attendanceUrl}`).toPromise();
    }


    // DEMO ONLY, you can find working methods below
    async addasignroster(data) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        let newasignroster = await this.httpClient.post(`${this.baseUrl}/Addasignroster`, data, headers).toPromise();
        console.log(newasignroster);

    }

    async updateasignroster(data) {

        let rosterassign = await this.getdataToUpdate(data.key, 'GetAssignRoster');
        rosterassign = { ...rosterassign, ...data.data }
        console.log(rosterassign);
        // let authToken = localStorage.getItem('auth_token');  
        // let headers = {headers: {'Content-Type':'application/json'}}
        return await this.httpClient.put(`${this.baseUrl}/UpdateAsignRoster`, rosterassign).toPromise();

    }

    async Deleteasignroster(id) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
        return await this.httpClient.delete(`${this.baseUrl}/Deleteasignroster/${id}`).toPromise();
    }

    /** Attendance Flag CRUD METHODS */
    async getattendanceflag() {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

        this.attendanceflag = await this.httpClient.get(`${this.baseUrl}/GetAttendanceFlags`).toPromise();
        console.log(this.attendanceflag);
        return this.attendanceflag;
    }
    async addattendanceflag(data) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        let newattendanceflag = await this.httpClient.post(`${this.baseUrl}/AddattendanceFlag`, data, headers).toPromise();
        console.log(newattendanceflag);

    }

    async updateattendanceflag(data) {

        let attendanceflag = await this.getdataToUpdate(data.key, 'GetAttendanceFlag');
        attendanceflag = { ...attendanceflag, ...data.data }
        console.log(attendanceflag);
        // let authToken = localStorage.getItem('auth_token');  
        // let headers = {headers: {'Content-Type':'application/json'}}
        return await this.httpClient.put(`${this.baseUrl}/UpdateAttendanceFlag`, attendanceflag).toPromise();

    }

    async Deleteattendanceflag(id) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
        return await this.httpClient.delete(`${this.baseUrl}/DeleteAttendanceFlag/${id}`).toPromise();
    }


    /** Attendance Request Approver CRUD METHODS */
    async getattendanceRequestapprover() {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

        this.attendancerequestapprover = await this.httpClient.get(`${this.baseUrl}/GetAttendanceRquestApprovers`).toPromise();
        console.log(this.attendancerequestapprover);
        return this.attendancerequestapprover;
    }
    async addattendanceRequestapprover(data) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        let newattendancerequestapprover = await this.httpClient.post(`${this.baseUrl}/AddattendanceRequestApprover`, data, headers).toPromise();
        console.log(newattendancerequestapprover);

    }

    async updateattendanceRequestapprover(data) {

        let attendancerequestapprover = await this.getdataToUpdate(data.key, 'GetAttendanceRequestApprover');
        attendancerequestapprover = { ...attendancerequestapprover, ...data.data }
        console.log(attendancerequestapprover);
        // let authToken = localStorage.getItem('auth_token');  
        // let headers = {headers: {'Content-Type':'application/json'}}
        return await this.httpClient.put(`${this.baseUrl}/UpdateAttendanceRequestApprover`, attendancerequestapprover).toPromise();

    }

    async DeleteattendanceRequestapprover(id) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
        return await this.httpClient.delete(`${this.baseUrl}/DeleteAttendanceRequestApprover/${id}`).toPromise();
    }


    /** Attendance Request Approver CRUD METHODS */
    async getattendanceRequestTypes() {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

        this.attendanceRequestType = await this.httpClient.get(`${this.baseUrl}/GetAttendanceRequestTypes`).toPromise();
        console.log(this.attendanceRequestType);
        return this.attendanceRequestType;
    }
    async addattendanceRequestType(data) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        let newattendanceRequestType = await this.httpClient.post(`${this.baseUrl}/AttendanceRequestType`, data, headers).toPromise();
        console.log(newattendanceRequestType);

    }

    async updateattendanceRequestType(data) {

        let attendanceRequestType = await this.getdataToUpdate(data.key, 'GetAttendanceRequestType');
        attendanceRequestType = { ...attendanceRequestType, ...data.data }
        console.log(attendanceRequestType);
        // let authToken = localStorage.getItem('auth_token');  
        // let headers = {headers: {'Content-Type':'application/json'}}
        return await this.httpClient.put(`${this.baseUrl}/UpdateAttendanceRequestType`, attendanceRequestType).toPromise();

    }

    async DeleteattendanceRequestType(id) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
        return await this.httpClient.delete(`${this.baseUrl}/DeleteAttendanceRequestType/${id}`).toPromise();
    }

    /** Flag Category Approver CRUD METHODS */
    async getflagCategories() {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

        this.flagCategory = await this.httpClient.get(`${this.baseUrl}/GetFlagCategories`).toPromise();
        console.log(this.flagCategory);
        return this.flagCategory;
    }
    async addflagCategory(data) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        let newflagCategory = await this.httpClient.post(`${this.baseUrl}/FlagCategory`, data, headers).toPromise();
        console.log(newflagCategory);

    }

    async updateflagCategory(data) {

        let flagCategory = await this.getdataToUpdate(data.key, 'GetFlagCategory');
        flagCategory = { ...flagCategory, ...data.data }
        console.log(flagCategory);
        // let authToken = localStorage.getItem('auth_token');  
        // let headers = {headers: {'Content-Type':'application/json'}}
        return await this.httpClient.put(`${this.baseUrl}/UpdateFlagCategory`, flagCategory).toPromise();

    }

    async DeleteflagCategory(id) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
        return await this.httpClient.delete(`${this.baseUrl}/DeleteFlagCategory/${id}`).toPromise();
    }

    /** Flag Effect Type CRUD METHODS */
    async getflagEffecttypes() {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

        this.flagEffecttype = await this.httpClient.get(`${this.baseUrl}/GetFlagEffectTypes`).toPromise();
        console.log(this.flagEffecttype);
        return this.flagEffecttype;
    }
    async addflagEffecttype(data) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        let newflagEffecttype = await this.httpClient.post(`${this.baseUrl}/FlagEffectType`, data, headers).toPromise();
        console.log(newflagEffecttype);

    }

    async updateflagEffecttype(data) {

        let flagEffecttype = await this.getdataToUpdate(data.key, 'GetFlagEffectType');
        flagEffecttype = { ...flagEffecttype, ...data.data }
        console.log(flagEffecttype);
        // let authToken = localStorage.getItem('auth_token');  
        // let headers = {headers: {'Content-Type':'application/json'}}
        return await this.httpClient.put(`${this.baseUrl}/UpdateFlagEffectType`, flagEffecttype).toPromise();

    }

    async DeleteflagEffecttype(id) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
        return await this.httpClient.delete(`${this.baseUrl}/DeleteFlagEffectType/${id}`).toPromise();
    }

    /** Flag Type CRUD METHODS */
    async getflagtypes() {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

        this.flagtype = await this.httpClient.get(`${this.baseUrl}/GetFlagTypes`).toPromise();
        console.log(this.flagtype);
        return this.flagtype;
    }
    async addflagtype(data) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        let newflagtype = await this.httpClient.post(`${this.baseUrl}/AddFlagType`, data, headers).toPromise();
        console.log(newflagtype);

    }

    async updateflagtype(data) {

        let flagtype = await this.getdataToUpdate(data.key, 'GetFlagType');
        flagtype = { ...flagtype, ...data.data }
        console.log(flagtype);
        // let authToken = localStorage.getItem('auth_token');  
        // let headers = {headers: {'Content-Type':'application/json'}}
        return await this.httpClient.put(`${this.baseUrl}/UpdateFlagType`, flagtype).toPromise();

    }

    async Deleteflagtype(id) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
        return await this.httpClient.delete(`${this.baseUrl}/DeleteFlagType/${id}`).toPromise();
    }


    /** Flag Value CRUD METHODS */
    async getflagvalues() {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

        this.flagvalue = await this.httpClient.get(`${this.baseUrl}/GetFlagValues`).toPromise();
        console.log(this.flagvalue);
        return this.flagvalue;
    }
    async addflagvalue(data) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        let newflagvalue = await this.httpClient.post(`${this.baseUrl}/Addflagvalue`, data, headers).toPromise();
        console.log(newflagvalue);

    }

    async updateflagvalue(data) {

        let flagvalue = await this.getdataToUpdate(data.key, 'GetFlagValue');
        flagvalue = { ...flagvalue, ...data.data }
        console.log(flagvalue);
        // let authToken = localStorage.getItem('auth_token');  
        // let headers = {headers: {'Content-Type':'application/json'}}
        return await this.httpClient.put(`${this.baseUrl}/UpdateFlagValue`, flagvalue).toPromise();

    }

    async Deleteflagvalue(id) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
        return await this.httpClient.delete(`${this.baseUrl}/DeleteFlagValue/${id}`).toPromise();
    }


    /** Roster CRUD METHODS */
    async getrosters() {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

        this.roster = await this.httpClient.get(`${this.baseUrl}/GetRosters`).toPromise();
        console.log(this.roster);
        return this.roster;
    }
    async addroster(data) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        let newroster = await this.httpClient.post(`${this.baseUrl}/AddRoster`, data, headers).toPromise();
        console.log(newroster);

    }

    async updateroster(data) {

        let roster = await this.getdataToUpdate(data.key, 'Getroster');
        roster = { ...roster, ...data.data }
        console.log(roster);
        // let authToken = localStorage.getItem('auth_token');  
        // let headers = {headers: {'Content-Type':'application/json'}}
        return await this.httpClient.put(`${this.baseUrl}/UpdateRoster`, roster).toPromise();

    }

    async Deleteroster(id) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
        return await this.httpClient.delete(`${this.baseUrl}/DeleteRoster/${id}`).toPromise();
    }

    /** Shift CRUD METHODS */
    async getshifts() {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

        this.shift = await this.httpClient.get(`${this.baseUrl}/GetShifts`).toPromise();
        console.log(this.shift);
        return this.shift;
    }
    async addshift(data) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        let newshift = await this.httpClient.post(`${this.baseUrl}/AddShift`, data, headers).toPromise();
        console.log(newshift);

    }

    async updateshift(data) {

        let shift = await this.getdataToUpdate(data.key, 'GetsSift');
        shift = { ...shift, ...data.data }
        console.log(shift);
        // let authToken = localStorage.getItem('auth_token');  
        // let headers = {headers: {'Content-Type':'application/json'}}
        return await this.httpClient.put(`${this.baseUrl}/UpdateShift`, shift).toPromise();

    }

    async Deleteshift(id) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
        return await this.httpClient.delete(`${this.baseUrl}/DeleteShift/${id}`).toPromise();
    }

}
