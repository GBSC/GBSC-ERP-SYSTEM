import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AttendanceService {

<<<<<<< HEAD
    private baseUrl: string = "http://localhost:58090/api/Attendance";
=======
     private baseUrl: string = "http://localhost:58090/api/Attendance";
    //private baseUrl: string = "http://gbsc-erp.azurewebsites.net/SystemAdmin/api/Attendance";
>>>>>>> master
    public attendancerequest;
    public empOvertimeEntitlement;
    public officialVisitentry;
    public overtimeEntitlement;
    public userRosterattendance;

    /** Attendance Admin */
    public attendanceflagexemption;
    public attendancerule;
<<<<<<< HEAD

    /* Over Time */
    public overtimetype;
    public overtimeflag;

    constructor(public httpClient: HttpClient) { }

    /** Attendance Request CRUD METHODS */
    async getattendancerequests() {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

        this.attendancerequest = await this.httpClient.get(`${this.baseUrl}/GetAttendanceRequests`).toPromise();
        console.log(this.attendancerequest);
        return this.attendancerequest;
    }

    async getdataToUpdate(attendanceId, attendanceUrl) {
        return await this.httpClient.get(`${this.baseUrl}/${attendanceId}/${attendanceUrl}`).toPromise();
    }


    async addattendancerequest(data) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        let newattendancerequest = await this.httpClient.post(`${this.baseUrl}/AddAttendanceRequest`, data, headers).toPromise();
        console.log(newattendancerequest);

    }

    async updateattendancerequest(data) {

        let attendancerequest = await this.getdataToUpdate(data.key, 'GetAttendanceRequest');
        attendancerequest = { ...attendancerequest, ...data.data }
        console.log(attendancerequest);
        // let authToken = localStorage.getItem('auth_token');  
        // let headers = {headers: {'Content-Type':'application/json'}}
        return await this.httpClient.put(`${this.baseUrl}/UpdateAttendanceRequest`, attendancerequest).toPromise();

    }

    async Deleteattendancerequest(id) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
        return await this.httpClient.delete(`${this.baseUrl}/DeleteAttendanceRequest/${id}`).toPromise();
    }

    /** OverTime Entitlement CRUD METHODS */
    async getempOvertimeEntitlements() {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

        this.empOvertimeEntitlement = await this.httpClient.get(`${this.baseUrl}/GetEmployeeOverTimeEntitlments`).toPromise();
        console.log(this.empOvertimeEntitlement);
        return this.empOvertimeEntitlement;
    }

    async addempOvertimeEntitlement(data) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        let newempOvertimeEntitlement = await this.httpClient.post(`${this.baseUrl}/AddEmployeeOverTimeEntitlment`, data, headers).toPromise();
        console.log(newempOvertimeEntitlement);

    }

    async updateempOvertimeEntitlement(data) {

        let empOvertimeEntitlement = await this.getdataToUpdate(data.key, 'GetEmployeeOvertimeEntitlement');
        empOvertimeEntitlement = { ...empOvertimeEntitlement, ...data.data }
        console.log(empOvertimeEntitlement);
        // let authToken = localStorage.getItem('auth_token');  
        // let headers = {headers: {'Content-Type':'application/json'}}
        return await this.httpClient.put(`${this.baseUrl}/UpdateEmployeeOverTimeEntitlment`, empOvertimeEntitlement).toPromise();

    }

    async DeleteempOvertimeEntitlement(id) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
        return await this.httpClient.delete(`${this.baseUrl}/DeleteEmployeeOverTimeEntitlment/${id}`).toPromise();
    }

    /** Official Visit Entry CRUD METHODS */
    async getofficialVisitentries() {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

        this.officialVisitentry = await this.httpClient.get(`${this.baseUrl}/GetOfficialVisitEntries`).toPromise();
        console.log(this.officialVisitentry);
        return this.officialVisitentry;
    }

    async addofficialVisitentry(data) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        let newofficialVisitentry = await this.httpClient.post(`${this.baseUrl}/AddOfficialVisitEntry`, data, headers).toPromise();
        console.log(newofficialVisitentry);

    }

    async updateofficialVisitentry(data) {

        let officialVisitentry = await this.getdataToUpdate(data.key, 'GetOfficialVisitEntry');
        officialVisitentry = { ...officialVisitentry, ...data.data }
        console.log(officialVisitentry);
        // let authToken = localStorage.getItem('auth_token');  
        // let headers = {headers: {'Content-Type':'application/json'}}
        return await this.httpClient.put(`${this.baseUrl}/UpdateOfficialVisitEntry`, officialVisitentry).toPromise();

    }

    async DeleteofficialVisitentry(id) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
        return await this.httpClient.delete(`${this.baseUrl}/DeleteOfficialVisitEntry/${id}`).toPromise();
    }

    /** Overtime Entitlement CRUD METHODS */
    async getovertimeEntitlements() {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

        this.overtimeEntitlement = await this.httpClient.get(`${this.baseUrl}/GetOverTimeEntitlements`).toPromise();
        console.log(this.overtimeEntitlement);
        return this.overtimeEntitlement;
    }

    async addovertimeEntitlement(data) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        let newovertimeEntitlement = await this.httpClient.post(`${this.baseUrl}/AddOverTimeEntitlement`, data, headers).toPromise();
        console.log(newovertimeEntitlement);

    }

    async updateovertimeEntitlement(data) {

        let overtimeEntitlement = await this.getdataToUpdate(data.key, 'GetOverTimeEntitlement');
        overtimeEntitlement = { ...overtimeEntitlement, ...data.data }
        console.log(overtimeEntitlement);
        // let authToken = localStorage.getItem('auth_token');  
        // let headers = {headers: {'Content-Type':'application/json'}}
        return await this.httpClient.put(`${this.baseUrl}/UpdateOverTimeEntitlement`, overtimeEntitlement).toPromise();

    }

    async DeleteovertimeEntitlement(id) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
        return await this.httpClient.delete(`${this.baseUrl}/DeleteOverTimeEntitlement/${id}`).toPromise();
    }

    /**User Roster Attendance CRUD METHODS */
    async getuserRosterattendances() {
=======
    public workingdayot;
    public workingoffdayot;
    public newincomingot;
    public OutgoingOts;
    offdayot: Object;
    incomingot: Object;
    outgoingOt: Object;
    workingDayOt: Object;
 
    constructor(public httpClient: HttpClient) { }

    /** Attendance Request CRUD METHODS */
    async getattendancerequests() {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

        this.attendancerequest = await this.httpClient.get(`${this.baseUrl}/GetAttendanceRequests`).toPromise();
        console.log(this.attendancerequest);
        return this.attendancerequest;
    }

    async getdataToUpdate(attendanceId, attendanceUrl) {
        return await this.httpClient.get(`${this.baseUrl}/${attendanceUrl}/${attendanceId}`).toPromise();
    }


    async addattendancerequest(data) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        let newattendancerequest = await this.httpClient.post(`${this.baseUrl}/AddAttendanceRequest`, data, headers).toPromise();
        console.log(newattendancerequest);

    }

    async updateattendancerequest(data) { 
         let authToken = localStorage.getItem('auth_token');  
         let headers = {headers: {'Content-Type':'application/json'}}
        return await this.httpClient.put(`${this.baseUrl}/UpdateAttendanceRequest`, data, headers).toPromise();

    }

    async Deleteattendancerequest(id) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
        return await this.httpClient.delete(`${this.baseUrl}/DeleteAttendanceRequest/${id}`).toPromise();
    }

    /** OverTime Entitlement CRUD METHODS */
    async getempOvertimeEntitlements() {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

        this.empOvertimeEntitlement = await this.httpClient.get(`${this.baseUrl}/GetEmployeeOverTimeEntitlments`).toPromise();
        console.log(this.empOvertimeEntitlement);
        return this.empOvertimeEntitlement;
    }

    async addempOvertimeEntitlement(data) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        let newempOvertimeEntitlement = await this.httpClient.post(`${this.baseUrl}/AddEmployeeOverTimeEntitlment`, data, headers).toPromise();
        console.log(newempOvertimeEntitlement);

    }

    async updateempOvertimeEntitlement(data) {
 
        // let authToken = localStorage.getItem('auth_token');  
        // let headers = {headers: {'Content-Type':'application/json'}}
        return await this.httpClient.put(`${this.baseUrl}/UpdateEmployeeOverTimeEntitlment`, data).toPromise();

    }

    async DeleteempOvertimeEntitlement(id) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
        return await this.httpClient.delete(`${this.baseUrl}/DeleteEmployeeOverTimeEntitlment/${id}`).toPromise();
    }

    /** Official Visit Entry CRUD METHODS */
    async getofficialVisitentries() {
>>>>>>> master

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

<<<<<<< HEAD
        this.userRosterattendance = await this.httpClient.get(`${this.baseUrl}/GetUserRosterAttendances`).toPromise();
        console.log(this.userRosterattendance);
        return this.userRosterattendance;
    }

    async adduserRosterattendance(data) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        let newuserRosterattendance = await this.httpClient.post(`${this.baseUrl}/AddUserRosterAttendance`, data, headers).toPromise();
        console.log(newuserRosterattendance);

    }

    async updateuserRosterattendance(data) {

        let userRosterattendance = await this.getdataToUpdate(data.key, 'GetUserRosterAttendance');
        userRosterattendance = { ...userRosterattendance, ...data.data }
        console.log(userRosterattendance);
        // let authToken = localStorage.getItem('auth_token');  
        // let headers = {headers: {'Content-Type':'application/json'}}
        return await this.httpClient.put(`${this.baseUrl}/UpdateUserRosterAttendance`, userRosterattendance).toPromise();

    }

    async DeleteuserRosterattendance(id) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
        return await this.httpClient.delete(`${this.baseUrl}/DeleteUserRosterAttendance/${id}`).toPromise();
    }

    /** Attendance  Admin CRUD METHODS */

    /** Attendance Flag Exemption CRUD METHODS */
    async getattendanceflagexemptions() {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

        this.attendanceflagexemption = await this.httpClient.get(`${this.baseUrl}/GetAttendanceFlagExemptions`).toPromise();
        console.log(this.attendanceflagexemption);
        return this.attendanceflagexemption;
    }

    async addattendanceflagexemption(data) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        let newattendanceflagexemption = await this.httpClient.post(`${this.baseUrl}/AddAttendanceFlagExemption`, data, headers).toPromise();
        console.log(newattendanceflagexemption);

    }

    async updateattendanceflagexemption(data) {

        let attendanceflagexemption = await this.getdataToUpdate(data.key, 'GetAttendanceFlagExemption');
        attendanceflagexemption = { ...attendanceflagexemption, ...data.data }
        console.log(attendanceflagexemption);
        // let authToken = localStorage.getItem('auth_token');  
        // let headers = {headers: {'Content-Type':'application/json'}}
        return await this.httpClient.put(`${this.baseUrl}/UpdateAttendanceFlagExemption`, attendanceflagexemption).toPromise();

    }

    async Deleteattendanceflagexemption(id) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
        return await this.httpClient.delete(`${this.baseUrl}/DeleteAttendanceFlagExemption/${id}`).toPromise();
    }

    /** Attendance Rule CRUD METHODS */
    async getattendancerules() {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

        this.attendancerule = await this.httpClient.get(`${this.baseUrl}/GetAttendanceRules`).toPromise();
        console.log(this.attendancerule);
        return this.attendancerule;
    }

    async addattendancerule(data) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        let newattendancerule = await this.httpClient.post(`${this.baseUrl}/AddAttendanceRule`, data, headers).toPromise();
        console.log(newattendancerule);

    }

    async updateattendancerule(data) {

        let attendancerule = await this.getdataToUpdate(data.key, 'GetAttendanceRule');
        attendancerule = { ...attendancerule, ...data.data }
        console.log(attendancerule);
        // let authToken = localStorage.getItem('auth_token');  
        // let headers = {headers: {'Content-Type':'application/json'}}
        return await this.httpClient.put(`${this.baseUrl}/UpdateAttendanceRule`, attendancerule).toPromise();

    }

    async Deleteattendancerule(id) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
        return await this.httpClient.delete(`${this.baseUrl}/DeleteAttendanceRule/${id}`).toPromise();
    }

    /** CRUD METHODS */
    async getAllovertimetype() {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

        this.overtimetype = await this.httpClient.get(`${this.baseUrl}/Getovertimetypes`).toPromise();
        console.log(this.overtimetype);
        return this.overtimetype;
    }


    // DEMO ONLY, you can find working methods below
    async addovertimetype(data) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        let newovertimetype = await this.httpClient.post(`${this.baseUrl}/Addovertimetype`, data, headers).toPromise();
        console.log(newovertimetype);

    }

    async updateovertimetype(data) {

        console.log(data.key);
        console.log(data);

        let overtimetype = await this.getdataToUpdate(data.key, 'Getovertimetype');
        overtimetype = { ...overtimetype, ...data.data }
        console.log(overtimetype);
        // let authToken = localStorage.getItem('auth_token');  
        // let headers = {headers: {'Content-Type':'application/json'}}
        return await this.httpClient.put(`${this.baseUrl}/Updateovertimetype`, overtimetype).toPromise();

    }

    async Deleteovertimetype(overtimetypeId) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
        return await this.httpClient.delete(`${this.baseUrl}/Deleteovertimetype/${overtimetypeId}`).toPromise();
    }

    /** CRUD METHODS */
    async getAllovertimeflag() {
=======
        this.officialVisitentry = await this.httpClient.get(`${this.baseUrl}/GetOfficialVisitEntries`).toPromise();
        console.log(this.officialVisitentry);
        return this.officialVisitentry;
    }

    async addofficialVisitentry(data) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        let newofficialVisitentry = await this.httpClient.post(`${this.baseUrl}/AddOfficialVisitEntry`, data, headers).toPromise();
        console.log(newofficialVisitentry);

    }

    async updateofficialVisitentry(data) {

        let officialVisitentry = await this.getdataToUpdate(data.key, 'GetOfficialVisitEntry');
        officialVisitentry = { ...officialVisitentry, ...data.data }
        console.log(officialVisitentry);
        // let authToken = localStorage.getItem('auth_token');  
        // let headers = {headers: {'Content-Type':'application/json'}}
        return await this.httpClient.put(`${this.baseUrl}/UpdateOfficialVisitEntry`, officialVisitentry).toPromise();

    }

    async DeleteofficialVisitentry(id) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
        return await this.httpClient.delete(`${this.baseUrl}/DeleteOfficialVisitEntry/${id}`).toPromise();
    }

    /** Overtime Entitlement CRUD METHODS */
    async getovertimeEntitlements() {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

        this.overtimeEntitlement = await this.httpClient.get(`${this.baseUrl}/GetOverTimeEntitlements`).toPromise();
        console.log(this.overtimeEntitlement);
        return this.overtimeEntitlement;
    }

    async addovertimeEntitlement(data) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        let newovertimeEntitlement = await this.httpClient.post(`${this.baseUrl}/AddOverTimeEntitlement`, data, headers).toPromise();
        console.log(newovertimeEntitlement);

    }

    async updateovertimeEntitlement(data) {

        let overtimeEntitlement = await this.getdataToUpdate(data.key, 'GetOverTimeEntitlement');
        overtimeEntitlement = { ...overtimeEntitlement, ...data.data }
        console.log(overtimeEntitlement);
        // let authToken = localStorage.getItem('auth_token');  
        // let headers = {headers: {'Content-Type':'application/json'}}
        return await this.httpClient.put(`${this.baseUrl}/UpdateOverTimeEntitlement`, overtimeEntitlement).toPromise();

    }

    async DeleteovertimeEntitlement(id) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
        return await this.httpClient.delete(`${this.baseUrl}/DeleteOverTimeEntitlement/${id}`).toPromise();
    }

    /**User Roster Attendance CRUD METHODS */
    async getuserRosterattendances() {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

        this.userRosterattendance = await this.httpClient.get(`${this.baseUrl}/GetUserRosterAttendances`).toPromise();
        console.log(this.userRosterattendance);
        return this.userRosterattendance;
    }

    async adduserRosterattendance(data) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        let newuserRosterattendance = await this.httpClient.post(`${this.baseUrl}/AddUserRosterAttendance`, data, headers).toPromise();
        console.log(newuserRosterattendance);

    }

    async updateuserRosterattendance(data) {

        let userRosterattendance = await this.getdataToUpdate(data.key, 'GetUserRosterAttendance');
        userRosterattendance = { ...userRosterattendance, ...data.data }
        console.log(userRosterattendance);
        // let authToken = localStorage.getItem('auth_token');  
        // let headers = {headers: {'Content-Type':'application/json'}}
        return await this.httpClient.put(`${this.baseUrl}/UpdateUserRosterAttendance`, userRosterattendance).toPromise();

    }

    async DeleteuserRosterattendance(id) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
        return await this.httpClient.delete(`${this.baseUrl}/DeleteUserRosterAttendance/${id}`).toPromise();
    }

    /** Attendance  Admin CRUD METHODS */

    /** Attendance Flag Exemption CRUD METHODS */
    async getattendanceflagexemptions() {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

        this.attendanceflagexemption = await this.httpClient.get(`${this.baseUrl}/GetAttendanceFlagExemptions`).toPromise();
        console.log(this.attendanceflagexemption);
        return this.attendanceflagexemption;
    }

    async addattendanceflagexemption(data) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        let newflagexemption = await this.httpClient.post(`${this.baseUrl}/AddAttendanceFlagExemption`, data, headers).toPromise();
        console.log(newflagexemption);

    }

    async updateattendanceflagexemption(data) {

        let attendanceflagexemption = await this.getdataToUpdate(data.key, 'GetAttendanceFlagExemption');
        attendanceflagexemption = { ...attendanceflagexemption, ...data.data }
        console.log(attendanceflagexemption);
        // let authToken = localStorage.getItem('auth_token');  
        // let headers = {headers: {'Content-Type':'application/json'}}
        return await this.httpClient.put(`${this.baseUrl}/UpdateAttendanceFlagExemption`, attendanceflagexemption).toPromise();

    }

    async Deleteattendanceflagexemption(id) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
        return await this.httpClient.delete(`${this.baseUrl}/DeleteAttendanceFlagExemption/${id}`).toPromise();
    }

    /** Attendance Rule CRUD METHODS */
    async getattendancerules() {
>>>>>>> master

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

<<<<<<< HEAD
        this.overtimeflag = await this.httpClient.get(`${this.baseUrl}/Getovertimeflags`).toPromise();
        console.log(this.overtimeflag);
        return this.overtimeflag;
    }


    // DEMO ONLY, you can find working methods below
    async addovertimeflag(data) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        let newovertimeflag = await this.httpClient.post(`${this.baseUrl}/Addovertimeflag`, data, headers).toPromise();
        console.log(newovertimeflag);

    }

    async updateovertimeflag(data) {

        console.log(data.key);
        console.log(data);

        let overtimeflag = await this.getdataToUpdate(data.key, 'Getovertimeflag');
        overtimeflag = { ...overtimeflag, ...data.data }
        console.log(overtimeflag);
        // let authToken = localStorage.getItem('auth_token');  
        // let headers = {headers: {'Content-Type':'application/json'}}
        return await this.httpClient.put(`${this.baseUrl}/Updateovertimeflag`, overtimeflag).toPromise();

    }

    async Deleteovertimeflag(overtimeflagId) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
        return await this.httpClient.delete(`${this.baseUrl}/Deleteovertimeflag/${overtimeflagId}`).toPromise();
    }
