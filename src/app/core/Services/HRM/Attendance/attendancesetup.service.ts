import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../api.service';

@Injectable()
export class AttendancesetupService {

private baseUrl: string = "SystemAdmin/api/AttendanceSetup/";
 
    constructor(private ApiService: ApiService) { }

    /** Assign Roster CRUD'S */
    async getAsignRosters() {
        return await this.ApiService.get(`${this.baseUrl}/GetAssignRosters`).toPromise();
    }

    async addAsignRoster(data) {

        return await this.ApiService.post(`${this.baseUrl}/AddAssignRoster`, data).toPromise();
    }

    async getdataToUpdate(attendanceId, attendanceUrl) {
        return await this.ApiService.get(`${this.baseUrl}/${attendanceUrl}/${attendanceId}`).toPromise();
    }


    async updateAsignRoster(data) {

        let rosterassign = await this.getdataToUpdate(data.key, 'GetAssignRoster');
        rosterassign = { ...rosterassign, ...data.data }
        return await this.ApiService.put(`${this.baseUrl}/UpdateAssignRoster`, rosterassign).toPromise();

    }

    async DeleteAsignRoster(id) {

        return await this.ApiService.delete(`${this.baseUrl}/DeleteAssignRoster/${id}`).toPromise();
    }

    /** Attendance Flag CRUD'S */
    async getAttendanceFlags() {

        return await this.ApiService.get(`${this.baseUrl}/GetAttendanceFlags`).toPromise();
    }
    async addAttendanceFlag(data) {

        return await this.ApiService.post(`${this.baseUrl}/AddattendanceFlag`, data).toPromise();

    }

    async updateAttendanceFlag(data) {

        let attendanceflag = await this.getdataToUpdate(data.key, 'GetAttendanceFlag');
        attendanceflag = { ...attendanceflag, ...data.data } 
        return await this.ApiService.put(`${this.baseUrl}/UpdateAttendanceFlag`, attendanceflag).toPromise();

    }

    async DeleteAttendanceFlag(id) {
        return await this.ApiService.delete(`${this.baseUrl}/DeleteAttendanceFlag/${id}`).toPromise();
    }


    /** Attendance Request Approver CRUD'S */
    async getAttendanceRequestApprover() {

        return await this.ApiService.get(`${this.baseUrl}/GetAttendanceRequestApprovers`).toPromise();

    }
    async addAttendanceRequestApprover(data) {

        return await this.ApiService.post(`${this.baseUrl}/AddAttendanceRequestApprover`, data).toPromise();

    }

    async updateAttendanceRequestApprover(data) {
        return await this.ApiService.put(`${this.baseUrl}/UpdateAttendanceRequestApprover`, data).toPromise();

    }

    async DeleteAttendanceRequestApprover(id) {
        return await this.ApiService.delete(`${this.baseUrl}/DeleteAttendanceRequestApprover/${id}`).toPromise();
    }


    /** Attendance Request Approver CRUD'S */
    async getAttendanceRequestTypes() {

        return await this.ApiService.get(`${this.baseUrl}/GetAttendanceRequestTypes`).toPromise();
    }
    async addAttendanceRequestType(data) {

        return await this.ApiService.post(`${this.baseUrl}/AddAttendanceRequestType`, data).toPromise();

    }

    async updateAttendanceRequestType(data) {

        let attendanceRequestType = await this.getdataToUpdate(data.key, 'GetAttendanceRequestType');
        attendanceRequestType = { ...attendanceRequestType, ...data.data }
        return await this.ApiService.put(`${this.baseUrl}/UpdateAttendanceRequestType`, attendanceRequestType).toPromise();

    }

    async DeleteAttendanceRequestType(id) {

        return await this.ApiService.delete(`${this.baseUrl}/DeleteAttendanceRequestType/${id}`).toPromise();
    }

    /** Flag Category Approver CRUD'S */
    async getFlagCategories() {

        return await this.ApiService.get(`${this.baseUrl}/GetFlagCategories`).toPromise();
    }
    async addFlagCategory(data) {

        return await this.ApiService.post(`${this.baseUrl}/AddFlagCategory`, data).toPromise();

    }

    async updateFlagCategory(data) {

        let flagCategory = await this.getdataToUpdate(data.key, 'GetFlagCategory');
        flagCategory = { ...flagCategory, ...data.data } 
        return await this.ApiService.put(`${this.baseUrl}/UpdateFlagCategory`, flagCategory).toPromise();

    }

    async DeleteFlagCategory(id) {
        return await this.ApiService.delete(`${this.baseUrl}/DeleteFlagCategory/${id}`).toPromise();
    }

    /** Flag Effect Type CRUD'S */
    async getFlagEffectTypes() {

        return await this.ApiService.get(`${this.baseUrl}/GetFlagEffectTypes`).toPromise();
    }
    async addFlagEffectType(data) {

        return await this.ApiService.post(`${this.baseUrl}/AddFlagEffectType`, data).toPromise();
    }

