import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Country } from '../models/country,interface';
import { Department } from '../models/department.interface';
import { EmployeeType } from '../models/employeetype,interface';
import { Branch } from '../models/branch,interface';
import { Grade } from '../models/grade,interface';
import { Function } from '../models/function,interface';
import { QualificationComponent } from '../qualification/qualification.component';
import { Qualification } from '../models/qualification,interface';
import { EmployeeStatus } from '../models/EmployeeStatus,interface';
import { MaritalStatus } from '../models/maritalstatus,interface';
import { Religion } from '../models/religion,interface';
import { Roster } from '../models/roster,interface';
import { Shift } from '../models/shift,interface';
import { componentRefresh } from '@angular/core/src/render3/instructions';

import { Bank } from '../models/bank,interface';
import { Degree } from '../models/degree,interface';
import { Accounttype } from '../models/accounttype,interface';
import { Designation } from '../models/designation,interface';
import { ManagementLevel } from '../models/managementlevel,interface';
import { Group } from '../models/group,interface';
import { CostCenter } from '../models/costcenter,interface';
import { Language } from '../models/language,interface';
import { GazettedHolidays } from '../models/gazettedholidays,interface';
import { SkillLevels } from '../models/skilllevel,interface';
import { BloodGroup } from '../models/bloodgroup,interface';
import { LeaveType } from '../models/leavetype,interface';
import { AdvanceType } from '../models/advancetype,interface';
import { AllowancesType } from '../models/allowancestype,interface';
import { Relation } from '../models/relation,interface';
import { City } from '../models/city,interface';
import { Gender } from '../models/gender,interface';

@Injectable()
export class SetupService {
    university: any;
    currentCountry: any;
    refresh(): any {
        throw new Error("Method not implemented.");
    }



     private baseUrl: string = "http://gbsc-erp.azurewebsites.net/SystemAdmin/api/HrSetup";
   // private baseUrl: string = "http://localhost:58090/api/HrSetup";
    public country: any;
    public department: any;
    public bank: any;
    public employeetype: any;
    public branch: any;
    public function: any;
    public grades: any;
    public qualification: any;
    public employeestatus: any;
    public maritalstatus: any;
    public religion: any;
    public roster: any;
    public shift: any;
    public degree: any;
    public accounttype: any;
    public designation: any;
    public managementlevel: any;
    public group: any;
    public costcenter: any;
    public language: any;
    public gazetholidays: any;
    public skilllevels: any;
    public bloodgroup: any;
    public leavetype: any;
    public allowancetype: any;
    public advancetype: any;
    public relation: any;
    public city: any;
    public gender: any;



    constructor(private httpClient: HttpClient) { }

    /** CRUD METHODS  Country*/
    /** CRUD METHODS */
    async getAllCountries() {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

        this.country = await this.httpClient.get('http://localhost:58090/api/Setup/GetCountries').toPromise();
        //console.log(features);
        console.log(this.country);
        return this.country;

        // return country;
        //  return await this.httpClient.get<Country>(this.API_URL);
        // (error: HttpErrorResponse) => {
        //   console.log(error.name + ' ' + error.message);
        // });
    }

    async getdataToUpdate(countryId, countryUrl) {
        return await this.httpClient.get(`${this.baseUrl}/${countryUrl}/${countryId}`).toPromise();
    }