=======
        this.attendancerule = await this.httpClient.get(`${this.baseUrl}/GetAttendanceRules`).toPromise();
        console.log(this.attendancerule);
        return this.attendancerule;
    }

    async addattendancerule(data) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        let newattendancerule = await this.httpClient.post(`${this.baseUrl}/AddAttendanceRule`, data, headers).toPromise();
        console.log(newattendancerule);

    }

    async updateattendancerule(data) {

        let attendancerule = await this.getdataToUpdate(data.key, 'GetAttendanceRule');
        attendancerule = { ...attendancerule, ...data.data }
        console.log(attendancerule);
        // let authToken = localStorage.getItem('auth_token');  
        // let headers = {headers: {'Content-Type':'application/json'}}
        return await this.httpClient.put(`${this.baseUrl}/UpdateAttendanceRule`, attendancerule).toPromise();

    }

    async Deleteattendancerule(id) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
        return await this.httpClient.delete(`${this.baseUrl}/DeleteAttendanceRule/${id}`).toPromise();
    }


        /** Employee Working Day CRUD METHODS */
        async getemployeeWorkingDayOts() {

            let authToken = localStorage.getItem('auth_token');
            let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
    
            this.workingdayot = await this.httpClient.get(`http://localhost:58090/api/AttendanceSetup/GetEmployeeWorkingDayOts`).toPromise();
            console.log(this.workingdayot);
            return this.workingdayot;
        }
    
        async addemployeeWorkingDayOt(data) {
    
            let authToken = localStorage.getItem('auth_token');
            let headers = { headers: { 'Content-Type': 'application/json' } }
            this.workingDayOt = await this.httpClient.post(`http://localhost:58090/api/AttendanceSetup/AddEmployeeWorkingDayOt`, data, headers).toPromise();
            console.log(this.workingDayOt);
            return this.workingDayOt;
    
        }
    
        async updateemployeeWorkingDayOt(data) {
     
            let authToken = localStorage.getItem('auth_token');  
            let headers = {headers: {'Content-Type':'application/json'}}
            return await this.httpClient.put(`http://localhost:58090/api/AttendanceSetup/UpdateEmployeeWorkingDayOt`, data).toPromise();
    
        }
    
        async DeleteemployeeWorkingDayOt(id) {
    
            let authToken = localStorage.getItem('auth_token');
            let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
            return await this.httpClient.delete(`http://localhost:58090/api/AttendanceSetup/DeleteEmployeeWorkingDayOt/${id}`).toPromise();
        }

         /** Employee Working Day CRUD METHODS */
         async getemployeeOffdayOts() {

            let authToken = localStorage.getItem('auth_token');
            let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
    
            this.workingoffdayot = await this.httpClient.get(`http://localhost:58090/api/AttendanceSetup/GetEmployeeOffDayOts`).toPromise();
            console.log(this.workingoffdayot);
            return this.workingoffdayot;
        }
   
        async addemployeeOffdayOts(data) {
    
            let authToken = localStorage.getItem('auth_token');
            let headers = { headers: { 'Content-Type': 'application/json' } }
            this.offdayot = await this.httpClient.post(`http://localhost:58090/api/AttendanceSetup/AddEmployeeOffDayOt`, data, headers).toPromise();
            console.log(this.offdayot);
            return this.offdayot;
    
        }
    
        async updateemployeeOffdayOts(data) {
    
            let authToken = localStorage.getItem('auth_token');  
            let headers = {headers: {'Content-Type':'application/json'}}
            return await this.httpClient.put(`http://localhost:58090/api/AttendanceSetup/UpdateEmployeeOffDayOt`, data).toPromise();
    
        }
    
        async DeleteemployeeOffdayOts(id) {
    
            let authToken = localStorage.getItem('auth_token');
            let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
            return await this.httpClient.delete(`http://localhost:58090/api/AttendanceSetup/DeleteEmployeeOffDayOts/${id}`).toPromise();
        }

         /** Employee Working Day CRUD METHODS */
         async getemployeeIncomingOts() {

            let authToken = localStorage.getItem('auth_token');
            let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
    
            this.newincomingot = await this.httpClient.get(`http://localhost:58090/api/AttendanceSetup/GetEmployeeIncomingOts`).toPromise();
            console.log(this.newincomingot);
            return this.newincomingot;
        }
    
        async addemployeeIncomingOts(data) {
    
            let authToken = localStorage.getItem('auth_token');
            let headers = { headers: { 'Content-Type': 'application/json' } }
            this.incomingot = await this.httpClient.post(`http://localhost:58090/api/AttendanceSetup/AddEmployeeIncomingOt`, data, headers).toPromise();
            console.log(this.incomingot);
            return this.incomingot;
    
        }
    
        async updateemployeeIncomingOts(data) { 
            let authToken = localStorage.getItem('auth_token');  
            let headers = {headers: {'Content-Type':'application/json'}}
            return await this.httpClient.put(`http://localhost:58090/api/AttendanceSetup/UpdateEmployeeIncomingOt`, data).toPromise();
    
        }
    
        async DeleteemployeeIncomingOts(id) {
    
            let authToken = localStorage.getItem('auth_token');
            let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
            return await this.httpClient.delete(`http://localhost:58090/api/AttendanceSetup/DeleteEmployeeIncomingOt/${id}`).toPromise();
        }

         /** Employee Working Day CRUD METHODS */
         async getemployeeOutgoingOts() {

            let authToken = localStorage.getItem('auth_token');
            let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
    
            this.OutgoingOts = await this.httpClient.get(`http://localhost:58090/api/AttendanceSetup/GetEmployeeOutgoingOts`).toPromise();
            console.log(this.OutgoingOts);
            return this.OutgoingOts;
        }
    
        async addemployeeOutgoingOt(data) {
    
            let authToken = localStorage.getItem('auth_token');
            let headers = { headers: { 'Content-Type': 'application/json' } }
            this.outgoingOt = await this.httpClient.post(`http://localhost:58090/api/AttendanceSetup/AddEmployeeOutgoingOt`, data, headers).toPromise();
            console.log(this.outgoingOt);
            return this.outgoingOt;
    
        }
    
        async updateemployeeOutgoingOt(data) { 
            let authToken = localStorage.getItem('auth_token');  
            let headers = {headers: {'Content-Type':'application/json'}}
            return await this.httpClient.put(`http://localhost:58090/api/AttendanceSetup/UpdateEmployeeOutgoingOt`, data).toPromise();
    
        }
    
        async DeleteemployeeOutgoingOt(id) {
    
            let authToken = localStorage.getItem('auth_token');
            let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
            return await this.httpClient.delete(`http://localhost:58090/api/AttendanceSetup/DeleteEmployeeOutgoingOt/${id}`).toPromise();
        }
>>>>>>> master
}
