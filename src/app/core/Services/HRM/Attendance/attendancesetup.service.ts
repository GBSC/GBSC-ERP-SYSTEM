import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../api.service';

@Injectable()
export class AttendancesetupService {

    private baseUrl: string = "SystemAdmin/api/AttendanceSetup/";

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

    /* Over Time */
    public overtimetype;
    public overtimeflag;


    constructor(private ApiService: ApiService) { }


    /** Assign Roster CRUD METHODS */
    async getasignrosters() {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

        this.asignroster = await this.ApiService.get(`${this.baseUrl}/GetAssignRosters`).toPromise();
        console.log(this.asignroster);
        return this.asignroster;
    }

    // DEMO ONLY, you can find working methods below
    async addasignroster(data) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        let newasignroster = await this.ApiService.post(`${this.baseUrl}/AddAssignRoster`, data).toPromise();
        console.log(newasignroster);

    }

    async getdataToUpdate(attendanceId, attendanceUrl) {
        return await this.ApiService.get(`${this.baseUrl}/${attendanceUrl}/${attendanceId}`).toPromise();
    }


    async updateasignroster(data) {

        let rosterassign = await this.getdataToUpdate(data.key, 'GetAssignRoster');
        rosterassign = { ...rosterassign, ...data.data }
        console.log(rosterassign);
        // let authToken = localStorage.getItem('auth_token');  
        // let headers = {headers: {'Content-Type':'application/json'}}
        return await this.ApiService.put(`${this.baseUrl}/UpdateAssignRoster`, rosterassign).toPromise();

    }

    async Deleteasignroster(id) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
        return await this.ApiService.delete(`${this.baseUrl}/DeleteAssignRoster/${id}`).toPromise();
    }

    /** Attendance Flag CRUD METHODS */
    async getattendanceflag() {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

        this.attendanceflag = await this.ApiService.get(`${this.baseUrl}/GetAttendanceFlags`).toPromise();
        console.log(this.attendanceflag);
        return this.attendanceflag;
    }
    async addattendanceflag(data) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        let newattendanceflag = await this.ApiService.post(`${this.baseUrl}/AddattendanceFlag`, data).toPromise();
        console.log(newattendanceflag);

    }

    async updateattendanceflag(data) {

        let attendanceflag = await this.getdataToUpdate(data.key, 'GetAttendanceFlag');
        attendanceflag = { ...attendanceflag, ...data.data }
        console.log(attendanceflag);
        // let authToken = localStorage.getItem('auth_token');  
        // let headers = {headers: {'Content-Type':'application/json'}}
        return await this.ApiService.put(`${this.baseUrl}/UpdateAttendanceFlag`, attendanceflag).toPromise();

    }

    async Deleteattendanceflag(id) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
        return await this.ApiService.delete(`${this.baseUrl}/DeleteAttendanceFlag/${id}`).toPromise();
    }


    /** Attendance Request Approver CRUD METHODS */
    async getattendanceRequestapprover() {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

        this.attendancerequestapprover = await this.ApiService.get(`${this.baseUrl}/GetAttendanceRequestApprovers`).toPromise();
        console.log(this.attendancerequestapprover);
        return this.attendancerequestapprover;
    }
    async addattendanceRequestapprover(data) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        let newattendancerequestapprover = await this.ApiService.post(`${this.baseUrl}/AddAttendanceRequestApprover`, data).toPromise();
        console.log(newattendancerequestapprover);

    }

    async updateattendanceRequestapprover(data) {
        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        return await this.ApiService.put(`${this.baseUrl}/UpdateAttendanceRequestApprover`, data).toPromise();

    }

    async DeleteattendanceRequestapprover(id) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
        return await this.ApiService.delete(`${this.baseUrl}/DeleteAttendanceRequestApprover/${id}`).toPromise();
    }


    /** Attendance Request Approver CRUD METHODS */
    async getattendanceRequestTypes() {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

        this.attendanceRequestType = await this.ApiService.get(`${this.baseUrl}/GetAttendanceRequestTypes`).toPromise();
        console.log(this.attendanceRequestType);
        return this.attendanceRequestType;
    }
    async addattendanceRequestType(data) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        let newattendanceRequestType = await this.ApiService.post(`${this.baseUrl}/AddAttendanceRequestType`, data).toPromise();
        console.log(newattendanceRequestType);

    }

    async updateattendanceRequestType(data) {

        let attendanceRequestType = await this.getdataToUpdate(data.key, 'GetAttendanceRequestType');
        attendanceRequestType = { ...attendanceRequestType, ...data.data }
        console.log(attendanceRequestType);
        // let authToken = localStorage.getItem('auth_token');  
        // let headers = {headers: {'Content-Type':'application/json'}}
        return await this.ApiService.put(`${this.baseUrl}/UpdateAttendanceRequestType`, attendanceRequestType).toPromise();

    }

    async DeleteattendanceRequestType(id) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
        return await this.ApiService.delete(`${this.baseUrl}/DeleteAttendanceRequestType/${id}`).toPromise();
    }

    /** Flag Category Approver CRUD METHODS */
    async getflagCategories() {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

        this.flagCategory = await this.ApiService.get(`${this.baseUrl}/GetFlagCategories`).toPromise();
        console.log(this.flagCategory);
        return this.flagCategory;
    }
    async addflagCategory(data) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        let newflagCategory = await this.ApiService.post(`${this.baseUrl}/AddFlagCategory`, data).toPromise();
        console.log(newflagCategory);

    }

    async updateflagCategory(data) {

        let flagCategory = await this.getdataToUpdate(data.key, 'GetFlagCategory');
        flagCategory = { ...flagCategory, ...data.data }
        console.log(flagCategory);
        // let authToken = localStorage.getItem('auth_token');  
        // let headers = {headers: {'Content-Type':'application/json'}}
        return await this.ApiService.put(`${this.baseUrl}/UpdateFlagCategory`, flagCategory).toPromise();

    }

    async DeleteflagCategory(id) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
        return await this.ApiService.delete(`${this.baseUrl}/DeleteFlagCategory/${id}`).toPromise();
    }

    /** Flag Effect Type CRUD METHODS */
    async getflagEffecttypes() {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

        this.flagEffecttype = await this.ApiService.get(`${this.baseUrl}/GetFlagEffectTypes`).toPromise();
        console.log(this.flagEffecttype);
        return this.flagEffecttype;
    }
    async addflagEffecttype(data) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        let newflagEffecttype = await this.ApiService.post(`${this.baseUrl}/AddFlagEffectType`, data).toPromise();
        console.log(newflagEffecttype);

    }

    async updateflagEffecttype(data) {

        let flagEffecttype = await this.getdataToUpdate(data.key, 'GetFlagEffectType');
        flagEffecttype = { ...flagEffecttype, ...data.data }
        console.log(flagEffecttype);
        // let authToken = localStorage.getItem('auth_token');  
        // let headers = {headers: {'Content-Type':'application/json'}}
        return await this.ApiService.put(`${this.baseUrl}/UpdateFlagEffectType`, flagEffecttype).toPromise();

    }

    async DeleteflagEffecttype(id) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
        return await this.ApiService.delete(`${this.baseUrl}/DeleteFlagEffectType/${id}`).toPromise();
    }

    /** Flag Type CRUD METHODS */
    async getflagtypes() {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

        this.flagtype = await this.ApiService.get(`${this.baseUrl}/GetFlagTypes`).toPromise();
        console.log(this.flagtype);
        return this.flagtype;
    }
    async addflagtype(data) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        let newflagtype = await this.ApiService.post(`${this.baseUrl}/AddFlagType`, data).toPromise();
        console.log(newflagtype);

    }

    async updateflagtype(data) {

        let flagtype = await this.getdataToUpdate(data.key, 'GetFlagType');
        flagtype = { ...flagtype, ...data.data }
        console.log(flagtype);

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        return await this.ApiService.put(`${this.baseUrl}/UpdateFlagType`, flagtype).toPromise();

    }

    async Deleteflagtype(id) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
        return await this.ApiService.delete(`${this.baseUrl}/DeleteFlagType/${id}`).toPromise();
    }


    /** Flag Value CRUD METHODS */
    async getflagvalues() {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

        this.flagvalue = await this.ApiService.get(`${this.baseUrl}/GetFlagValues`).toPromise();
        console.log(this.flagvalue);
        return this.flagvalue;
    }
    async addflagvalue(data) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        let newflagvalue = await this.ApiService.post(`${this.baseUrl}/Addflagvalue`, data).toPromise();
        console.log(newflagvalue);

    }

    async updateflagvalue(data) {

        let flagvalue = await this.getdataToUpdate(data.key, 'GetFlagValue');
        flagvalue = { ...flagvalue, ...data.data }
        console.log(flagvalue);
        // let authToken = localStorage.getItem('auth_token');  
        // let headers = {headers: {'Content-Type':'application/json'}}
        return await this.ApiService.put(`${this.baseUrl}/UpdateFlagValue`, flagvalue).toPromise();

    }

    async Deleteflagvalue(id) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
        return await this.ApiService.delete(`${this.baseUrl}/DeleteFlagValue/${id}`).toPromise();
    }


    /** Roster CRUD METHODS */
    async getrosters() {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

        this.roster = await this.ApiService.get(`${this.baseUrl}/GetRosters`).toPromise();
        console.log(this.roster);
        return this.roster;
    }
    async addroster(data) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        let newroster = await this.ApiService.post(`${this.baseUrl}/AddRoster`, data).toPromise();
        console.log(newroster);

    }

    async updateroster(data) {

        let roster = await this.getdataToUpdate(data.key, 'Getroster');
        roster = { ...roster, ...data.data }
        console.log(roster);
        // let authToken = localStorage.getItem('auth_token');  
        // let headers = {headers: {'Content-Type':'application/json'}}
        return await this.ApiService.put(`${this.baseUrl}/UpdateRoster`, roster).toPromise();

    }

    async Deleteroster(id) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
        return await this.ApiService.delete(`${this.baseUrl}/DeleteRoster/${id}`).toPromise();
    }

    /** Shift CRUD METHODS */
    async getshifts() {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

        this.shift = await this.ApiService.get(`${this.baseUrl}/GetShifts`).toPromise();
        console.log(this.shift);
        return this.shift;
    }
    async addshift(data) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        let newshift = await this.ApiService.post(`${this.baseUrl}/AddShift`, data).toPromise();
        console.log(newshift);

    }

    async updateshift(data) {

        let shift = await this.getdataToUpdate(data.key, 'GetsSift');
        shift = { ...shift, ...data.data }
        console.log(shift);
        // let authToken = localStorage.getItem('auth_token');  
        // let headers = {headers: {'Content-Type':'application/json'}}
        return await this.ApiService.put(`${this.baseUrl}/UpdateShift`, shift).toPromise();

    }

    async Deleteshift(id) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
        return await this.ApiService.delete(`${this.baseUrl}/DeleteShift/${id}`).toPromise();
    }

    /** CRUD METHODS */
    async getAllovertimetype() {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

        this.overtimetype = await this.ApiService.get(`${this.baseUrl}/GetOverTimeTypes`).toPromise();
        console.log(this.overtimetype);
        return this.overtimetype;
    }


    // DEMO ONLY, you can find working methods below
    async addovertimetype(data) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        let newovertimetype = await this.ApiService.post(`${this.baseUrl}/AddOverTimeType`, data).toPromise();
        console.log(newovertimetype);

    }

    async updateovertimetype(data) {

        console.log(data.key);
        console.log(data);

        let overtimetype = await this.getdataToUpdate(data.key, 'GetOverTimeType');
        overtimetype = { ...overtimetype, ...data.data }
        console.log(overtimetype);
        // let authToken = localStorage.getItem('auth_token');  
        // let headers = {headers: {'Content-Type':'application/json'}}
        return await this.ApiService.put(`${this.baseUrl}/UpdateOverTimeType`, overtimetype).toPromise();

    }

    async Deleteovertimetype(overtimetypeId) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
        return await this.ApiService.delete(`${this.baseUrl}/DeleteOverTimeType/${overtimetypeId}`).toPromise();
    }

    /** CRUD METHODS */
    async getAllovertimeflag() {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

        this.overtimeflag = await this.ApiService.get(`${this.baseUrl}/GetOverTimeFlags`).toPromise();
        console.log(this.overtimeflag);
        return this.overtimeflag;
    }


    // DEMO ONLY, you can find working methods below
    async addovertimeflag(data) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        let newovertimeflag = await this.ApiService.post(`${this.baseUrl}/AddOverTimeFlag`, data).toPromise();
        console.log(newovertimeflag);

    }

    async updateovertimeflag(data) {

        console.log(data.key);
        console.log(data);

        let overtimeflag = await this.getdataToUpdate(data.key, 'GetOverTimeFlag');
        overtimeflag = { ...overtimeflag, ...data.data }
        console.log(overtimeflag);
        // let authToken = localStorage.getItem('auth_token');  
        // let headers = {headers: {'Content-Type':'application/json'}}
        return await this.ApiService.put(`${this.baseUrl}/UpdateOverTimeFlag`, overtimeflag).toPromise();

    }

    async Deleteovertimeflag(overtimeflagId) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
        return await this.ApiService.delete(`${this.baseUrl}/DeleteOverTimeFlag/${overtimeflagId}`).toPromise();
    }

}
