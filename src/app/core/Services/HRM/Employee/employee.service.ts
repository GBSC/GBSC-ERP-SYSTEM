import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HrmsService } from '../Setup/hrms.service';
import { ApiService } from '../../api.service';
import { Observable } from 'rxjs';
import { Employee } from '../../../Models/HRM/employee';

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
    public currentlyLoggedinUser;
    private baseUrl: string  = 'systemadmin/api';
    public firstForm: any;
    public currentUser : any = {};

    public selectedUni = {
        Name: '',
        Qualifications: []
    };
    public addedUniversities = [];
    public updateEmployeeBool = false

    constructor(private service: HrmsService, private fb: FormBuilder, private ApiService : ApiService) {


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

        this.employeereg = await this.ApiService.get(`${this.baseUrl}/Users/GetUsers`).toPromise();
        console.log(this.employeereg);
        return this.employeereg;
    }

    GetEmployee(id) : Observable<Employee>
    {
        return this.ApiService.get(this.baseUrl+'/Users/GetUser/'+id);       
    }


    async updateEmployee()
    {
    // //   let id = localStorage.getItem('id');
    //   let x = await  this.ApiService.post(this.baseUrl+'/Users/UpdateUser', data).toPromise();
    //   console.log(x);
    //   return x;
    console.log(this.updateEmployeeBool);
    
    }

    async updateUersById(Employee  : Employee){
        let x = await  this.ApiService.put(this.baseUrl+'/Users/UpdateUserDetail/'+localStorage.getItem('id'),Employee).toPromise();
        console.log(x);
        return x;
    }

    async updateUserCompanyById(Employee  : Employee){
        let x = await  this.ApiService.post(this.baseUrl+'/Users/UpdateUserCompany/'+localStorage.getItem('id'),Employee).toPromise();
        console.log(x);
        return x;
    }
  
    // DEMO ONLY, you can find working methods below
    async addEmployee() {

        // let allFormDataInOne = this.prepareFormData();

        let newuser: any = await this.ApiService.post(`${this.baseUrl}/Users/AddUser`, this.EmpbasicForm.value).toPromise();
        console.log(newuser);
        localStorage.setItem('id', newuser.userID);
        return newuser;
    }


    async addusercompany() {
        console.log(this.EmpCompanyForm.value);
        console.log(localStorage.getItem('id'));

        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: { 'Content-Type': 'application/json' } }
        let usercompany = await this.ApiService.post(`${this.baseUrl}/Users/AddUserDetailsById/${localStorage.getItem('id')}`, this.EmpCompanyForm.value).toPromise();
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

    addDocument(file :FormData){
        this.ApiService.post(this.baseUrl+'/Users/AddUserPhotoById/'+localStorage.getItem('id'), file).subscribe( res => {
           console.log(res);
       });
    }

   addDocuments(models : FormData){

       this.ApiService.post(this.baseUrl+'/Users/AddUserDocumentsById/'+localStorage.getItem('id'), models).subscribe( res => {
           console.log(res);
       });
    }

   public DocumentsByUserId : any;
   async GetDocumentsByUserId()
    {
        this.DocumentsByUserId = await this.ApiService.get(this.baseUrl+'/Users/GetDocumentsByUserId/'+localStorage.getItem('id')).toPromise();
        console.log(this.DocumentsByUserId);
        return this.DocumentsByUserId;
    }

    async deleteUserDocument(id)
    {
        let x = await this.ApiService.delete(this.baseUrl+'/Users/DeleteUserDocumentById/'+id).toPromise();
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
        let social = await this.ApiService.put(`${this.baseUrl}/Users/UpdateUserSocial/${localStorage.getItem('id')}`, this.SocialForm.value).toPromise();
        console.log(social);
        return social;
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
        if(!uniAddedAlready) {
            this.allQualifications.push(this.selectedUni);
        }
        console.log(this.allQualifications);
 
        let universities = await this.ApiService.post(`${this.baseUrl}/Users/AddUserUniversitiesById/${localStorage.getItem('id')}`, this.allQualifications).toPromise();
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
        let relation = await this.ApiService.post(`${this.baseUrl}/Users/AddUserRelationsById/${localStorage.getItem('id')}`, this.allDependentForm).toPromise();
        return relation;
    }
    


    async adduserexperience() {
        let authToken = localStorage.getItem('auth_token');
        let headers = { headers: ({ 'Content-Type': 'application/json' }) }
        this.allExperiencexpForm[0] = this.experienceForm.value;
        let exp = await this.ApiService.post(`${this.baseUrl}/Users/AddWorkExperiencesById/${localStorage.getItem('id')}`, this.allExperiencexpForm).toPromise();
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

    setBasicInfoFormValues(){

        this.EmpbasicForm.value.FirstName = this.currentUser.firstName;
        console.log(this.currentUser);
        console.log(this.EmpbasicForm.value);
        
    }
 
}


