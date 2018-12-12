import { Injectable } from '@angular/core';
import { ApiService } from '../../api.service';
import { Observable } from 'rxjs';


@Injectable()
export class SetupService {

    refresh(): any {
        throw new Error("Method not implemented.");
    }

    private hrUrl: string = "SystemAdmin/api/HrSetup";

    constructor(private ApiService: ApiService) { }

    async getdataToUpdate(countryId, countryUrl) {
        return await this.ApiService.get(`${this.hrUrl}/${countryUrl}/${countryId}`).toPromise();
    }


    /** CRUD METHODS BANK */
    async getAllBanks() {

        return await this.ApiService.get(`${this.hrUrl}/GetBanks`).toPromise();
    }

    // DEMO ONLY, you can find working methods below
    async addbank(data) {

        await this.ApiService.post(`${this.hrUrl}/AddBank`, data).toPromise();
    }


    async updateBank(data) {
        let bank = await this.getdataToUpdate(data.key, 'GetBank');
        bank = { ...bank, ...data.data }
        return await this.ApiService.put(`${this.hrUrl}/UpdateBank`, bank).toPromise();

    }

    async DeleteBank(id) {
        return await this.ApiService.delete(`${this.hrUrl}/DeleteBank/${id}`).toPromise();
    }

    /** CRUD METHODS EmployeeTypes */
    async getAllEmployeeTypes() {
        return await this.ApiService.get(`${this.hrUrl}/GetEmployeeTypes`).toPromise();

    }

    // DEMO ONLY, you can find working methods below
    async addEmployeeType(data) {
        return await this.ApiService.post(`${this.hrUrl}/addEmployeeType`, data).toPromise();

    }

    async updateEmployeeType(data) {

        let emptype = await this.getdataToUpdate(data.key, 'GetEmployeeType');
        emptype = { ...emptype, ...data.data }
        return await this.ApiService.put(`${this.hrUrl}/UpdateEmployeeType`, emptype).toPromise();
    }

    async DeleteEmployeeType(id) {

        return await this.ApiService.delete(`${this.hrUrl}/DeleteEmployeeType/${id}`).toPromise();
    }

    async getAllFunctions() {
        return await this.ApiService.get(`${this.hrUrl}/GetFunctions`).toPromise();
    }

    async addFunction(data) {
        await this.ApiService.post(`${this.hrUrl}/AddFunction`, data).toPromise();
    }

    async updatefunction(data) {

        let funct = await this.getdataToUpdate(data.key, 'GetFunction');
        funct = { ...funct, ...data.data }

        return await this.ApiService.put(`${this.hrUrl}/UpdateFunction`, funct).toPromise();
    }

    async Deletefunction(id) {
        return await this.ApiService.delete(`${this.hrUrl}/DeleteFunction/${id}`).toPromise();

    }

    /** CRUD METHODS Qualification */

    async getAllqualifications() {
        return await this.ApiService.get(`${this.hrUrl}/GetQualifications`).toPromise();
    }

    // DEMO ONLY, you can find working methods below
    async addQualification(data) {
        return await this.ApiService.post(`${this.hrUrl}/AddQualification`, data).toPromise();
    }

    async updateQualification(data) {

        let qf = await this.getdataToUpdate(data.key, 'GetQualification');
        qf = { ...qf, ...data.data }
        return await this.ApiService.put(`${this.hrUrl}/UpdateQualification`, qf).toPromise();
    }

    async DeleteQualification(id) {

        return await this.ApiService.delete(`${this.hrUrl}/DeleteQualification/${id}`).toPromise();
    }

    async getEmployeeStatus() {
        return await this.ApiService.get(`${this.hrUrl}/GetEmployeeStatuses`).toPromise();
    }

    async addEmployeeStatus(data) {
        return await this.ApiService.post(`${this.hrUrl}/AddEmployeeStatus`, data).toPromise();
    }

    async updateEmployeeStatus(data) {

        let estatus = await this.getdataToUpdate(data.key, 'GetEmployeeStatus');
        estatus = { ...estatus, ...data.data }
        return await this.ApiService.put(`${this.hrUrl}/UpdateEmployeeStatus`, estatus).toPromise();
    }

    async DeleteEmployeeStatus(id) {
        return await this.ApiService.delete(`${this.hrUrl}/DeleteEmployeeStatus/${id}`).toPromise();
    }

