import { Injectable } from '@angular/core';
import { ApiService } from '../../api.service';

@Injectable()
export class AttendanceService {

    private baseUrl: string = "SystemAdmin/api/Attendance";
    private baseUrl2: string = "SystemAdmin/api/AttendanceSetup";

    constructor(private ApiService: ApiService) { }


    async getAttendanceRequests() {
        return await this.ApiService.get(`${this.baseUrl}/GetAttendanceRequests`).toPromise();
    }

    async getdataToUpdate(attendanceId, attendanceUrl) {
        return await this.ApiService.get(`${this.baseUrl}/${attendanceUrl}/${attendanceId}`).toPromise();
    }


    async addAttendanceRequest(data) {
        return await this.ApiService.post(`${this.baseUrl}/AddAttendanceRequest`, data).toPromise();
    }

    async updateAttendanceRequest(data) {
        return await this.ApiService.put(`${this.baseUrl}/UpdateAttendanceRequest`, data).toPromise();
    }

    async deleteAttendanceRequest(id) {

        return await this.ApiService.delete(`${this.baseUrl}/DeleteAttendanceRequest/${id}`).toPromise();
    }


    async getEmpOvertimeEntitlements() {

        return await this.ApiService.get(`${this.baseUrl}/GetEmployeeOverTimeEntitlments`).toPromise();
    }

    async addEmpOvertimeEntitlement(data) {

        return await this.ApiService.post(`${this.baseUrl}/AddEmployeeOverTimeEntitlment`, data).toPromise();

    }

    async updateEmpOvertimeEntitlement(data) {
        return await this.ApiService.put(`${this.baseUrl}/UpdateEmployeeOverTimeEntitlment`, data).toPromise();

    }

    async DeleteEmpOvertimeEntitlement(id) {
        return await this.ApiService.delete(`${this.baseUrl}/DeleteEmployeeOverTimeEntitlment/${id}`).toPromise();
    }


    async getOfficialVisitEntries() {
        return await this.ApiService.get(`${this.baseUrl}/GetOfficialVisitEntries`).toPromise();
    }

    async addOfficialVisitEntry(data) {

        return await this.ApiService.post(`${this.baseUrl}/AddOfficialVisitEntry`, data).toPromise();

    }

    async updateOfficialVisitEntry(data) {
        return await this.ApiService.put(`${this.baseUrl}/UpdateOfficialVisitEntry`, data).toPromise();

    }

    async DeleteOfficialVisitEntry(id) {
        return await this.ApiService.delete(`${this.baseUrl}/DeleteOfficialVisitEntry/${id}`).toPromise();
    }


    async getOvertimeEntitlements() {
        return await this.ApiService.get(`${this.baseUrl}/GetOverTimeEntitlements`).toPromise();
    }

    async addOvertimeEntitlement(data) {
        return await this.ApiService.post(`${this.baseUrl}/AddOverTimeEntitlement`, data).toPromise();
    }

    async updateOvertimeEntitlement(data) {

        let overtimeEntitlement = await this.getdataToUpdate(data.key, 'GetOverTimeEntitlement');
        overtimeEntitlement = { ...overtimeEntitlement, ...data.data }
        return await this.ApiService.put(`${this.baseUrl}/UpdateOverTimeEntitlement`, overtimeEntitlement).toPromise();
    }

    async DeleteOvertimeEntitlement(id) {
        return await this.ApiService.delete(`${this.baseUrl}/DeleteOverTimeEntitlement/${id}`).toPromise();
    }

    async getUserRosterAttendances() {
        return await this.ApiService.get(`${this.baseUrl}/GetUserRosterAttendances`).toPromise();
    }

    async addUserRosterAttendance(data) {
        await this.ApiService.post(`${this.baseUrl}/AddUserRosterAttendance`, data).toPromise();
    }

    async updateUserRosterAttendance(data) {

        let userRosterattendance = await this.getdataToUpdate(data.key, 'GetUserRosterAttendance');
        userRosterattendance = { ...userRosterattendance, ...data.data }
        return await this.ApiService.put(`${this.baseUrl}/UpdateUserRosterAttendance`, userRosterattendance).toPromise();

    }

    async DeleteUserRosterAttendance(id) {
        return await this.ApiService.delete(`${this.baseUrl}/DeleteUserRosterAttendance/${id}`).toPromise();
    }


    async getAttendanceFlagExemptions() {
        return await this.ApiService.get(`${this.baseUrl}/GetAttendanceFlagExemptions`).toPromise();
    }

