import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HrmsService } from '../Setup/hrms.service';
import { ApiService } from '../../api.service';
import { Observable } from 'rxjs';
import { Employee } from '../../../Models/HRM/employee';
import { EmployeeCompany } from '../../../Models/HRM/employeeCompany';
import { EmployeeSocial } from '../../../Models/HRM/employeeSocial';
import { EmployeeQualification } from '../../../Models/HRM/employeeQualification';
import { EmployeeBank } from '../../../Models/HRM/employeeBank';
import { EmployeeExperience } from '../../../Models/HRM/employeeExperience';
import { EmployeeDependant } from '../../../Models/HRM/employeeDependant';
@Injectable()
export class EmployeeService {

    public compForm = {};
    private UserDependants : any;
    private UserExp : any;
    private userBank : any;
    private userQualification : any;
    public EmpCompanyForm: FormGroup;
    public documentForm: FormGroup;
    public EmpbankForm: FormGroup;
    public SocialForm: FormGroup;
    public DependantForm: FormGroup;
    public EmpbasicForm: FormGroup;
    public experienceForm: FormGroup;
    public Profilepic: FormGroup;
    public QualificationForm: FormGroup;
    public allDependentForm: any = [];
    public UserCompanyForm: any = [];
    public allExperiencexpForm: any = [];
    public employeereg: Object;
    public allFormData: any = {};
    public currentlyLoggedinUser;
    private baseUrl: string  = 'systemadmin/api';
    //private baseUrl = 'http://localhost:58090/api';
    public firstForm: any;
    public currentUser: any = {};

    public selectedUni = {
        Name: '',
        Qualifications: []
    };
    public addedUniversities = [];

    public addedDependants = [];
    public selectedDependants = {};
    

    public updateEmployeeBool = false
    public getuni: any;


    public usercomapnies = [];

    constructor(private service: HrmsService, private fb: FormBuilder, private ApiService: ApiService) {



        this.EmpbasicForm = this.fb.group({
            FirstName: [''],
            LastName: [''],
            FatherName: [''],
            Email: [''],
            Cnic: [''],
            CnicExpiry: [''],
            Phone: [''],
            HomePhone: [''],
            DOB: [''],
            POB: [''],
            BloodGroup: [''],
            MaritalStatus: [''],
            Gender: [''],
            countryId: [''],
            CityId: [''],
            ReligionId: [''],
            LanguageId: [''],
            Address: [''],
            PermanentAddress: ['']
        }); 


        



        this.QualificationForm = this.fb.group({
            Name: [''],
            DegreeId: [''],
            Timefrom: [''],
            Timeto: [''],
            Grade: [''],
            Courses: [''],
            Description: [''] 
        });

        this.Profilepic = this.fb.group({
            ProfileImg: ['']
        });

        this.DependantForm = this.fb.group({

            Name: [''],
            Phone: [''],
            Email: [''],
            Address: [''],
            Country: [''],
            City: [''],
            State: [''],
            Zip: [''],
            HomePhone: [''],
            PermanentAddress: ['']

        });

        this.SocialForm = this.fb.group({
            FacebookUrl: [''],
            TwitterUrl: [''],
            BloggerProfile: [''],
            LinkedinUrl: [''],
            GooglePlusUrl: [''],
            InstagramUrl: [''],
            PinterestUrl: [''],
            YoutubeUrl: ['']
        });

        this.experienceForm = this.fb.group({
            CompanyName: [''],
            Designation: [''],
            Timefrom: [''],
            Timeto: [''],
            Description: ['']
        });

        this.EmpbankForm = this.fb.group({
            AccountName: [''],
            AccountNumber: [''],
            BankTitle: [''],
            BankCode: [''],
            Branch: ['']
        });

        this.documentForm = this.fb.group({
            Documents: ['']
        });

        this.EmpCompanyForm = this.fb.group({
            ManagementLevelId: [''],
            FunctionId: [''],
            GroupId: [''],
            EmployeeStatusId: [''],
            EmployeeTypeId: [''], 
            DesignationId: [''],
            ContractStart: [''],
            ContractEnd: [''],
            AppointmentDate: [''],
            NextApprisalDate: [''],
            ConfirmDueDate: [''],
            ConfirmationDate: [''],
            LeavingDate: [''],
            ResignDate: [''],
            Approver: ['']

        });


        this.UserCompanyForm = this.fb.group({
            DesignationId: [''],
            ContractStart: [''],
            ContractEnd: [''],
            AppointmentDate: [''],
            NextApprisalDate: [''],
            ConfirmDueDate: [''],
            ConfirmationDate: [''],
            LeavingDate: [''],
            ResignDate: [''],
            Approver: ['']
        });

    }