    async getAllReligions() {
        return await this.ApiService.get(`${this.hrUrl}/GetReligions`).toPromise();
    }

    async addReligion(data) {
        return await this.ApiService.post(`${this.hrUrl}/AddReligion/`, data).toPromise();
    }

    async updateReligion(data) {

        let rlg = await this.getdataToUpdate(data.key, 'GetReligion');
        rlg = { ...rlg, ...data.data }
        return await this.ApiService.put(`${this.hrUrl}/UpdateReligion`, rlg).toPromise();
    }

    async DeleteReligion(id) {
        return await this.ApiService.delete(`${this.hrUrl}/DeleteReligion/${id}`).toPromise();
    }

    /** CRUD METHODS Degree */

    getAllDegrees() {

        return this.ApiService.get(`${this.hrUrl}/GetDegrees`);
    }

    // DEMO ONLY, you can find working methods below
    async addDegree(data) {
        return await this.ApiService.post(`${this.hrUrl}/AddDegree`, data).toPromise();
    }

    async updateDegree(data) {

        let deg = await this.getdataToUpdate(data.key, 'GetDegree');
        deg = { ...deg, ...data.data }

        return await this.ApiService.put(`${this.hrUrl}/UpdateDegree`, deg).toPromise();

    }

    async DeleteDegree(id) {

        return await this.ApiService.delete(`${this.hrUrl}/DeleteDegree/${id}`).toPromise();

    }

    /** CRUD METHODS  FOR DESIGNATIONS*/

    async getAllDesignations() {

        return await this.ApiService.get(`${this.hrUrl}/GetDesignations`).toPromise();

    }

    // DEMO ONLY, you can find working methods below
    async addDesignation(data) {
        return await this.ApiService.post(`${this.hrUrl}/AddDesignation`, data).toPromise();
    }


    async updateDesignation(data) {

        let desg = await this.getdataToUpdate(data.key, 'GetDesignation');
        desg = { ...desg, ...data.data }
        return await this.ApiService.put(`${this.hrUrl}/UpdateDesignation`, desg).toPromise();
    }

    async DeleteDesignation(id) {
        return await this.ApiService.delete(`${this.hrUrl}/DeleteDesignation/${id}`).toPromise();
    }


    /** CRUD METHODS  FOR managementlevel*/
    async getAllManagementlevels() {
        let a = await this.ApiService.get(`${this.hrUrl}/GetManagementLevels`).toPromise();
        return a;

    }

    // DEMO ONLY, you can find working methods below
    async addManagementLevel(data) {
        return await this.ApiService.post(`${this.hrUrl}/AddManagementLevel`, data).toPromise();
    }



    async updateManagementLevel(data) {

        let mlevel = await this.getdataToUpdate(data.key, 'GetManagementLevel');
        mlevel = { ...mlevel, ...data.data }
        return await this.ApiService.put(`${this.hrUrl}/UpdateManagementLevel`, mlevel).toPromise();
    }

    async DeleteManagementLevel(id) {
        return await this.ApiService.delete(`${this.hrUrl}/DeleteManagementLevel/${id}`).toPromise();
    }



    /** CRUD METHODS  FOR group*/

    async getAllGroups() {
        return await this.ApiService.get(`${this.hrUrl}/GetGroups`).toPromise();
    }
    async addGroup(data) {

        return await this.ApiService.post(`${this.hrUrl}/AddGroup`, data).toPromise();
    }

    async updateGroup(data) {

        let group = await this.getdataToUpdate(data.key, 'GetGroup');
        group = { ...group, ...data.data }

        return await this.ApiService.put(`${this.hrUrl}/UpdateGroup`, group).toPromise();
    }

    async DeleteGroup(id) {

        return await this.ApiService.delete(`${this.hrUrl}/DeleteGroup/${id}`).toPromise();
    }

    /** CRUD METHODS  FOR CostCenter*/

    async getAllCostCenter() {

        return await this.ApiService.get(`${this.hrUrl}/GetCostCenters`).toPromise();

    }

    async addCostCenter(data) {
        return await this.ApiService.post(`${this.hrUrl}/AddCostCenter`, data).toPromise();
    }

    async updateCostCenter(data) {

        let cc = await this.getdataToUpdate(data.key, 'GetCostCenter');
        cc = { ...cc, ...data.data }
        return await this.ApiService.put(`${this.hrUrl}/UpdateCostCenter`, cc).toPromise();
    }

