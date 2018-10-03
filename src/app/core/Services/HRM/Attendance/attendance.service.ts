import { Injectable } from '@angular/core'; 
import { ApiService } from '../../api.service';

@Injectable()
export class AttendanceService {

     private baseUrl: string = "SystemAdmin/api/Attendance";
     private baseUrl2: string = "SystemAdmin/api/AttendanceSetup";

    public attendancerequest;
    public empOvertimeEntitlement;
    public officialVisitentry;
    public overtimeEntitlement;
    public userRosterattendance;

    /** Attendance Admin */
    public attendanceflagexemption;
    public attendancerule;
    public workingdayot;
    public workingoffdayot;
    public newincomingot;
    public OutgoingOts;
    offdayot: Object;
    incomingot: Object;
    outgoingOt: Object;
    workingDayOt: Object;
 
    constructor(private ApiService : ApiService) { }

    /** Attendance Request CRUD METHODS */
    async getattendancerequests() {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

        this.attendancerequest = await this.ApiService.get(`${this.baseUrl}/GetAttendanceRequests`).toPromise();
        console.log(this.attendancerequest);
        return this.attendancerequest;
    }

    async getdataToUpdate(attendanceId, attendanceUrl) {
        return await this.ApiService.get(`${this.baseUrl}/${attendanceUrl}/${attendanceId}`).toPromise();
    }