    async updateFlagEffectType(data) {

        let flagEffecttype = await this.getdataToUpdate(data.key, 'GetFlagEffectType');
        flagEffecttype = { ...flagEffecttype, ...data.data }
        console.log(flagEffecttype);

        return await this.ApiService.put(`${this.baseUrl}/UpdateFlagEffectType`, flagEffecttype).toPromise();

    }

    async DeleteFlagEffectType(id) {
        return await this.ApiService.delete(`${this.baseUrl}/DeleteFlagEffectType/${id}`).toPromise();
    }

    /** Flag Type CRUD'S */
    async getFlagTypes() {

        return await this.ApiService.get(`${this.baseUrl}/GetFlagTypes`).toPromise();
    }
    async addFlagType(data) {

        return await this.ApiService.post(`${this.baseUrl}/AddFlagType`, data).toPromise();

    }

    async updateFlagType(data) {

        let flagtype = await this.getdataToUpdate(data.key, 'GetFlagType');
        flagtype = { ...flagtype, ...data.data }
        return await this.ApiService.put(`${this.baseUrl}/UpdateFlagType`, flagtype).toPromise();

    }

    async DeleteFlagType(id) {
        return await this.ApiService.delete(`${this.baseUrl}/DeleteFlagType/${id}`).toPromise();
    }

    /** Flag Value CRUD'S */
    async getFlagValues() {

        return await this.ApiService.get(`${this.baseUrl}/GetFlagValues`).toPromise();

    }
    async addFlagValue(data) {

        return await this.ApiService.post(`${this.baseUrl}/Addflagvalue`, data).toPromise();
    }

    async updateFlagValue(data) {

        let flagvalue = await this.getdataToUpdate(data.key, 'GetFlagValue');
        flagvalue = { ...flagvalue, ...data.data }

        return await this.ApiService.put(`${this.baseUrl}/UpdateFlagValue`, flagvalue).toPromise();

    }

    async DeleteFlagValue(id) {

        return await this.ApiService.delete(`${this.baseUrl}/DeleteFlagValue/${id}`).toPromise();
    }

    /** Roster CRUD'S */
    async getRosters() {
        return await this.ApiService.get(`${this.baseUrl}/GetRosters`).toPromise();
    }
    async addRoster(data) {

        return await this.ApiService.post(`${this.baseUrl}/AddRoster`, data).toPromise();

    }

    async updateRoster(data) {

        let roster = await this.getdataToUpdate(data.key, 'Getroster');
        roster = { ...roster, ...data.data }
        console.log(roster);
        return await this.ApiService.put(`${this.baseUrl}/UpdateRoster`, roster).toPromise();

    }

    async DeleteRoster(id) {

        return await this.ApiService.delete(`${this.baseUrl}/DeleteRoster/${id}`).toPromise();
    }

    /** Shift CRUD'S */
    async getShifts() {

        return await this.ApiService.get(`${this.baseUrl}/GetShifts`).toPromise();
    }

    async addShift(data) {

        return await this.ApiService.post(`${this.baseUrl}/AddShift`, data).toPromise();
    }

    async updateShift(data) {

        let shift = await this.getdataToUpdate(data.key, 'GetsSift');
        shift = { ...shift, ...data.data }
        return await this.ApiService.put(`${this.baseUrl}/UpdateShift`, shift).toPromise();

    }

    async DeleteShift(id) {
        return await this.ApiService.delete(`${this.baseUrl}/DeleteShift/${id}`).toPromise();
    }

    /** CRUD'S */
    async getAllOvertimeType() {
        return await this.ApiService.get(`${this.baseUrl}/GetOverTimeTypes`).toPromise();
    }

    async addOvertimeType(data) {
        return await this.ApiService.post(`${this.baseUrl}/AddOverTimeType`, data).toPromise();
    }

    async updateOvertimeType(data) {

        let overtimetype = await this.getdataToUpdate(data.key, 'GetOverTimeType');
        overtimetype = { ...overtimetype, ...data.data }
        return await this.ApiService.put(`${this.baseUrl}/UpdateOverTimeType`, overtimetype).toPromise();

    }

    async DeleteOvertimeType(overtimetypeId) {
        return await this.ApiService.delete(`${this.baseUrl}/DeleteOverTimeType/${overtimetypeId}`).toPromise();
    }

    /** CRUD'S */
    async getAllOvertimeFlag() {
        return await this.ApiService.get(`${this.baseUrl}/GetOverTimeFlags`).toPromise();
    }

    async addOvertimeFlag(data) {
        return await this.ApiService.post(`${this.baseUrl}/AddOverTimeFlag`, data).toPromise();
    }

    async updateOvertimeFlag(data) {

        let overtimeflag = await this.getdataToUpdate(data.key, 'GetOverTimeFlag');
        overtimeflag = { ...overtimeflag, ...data.data }
        return await this.ApiService.put(`${this.baseUrl}/UpdateOverTimeFlag`, overtimeflag).toPromise();

    }

    async DeleteOvertimeFlag(overtimeflagId) {

        return await this.ApiService.delete(`${this.baseUrl}/DeleteOverTimeFlag/${overtimeflagId}`).toPromise();
    }

}
