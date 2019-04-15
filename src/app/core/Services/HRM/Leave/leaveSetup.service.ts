import { Injectable } from '@angular/core';
import { ApiService } from '../../api.service';
import { Observable } from 'rxjs';
 
@Injectable()
export class LeaveSetupService {

    public baseUrl: string = "SystemAdmin/api/LeaveSetup";

    constructor(public ApiService: ApiService) { }

    async getLeavePolicies() {
        return await this.ApiService.get(`${this.baseUrl}/GetLeavePolicies`).toPromise();
    }

    getLeavePoliciy(id): Observable <any>{
        return this.ApiService.get(this.baseUrl +'/GetLeavePolicy/' + id);
    }

    async getdataToUpdate(leavesId, leavesUrl) {
        return await this.ApiService.get(`${this.baseUrl}/${leavesUrl}/${leavesId}`).toPromise();
    }

    async addLeavePolicy(data) {
        return await this.ApiService.post(`${this.baseUrl}/AddLeavePolicy`, data).toPromise();
    }

    async updateLeavePolicy(data) {
        return await this.ApiService.put(`${this.baseUrl}/UpdateLeavePolicy`, data).toPromise();
    }

    async deleteLeavPolicy(leavpolicyId) {
        return await this.ApiService.delete(`${this.baseUrl}/DeleteLeavePolicy/${leavpolicyId}`).toPromise();
    }

    async getLeavePurposes() {

        return await this.ApiService.get(`${this.baseUrl}/GetLeavePurposes`).toPromise();
    }

    async addLeavePurpose(data) {
        return await this.ApiService.post(`${this.baseUrl}/AddLeavePurpose`, data).toPromise();
    }

    async updateLeavePurpose(data) {
        return await this.ApiService.put(`${this.baseUrl}/UpdateLeavePurpose`, data).toPromise();
    }


    async DeleteLeavPurpose(leavpurposeId) {
        return await this.ApiService.delete(`${this.baseUrl}/DeleteLeavePurpose/${leavpurposeId}`).toPromise();
    }

    async getLeaveYears() {
        return await this.ApiService.get(`${this.baseUrl}/GetLeaveYears`).toPromise();
    }

    async addLeaveYear(data) {

        return await this.ApiService.post(`${this.baseUrl}/AddLeaveYear`, data).toPromise();
    }

    async updateLeaveYear(data) {
        return await this.ApiService.put(`${this.baseUrl}/UpdateLeaveYear`, data).toPromise();
    }

    async DeleteLeaveYear(leavyearId) {

        return await this.ApiService.delete(`${this.baseUrl}/DeleteLeaveYear/${leavyearId}`).toPromise();
    }


    async getLeaveApprovers() {
        return await this.ApiService.get(`${this.baseUrl}/GetLeaveApprovers`).toPromise();
    }


    async addLeaveApprover(data) {

        return await this.ApiService.post(`${this.baseUrl}/AddLeaveApprover`, data).toPromise();
    }

    async updateLeaveApprover(data) { 
        return await this.ApiService.put(`${this.baseUrl}/UpdateLeaveApprover`, data).toPromise();
    }

    async DeleteLeaveApprover(leaveapproverId) {
        return await this.ApiService.delete(`${this.baseUrl}/DeleteLeaveApprover/${leaveapproverId}`).toPromise();
    }


    async getLeaveDayTypes() {

        return await this.ApiService.get(`${this.baseUrl}/GetLeaveDayTypes`).toPromise();
    }

    async addLeaveDayType(data) {
        return await this.ApiService.post(`${this.baseUrl}/AddLeaveDayType`, data).toPromise();
    }

    async updateLeaveDayType(data) {

        return await this.ApiService.put(`${this.baseUrl}/UpdateLeaveDayType`, data).toPromise();
    }

    async DeleteLeaveDayType(leavedaytypeId) {
        return await this.ApiService.delete(`${this.baseUrl}/DeleteLeaveDayType/${leavedaytypeId}`).toPromise();
    }

    async getLeaveEligibilities() {
        return await this.ApiService.get(`${this.baseUrl}/GetLeaveEligibilities`).toPromise();
    }

    async addLeaveEligibility(data) {
        return await this.ApiService.post(`${this.baseUrl}/AddLeaveEligibility`, data).toPromise();
    }

    async updateLeaveEligibility(data) {
        let leaveeligibility = await this.getdataToUpdate(data.key, 'GetLeaveeligibility');
        leaveeligibility = { ...leaveeligibility, ...data.data }
        return await this.ApiService.put(`${this.baseUrl}/UpdateLeaveEligibility`, leaveeligibility).toPromise();
    }

