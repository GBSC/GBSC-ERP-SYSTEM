import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ApiService } from '../../api.service';
import { Observable } from 'rxjs';


@Injectable()
export class SetupService {
    university: any;
    currentCountry: any;
    refresh(): any {
        throw new Error("Method not implemented.");
    }

    private hrUrl: string = "SystemAdmin/api/HrSetup";
    private setupUrl: string = "SystemAdmin/api/Setup";
    //private baseUrl = "http://localhost:58090/api/HrSetup";
    // private baseUrl2 = "http://localhost:58090/api/Setup";
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



    constructor(private ApiService: ApiService) { }

    /** CRUD METHODS  Country*/
    /** CRUD METHODS */
    async getAllCountries() {

        
        

        this.country = await this.ApiService.get(this.setupUrl + '/GetCountries').toPromise();
        return this.country;

    }

    async getdataToUpdate(countryId, countryUrl) {
        return await this.ApiService.get(`${this.hrUrl}/${countryUrl}/${countryId}`).toPromise();
    }


    // DEMO ONLY, you can find working methods below
    async addCountry(data) {

        
        
        let newcountry = await this.ApiService.post(this.hrUrl + '/AddCountry', data).toPromise();

    }

    async updateCountry(data) {
 
        let country = await this.getdataToUpdate(data.key, 'GetCountry');
        country = { ...country, ...data.data }

        return await this.ApiService.put(this.setupUrl + '/UpdateCountry', country).toPromise();

    }



    async DeleteCountry(countryId) {
        return await this.ApiService.delete(this.setupUrl + '/DeleteCountry/${countryId}').toPromise();
    }


    /** CRUD METHODS DEPARTMENTS */
    async getAllDepartments() {

        
        

        this.department = await this.ApiService.get(`${this.hrUrl}/GetAllDepartment`).toPromise();
        return this.department;
    }

    // DEMO ONLY, you can find working methods below
    async addDepartment(data) {

        
        
        let newdepart = await this.ApiService.post(`${this.hrUrl}/addDepartment`, data).toPromise();

    }




    async updateDepartment(data) {

        
        
        return await this.ApiService.post(`${this.hrUrl}/addDepartment`, data.key).toPromise();

    }

    async DeleteDepartment(data) {

        
        

        return await this.ApiService.get(`${this.hrUrl}/DeleteDepartment` + data.key).toPromise();
    }

    /** CRUD METHODS BANK */
    async getAllBanks() {

        
        
        this.bank = await this.ApiService.get(`${this.hrUrl}/GetBanks`).toPromise();
        return this.bank;
    }