    async addAttendanceFlagExemption(data) {
        return await this.ApiService.post(`${this.baseUrl}/AddAttendanceFlagExemption`, data).toPromise();
    }

    async updateAttendanceFlagExemption(data) {

        let attendanceflagexemption = await this.getdataToUpdate(data.key, 'GetAttendanceFlagExemption');
        attendanceflagexemption = { ...attendanceflagexemption, ...data.data }
        return await this.ApiService.put(`${this.baseUrl}/UpdateAttendanceFlagExemption`, attendanceflagexemption).toPromise();
    }

    async DeleteAttendanceFlagExemption(id) {
        return await this.ApiService.delete(`${this.baseUrl}/DeleteAttendanceFlagExemption/${id}`).toPromise();
    }

    async getAttendanceRules() {
        return await this.ApiService.get(`${this.baseUrl}/GetAttendanceRules`).toPromise();
    }

    async addAttendanceRule(data) {
        return await this.ApiService.post(`${this.baseUrl}/AddAttendanceRule`, data).toPromise();
    }

    async updateAttendanceRule(data) {

        let attendancerule = await this.getdataToUpdate(data.key, 'GetAttendanceRule');
        attendancerule = { ...attendancerule, ...data.data }
        return await this.ApiService.put(`${this.baseUrl}/UpdateAttendanceRule`, attendancerule).toPromise();

    }

    async DeleteAttendanceRule(id) {
        return await this.ApiService.delete(`${this.baseUrl}/DeleteAttendanceRule/${id}`).toPromise();
    }


    async getEmployeeWorkingDayOts() {
        return await this.ApiService.get(`${this.baseUrl2}/GetEmployeeWorkingDayOts`).toPromise();

    }

    async addEmployeeWorkingDayOt(data) {
        return await this.ApiService.post(`${this.baseUrl2}/AddEmployeeWorkingDayOt`, data).toPromise();
    }

    async updateEmployeeWorkingDayOt(data) {
        return await this.ApiService.put(`${this.baseUrl2}/UpdateEmployeeWorkingDayOt`, data).toPromise();
    }

    async DeleteEmployeeWorkingDayOt(id) {
        return await this.ApiService.delete(`${this.baseUrl2}/DeleteEmployeeWorkingDayOt/${id}`).toPromise();
    }

    async getEmployeeOffdayOts() {
        return await this.ApiService.get(`${this.baseUrl2}/GetEmployeeOffDayOts`).toPromise();
    }

    async addEmployeeOffdayOts(data) {
        return await this.ApiService.post(`${this.baseUrl2}/AddEmployeeOffDayOt`, data).toPromise();
    }

    async updateEmployeeOffdayOts(data) {
        return await this.ApiService.put(`${this.baseUrl2}/UpdateEmployeeOffDayOt`, data).toPromise();
    }

    async DeleteEmployeeOffdayOts(id) {
        return await this.ApiService.delete(`${this.baseUrl2}/DeleteEmployeeOffDayOts/${id}`).toPromise();
    }

    async getEmployeeIncomingOts() {
        return await this.ApiService.get(`${this.baseUrl2}/GetEmployeeIncomingOts`).toPromise();
    }

    async addEmployeeIncomingOts(data) {
        return await this.ApiService.post(`${this.baseUrl2}/AddEmployeeIncomingOt`, data).toPromise();
    }

    async updateEmployeeIncomingOts(data) {

        return await this.ApiService.put(`${this.baseUrl2}/UpdateEmployeeIncomingOt`, data).toPromise();

    }

    async DeleteEmployeeIncomingOts(id) {
        return await this.ApiService.delete(`${this.baseUrl2}/DeleteEmployeeIncomingOt/${id}`).toPromise();
    }

    async getEmployeeOutgoingOts() {

        return await this.ApiService.get(`${this.baseUrl2}/GetEmployeeOutgoingOts`).toPromise();
    }

    async addEmployeeOutgoingOt(data) {
        return await this.ApiService.post(`${this.baseUrl2}/AddEmployeeOutgoingOt`, data).toPromise();
    }

    async updateEmployeeOutgoingOt(data) {

        return await this.ApiService.put(`${this.baseUrl2}/UpdateEmployeeOutgoingOt`, data).toPromise();
    }

    async DeleteEmployeeOutgoingOt(id) {
        return await this.ApiService.delete(`${this.baseUrl2}/DeleteEmployeeOutgoingOt/${id}`).toPromise();
    }
}