    async DeleteCostCenter(id) {

        return await this.ApiService.delete(`${this.hrUrl}/DeleteCostCenter/${id}`).toPromise();
    }


    async getAllLanguages() {

        return await this.ApiService.get(`${this.hrUrl}/GetLanguages`).toPromise();
    }

    // DEMO ONLY, you can find working methods below
    async addLanguage(data) {

        return await this.ApiService.post(`${this.hrUrl}/AddLanguage`, data).toPromise();
    }

    async updateLanguage(data) {

        let lang = await this.getdataToUpdate(data.key, 'GetLanguage');
        lang = { ...lang, ...data.data }
        return await this.ApiService.put(`${this.hrUrl}/UpdateLanguage`, lang).toPromise();
    }

    async DeleteLanguage(id) {
        return await this.ApiService.delete(`${this.hrUrl}/DeleteLanguage/${id}`).toPromise();

    }

    async getAllGazettedHolidays() {
        return await this.ApiService.get(`${this.hrUrl}/GetHolidays`).toPromise();

    }

    async addGazettedHolidays(data) {
        return await this.ApiService.post(`${this.hrUrl}/AddHoliday`, data).toPromise();
    }

    async updateGazettedHolidays(data) {

        let hd = await this.getdataToUpdate(data.key, 'GetHoliday');
        hd = { ...hd, ...data.data }
        return await this.ApiService.put(`${this.hrUrl}/UpdateHoliday`, hd).toPromise();
    }

    async DeleteGazettedHolidays(id) {
        return await this.ApiService.delete(`${this.hrUrl}/DeleteHoliday/${id}`).toPromise();
    }


    async getAllSkillLevels() {
        return await this.ApiService.get(`${this.hrUrl}/GetSkillLevels`).toPromise();

    }
    async addSkillLevel(data) {
        return await this.ApiService.post(`${this.hrUrl}/AddSkillLevel`, data).toPromise();
    }

    async updateSkillLevel(data) {
        let skl = await this.getdataToUpdate(data.key, 'GetSkillLevel');
        skl = { ...skl, ...data.data }
        return await this.ApiService.put(`${this.hrUrl}/UpdateSkillLevel`, skl).toPromise();
    }

    async DeleteSkillLevel(id) {
        return await this.ApiService.delete(`${this.hrUrl}/DeleteSkillLevel/${id}`).toPromise();
    }

    async getAllRelation() {
        return await this.ApiService.get(`${this.hrUrl}/GetRelations`).toPromise();
    }

    // DEMO ONLY, you can find working methods below
    async addRelation(data) {
        return await this.ApiService.post(`${this.hrUrl}/AddRelation`, data).toPromise();
    }

    async updateRelation(data) {

        let relation = await this.getdataToUpdate(data.key, 'GetRelation');
        relation = { ...relation, ...data.data }
        return await this.ApiService.put(`${this.hrUrl}/UpdateRelation`, relation).toPromise();
    }

    async DeleteRelation(id) {
        return await this.ApiService.delete(`${this.hrUrl}/DeleteRelation/${id}`).toPromise();

    }

    async getAllUniversities() {

        return await this.ApiService.get(`${this.hrUrl}/GetUniversities`).toPromise();
    }

    async adduniversity(data) {
        return await this.ApiService.post(`${this.hrUrl}/AddUniversity`, data).toPromise();
    }

    async updateuniversity(data) {

        let uni = await this.getdataToUpdate(data.key, 'GetUniversity');
        uni = { ...uni, ...data.data }
        return await this.ApiService.put(`${this.hrUrl}/UpdateUniversity`, uni).toPromise();
    }

    async Deleteuniversity(id) {
        return await this.ApiService.delete(`${this.hrUrl}/DeleteUniversity/${id}`).toPromise();
    }





    async getAllGender() {
        return await this.ApiService.get(`${this.hrUrl}/`);
    }

    async addGenders(data) {
        return await this.ApiService.post(`${this.hrUrl}/addGender`, data).toPromise();
    }

    async updateGenders(data) {
        return await this.ApiService.put(`${this.hrUrl}/UpdateGender`, data.key).toPromise();
    }

    async DeleteGenders(data) {
        return await this.ApiService.delete(`${this.hrUrl}/DeleteGender` + data.key).toPromise();
    }

}


