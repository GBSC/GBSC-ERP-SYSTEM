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

    private baseUrl: string = 'systemadmin/api';
    public employeereg;


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


    addEmployee(employee): Observable<any> {

        return this.ApiService.post(`${this.baseUrl}/Users/AddUser`, employee);

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


    //Employee Relations

    GetRelationsByUserId(id): Observable<any> {

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

    addQualification(qualification: any): Observable<any> {

        return this.ApiService.post(`${this.baseUrl}/Users/AddQualification`, qualification);
    }

    updateQualification(qualification: any): Observable<any> {

        return this.ApiService.post(`${this.baseUrl}/Users/UpdateQualification`, qualification);
    }


    //Employee Work Experience

    getWorkExperience(userId): Observable<any> {

        return this.ApiService.get(this.baseUrl + '/Users/GetworkExperienceByUserId/' + userId);
    }

    addWorkExperience(experience: any): Observable<any> {

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