    // DEMO ONLY, you can find working methods below
    async addCountry(data) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        let newcountry = await this.httpClient.post('http://localhost:58090/api/Setup/AddCountry', data, headers).toPromise();
        console.log(newcountry);

    }

    async updateCountry(data) {

        console.log(data.key);
        console.log(data);

        let country = await this.getdataToUpdate(data.key, 'GetCountry');
        country = { ...country, ...data.data }
        console.log(country);
        // let authToken = localStorage.getItem('auth_token');  
        // let headers = {headers: {'Content-Type':'application/json'}}
        return await this.httpClient.put('http://localhost:58090/api/Setup/UpdateCountry', country).toPromise();

    }



    async DeleteCountry(countryId) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
        return await this.httpClient.delete('http://localhost:58090/api/Setup/DeleteCountry/${countryId}').toPromise();
    }

    /** CRUD METHODS  FOR DESIGNATIONS*/


    /** CRUD METHODS DEPARTMENTS */
    async getAllDepartments() {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

        this.department = await this.httpClient.get(`${this.baseUrl}/GetAllDepartment`).toPromise();
        return this.department;
    }

    // DEMO ONLY, you can find working methods below
    async addDepartment(data) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        let newdepart = await this.httpClient.post(`${this.baseUrl}/addDepartment`, data, headers).toPromise();

    }




    async updateDepartment(data) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        return await this.httpClient.post(`${this.baseUrl}/addDepartment`, data.key, headers).toPromise();

    }

    async DeleteDepartment(data) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

        return await this.httpClient.get(`${this.baseUrl}/DeleteDepartment` + data.key).toPromise();
    }






    /** CRUD METHODS BANK */
    async getAllBanks() {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

        this.bank = await this.httpClient.get(`${this.baseUrl}/GetBanks`).toPromise();
        return this.bank;
        // (error: HttpErrorResponse) => {
        //     console.log(error.name + ' ' + error.message);
        //   };
    }

    // DEMO ONLY, you can find working methods below
    async addbank(data) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        let newbank = await this.httpClient.post(`${this.baseUrl}/AddBank`, data, headers).toPromise();
        console.log(newbank);

    }


    async updateBank(data) {

        console.log(data.key);
        console.log(data);

        let bank = await this.getdataToUpdate(data.key, 'GetBank');
        bank = { ...bank, ...data.data }
        console.log(bank);
        // let authToken = localStorage.getItem('auth_token');  
        // let headers = {headers: {'Content-Type':'application/json'}}
        return await this.httpClient.put(`${this.baseUrl}/UpdateBank`, bank).toPromise();

    }

    async DeleteBank(id) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
        return await this.httpClient.delete(`${this.baseUrl}/DeleteBank/${id}`).toPromise();
    }

    /** CRUD METHODS EmployeeTypes */
    async getAllEmployeeTypes() {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

        this.employeetype = await this.httpClient.get(`${this.baseUrl}/GetEmployeeTypes`).toPromise();
        return this.employeetype;
    }

    // DEMO ONLY, you can find working methods below
    async addEmployeeType(data) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        return await this.httpClient.post(`${this.baseUrl}/addEmployeeType`, data, headers).toPromise();

    }

    async updateEmployeeType(data) {

        let emptype = await this.getdataToUpdate(data.key, 'GetEmployeeType');
        emptype = { ...emptype, ...data.data }
        console.log(emptype);
        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        return await this.httpClient.put(`${this.baseUrl}/UpdateEmployeeType`, emptype, headers).toPromise();
    }

    async DeleteEmployeeType(id) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

        return await this.httpClient.delete(`${this.baseUrl}/DeleteEmployeeType/${id}`).toPromise();
    }

    /** CRUD METHODS Branch */

    async getAllbranches() {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

        this.branch = await this.httpClient.get(`${this.baseUrl}/GetAllBranches`).toPromise();
        return this.branch;
    }

    // DEMO ONLY, you can find working methods below
    async addBranch(data) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        return await this.httpClient.post(`${this.baseUrl}/addBranch`, data, headers).toPromise();

    }

    async updateBranch(data) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        return await this.httpClient.post(`${this.baseUrl}/addBranch`, data.key, headers).toPromise();
    }

    async DeleteBranch(data) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

        return await this.httpClient.get(`${this.baseUrl}/DeleteBranch` + data.key).toPromise();
    }

    /** CRUD METHODS Function */

    async getAllFunctions() {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

        this.function = await this.httpClient.get(`${this.baseUrl}/GetFunctions`).toPromise();
        return this.function;
    }

    // DEMO ONLY, you can find working methods below
    async addFunction(data) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        let newfunction = await this.httpClient.post(`${this.baseUrl}/AddFunction`, data, headers).toPromise();
    }

    async updatefunction(data) {

        let funct = await this.getdataToUpdate(data.key, 'GetFunction');
        funct = { ...funct, ...data.data }
        console.log(funct);

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        return await this.httpClient.put(`${this.baseUrl}/UpdateFunction`, funct, headers).toPromise();
    }

    async Deletefunction(id) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

        return await this.httpClient.delete(`${this.baseUrl}/DeleteFunction/${id}`).toPromise();

    }

    /** CRUD METHODS Grade */

    async getAllgrades() {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

        this.grades = await this.httpClient.get(`${this.baseUrl}/GetGrades`).toPromise();
        console.log(this.grades);
        return this.grades;

    }


    // DEMO ONLY, you can find working methods below
    async addGrade(data) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        this.grades = await this.httpClient.post(`${this.baseUrl}/AddGrade`, data, headers).toPromise();
        return this.grades;
    }

    async updateGrade(data) {
        ``

        let grade = await this.getdataToUpdate(data.key, 'GetGrade');
        grade = { ...grade, ...data.data }
        console.log(grade);

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        return await this.httpClient.put(`${this.baseUrl}/UpdateGrade`, grade, headers).toPromise();
    }

    async DeleteGrade(id) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

        return await this.httpClient.delete(`${this.baseUrl}/DeleteGrade/${id}`).toPromise();

    }


    /** CRUD METHODS Qualification */

    async getAllqualifications() {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

        this.qualification = await this.httpClient.get(`${this.baseUrl}/GetQualifications`).toPromise();
        return this.qualification;
        // (error: HttpErrorResponse) => 
        //   console.log(error.name + ' ' + error.message);
        // });
    }

    // DEMO ONLY, you can find working methods below
    async addQualification(data) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        this.qualification = await this.httpClient.post(`${this.baseUrl}/AddQualification`, data, headers).toPromise();
        return this.qualification;
    }

    async updateQualification(data) {

        let qf = await this.getdataToUpdate(data.key, 'GetQualification');
        qf = { ...qf, ...data.data }
        console.log(qf);

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        return await this.httpClient.put(`${this.baseUrl}/UpdateQualification`, qf, headers).toPromise();
    }

    async DeleteQualification(id) {
        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

        return await this.httpClient.delete(`${this.baseUrl}/DeleteQualification/${id}`).toPromise();
        // },
        //   (error: HttpErrorResponse) => {
        //     console.log(error.name + ' ' + error.message);
        //   });

    }

    /** CRUD METHODS EmployeeStatus */

    async getAllEmployeeStatus() {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

        this.employeestatus = await this.httpClient.get(`${this.baseUrl}/GetEmployeeStatuses`).toPromise();
        return this.employeestatus;
        // (error: HttpErrorResponse) => {
        //   console.log(error.name + ' ' + error.message);
        // });
    }

    // DEMO ONLY, you can find working methods below
    async addEmployeeStatus(data) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        this.employeestatus = await this.httpClient.post(`${this.baseUrl}/AddEmployeeStatus`, data, headers).toPromise();
        return this.employeestatus;
    }

    async updateEmployeeStatus(data) {

        let estatus = await this.getdataToUpdate(data.key, 'GetEmployeeStatus');
        estatus = { ...estatus, ...data.data }
        console.log(estatus);

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        return await this.httpClient.put(`${this.baseUrl}/UpdateEmployeeStatus`, estatus, headers).toPromise();
    }

    async DeleteEmployeeStatus(id) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

        return await this.httpClient.delete(`${this.baseUrl}/DeleteEmployeeStatus/${id}`).toPromise();

    }


    /** CRUD METHODS MaritalStatus */

    async getAllMaritalStatus() {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

        this.maritalstatus = await this.httpClient.get(`${this.baseUrl}/GetMaritialStatuses`).toPromise();
        return this.maritalstatus;
    }

    // DEMO ONLY, you can find working methods below
    async addMaritalStatus(data) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        this.maritalstatus = await this.httpClient.post(`${this.baseUrl}/AddMaritialStatus/`, data, headers).toPromise();
        return this.maritalstatus;
    }

    async updateMaritalStatus(data) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        return await this.httpClient.put(`${this.baseUrl}/UpdateMaritialStatus/`, data.key, headers).toPromise();
    }

    async DeleteMaritalStatus(data) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

        return await this.httpClient.get(`${this.baseUrl}/DeleteMaritialStatus/` + data.key).toPromise();
        // },
        //   (error: HttpErrorResponse) => {
        //     console.log(error.name + ' ' + error.message);
        //   });

    }

    /** CRUD METHODS Religion */

    async getAllReligions() {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

        this.religion = await this.httpClient.get(`${this.baseUrl}/GetReligions`).toPromise();
        return this.religion;
        // (error: HttpErrorResponse) => {
        //   console.log(error.name + ' ' + error.message);
        // });
    }

    // DEMO ONLY, you can find working methods below
    async addReligion(data) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        this.religion = await this.httpClient.post(`${this.baseUrl}/AddReligion/`, data, headers).toPromise();
        return this.religion;
    }

    async updateReligion(data) {

        let rlg = await this.getdataToUpdate(data.key, 'GetReligion');
        rlg = { ...rlg, ...data.data }
        console.log(rlg);

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        return await this.httpClient.put(`${this.baseUrl}/UpdateReligion`, rlg, headers).toPromise();
    }

    async DeleteReligion(id) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

        return await this.httpClient.delete(`${this.baseUrl}/DeleteReligion/${id}`).toPromise();
        // },
        //   (error: HttpErrorResponse) => {
        //     console.log(error.name + ' ' + error.message);
        //   });


    }



    /** CRUD METHODS ROSTER */

    async getAllRosters() {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

        this.roster = await this.httpClient.get(`${this.baseUrl}/GetRosters`).toPromise();


        // (error: HttpErrorResponse) => {
        //   console.log(error.name + ' ' + error.message);
        // });
    }

    // DEMO ONLY, you can find working methods below
    async addRoster(data) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        this.roster = await this.httpClient.post(`${this.baseUrl}/AddRoster`, data, headers).toPromise();
        return this.roster;
    }

    async updateRoster(data) {

        let roster = await this.getdataToUpdate(data.key, 'GetRoster');
        roster = { ...roster, ...data.data }
        console.log(roster);

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        return await this.httpClient.put(`${this.baseUrl}/UpdateRoster`, roster, headers).toPromise();
    }

    async DeleteRoster(id) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

        return await this.httpClient.delete(`${this.baseUrl}/DeleteRoster/${id}`).toPromise();

    }

    /** CRUD METHODS Shift */

    async getAllShifts() {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

        this.shift = await this.httpClient.get(`${this.baseUrl}/GetShifts`).toPromise();
        return this.shift;
        // (error: HttpErrorResponse) => {
        //   console.log(error.name + ' ' + error.message);
        // });
    }

    // DEMO ONLY, you can find working methods below
    async addShift(data) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        this.shift = await this.httpClient.post(`${this.baseUrl}/AddShift`, data, headers).toPromise();
        return this.shift;
    }

    async updateShift(data) {

        let shft = await this.getdataToUpdate(data.key, 'GetShift');
        shft = { ...shft, ...data.data }
        console.log(shft);

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        return await this.httpClient.put(`${this.baseUrl}/UpdateShift`, shft, headers).toPromise();
    }

    async DeleteShift(id) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

        return await this.httpClient.delete(`${this.baseUrl}/DeleteShift/${id}`).toPromise();

    }

    /** CRUD METHODS Degree */

    async getAllDegrees() {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

        this.degree = await this.httpClient.get(`${this.baseUrl}/GetDegrees`).toPromise();
        return this.degree;
        // (error: HttpErrorResponse) => {
        //   console.log(error.name + ' ' + error.message);
        // });
    }

    // DEMO ONLY, you can find working methods below
    async addDegree(data) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        this.degree = await this.httpClient.post(`${this.baseUrl}/AddDegree`, data, headers).toPromise();
        return this.degree;
    }

    async updateDegree(data) {

        let deg = await this.getdataToUpdate(data.key, 'GetDegree');
        deg = { ...deg, ...data.data }
        console.log(deg);

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        return await this.httpClient.put(`${this.baseUrl}/UpdateDegree`, deg, headers).toPromise();

    }

    async DeleteDegree(id) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

        return await this.httpClient.delete(`${this.baseUrl}/DeleteDegree/${id}`).toPromise();

    }



    /** CRUD METHODS Degree */

    async getAllAccounttypes() {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

        this.accounttype = await this.httpClient.get(`${this.baseUrl}/GetAccountTypes`).toPromise();
        return this.accounttype;
        // (error: HttpErrorResponse) => {
        //   console.log(error.name + ' ' + error.message);
        // });
    }

    // DEMO ONLY, you can find working methods below
    async addAccounttype(data) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        this.accounttype = await this.httpClient.post(`${this.baseUrl}/AddAccountType`, data, headers).toPromise();
        return this.accounttype;
    }

    async updateAccounttype(data) {

        let actype = await this.getdataToUpdate(data.key, 'GetAccountType');
        actype = { ...actype, ...data.data }
        console.log(actype);

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        return await this.httpClient.put(`${this.baseUrl}/UpdateAccountType`, actype, headers).toPromise();
    }

    async DeleteAccounttype(id) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

        return await this.httpClient.delete(`${this.baseUrl}/DeleteAccountType/${id}`).toPromise();

    }


    /** CRUD METHODS  FOR DESIGNATIONS*/

    async getAllDesignations() {
        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

        this.designation = await this.httpClient.get(`${this.baseUrl}/GetDesignations`).toPromise();
        return this.designation;
        // (error: HttpErrorResponse) => {
        //   console.log(error.name + ' ' + error.message);
        // });
    }

    // DEMO ONLY, you can find working methods below
    async addDesignation(data) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        this.designation = await this.httpClient.post(`${this.baseUrl}/AddDesignation`, data, headers).toPromise();
        return this.designation;
    }


    async updateDesignation(data) {

        let desg = await this.getdataToUpdate(data.key, 'GetDesignation');
        desg = { ...desg, ...data.data }
        console.log(desg);

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        return await this.httpClient.put(`${this.baseUrl}/UpdateDesignation`, desg, headers).toPromise();
    }

    async DeleteDesignation(id) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

        return await this.httpClient.delete(`${this.baseUrl}/DeleteDesignation/${id}`).toPromise();
    }


    /** CRUD METHODS  FOR managementlevel*/
    async getAllManagementlevels() {


        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

        this.managementlevel = await this.httpClient.get(`${this.baseUrl}/GetManagementLevels`).toPromise();
        return this.managementlevel;
        // (error: HttpErrorResponse) => {
        //   console.log(error.name + ' ' + error.message);
        // });
    }

    // DEMO ONLY, you can find working methods below
    async addManagementLevel(data) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        this.managementlevel = await this.httpClient.post(`${this.baseUrl}/AddManagementLevel`, data, headers).toPromise();
        return this.managementlevel;
    }



    async updateManagementLevel(data) {

        let mlevel = await this.getdataToUpdate(data.key, 'GetManagementLevel');
        mlevel = { ...mlevel, ...data.data }
        console.log(mlevel);


        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        return await this.httpClient.put(`${this.baseUrl}/UpdateManagementLevel`, mlevel, headers).toPromise();
    }

    async DeleteManagementLevel(id) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

        return await this.httpClient.delete(`${this.baseUrl}/DeleteManagementLevel/${id}`).toPromise();
    }



    /** CRUD METHODS  FOR group*/

    async getAllGroups() {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

        this.group = await this.httpClient.get(`${this.baseUrl}/GetGroups`).toPromise();
        console.log(this.group);
        return this.group;

        // (error: HttpErrorResponse) => {
        //   console.log(error.name + ' ' + error.message);
        // });
    }

    // DEMO ONLY, you can find working methods below
    async addGroup(data) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        this.group = await this.httpClient.post(`${this.baseUrl}/AddGroup`, data, headers).toPromise();
        return this.group;
    }

    async updateGroup(data) {

        let group = await this.getdataToUpdate(data.key, 'GetGroup');
        group = { ...group, ...data.data }
        console.log(group);

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        return await this.httpClient.put(`${this.baseUrl}/UpdateGroup`, group, headers).toPromise();
    }

    async DeleteGroup(id) {


        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

        return await this.httpClient.delete(`${this.baseUrl}/DeleteGroup/${id}`).toPromise();

    }

    /** CRUD METHODS  FOR CostCenter*/

    async getAllCostCenter() {
        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

        this.costcenter = await this.httpClient.get(`${this.baseUrl}/GetCostCenters`).toPromise();
        return this.costcenter;
        // (error: HttpErrorResponse) => {
        //   console.log(error.name + ' ' + error.message);
        // });
    }

    // DEMO ONLY, you can find working methods below
    async addCostCenter(data) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        this.costcenter = await this.httpClient.post(`${this.baseUrl}/AddCostCenter`, data, headers).toPromise();
        return this.costcenter;
    }

    async updateCostCenter(data) {

        let cc = await this.getdataToUpdate(data.key, 'GetCostCenter');
        cc = { ...cc, ...data.data }
        console.log(cc);

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        return await this.httpClient.put(`${this.baseUrl}/UpdateCostCenter`, cc, headers).toPromise();
    }

    async DeleteCostCenter(id) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

        return await this.httpClient.delete(`${this.baseUrl}/DeleteCostCenter/${id}`).toPromise();
    }


    /** CRUD METHODS  FOR language*/

    async getAllLanguages() {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

        this.language = await this.httpClient.get(`${this.baseUrl}/GetLanguages`).toPromise();
        return this.language;
        // (error: HttpErrorResponse) => {
        //   console.log(error.name + ' ' + error.message);
        // });
    }

    // DEMO ONLY, you can find working methods below
    async addLanguage(data) {


        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        this.language = await this.httpClient.post(`${this.baseUrl}/AddLanguage`, data, headers).toPromise();
        return this.language;
    }

    async updateLanguage(data) {

        let lang = await this.getdataToUpdate(data.key, 'GetLanguage');
        lang = { ...lang, ...data.data }
        console.log(lang);

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        return await this.httpClient.put(`${this.baseUrl}/UpdateLanguage`, lang, headers).toPromise();
    }

    async DeleteLanguage(id) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

        return await this.httpClient.delete(`${this.baseUrl}/DeleteLanguage/${id}`).toPromise();

    }




    /** CRUD METHODS  FOR GazettedHolidays*/

    async getAllGazettedHolidays() {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

        this.gazetholidays = await this.httpClient.get(`${this.baseUrl}/GetHolidays`).toPromise();
        return this.gazetholidays;
        // (error: HttpErrorResponse) => {
        //   console.log(error.name + ' ' + error.message);
        // });
    }

    // DEMO ONLY, you can find working methods below
    async addGazettedHolidays(data) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        this.gazetholidays = await this.httpClient.post(`${this.baseUrl}/AddHoliday`, data, headers).toPromise();
        return this.gazetholidays;
    }

    async updateGazettedHolidays(data) {

        let hd = await this.getdataToUpdate(data.key, 'GetHoliday');
        hd = { ...hd, ...data.data }
        console.log(hd);

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        return await this.httpClient.put(`${this.baseUrl}/UpdateHoliday`, hd, headers).toPromise();
    }

    async DeleteGazettedHolidays(id) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

        return await this.httpClient.delete(`${this.baseUrl}/DeleteHoliday/${id}`).toPromise();
    }


    /** CRUD METHODS  FOR SkillLevels*/

    async getAllSkillLevels() {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

        this.skilllevels = await this.httpClient.get(`${this.baseUrl}/GetSkillLevels`).toPromise();
        return this.skilllevels;
        // (error: HttpErrorResponse) => {
        //   console.log(error.name + ' ' + error.message);
        // });
    }

    // DEMO ONLY, you can find working methods below
    async addSkillLevel(data) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        this.skilllevels = await this.httpClient.post(`${this.baseUrl}/AddSkillLevel`, data, headers).toPromise();
        return this.skilllevels;
    }

    async updateSkillLevel(data) {

        let skl = await this.getdataToUpdate(data.key, 'GetSkillLevel');
        skl = { ...skl, ...data.data }
        console.log(skl);


        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        return await this.httpClient.put(`${this.baseUrl}/UpdateSkillLevel`, skl, headers).toPromise();
    }

    async DeleteSkillLevel(id) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

        return await this.httpClient.delete(`${this.baseUrl}/DeleteSkillLevel/${id}`).toPromise();
    }



    /** CRUD METHODS  FOR BloodGroup*/

    async getAllBloodGroups() {
        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

        this.bloodgroup = await this.httpClient.get(`${this.baseUrl}/GetBloodGroups`).toPromise();
        return this.bloodgroup;
        // (error: HttpErrorResponse) => {
        //   console.log(error.name + ' ' + error.message);
        // });
    }

    // DEMO ONLY, you can find working methods below
    async addBloodGroups(data) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        this.bloodgroup = await this.httpClient.post(`${this.baseUrl}/AddBloodGroup`, data, headers).toPromise();
        return this.bloodgroup;
    }

    async updateBloodGroups(data) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        return await this.httpClient.put(`${this.baseUrl}/UpdateBloodGroup`, data.key, headers).toPromise();
    }

    async DeleteBloodGroups(data) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

        return await this.httpClient.delete(`${this.baseUrl}/DeleteBloodGroup` + data.key).toPromise();
    }



    /** CRUD METHODS  FOR LeaveType*/

    async getAllLeaveType() {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

        this.leavetype = await this.httpClient.get(`${this.baseUrl}/GetLeaveTypes`).toPromise();
        return this.leavetype;
        // (error: HttpErrorResponse) => {
        //   console.log(error.name + ' ' + error.message);
        // });
    }

    // DEMO ONLY, you can find working methods below
    async addLeaveTypes(data) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        this.leavetype = await this.httpClient.post(`${this.baseUrl}/AddLeaveType`, data, headers).toPromise();
        return this.leavetype;
    }

    async updateLeaveTypes(data) {

        let ltype = await this.getdataToUpdate(data.key, 'GetLeaveType');
        ltype = { ...ltype, ...data.data }
        console.log(ltype);

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        return await this.httpClient.put(`${this.baseUrl}/UpdateLeaveType`, ltype, headers).toPromise();
    }

    async DeleteLeaveTypes(id) {


        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

        return await this.httpClient.delete(`${this.baseUrl}/DeleteLeaveType/${id}`).toPromise();

    }



    /** CRUD METHODS  FOR AdvanceType*/

    async getAllAllowancesType() {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

        this.allowancetype = await this.httpClient.get(`${this.baseUrl}/GetAllowancesTypes`).toPromise();
        return this.allowancetype;
    }

    // DEMO ONLY, you can find working methods below
    async addAllowancesType(data) {


        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        this.allowancetype = await this.httpClient.post(`${this.baseUrl}/AddAllowancesType`, data, headers).toPromise();
        return this.allowancetype;
    }

    async updateAllowancesType(data) {

        let alowncetype = await this.getdataToUpdate(data.key, 'GetAllowancesType');
        alowncetype = { ...alowncetype, ...data.data }
        console.log(alowncetype);

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        return await this.httpClient.put(`${this.baseUrl}/UpdateAllowancesType`, alowncetype, headers).toPromise();
    }

    async DeleteAllowancesType(id) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

        return await this.httpClient.delete(`${this.baseUrl}/DeleteAllowancesType/${id}`).toPromise();

    }

    /** CRUD METHODS  FOR AdvanceType*/

    async getAllAdvanceType() {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

        this.advancetype = await this.httpClient.get(`${this.baseUrl}/GetAdvanceTypes`).toPromise();
        return this.advancetype;
        // (error: HttpErrorResponse) => {
        //   console.log(error.name + ' ' + error.message);
        // });
    }

    // DEMO ONLY, you can find working methods below
    async addAdvanceType(data) {


        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        return await this.httpClient.post(`${this.baseUrl}/AddAdvanceType`, data, headers).toPromise();
    }

    async updateAdvanceType(data) {

        let advancetype = await this.getdataToUpdate(data.key, 'GetAdvanceType');
        advancetype = { ...advancetype, ...data.data }
        console.log(advancetype);


        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        return await this.httpClient.put(`${this.baseUrl}/UpdateAdvanceType`, advancetype, headers).toPromise();
    }

    async DeleteAdvanceType(id) {


        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

        return await this.httpClient.delete(`${this.baseUrl}/DeleteAdvanceType/${id}`).toPromise();

    }




    /** CRUD METHODS  FOR AdvanceType*/

    async getAllRelation() {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

        this.relation = await this.httpClient.get(`${this.baseUrl}/GetRelations`).toPromise();
        return this.relation;
        // (error: HttpErrorResponse) => {
        //   console.log(error.name + ' ' + error.message);
        // });
    }

    // DEMO ONLY, you can find working methods below
    async addRelation(data) {


        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        return await this.httpClient.post(`${this.baseUrl}/AddRelation`, data, headers).toPromise();
    }

    async updateRelation(data) {

        let relation = await this.getdataToUpdate(data.key, 'GetRelation');
        relation = { ...relation, ...data.data }
        console.log(relation);


        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        return await this.httpClient.put(`${this.baseUrl}/UpdateRelation`, relation, headers).toPromise();
    }

    async DeleteRelation(id) {


        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

        return await this.httpClient.delete(`${this.baseUrl}/DeleteRelation/${id}`).toPromise();

    }


    /** CRUD METHODS  FOR AdvanceType*/

    async getAllCities() {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

        this.city = await this.httpClient.get('http://localhost:58090/api/Setup/GetCities').toPromise();
        return this.city;
        // (error: HttpErrorResponse) => {
        //   console.log(error.name + ' ' + error.message);
        // });
    }

    // DEMO ONLY, you can find working methods below
    async addCity(data) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        this.city = await this.httpClient.post('http://localhost:58090/api/Setup/AddCity', data, headers).toPromise();
        return this.city;
    }

    async updateCity(data) {

        let cty = await this.getdataToUpdate(data.key, 'GetCity');
        cty = { ...cty, ...data.data }
        console.log(cty);

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        return await this.httpClient.put('http://localhost:58090/api/Setup/UpdateCity', cty, headers).toPromise();
    }

    async DeleteCity(id) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

        return await this.httpClient.delete('http://localhost:58090/api/Setup/DeleteCity/${id}').toPromise();
    }


    /** CRUD METHODS  FOR AdvanceType*/

    async getAllUniversities() {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

        this.university = await this.httpClient.get(`${this.baseUrl}/GetUniversities`).toPromise();
        return this.university;
        // (error: HttpErrorResponse) => {
        //   console.log(error.name + ' ' + error.message);
        // });
    }

    // DEMO ONLY, you can find working methods below
    async adduniversity(data) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        return await this.httpClient.post(`${this.baseUrl}/AddUniversity`, data, headers).toPromise();
    }

    async updateuniversity(data) {

        let uni = await this.getdataToUpdate(data.key, 'GetUniversity');
        uni = { ...uni, ...data.data }
        console.log(uni);


        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        return await this.httpClient.put(`${this.baseUrl}/UpdateUniversity`, uni, headers).toPromise();
    }

    async Deleteuniversity(id) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

        return await this.httpClient.delete(`${this.baseUrl}/DeleteUniversity/${id}`).toPromise();

    }




    /** CRUD METHODS  FOR AdvanceType*/

    async getAllGender() {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

        return await this.httpClient.get(`${this.baseUrl}/`);
        // (error: HttpErrorResponse) => {
        //   console.log(error.name + ' ' + error.message);
        // });
    }

    // DEMO ONLY, you can find working methods below
    async addGenders(data) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        return await this.httpClient.post(`${this.baseUrl}/addGender`, data, headers).toPromise();
    }

    async updateGenders(data) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        return await this.httpClient.put(`${this.baseUrl}/UpdateGender`, data.key, headers).toPromise();
    }

    async DeleteGenders(data) {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

        return await this.httpClient.delete(`${this.baseUrl}/DeleteGender` + data.key).toPromise();

    }




}