    async deleteLeaveEligibility(leaveeligibilityId) {
        return await this.ApiService.delete(`${this.baseUrl}/DeleteLeaveEligibility/${leaveeligibilityId}`).toPromise();
    }

    async getLeaveEmpPolicies() {

        return await this.ApiService.get(`${this.baseUrl}/GetLeavePolicyEmployees`).toPromise();
    }
    async addLeaveEmpPolicy(data) {
        return await this.ApiService.post(`${this.baseUrl}/AddLeavePolicyEmployee`, data).toPromise();
    }

    async updateLeaveEmpPolicy(data) {
        return await this.ApiService.put(`${this.baseUrl}/UpdateLeavePolicyEmployee`, data).toPromise();
    }

    async deleteLeaveEmpPolicy(leaveemppolicyId) {
        return await this.ApiService.delete(`${this.baseUrl}/DeleteLeavePolicyEmployee/${leaveemppolicyId}`).toPromise();
    }

    async getLeaveTypes() {
        return await this.ApiService.get(`${this.baseUrl}/GetLeaveTypes`).toPromise();
    }

    async addLeaveType(data) {
        return await this.ApiService.post(`${this.baseUrl}/AddLeaveType`, data).toPromise();
    }

    async updateLeaveType(data) {
        let leavetype = await this.getdataToUpdate(data.key, 'GetLeaveType');
        leavetype = { ...leavetype, ...data.data }
        return await this.ApiService.put(`${this.baseUrl}/UpdateLeaveType`, leavetype).toPromise();
    }

    async deleteLeaveType(leaveTypeId) {

        return await this.ApiService.delete(`${this.baseUrl}/DeleteLeaveType/${leaveTypeId}`).toPromise();
    }

    async getLeaveTypeBalances() {
        return await this.ApiService.get(`${this.baseUrl}/GetLeaveTypeBalances`).toPromise();
    }

    async addLeaveTypeBalance(data) {
        return await this.ApiService.post(`${this.baseUrl}/AddLeaveTypeBalance`, data).toPromise();
    }

    async updateLeaveTypeBalance(data) {
        let leavetypebalance = await this.getdataToUpdate(data.key, 'GetLeaveTypeBalance');
        leavetypebalance = { ...leavetypebalance, ...data.data }
        return await this.ApiService.put(`${this.baseUrl}/UpdateLeaveTypeBalance`, leavetypebalance).toPromise();
    }

    async deleteLeaveTypeBalance(leavetypebalanceId) {
        return await this.ApiService.delete(`${this.baseUrl}/DeleteLeaveTypeBalance/${leavetypebalanceId}`).toPromise();
    }

    async getDecimalRoundingMatrixs() {
        return await this.ApiService.get(`${this.baseUrl}/GetDecimalRoundingMatrixs`).toPromise();
    }

    async addRoundingMatrix(data) {
        return await this.ApiService.post(`${this.baseUrl}/AddDecimalRoundingMatrix`, data).toPromise();
    }

    async updateDecimalRoundingMatrix(data) {
        return await this.ApiService.put(`${this.baseUrl}/UpdateDecimalRoundingMatrix`, data).toPromise();
    }

    async deleteDecimalRoundingMatrix(id) {
        return await this.ApiService.delete(`${this.baseUrl}/DeleteDecimalRoundingMatrix/${id}`).toPromise();
    }

    async getProrateMatrixs() {
        return await this.ApiService.get(`${this.baseUrl}/GetProrateMatrixs`).toPromise();
    }

    async addProrateMatrix(data) {
        return await this.ApiService.post(`${this.baseUrl}/AddProrateMatrix`, data).toPromise();
    }

    async updateProrateMatrix(data) {
        return await this.ApiService.put(`${this.baseUrl}/UpdateProrateMatrix`, data).toPromise();
    }

    async deleteprorateMatrix(id) {
        return await this.ApiService.delete(`${this.baseUrl}/DeleteProrateMatrix/${id}`).toPromise();
    }

    async getLeaveSubTypes() {
        return await this.ApiService.get(`${this.baseUrl}/GetLeaveSubTypes`).toPromise();
    }

    async addLeaveSubType(data) {
        return await this.ApiService.post(`${this.baseUrl}/AddLeaveSubType`, data).toPromise();
    }

    async updateLeaveSubType(data) {
        let subtype = await this.getdataToUpdate(data.key, 'GetLeaveSubType');
        subtype = { ...subtype, ...data.data }
        return await this.ApiService.put(`${this.baseUrl}/UpdateLeaveSubType`, subtype).toPromise();
    }

    async deleteLeaveSubType(id) {
        return await this.ApiService.delete(`${this.baseUrl}/DeleteLeaveSubType/${id}`).toPromise();
    }

}

