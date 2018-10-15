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
    private UserDependants: any;
    private UserExp: any;
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
    // private baseUrl: string  = 'systemadmin/api';
    private baseUrl = 'http://localhost:58090/api';
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
            PhoneNumber: [''],
            HomeNumber: [''],
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
            Timefrom: ['12-01-2016'],
            Timeto: ['12-01-2017'],
            Grade: [''],
            Courses: [''],
            Description: [''],
            SkillLevel: []
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
            AccountTitle: [''],
            AccountNumber: [''],
            BankTitle: [''],
            BankCode: [''],
            BankBranch: ['']
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
            Shift: [''],
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


    GetUniversity(id): Observable<EmployeeQualification> {
        return this.ApiService.get(this.baseUrl + '/HrSetup/GetUniversities/' + id);
    }

    GetEmployee(id): Observable<Employee> {
        return this.ApiService.get(this.baseUrl + '/Users/GetUser/' + id);
    }


    async updateEmployee() {
        //   let id = localStorage.getItem('id');
        //   let x = await  this.ApiService.post(this.baseUrl+'/Users/UpdateUser').toPromise();
        //   console.log(x);
        //   return x;
        // console.log(this.updateEmployeeBool);

    }

    async updateUersById(Employee: Employee) {
        console.log(Employee);
        let x = await this.ApiService.post(this.baseUrl + '/Users/UpdateUserDetail/' + localStorage.getItem('id'), Employee).toPromise();
        console.log(x);
        console.log(Employee);
        return x;
    }

    async updateUserCompanyById(Employee: EmployeeCompany) {

        this.prepareCompanyDetails();

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        console.log(this.compForm);

        let usercompany = await this.ApiService.post(`${this.baseUrl}/Users/UpdateUserCompany/${localStorage.getItem('id')}`, this.compForm).toPromise();
        console.log(usercompany);

    }

    // DEMO ONLY, you can find working methods below
    async addEmployee() {

        // let allFormDataInOne = this.prepareFormData();
        console.log(this.EmpbasicForm.value);
        let newuser = await this.ApiService.post(`${this.baseUrl}/Users/AddUser`, this.EmpbasicForm.value).toPromise();
        console.log(newuser);
        localStorage.setItem('id', newuser.userID);
        return newuser;
    }


    async addusercompany() {
        this.prepareCompanyDetails();
        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        console.log(this.compForm);

        let usercompany = await this.ApiService.post(`${this.baseUrl}/Users/AddUserDetailsById/${localStorage.getItem('id')}`, this.compForm).toPromise();
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
        let userpic = await this.ApiService.post(`${this.baseUrl}/Users/AddUserPhotoById/${localStorage.getItem('id')}`, this.selectedPic).toPromise();
        console.log(userpic);
        return userpic;
    }

    // ${this.baseUrl}/Users/AddUserPhotoById/${localStorage.getItem('id')}

    addDocument(file: FormData) {
        this.ApiService.post(this.baseUrl + '/Users/AddUserPhotoById/' + localStorage.getItem('id'), file).subscribe(res => {
            console.log(res);
        });
    }

    addDocuments(models: FormData) {

        this.ApiService.post(this.baseUrl + '/Users/AddUserDocumentsById/' + localStorage.getItem('id'), models).subscribe(res => {
            console.log(res);
        });
    }

    public DocumentsByUserId: any;
    async GetDocumentsByUserId() {
        this.DocumentsByUserId = await this.ApiService.get(this.baseUrl + '/Users/GetDocumentsByUserId/' + localStorage.getItem('id')).toPromise();
        console.log(this.DocumentsByUserId);
        return this.DocumentsByUserId;
    }

    async deleteUserDocument(id) {
        let x = await this.ApiService.delete(this.baseUrl + '/Users/DeleteUserDocumentById/' + id).toPromise();
        console.log(x);
        return x;
    }


    //  ${this.baseUrl}/Users/AddUserPhotoById/${localStorage.getItem('id')}

    async adduserDocuments() {
        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        let documents = await this.ApiService.post(`${this.baseUrl}/Users/AddUserDocumentsById/${localStorage.getItem('id')}`, this.documentForm.value).toPromise();
        console.log(documents);
        return documents;
    }

    async adduserSocial() {
        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        let social = await this.ApiService.post(`${this.baseUrl}/Users/UpdateUserSocial/${localStorage.getItem('id')}`, this.SocialForm.value).toPromise();
        console.log(social);
        return social;
    }

    async updateuserSocial(EmployeeSocial: EmployeeSocial) {
        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        console.log(EmployeeSocial);
        let social = await this.ApiService.post(`${this.baseUrl}/Users/UpdateUserSocial/${localStorage.getItem('id')}`, EmployeeSocial).toPromise();
        console.log(social);
        return social;
    }
    async updateuserRelation(EmployeeDependant: EmployeeDependant) {
        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        console.log(EmployeeDependant);
        let dependnt = await this.ApiService.post(`${this.baseUrl}/Users/AddUserRelationsById/${localStorage.getItem('id')}`, EmployeeDependant).toPromise();
        console.log(dependnt);
        return dependnt;
    }
    async updateuserQualification(EmployeeQualification: EmployeeQualification) {
        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        console.log(EmployeeQualification);
        let qualification = await this.ApiService.post(`${this.baseUrl}/Users/UpdateUserQualification/${localStorage.getItem('id')}`, EmployeeQualification).toPromise();
        console.log(qualification);
        return qualification;
    }

    async updateuserWorkExperience(EmployeeExperience: EmployeeExperience) {
        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        console.log(EmployeeExperience);
        let workExp = await this.ApiService.post(`${this.baseUrl}/Users/AddWorkExperiencesById/${localStorage.getItem('id')}`, EmployeeExperience).toPromise();
        console.log(workExp);
        return workExp;
    }

    async updateuserBank(EmployeeBank: EmployeeBank) {
        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        let bankuser = await this.ApiService.put(`${this.baseUrl}/Users/UpdateUserBankByUserId/${localStorage.getItem('id')}`, EmployeeBank).toPromise();
        console.log(bankuser);
        return bankuser;
    }

    async GetRelationsByUserId() {
        this.UserDependants = await this.ApiService.get(this.baseUrl + '/Users/GetRelationsByUserId/' + localStorage.getItem('id')).toPromise();
        return this.UserDependants;
    }

    async addBank() {
        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        let bank = await this.ApiService.post(`${this.baseUrl}/Users/AddUserBankById/${localStorage.getItem('id')}`, this.EmpbankForm.value).toPromise();
        console.log(bank);
        return bank;
    }

    public allQualifications = [];
    public currentUniversity: any = {};
    public university = {
        Name: '',
        Qualifications: []
    }

    async adduserUniversities() {
        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        let q = { ...this.QualificationForm.value };
        // Degree: { Name: this.QualificationForm.value.DegreeId }
        console.log(q);
        q.DegreeId = Number.parseInt(q.DegreeId);
        // this.university.Qualifications.push(q);
        this.selectedUni.Qualifications.push(q);
        let uniAddedAlready = this.allQualifications.find(q => q.Name === this.selectedUni.Name);
        if (!uniAddedAlready) {
            this.allQualifications.push(this.selectedUni);
        }
        console.log(this.allQualifications);

        let universities = await this.ApiService.post(`${this.baseUrl}/Users/AddUserUniversitiesById/${localStorage.getItem('id')}`, this.QualificationForm.value).toPromise();
        console.log(universities);
        return universities;
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

        console.log(this.currentUser);

        let authToken = localStorage.getItem('auth_token');
        console.log(this.allDependentForm);
        this.allDependentForm[0] = this.DependantForm.value;
        let relation = await this.ApiService.post(`${this.baseUrl}/Users/AddUserRelationsById/${localStorage.getItem('id')}`, Dependant).toPromise();
        return relation;
    }

    async GetExperienceByUserId() {
        this.UserExp = await this.ApiService.get(this.baseUrl + '/Users/GetworkExperienceByUserId/' + localStorage.getItem('id')).toPromise();
        return this.UserExp;
    }

    async AddworkExperience(data) {
        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: ({ 'Content-Type': 'application/json' }) }
        let exp = await this.ApiService.post(`${this.baseUrl}/Users/AddWorkExperience/${localStorage.getItem('id')}`, data).toPromise();
        console.log(exp);
        return exp;
    }

    async UpdateworkExperience(data) {
        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: ({ 'Content-Type': 'application/json' }) }
        let exp = await this.ApiService.put(`${this.baseUrl}/Users/UpdateWorkExperience/${localStorage.getItem('id')}`, data).toPromise();
        console.log(exp);
        return exp;
    }

    async Updateexperience(experience: EmployeeExperience) {
        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: ({ 'Content-Type': 'application/json' }) }
        this.allExperiencexpForm[0] = this.experienceForm.value;
        let exp = await this.ApiService.post(`${this.baseUrl}/Users/AddWorkExperiencesById/${localStorage.getItem('id')}`, experience).toPromise();
        console.log(exp);
        return exp;
    }



    // async adduserRelation() {

    //     let authToken = localStorage.getItem('auth_token');
    //     console.log(this.addedDependants);
    //     // this.allDependentForm[0] = this.DependantForm.value;
    //     let relation = await this.ApiService.post(`${this.baseUrl}/Users/AddUserRelationsById/${localStorage.getItem('id')}`, this.addedDependants).toPromise();
    //     return relation;
    // }

    async adduserDependant(data) {

        let authToken = localStorage.getItem('auth_token');
        let relation = await this.ApiService.post(`${this.baseUrl}/HrSetup/AddRelation`, data).toPromise();
        return relation;
    }

    async Updaterelation(data) {
        let authToken = localStorage.getItem('auth_token');
        let reltion = await this.ApiService.put(`${this.baseUrl}/HrSetup/UpdateRelation`, data).toPromise();
        return reltion;
    }


    async adduserexperience() {
        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: ({ 'Content-Type': 'application/json' }) }
        this.allExperiencexpForm[0] = this.experienceForm.value;
        let exp = await this.ApiService.post(`${this.baseUrl}/Users/AddWorkExperiencesById/${localStorage.getItem('id')}`, this.experienceForm.value).toPromise();
        console.log(exp);
        return exp;
    }




    async getBasicInfoOfCurrentUser() {
        this.currentlyLoggedinUser = localStorage.getItem('id');
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


