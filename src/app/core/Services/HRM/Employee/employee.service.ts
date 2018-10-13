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

<<<<<<< HEAD
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
=======
    private baseUrl: string = 'systemadmin/api';
    public employeereg;
>>>>>>> master


    constructor(private service: HrmsService, private fb: FormBuilder, private ApiService: ApiService) {


    }

    //Employee
    async GetAllEmployees() {
        this.employeereg = await this.ApiService.get(`${this.baseUrl}/Users/GetUsers`).toPromise();
        return this.employeereg;
    }

    GetEmployee(id): Observable<Employee> {
        return this.ApiService.get(this.baseUrl + '/Users/GetUser/' + id);
    }


    updateEmployeeBasicInfo(Employee: Employee): Observable<any> {

        return this.ApiService.post(this.baseUrl + '/Users/UpdateUserDetail', Employee);
    }


<<<<<<< HEAD
    async updateUserCompanyById(Employee: EmployeeCompany) {

        this.prepareCompanyDetails();

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        console.log(this.compForm);

        let usercompany = await this.ApiService.post(`${this.baseUrl}/Users/UpdateUserCompany/${localStorage.getItem('id')}`, this.compForm).toPromise();
        console.log(usercompany);

=======
    addEmployee(employee): Observable<any> {

        return this.ApiService.post(`${this.baseUrl}/Users/AddUser`, employee);

>>>>>>> master
    }

    //Employee Company
    GetEmployeeCompany(id): Observable<EmployeeCompany> {

        return this.ApiService.get(this.baseUrl + '/Users/GetUserCompany/' + id);
    }

    addUserCompany(UserCompany): Observable<any> {

        return this.ApiService.post(`${this.baseUrl}/Users/AddUserCompany`, UserCompany);
    }

    updateUserCompany(UserCompany): Observable<any> {

        return this.ApiService.post(`${this.baseUrl}/Users/UpdateUserCompany`, UserCompany);
    }


    //Employee Documents
    addDocument(userId, file: FormData) {
        this.ApiService.post(this.baseUrl + '/Users/AddUserPhotoById/' + userId, file).subscribe(res => {
        });
    }

    addDocuments(userId, models: FormData) {

        this.ApiService.post(this.baseUrl + '/Users/AddUserDocumentsById/' + userId, models).subscribe(res => {
        });
    }

    async GetDocumentsByUserId(userId) {

        return await this.ApiService.get(this.baseUrl + '/Users/GetDocumentsByUserId/' + userId).toPromise();

    }

    async deleteUserDocument(userId) {
        let x = await this.ApiService.delete(this.baseUrl + '/Users/DeleteUserDocumentById/' + userId).toPromise();
        return x;
    }



    //Employee Social
    updateuserSocial(UserId: number, EmployeeSocial: EmployeeSocial): Observable<any> {

        return this.ApiService.post(`${this.baseUrl}/Users/UpdateUserSocial/${UserId}`, EmployeeSocial);
    }


<<<<<<< HEAD
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
=======
    //Employee Relations

    GetRelationsByUserId(id): Observable<any> {
>>>>>>> master

        return this.ApiService.get(this.baseUrl + '/Users/GetRelationsByUserId/' + id);
    }

    addUserRelation(relation: any): Observable<any> {

        return this.ApiService.post(`${this.baseUrl}/Users/AddRelation`, relation);
    }

    updateUserRelation(relation: any): Observable<any> {

        return this.ApiService.post(`${this.baseUrl}/Users/UpdateRelation`, relation);
    }


    //Employee Qualification

    getQualifications(userId): Observable<any> {

        return this.ApiService.get(this.baseUrl + '/Users/GetUserQualification/' + userId);
    }

<<<<<<< HEAD
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
=======
    addQualification(qualification: any): Observable<any> {

        return this.ApiService.post(`${this.baseUrl}/Users/AddQualification`, qualification);
    }

    updateQualification(qualification: any): Observable<any> {
>>>>>>> master

        return this.ApiService.post(`${this.baseUrl}/Users/UpdateQualification`, qualification);
    }


    //Employee Work Experience

    getWorkExperience(userId): Observable<any> {

<<<<<<< HEAD
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
=======
        return this.ApiService.get(this.baseUrl + '/Users/GetworkExperienceByUserId/' + userId);
    }

    addWorkExperience(experience: any): Observable<any> {
>>>>>>> master

        return this.ApiService.post(`${this.baseUrl}/Users/AddWorkExperience`, experience);
    }

    updateWorkExperience(experience: any): Observable<any> {

        return this.ApiService.post(`${this.baseUrl}/Users/UpdateWorkExperience`, experience);
    }


    //Employee Banks

    getBanks(userId): Observable<any> {

        return this.ApiService.get(this.baseUrl + '/Users/GetUserBanksByUserId/' + userId);
    }

    addBank(bank: any): Observable<any> {

        return this.ApiService.post(`${this.baseUrl}/Users/AddUserBank`, bank);
    }

    updateBank(bank: any): Observable<any> {

        return this.ApiService.post(`${this.baseUrl}/Users/UpdateUserBank`, bank);
    }


}