    async GetAllEmployees() {

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }

        this.employeereg = await this.ApiService.get(`${this.baseUrl}/Users/GetUsers`).toPromise();
        console.log(this.employeereg);
        return this.employeereg;
    }


    // GetUniversity(id): Observable<EmployeeQualification> {
    //     return this.ApiService.get(this.baseUrl + '/HrSetup/GetUniversities/' + id);
    // }

    GetEmployee(id): Observable<Employee> {
        return this.ApiService.get(this.baseUrl + '/Users/GetUser/' + id);
    }


    async updateEmployee() {
        //   let id = this.latestAddedUserId;
        //   let x = await  this.ApiService.post(this.baseUrl+'/Users/UpdateUser').toPromise();
        //   console.log(x);
        //   return x;
        // console.log(this.updateEmployeeBool);
    }

    async updateUersById(Employee: Employee) {
        console.log(Employee);
        Employee.userId = this.latestAddedUserId; 
        let x = await this.ApiService.post(this.baseUrl + '/Users/UpdateUserDetail', Employee).toPromise();
        console.log(x);
        console.log(Employee);
        return x;
    }

    async updateUserCompanyById(Employee: EmployeeCompany) {
       
        this.prepareCompanyDetails();

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        console.log(this.compForm); 

        let usercompany = await this.ApiService.post(`${this.baseUrl}/Users/UpdateUserCompany/${this.latestAddedUserId}`, this.compForm).toPromise();
        console.log(usercompany);
        
    }
    public latestAddedUserId : number;
    // DEMO ONLY, you can find working methods below
    async addEmployee() {

         console.log(this.EmpbasicForm.value);
        let newuser = await this.ApiService.post(`${this.baseUrl}/Users/AddUser`, this.EmpbasicForm.value).toPromise();
        console.log(newuser);
        // localStorage.setItem('id', newuser.userID);
        this.latestAddedUserId = newuser.userID;
        return newuser;
    }

    // getCurrentUserId() {
    //     return this.latestAddedUserId;
    // }


    async addusercompany() {
        this.prepareCompanyDetails();
        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        console.log(this.compForm);

        let usercompany = await this.ApiService.post(`${this.baseUrl}/Users/AddUserDetailsById/${this.latestAddedUserId}`, this.compForm).toPromise();
        console.log(usercompany);
        return usercompany;
    }

    public selectedPic;

    async adduserProfilepic() {

        let fomrData: any = new FormData();
        fomrData.append('myFile', this.selectedPic, this.selectedPic.name);

        console.log(fomrData);

        let authToken = localStorage.getItem('auth_token');
        // let headers = { headers: { 'Content-Type': 'multipart/form-data'} }
        let headers = { headers: { 'Content-Type': 'application/json' } }
        let userpic = await this.ApiService.post(`${this.baseUrl}/Users/AddUserPhotoById/${this.latestAddedUserId}`, this.selectedPic).toPromise();
        console.log(userpic);
        return userpic;
    }

    // ${this.baseUrl}/Users/AddUserPhotoById/${this.latestAddedUserId}

    addDocument(file: FormData) {
        this.ApiService.post(this.baseUrl + '/Users/AddUserPhotoById/' + this.latestAddedUserId, file).subscribe(res => {
            console.log(res);
        });
    }

    addDocuments(models: FormData) {

        this.ApiService.post(this.baseUrl + '/Users/AddUserDocumentsById/' + this.latestAddedUserId, models).subscribe(res => {
            console.log(res);
        });
    }

    public DocumentsByUserId: any;
    async GetDocumentsByUserId() {
        this.DocumentsByUserId = await this.ApiService.get(this.baseUrl + '/Users/GetDocumentsByUserId/' + this.latestAddedUserId).toPromise();
        console.log(this.DocumentsByUserId);
        return this.DocumentsByUserId;
    }

    async deleteUserDocument(id) {
        let x = await this.ApiService.delete(this.baseUrl + '/Users/DeleteUserDocumentById/' + id).toPromise();
        console.log(x);
        return x;
    }


    //  ${this.baseUrl}/Users/AddUserPhotoById/${this.latestAddedUserId}

    async adduserDocuments() {
        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        let documents = await this.ApiService.post(`${this.baseUrl}/Users/AddUserDocumentsById/${this.latestAddedUserId}`, this.documentForm.value).toPromise();
        console.log(documents);
        return documents;
    }

    async adduserSocial() {
        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        let social = await this.ApiService.post(`${this.baseUrl}/Users/UpdateUserSocial/${this.latestAddedUserId}`, this.SocialForm.value).toPromise();
        console.log(social);
        return social;
    }

    async updateuserSocial(EmployeeSocial: EmployeeSocial) {
        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        console.log(EmployeeSocial);
        let social = await this.ApiService.post(`${this.baseUrl}/Users/UpdateUserSocial/${this.latestAddedUserId}`, EmployeeSocial).toPromise();
        console.log(social);
        return social;
    }
    async updateuserRelation(EmployeeDependant: EmployeeDependant) {
        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        console.log(EmployeeDependant);
        let dependnt = await this.ApiService.post(`${this.baseUrl}/Users/AddUserRelationsById/${this.latestAddedUserId}`, EmployeeDependant).toPromise();
        console.log(dependnt);
        return dependnt;
    }
    async updateuseruniversity(Qualification : EmployeeQualification) {
       // Qualification.userId = this.latestAddedUserId;
        let headers = { headers: { 'Content-Type': 'application/json' } }
        let qualification = await this.ApiService.put(`${this.baseUrl}/HrSetup/UpdateUniversity`, Qualification).toPromise();
        console.log(qualification);
        return qualification;
    }

    async updateuserWorkExperience(EmployeeExperience: EmployeeExperience) {
        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        console.log(EmployeeExperience);
        let workExp = await this.ApiService.post(`${this.baseUrl}/Users/AddWorkExperiencesById/${this.latestAddedUserId}`, EmployeeExperience).toPromise();
        console.log(workExp);
        return workExp;
    }

    async updateuserBank(EmployeeBank: EmployeeBank) {
        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } } 
        EmployeeBank.userId = this.latestAddedUserId; 
        let bankuser = await this.ApiService.put(`${this.baseUrl}/HrSetup/UpdateBank`, EmployeeBank).toPromise();
        console.log(bankuser);
        return bankuser;
    }

    async GetRelationsByUserId(){
        this.UserDependants = await this.ApiService.get(this.baseUrl + '/Users/GetRelationsByUserId/' + this.latestAddedUserId).toPromise();
        return this.UserDependants;
    }

    async addBank() {
        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        let bank = await this.ApiService.post(`${this.baseUrl}/Users/AddUserBankById/${this.latestAddedUserId}`, this.EmpbankForm.value).toPromise();
        console.log(bank);
        return bank;
    }

    async GetBankByUserId(){
        this.userBank = await this.ApiService.get(this.baseUrl + '/Users/GetBankByUserId/' + this.latestAddedUserId).toPromise();
        return this.userBank;
    }


    public allQualifications = [];
    public currentUniversity: any = {};
    public university = {
        Name: '',
        Qualifications: []
    }


    async GetQualificationByUserId(){
        this.userQualification = await this.ApiService.get(this.baseUrl + '/Users/GetUniversityByUserId/' + this.latestAddedUserId).toPromise();
        return this.userQualification;
    }


    async adduserUniversity(Qualification : EmployeeQualification) {
        console.log(Qualification);
        
        Qualification.userId = this.latestAddedUserId;
        console.log(this.latestAddedUserId);
        let headers = { headers: { 'Content-Type': 'application/json' } }
        let universities = await this.ApiService.post(`${this.baseUrl}/HrSetup/AddUniversity`, Qualification).toPromise();
        console.log(universities);
        return universities;
    }
  
    async UpdateuserUniversities(data) {
        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        let university = await this.ApiService.put(`${this.baseUrl}/HrSetup/UpdateUniversity`, data).toPromise();
        console.log(university);
        return university;
    }


    createuniversity(name) {
        let uni = {
            Name: '',
            Qualification: [],
            SkillLevel: []
        };

        return uni;
    }

    createDegree(deg) {
        return {
            Degree: deg
        }
    }

    async UpdateDependant(Dependant: EmployeeDependant) { 
        let authToken = localStorage.getItem('auth_token');
        console.log(this.allDependentForm);
        this.allDependentForm[0] = this.DependantForm.value;
        let relation = await this.ApiService.put(`${this.baseUrl}/HrSetup/UpdateRelation}`, Dependant).toPromise();
        return relation;
    }

    async GetExperienceByUserId(){
        this.UserExp = await this.ApiService.get(this.baseUrl + '/Users/GetworkExperienceByUserId/' + this.latestAddedUserId).toPromise();
        return this.UserExp;
    }

    async AddworkExperience(workExperience : EmployeeExperience) {
        workExperience.userId = this.latestAddedUserId;
        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: ({ 'Content-Type': 'application/json' }) } 
        let exp = await this.ApiService.post(`${this.baseUrl}/HrSetup/AddWorkExperience`, workExperience).toPromise();
        console.log(exp);
        return exp;
    }

    async UpdateworkExperience(workExperience : EmployeeExperience) {
        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: ({ 'Content-Type': 'application/json' }) } 
        let exp = await this.ApiService.put(`${this.baseUrl}/HrSetup/UpdateWorkExperience`, workExperience).toPromise();
        console.log(exp);
        return exp;
    }

    async Updateexperience(experience: EmployeeExperience) {
        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: ({ 'Content-Type': 'application/json' }) }
        this.allExperiencexpForm[0] = this.experienceForm.value;
        let exp = await this.ApiService.post(`${this.baseUrl}/Users/AddWorkExperiencesById/${this.latestAddedUserId}`, experience).toPromise();
        console.log(exp);
        return exp;
    }
 
     async adduserDependant(workExperience : EmployeeExperience) {
        workExperience.userId = this.latestAddedUserId;
        let authToken = localStorage.getItem('auth_token'); 
        let relation = await this.ApiService.post(`${this.baseUrl}/HrSetup/AddRelation`, workExperience).toPromise();
        return relation;
    }
     async UpdateuserExperience(workExperience : EmployeeExperience) { 
        let authToken = localStorage.getItem('auth_token'); 
        let relation = await this.ApiService.put(`${this.baseUrl}/HrSetup/UpdateWorkExperience`, workExperience).toPromise();
        return relation;
    }

    async Updaterelation(workExperience : EmployeeExperience) { 
        let authToken = localStorage.getItem('auth_token'); 
        let reltion = await this.ApiService.put(`${this.baseUrl}/HrSetup/UpdateRelation`, workExperience).toPromise();
        return reltion;
    }


    async adduserexperience() {
        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: ({ 'Content-Type': 'application/json' }) }
        this.allExperiencexpForm[0] = this.experienceForm.value;
        let exp = await this.ApiService.post(`${this.baseUrl}/Users/AddWorkExperiencesById/${this.latestAddedUserId}`, this.experienceForm.value).toPromise();
        console.log(exp);
        return exp;
    }




    async getBasicInfoOfCurrentUser() {
        this.currentlyLoggedinUser = this.latestAddedUserId;
        console.log(this.currentlyLoggedinUser);

        this.currentUser = await this.ApiService.get(`${this.baseUrl}/Users/GetUser/${this.currentlyLoggedinUser}`).toPromise();
        return this.currentUser;
    }


    getProfileInfo(value) {
        this.allFormData.profileInfo = value;
    }

    getBank(value) {
        this.allFormData.bank = value;
    }

    async getdataToUpdate(userId, userUrl) {
        return await this.ApiService.get(`${this.baseUrl}/${userUrl}/${userId}`).toPromise();
    }

    async updateUser(data) {

        console.log(data.key);
        console.log(data);

        let usr = await this.getdataToUpdate(data.key, 'GetUser');
        usr = { ...usr, ...data.data }
        console.log(usr);
        // let authToken = localStorage.getItem('auth_token');  
        // let headers = {headers: {'Content-Type':'application/json'}}
        return await this.ApiService.put('${this.baseUrl}/Users/UpdateUser', usr).toPromise();

    }

    setBasicInfoFormValues() {

        this.EmpbasicForm.value.FirstName = this.currentUser.firstName;
        console.log(this.currentUser);
        console.log(this.EmpbasicForm.value);

    }


    prepareCompanyDetails() {

        let cf = this.EmpCompanyForm.value;

        this.compForm = {

            ManagementLevelId: cf.ManagementLevelId,
            FunctionId: cf.FunctionId,
            GroupId: cf.GroupId,
            EmployeeStatusId: cf.EmployeeStatusId,
            EmployeeTypeId: cf.EmployeeTypeId,
            userCompany: {
                DesignationId: cf.DesignationId,
                ContractStart: cf.ContractStart,
                ContractEnd: cf.ContractEnd,
                AppointmentDate: cf.AppointmentDate,
                NextApprisalDate: cf.NextApprisalDate,
                ConfirmDueDate: cf.ConfirmDueDate,
                ConfirmationDate: cf.ConfirmationDate,
                LeavingDate: cf.LeavingDate,
                ResignDate: cf.ResignDate,
                Approver: cf.Approver
            }
        }

    }
}