/* REAL LIFE CRUD Methods I've used in my projects. ToasterService uses Material Toasts for displaying messages:
    // async add, POST METHOD
    async addItem(kanbanItem: KanbanItem) {
    return await this.httpClient.post(this.API_URL, kanbanItem).subscribe(data => {
      this.dialogData = kanbanItem;
      this.toasterService.showToaster('Successfully async added', 3000);
      },
      (err: HttpErrorResponse) => {
      this.toasterService.showToaster('Error occurred. Details: ' + err.name + ' ' + err.message, 8000);
    });
   }
    // async updATE, PUT METHOD
     async updateItem(kanbanItem: KanbanItem) {
    return await this.httpClient.put(this.API_URL + kanbanItem.id, kanbanItem).subscribe(data => {
        this.dialogData = kanbanItem;
        this.toasterService.showToaster('Successfully edited', 3000);
      },
      (err: HttpErrorResponse) => {
        this.toasterService.showToaster('Error occurred. Details: ' + err.name + ' ' + err.message, 8000);
      }
    );
  }
  // async DeleTE METHOD
  async DeleteItem(id: number) {
    return await this.httpClient.async Delete(this.API_URL + id).subscribe(data => {
      console.log(data['']);
        this.toasterService.showToaster('Successfully async Deleted', 3000);
      },
      (err: HttpErrorResponse) => {
        this.toasterService.showToaster('Error occurred. Details: ' + err.name + ' ' + err.message, 8000);
      }
    );
  }
*/