    // DEMO ONLY, you can find working methods below
    async addbank(data) {

        let newbank = await this.ApiService.post(`${this.hrUrl}/AddBank`, data).toPromise();

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

    /** CRUD METHODS Branch */

    async getAllbranches() {

         this.branch = await this.ApiService.get(`${this.hrUrl}/GetAllBranches`).toPromise();
        return this.branch;
    }

     async addBranch(data) {
      return await this.ApiService.post(`${this.hrUrl}/addBranch`, data).toPromise();

    }

    async updateBranch(data) {

         return await this.ApiService.post(`${this.hrUrl}/addBranch`, data.key).toPromise();
    }

    async DeleteBranch(data) {

         return await this.ApiService.get(`${this.hrUrl}/DeleteBranch` + data.key).toPromise();
    }

    
    async getAllFunctions() {
     return await this.ApiService.get(`${this.hrUrl}/GetFunctions`).toPromise();
    }

     async addFunction(data) {
       let newfunction = await this.ApiService.post(`${this.hrUrl}/AddFunction`, data).toPromise();
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
        this.qualification = await this.ApiService.get(`${this.hrUrl}/GetQualifications`).toPromise();
        return this.qualification;
    }

    // DEMO ONLY, you can find working methods below
    async addQualification(data) {
        this.qualification = await this.ApiService.post(`${this.hrUrl}/AddQualification`, data).toPromise();
        return this.qualification;
    }

    async updateQualification(data) {

        let qf = await this.getdataToUpdate(data.key, 'GetQualification');
        qf = { ...qf, ...data.data }
         return await this.ApiService.put(`${this.hrUrl}/UpdateQualification`, qf).toPromise();
    }

    async DeleteQualification(id) {
         
        return await this.ApiService.delete(`${this.hrUrl}/DeleteQualification/${id}`).toPromise();
    }
 
    async getAllEmployeeStatus() {
        this.employeestatus = await this.ApiService.get(`${this.hrUrl}/GetEmployeeStatuses`).toPromise();
        return this.employeestatus;
     }

     async addEmployeeStatus(data) {
      this.employeestatus = await this.ApiService.post(`${this.hrUrl}/AddEmployeeStatus`, data).toPromise();
        return this.employeestatus;
    }

    async updateEmployeeStatus(data) {

        let estatus = await this.getdataToUpdate(data.key, 'GetEmployeeStatus');
        estatus = { ...estatus, ...data.data }
         return await this.ApiService.put(`${this.hrUrl}/UpdateEmployeeStatus`, estatus).toPromise();
    }

    async DeleteEmployeeStatus(id) {
      return await this.ApiService.delete(`${this.hrUrl}/DeleteEmployeeStatus/${id}`).toPromise();

    }

 
    async getAllMaritalStatus() {
        this.maritalstatus = await this.ApiService.get(`${this.hrUrl}/GetMaritialStatuses`).toPromise();
        return this.maritalstatus;
    }

     async addMaritalStatus(data) {
       this.maritalstatus = await this.ApiService.post(`${this.hrUrl}/AddMaritialStatus/`, data).toPromise();
        return this.maritalstatus;
    }

    async updateMaritalStatus(data) {

         return await this.ApiService.put(`${this.hrUrl}/UpdateMaritialStatus/`, data.key).toPromise();
    }

    async DeleteMaritalStatus(data) {
       return await this.ApiService.get(`${this.hrUrl}/DeleteMaritialStatus/` + data.key).toPromise();
  
    }

   
    async getAllReligions() {
      return await this.ApiService.get(`${this.hrUrl}/GetReligions`).toPromise();

    }

     async addReligion(data) {
       this.religion = await this.ApiService.post(`${this.hrUrl}/AddReligion/`, data).toPromise();
        return this.religion;
    }

    async updateReligion(data) {

        let rlg = await this.getdataToUpdate(data.key, 'GetReligion');
        rlg = { ...rlg, ...data.data }
        return await this.ApiService.put(`${this.hrUrl}/UpdateReligion`, rlg).toPromise();
    }

    async DeleteReligion(id) { 
        return await this.ApiService.delete(`${this.hrUrl}/DeleteReligion/${id}`).toPromise();
    }
 
    async getAllRosters() {
        this.roster = await this.ApiService.get(`${this.hrUrl}/GetRosters`).toPromise();
    }

     async addRoster(data) {
       this.roster = await this.ApiService.post(`${this.hrUrl}/AddRoster`, data).toPromise();
        return this.roster;
    }

    async updateRoster(data) {

        let roster = await this.getdataToUpdate(data.key, 'GetRoster');
        roster = { ...roster, ...data.data }
         
        return await this.ApiService.put(`${this.hrUrl}/UpdateRoster`, roster).toPromise();
    }

    async DeleteRoster(id) {
      return await this.ApiService.delete(`${this.hrUrl}/DeleteRoster/${id}`).toPromise();

    }

  
    /** CRUD METHODS Degree */

    getAllDegrees(): Observable<any> {

        return this.ApiService.get(`${this.hrUrl}/GetDegrees`);

    }

    // DEMO ONLY, you can find working methods below
    async addDegree(data) {
       this.degree = await this.ApiService.post(`${this.hrUrl}/AddDegree`, data).toPromise();
        return this.degree;
    }

    async updateDegree(data) {

        let deg = await this.getdataToUpdate(data.key, 'GetDegree');
        deg = { ...deg, ...data.data }
  
          return await this.ApiService.put(`${this.hrUrl}/UpdateDegree`, deg).toPromise();

    }

    async DeleteDegree(id) {

         return await this.ApiService.delete(`${this.hrUrl}/DeleteDegree/${id}`).toPromise();

    }

 
    async getAllAccounttypes() {
        this.accounttype = await this.ApiService.get(`${this.hrUrl}/GetAccountTypes`).toPromise();
        return this.accounttype;
     }

     async addAccounttype(data) {
      this.accounttype = await this.ApiService.post(`${this.hrUrl}/AddAccountType`, data).toPromise();
        return this.accounttype;
    }

    async updateAccounttype(data) {

        let actype = await this.getdataToUpdate(data.key, 'GetAccountType');
        actype = { ...actype, ...data.data }
         
        return await this.ApiService.put(`${this.hrUrl}/UpdateAccountType`, actype).toPromise();
    }

    async DeleteAccounttype(id) {
      return await this.ApiService.delete(`${this.hrUrl}/DeleteAccountType/${id}`).toPromise();

    }


    /** CRUD METHODS  FOR DESIGNATIONS*/

    async getAllDesignations() {
        
        
         let a = await this.ApiService.get(`${this.hrUrl}/GetDesignations`).toPromise();
         return a;

    }

    // DEMO ONLY, you can find working methods below
    async addDesignation(data) {
      this.designation = await this.ApiService.post(`${this.hrUrl}/AddDesignation`, data).toPromise();
        return this.designation;
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
      this.managementlevel = await this.ApiService.post(`${this.hrUrl}/AddManagementLevel`, data).toPromise();
        return this.managementlevel;
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
        let a = await this.ApiService.get(`${this.hrUrl}/GetGroups`).toPromise();
        return a;
    }
    async addGroup(data) {
        
        this.group = await this.ApiService.post(`${this.hrUrl}/AddGroup`, data).toPromise();
        return this.group;
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
        
        

        this.costcenter = await this.ApiService.get(`${this.hrUrl}/GetCostCenters`).toPromise();
        return this.costcenter;
         
    }

    async addCostCenter(data) {
        this.costcenter = await this.ApiService.post(`${this.hrUrl}/AddCostCenter`, data).toPromise();
        return this.costcenter;
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
  
        this.language = await this.ApiService.post(`${this.hrUrl}/AddLanguage`, data).toPromise();
        return this.language;
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
        this.gazetholidays = await this.ApiService.get(`${this.hrUrl}/GetHolidays`).toPromise();
        return this.gazetholidays;
        
     }

     async addGazettedHolidays(data) {
      this.gazetholidays = await this.ApiService.post(`${this.hrUrl}/AddHoliday`, data).toPromise();
        return this.gazetholidays;
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
        this.skilllevels = await this.ApiService.get(`${this.hrUrl}/GetSkillLevels`).toPromise();
        return this.skilllevels;
        
    }
   async addSkillLevel(data) {
        this.skilllevels = await this.ApiService.post(`${this.hrUrl}/AddSkillLevel`, data).toPromise();
        return this.skilllevels;
    }

    async updateSkillLevel(data) {
        let skl = await this.getdataToUpdate(data.key, 'GetSkillLevel');
        skl = { ...skl, ...data.data }
         return await this.ApiService.put(`${this.hrUrl}/UpdateSkillLevel`, skl).toPromise();
    }

    async DeleteSkillLevel(id) {
     return await this.ApiService.delete(`${this.hrUrl}/DeleteSkillLevel/${id}`).toPromise();
    }

 
    async getAllBloodGroups() {
        
         this.bloodgroup = await this.ApiService.get(`${this.hrUrl}/GetBloodGroups`).toPromise();
        return this.bloodgroup;
     }

     async addBloodGroups(data) {
     this.bloodgroup = await this.ApiService.post(`${this.hrUrl}/AddBloodGroup`, data).toPromise();
        return this.bloodgroup;
    }

    async updateBloodGroups(data) {
        return await this.ApiService.put(`${this.hrUrl}/UpdateBloodGroup`, data.key).toPromise();
    }

    async DeleteBloodGroups(data) {

         return await this.ApiService.delete(`${this.hrUrl}/DeleteBloodGroup` + data.key).toPromise();
    }

 
    async getAllLeaveType() {
    }

    async addLeaveTypes(data) {
        this.leavetype = await this.ApiService.post(`${this.hrUrl}/AddLeaveType`, data).toPromise();
        return this.leavetype;
    }

    async updateLeaveTypes(data) {

        let ltype = await this.getdataToUpdate(data.key, 'GetLeaveType');
        ltype = { ...ltype, ...data.data }
         return await this.ApiService.put(`${this.hrUrl}/UpdateLeaveType`, ltype).toPromise();
    }

    async DeleteLeaveTypes(id) {

       return await this.ApiService.delete(`${this.hrUrl}/DeleteLeaveType/${id}`).toPromise();

    }

    async getAllAllowancesType() {
        this.allowancetype = await this.ApiService.get(`${this.hrUrl}/GetAllowancesTypes`).toPromise();
        return this.allowancetype;
    }

     async addAllowancesType(data) {
       this.allowancetype = await this.ApiService.post(`${this.hrUrl}/AddAllowancesType`, data).toPromise();
        return this.allowancetype;
    }

    async updateAllowancesType(data) {

        let alowncetype = await this.getdataToUpdate(data.key, 'GetAllowancesType');
        alowncetype = { ...alowncetype, ...data.data }
         return await this.ApiService.put(`${this.hrUrl}/UpdateAllowancesType`, alowncetype).toPromise();
    }

    async DeleteAllowancesType(id) {
       return await this.ApiService.delete(`${this.hrUrl}/DeleteAllowancesType/${id}`).toPromise();

    }
    async getAllAdvanceType() {
        this.advancetype = await this.ApiService.get(`${this.hrUrl}/GetAdvanceTypes`).toPromise();
        return this.advancetype;
        
    }
  
    async addAdvanceType(data) {
       return await this.ApiService.post(`${this.hrUrl}/AddAdvanceType`, data).toPromise();
    }

    async updateAdvanceType(data) {

        let advancetype = await this.getdataToUpdate(data.key, 'GetAdvanceType');
        advancetype = { ...advancetype, ...data.data }
         return await this.ApiService.put(`${this.hrUrl}/UpdateAdvanceType`, advancetype).toPromise();
    }

    async DeleteAdvanceType(id) {
      return await this.ApiService.delete(`${this.hrUrl}/DeleteAdvanceType/${id}`).toPromise();

    }
 
    async getAllRelation() {
        this.relation = await this.ApiService.get(`${this.hrUrl}/GetRelations`).toPromise();
        return this.relation;
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
    async getAllCities() {
        return await this.ApiService.get(this.setupUrl + '/GetCities').toPromise();
    }

    // DEMO ONLY, you can find working methods below
    async addCity(data) {
        this.city = await this.ApiService.post(this.setupUrl + '/AddCity', data).toPromise();
        return this.city;
    }

    async updateCity(data) {

        let cty = await this.getdataToUpdate(data.key, 'GetCity');
        cty = { ...cty, ...data.data }
         return await this.ApiService.put(this.setupUrl + '/UpdateCity', cty).toPromise();
    }

    async DeleteCity(id) {
       return await this.ApiService.delete(this.setupUrl + '/DeleteCity/${id}').toPromise();
    }
     async getAllUniversities() {
 
        this.university = await this.ApiService.get(`${this.hrUrl}/GetUniversities`).toPromise();
        return this.university;
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


 