    async addattendancerequest(data) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        let newattendancerequest = await this.ApiService.post(`${this.baseUrl}/AddAttendanceRequest`, data).toPromise();
        console.log(newattendancerequest);

    }

    async updateattendancerequest(data) { 
         let authToken = localStorage.getItem('auth_token');  
         let headers = {headers: {'Content-Type':'application/json'}}
        return await this.ApiService.put(`${this.baseUrl}/UpdateAttendanceRequest`, data).toPromise();

    }

    async Deleteattendancerequest(id) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
        return await this.ApiService.delete(`${this.baseUrl}/DeleteAttendanceRequest/${id}`).toPromise();
    }

    /** OverTime Entitlement CRUD METHODS */
    async getempOvertimeEntitlements() {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

        this.empOvertimeEntitlement = await this.ApiService.get(`${this.baseUrl}/GetEmployeeOverTimeEntitlments`).toPromise();
        console.log(this.empOvertimeEntitlement);
        return this.empOvertimeEntitlement;
    }

    async addempOvertimeEntitlement(data) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        let newempOvertimeEntitlement = await this.ApiService.post(`${this.baseUrl}/AddEmployeeOverTimeEntitlment`, data).toPromise();
        console.log(newempOvertimeEntitlement);

    }

    async updateempOvertimeEntitlement(data) {
 
        // let authToken = localStorage.getItem('auth_token');  
        // let headers = {headers: {'Content-Type':'application/json'}}
        return await this.ApiService.put(`${this.baseUrl}/UpdateEmployeeOverTimeEntitlment`, data).toPromise();

    }

    async DeleteempOvertimeEntitlement(id) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
        return await this.ApiService.delete(`${this.baseUrl}/DeleteEmployeeOverTimeEntitlment/${id}`).toPromise();
    }

    /** Official Visit Entry CRUD METHODS */
    async getofficialVisitentries() {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

        this.officialVisitentry = await this.ApiService.get(`${this.baseUrl}/GetOfficialVisitEntries`).toPromise();
        console.log(this.officialVisitentry);
        return this.officialVisitentry;
    }

    async addofficialVisitentry(data) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        let newofficialVisitentry = await this.ApiService.post(`${this.baseUrl}/AddOfficialVisitEntry`, data).toPromise();
        console.log(newofficialVisitentry);

    }

    async updateofficialVisitentry(data) {

        let officialVisitentry = await this.getdataToUpdate(data.key, 'GetOfficialVisitEntry');
        officialVisitentry = { ...officialVisitentry, ...data.data }
        console.log(officialVisitentry);
        // let authToken = localStorage.getItem('auth_token');  
        // let headers = {headers: {'Content-Type':'application/json'}}
        return await this.ApiService.put(`${this.baseUrl}/UpdateOfficialVisitEntry`, officialVisitentry).toPromise();

    }

    async DeleteofficialVisitentry(id) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
        return await this.ApiService.delete(`${this.baseUrl}/DeleteOfficialVisitEntry/${id}`).toPromise();
    }

    /** Overtime Entitlement CRUD METHODS */
    async getovertimeEntitlements() {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

        this.overtimeEntitlement = await this.ApiService.get(`${this.baseUrl}/GetOverTimeEntitlements`).toPromise();
        console.log(this.overtimeEntitlement);
        return this.overtimeEntitlement;
    }

    async addovertimeEntitlement(data) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        let newovertimeEntitlement = await this.ApiService.post(`${this.baseUrl}/AddOverTimeEntitlement`, data).toPromise();
        console.log(newovertimeEntitlement);

    }

    async updateovertimeEntitlement(data) {

        let overtimeEntitlement = await this.getdataToUpdate(data.key, 'GetOverTimeEntitlement');
        overtimeEntitlement = { ...overtimeEntitlement, ...data.data }
        console.log(overtimeEntitlement);
        // let authToken = localStorage.getItem('auth_token');  
        // let headers = {headers: {'Content-Type':'application/json'}}
        return await this.ApiService.put(`${this.baseUrl}/UpdateOverTimeEntitlement`, overtimeEntitlement).toPromise();

    }

    async DeleteovertimeEntitlement(id) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
        return await this.ApiService.delete(`${this.baseUrl}/DeleteOverTimeEntitlement/${id}`).toPromise();
    }

    /**User Roster Attendance CRUD METHODS */
    async getuserRosterattendances() {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

        this.userRosterattendance = await this.ApiService.get(`${this.baseUrl}/GetUserRosterAttendances`).toPromise();
        console.log(this.userRosterattendance);
        return this.userRosterattendance;
    }

    async adduserRosterattendance(data) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        let newuserRosterattendance = await this.ApiService.post(`${this.baseUrl}/AddUserRosterAttendance`, data).toPromise();
        console.log(newuserRosterattendance);

    }

    async updateuserRosterattendance(data) {

        let userRosterattendance = await this.getdataToUpdate(data.key, 'GetUserRosterAttendance');
        userRosterattendance = { ...userRosterattendance, ...data.data }
        console.log(userRosterattendance);
        // let authToken = localStorage.getItem('auth_token');  
        // let headers = {headers: {'Content-Type':'application/json'}}
        return await this.ApiService.put(`${this.baseUrl}/UpdateUserRosterAttendance`, userRosterattendance).toPromise();

    }

    async DeleteuserRosterattendance(id) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
        return await this.ApiService.delete(`${this.baseUrl}/DeleteUserRosterAttendance/${id}`).toPromise();
    }

    /** Attendance  Admin CRUD METHODS */

    /** Attendance Flag Exemption CRUD METHODS */
    async getattendanceflagexemptions() {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

        this.attendanceflagexemption = await this.ApiService.get(`${this.baseUrl}/GetAttendanceFlagExemptions`).toPromise();
        console.log(this.attendanceflagexemption);
        return this.attendanceflagexemption;
    }

    async addattendanceflagexemption(data) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        let newflagexemption = await this.ApiService.post(`${this.baseUrl}/AddAttendanceFlagExemption`, data).toPromise();
        console.log(newflagexemption);

    }

    async updateattendanceflagexemption(data) {

        let attendanceflagexemption = await this.getdataToUpdate(data.key, 'GetAttendanceFlagExemption');
        attendanceflagexemption = { ...attendanceflagexemption, ...data.data }
        console.log(attendanceflagexemption);
        // let authToken = localStorage.getItem('auth_token');  
        // let headers = {headers: {'Content-Type':'application/json'}}
        return await this.ApiService.put(`${this.baseUrl}/UpdateAttendanceFlagExemption`, attendanceflagexemption).toPromise();

    }

    async Deleteattendanceflagexemption(id) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
        return await this.ApiService.delete(`${this.baseUrl}/DeleteAttendanceFlagExemption/${id}`).toPromise();
    }

    /** Attendance Rule CRUD METHODS */
    async getattendancerules() {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

        this.attendancerule = await this.ApiService.get(`${this.baseUrl}/GetAttendanceRules`).toPromise();
        console.log(this.attendancerule);
        return this.attendancerule;
    }

    async addattendancerule(data) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        let newattendancerule = await this.ApiService.post(`${this.baseUrl}/AddAttendanceRule`, data).toPromise();
        console.log(newattendancerule);

    }

    async updateattendancerule(data) {

        let attendancerule = await this.getdataToUpdate(data.key, 'GetAttendanceRule');
        attendancerule = { ...attendancerule, ...data.data }
        console.log(attendancerule);
        // let authToken = localStorage.getItem('auth_token');  
        // let headers = {headers: {'Content-Type':'application/json'}}
        return await this.ApiService.put(`${this.baseUrl}/UpdateAttendanceRule`, attendancerule).toPromise();

    }

    async Deleteattendancerule(id) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
        return await this.ApiService.delete(`${this.baseUrl}/DeleteAttendanceRule/${id}`).toPromise();
    }


        /** Employee Working Day CRUD METHODS */
        async getemployeeWorkingDayOts() {

            let authToken = localStorage.getItem('auth_token');
            let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
    
            this.workingdayot = await this.ApiService.get(`${this.baseUrl2}/GetEmployeeWorkingDayOts`).toPromise();
            console.log(this.workingdayot);
            return this.workingdayot;
        }
    
        async addemployeeWorkingDayOt(data) {
    
            let authToken = localStorage.getItem('auth_token');
            let headers = { headers: { 'Content-Type': 'application/json' } }
            this.workingDayOt = await this.ApiService.post(`${this.baseUrl2}/AddEmployeeWorkingDayOt`, data).toPromise();
            console.log(this.workingDayOt);
            return this.workingDayOt;
    
        }
    
        async updateemployeeWorkingDayOt(data) {
     
            let authToken = localStorage.getItem('auth_token');  
            let headers = {headers: {'Content-Type':'application/json'}}
            return await this.ApiService.put(`${this.baseUrl2}/UpdateEmployeeWorkingDayOt`, data).toPromise();
    
        }
    
        async DeleteemployeeWorkingDayOt(id) {
    
            let authToken = localStorage.getItem('auth_token');
            let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
            return await this.ApiService.delete(`${this.baseUrl2}/DeleteEmployeeWorkingDayOt/${id}`).toPromise();
        }

         /** Employee Working Day CRUD METHODS */
         async getemployeeOffdayOts() {

            let authToken = localStorage.getItem('auth_token');
            let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
    
            this.workingoffdayot = await this.ApiService.get(`${this.baseUrl2}/GetEmployeeOffDayOts`).toPromise();
            console.log(this.workingoffdayot);
            return this.workingoffdayot;
        }
   
        async addemployeeOffdayOts(data) {
    
            let authToken = localStorage.getItem('auth_token');
            let headers = { headers: { 'Content-Type': 'application/json' } }
            this.offdayot = await this.ApiService.post(`${this.baseUrl2}/AddEmployeeOffDayOt`, data).toPromise();
            console.log(this.offdayot);
            return this.offdayot;
    
        }
    
        async updateemployeeOffdayOts(data) {
    
            let authToken = localStorage.getItem('auth_token');  
            let headers = {headers: {'Content-Type':'application/json'}}
            return await this.ApiService.put(`${this.baseUrl2}/UpdateEmployeeOffDayOt`, data).toPromise();
    
        }
    
        async DeleteemployeeOffdayOts(id) {
    
            let authToken = localStorage.getItem('auth_token');
            let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
            return await this.ApiService.delete(`${this.baseUrl2}/DeleteEmployeeOffDayOts/${id}`).toPromise();
        }

         /** Employee Working Day CRUD METHODS */
         async getemployeeIncomingOts() {
            this.newincomingot = await this.ApiService.get(`${this.baseUrl2}/GetEmployeeIncomingOts`).toPromise();
            console.log(this.newincomingot);
            return this.newincomingot;
        }
    
        async addemployeeIncomingOts(data) {
    
            let authToken = localStorage.getItem('auth_token');
            let headers = { headers: { 'Content-Type': 'application/json' } }
            this.incomingot = await this.ApiService.post(`${this.baseUrl2}/AddEmployeeIncomingOt`, data).toPromise();
            console.log(this.incomingot);
            return this.incomingot;
    
        }
    
        async updateemployeeIncomingOts(data) { 
            let authToken = localStorage.getItem('auth_token');  
            let headers = {headers: {'Content-Type':'application/json'}}
            return await this.ApiService.put(`${this.baseUrl2}/UpdateEmployeeIncomingOt`, data).toPromise();
    
        }
    
        async DeleteemployeeIncomingOts(id) {
    
            let authToken = localStorage.getItem('auth_token');
            let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
            return await this.ApiService.delete(`${this.baseUrl2}/DeleteEmployeeIncomingOt/${id}`).toPromise();
        }

         /** Employee Working Day CRUD METHODS */
         async getemployeeOutgoingOts() {

            let authToken = localStorage.getItem('auth_token');
            let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
    
            this.OutgoingOts = await this.ApiService.get(`${this.baseUrl2}/GetEmployeeOutgoingOts`).toPromise();
            console.log(this.OutgoingOts);
            return this.OutgoingOts;
        }
    
        async addemployeeOutgoingOt(data) {
    
            let authToken = localStorage.getItem('auth_token');
            let headers = { headers: { 'Content-Type': 'application/json' } }
            this.outgoingOt = await this.ApiService.post(`${this.baseUrl2}/AddEmployeeOutgoingOt`, data).toPromise();
            console.log(this.outgoingOt);
            return this.outgoingOt;
    
        }
    
        async updateemployeeOutgoingOt(data) { 
            let authToken = localStorage.getItem('auth_token');  
            let headers = {headers: {'Content-Type':'application/json'}}
            return await this.ApiService.put(`${this.baseUrl2}/UpdateEmployeeOutgoingOt`, data).toPromise();
    
        }
    
        async DeleteemployeeOutgoingOt(id) {
    
            let authToken = localStorage.getItem('auth_token');
            let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
            return await this.ApiService.delete(`${this.baseUrl2}/DeleteEmployeeOutgoingOt/${id}`).toPromise();
        }
}
