import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { EmployeeBasicInfo } from '../models/employeebasicinfo,interface';
import { HrmsService } from '../../hrmsSetup/services/hrms.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Employee} from '../../model/employee';
import { Observable } from 'rxjs';

@Injectable()
export class EmployeeService {

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
    public allExperiencexpForm: any = [];
    public employeereg: Object;
    public allFormData: any = {};
    public currentlyLoggedinUser
    private baseUrl: string  = 'http://gbsc-erp.azurewebsites.net/systemadmin/api';
    //private baseUrl: string = 'http://localhost:58090/api';
    public firstForm: any;
    constructor(private httpClient: HttpClient, service: HrmsService, private fb: FormBuilder) {


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

        this.EmpCompanyForm = this.fb.group({
            DesignationId: [''],
            ManagementLevelId: [''],
            FunctionId: [''],
            GroupId: [''],
            EmployeeStatusId: [''],
            EmployeeTypeId: [''],
            Shift: [''],
            GradeId: [''],
            QualificationId: [''],
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

        this.QualificationForm = this.fb.group({
            Name: [''],
            DegreeId: [],
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
            Fb: [''],
            Twitter: [''],
            Instagram: [''],
            Linkedin: [''],
            GooglePlus: [''],
            Youtube: [''],
            Blog: [''],
            Pinterest: ['']
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

    }

    async GetAllEmployees() {
        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${authToken}` } }
        this.employeereg = await this.httpClient.get(`${this.baseUrl}/Users/GetUsers`).toPromise();
        console.log(this.employeereg);
        return this.employeereg;
    }




    GetEmployee(id) : Observable<Employee>
    {
        return this.httpClient.get<Employee>(this.baseUrl+'/Users/GetUser/'+id);       
    }

  async  updateEmployee(Employee  : Employee)
    {
    //   let id = localStorage.getItem('id');
      let x = await  this.httpClient.put(this.baseUrl+'/Users/UpdateUser/',Employee).toPromise();
      console.log(x);
      return x;
    }
    

    checkIfDisabled(e) {
        console.log(e);
    }



    // DEMO ONLY, you can find working methods below
    async addEmployee() {

        // let allFormDataInOne = this.prepareFormData();

        let newuser: any = await this.httpClient.post(`${this.baseUrl}/Users/AddUser`, this.EmpbasicForm.value).toPromise();
        console.log(newuser);
        localStorage.setItem('id', newuser.userID);
        return newuser;
    }




    async addusercompany() {
        console.log(this.EmpCompanyForm.value);
        this.EmpCompanyForm.value.FirstName = "John"
        this.EmpCompanyForm.value.LastName = "Doe"
        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        let usercompany = await this.httpClient.post(`${this.baseUrl}/Users/AddUserDetailsById/${localStorage.getItem('id')}`, this.EmpCompanyForm.value, { responseType: 'text' }).toPromise();
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
        let userpic = await this.httpClient.post(`${this.baseUrl}/Users/AddUserPhotoById/${localStorage.getItem('id')}`, headers, this.selectedPic).toPromise();
        console.log(userpic);
        return userpic;
    }

    // ${this.baseUrl}/Users/AddUserPhotoById/${localStorage.getItem('id')}

    async adduserDocuments() {
        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        let documents = await this.httpClient.post(`${this.baseUrl}/Users/AddUserDocumentsById/${localStorage.getItem('id')}`, this.documentForm.value, headers).toPromise();
        console.log(documents);
        return documents;
    }


    async adduserSocial() {
        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        let social = await this.httpClient.post(`${this.baseUrl}/Users/UpdateUser/${localStorage.getItem('id')}`,


            this.SocialForm.value, headers).toPromise();
        console.log(social);
        return social;
    }

    async addBank() {
        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        let bank = await this.httpClient.post(`${this.baseUrl}/Users/AddUserBankById/${localStorage.getItem('id')}`, this.EmpbankForm.value, headers).toPromise();
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
        let q = { ...this.QualificationForm.value, Degree: { Name: this.QualificationForm.value.DegreeId } };

        delete q.DegreeId;
        this.university.Qualifications.push(q);
        this.allQualifications.push(this.university);
        console.log(this.allQualifications);

        // this.allQualifications.push(this.createuniversity(this.QualificationForm.value.School));
        let universities = await this.httpClient.post(`${this.baseUrl}/Users/AddUserUniversitiesById/${localStorage.getItem('id')}`, this.allQualifications, { responseType: 'text' }).toPromise();
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


    async adduserRelation() {

        let authToken = localStorage.getItem('auth_token');
        // let headers = { headers: { } }
        // console.log(this.DependantForm.value);
        console.log(this.allDependentForm);
        // if(this.allDependentForm.length === 1) {
        this.allDependentForm[0] = this.DependantForm.value;
        // }
        let relation = await this.httpClient.post(`${this.baseUrl}/Users/AddUserRelationsById/${localStorage.getItem('id')}`, this.allDependentForm, { responseType: 'text' }).toPromise();
        return relation;
    }


    async adduserexperience() {
        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: ({ 'Content-Type': 'application/json' }) }
        this.allExperiencexpForm[0] = this.experienceForm.value;
        let exp = await this.httpClient.post(`${this.baseUrl}/Users/AddWorkExperiencesById/${localStorage.getItem('id')}`, this.allExperiencexpForm, { responseType: 'text' }).toPromise();
        console.log(exp);
        return exp;
    }


    async getBasicInfoOfCurrentUser() {
        this.currentlyLoggedinUser = localStorage.getItem('id');
        console.log(this.currentlyLoggedinUser);
        return await this.httpClient.get(`${this.baseUrl}/Users/GetUser/${this.currentlyLoggedinUser}`).toPromise();
    }

    // prepareFormData(): any {
    //   let form = {};
    //   form = {
    //     ...this.allFormData.Empbasicinfo,
    //     ...this.allFormData.QualificationForm,
    //     ...this.allFormData.experience,
    //     ...this.allFormData.Profilepic,
    //     ...this.allFormData.DependantForm,
    //     ...this.allFormData.SocialForm,
    // home    ...this.allFormData.documentForm,
    //     ...this.allFormData.EmpCompanyForm,
    //     ...this.allFormData.EmpbankForm
    //   }

    //   return form;
    // }


    getProfileInfo(value) {
        this.allFormData.profileInfo = value;
    }

    getBank(value) {
        this.allFormData.bank = value;
    }

    async getdataToUpdate(userId, userUrl) {
        return await this.httpClient.get(`${this.baseUrl}/${userUrl}/${userId}`).toPromise();
    }

    async updateUser(data) {

        console.log(data.key);
        console.log(data);

        let usr = await this.getdataToUpdate(data.key, 'GetUser');
        usr = { ...usr, ...data.data }
        console.log(usr);
        // let authToken = localStorage.getItem('auth_token');  
        // let headers = {headers: {'Content-Type':'application/json'}}
        return await this.httpClient.put('${this.baseUrl}/Users/UpdateUser', usr).toPromise();

    }


    // DeleteEmployeeBasicInfos(EmployeeBasicInfo : EmployeeBasicInfo): void {

    // console.log(EmployeeBasicInfo);

    // let authToken = localStorage.getItem('auth_token');
    // let headers = {headers: {'Content-Type':'application/json','Authorization':`bearer ${authToken}`}}

    // this.httpClient.delete('http://demo-gbscinc.azurewebsites.net/hrisservice/api/EmployeeReg/DeleteEmployeeBasicInfo/'+EmployeeBasicInfo.Id).subscribe(data => {
    //   console.log(data); 
    // },
    //   (error: HttpErrorResponse) => {
    //     console.log(error.name + ' ' + error.message);
    //   });

}


