import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { EmployeeService, SetupService, HrmsService, SystemAdministrationService, AuthService } from '../../../core';
import { Employee } from '../../../core/Models/HRM/employee';
import { City } from '../../../core/Models/HRM/city';
import { Branch } from '../../../core/Models/HRM/branch';
import { Department } from '../../../core/Models/HRM/department';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-basicinformation',
    templateUrl: './basicinformation.component.html',
    styleUrls: ['./basicinformation.component.css']
})
export class BasicinformationComponent implements OnInit {


    public basic: any;
    public religion: any;
    public language: any;
    public cities: any;
    public Employee: any;
    public groups: any; 
    public branches: any;
    public companies: any;
    public countries: any;
    submitted = false;

    @Input('employeeId') id: number;

    @Output() updateMessage = new EventEmitter();


    public EmpbasicForm: FormGroup;

    constructor(public employeeService: EmployeeService, public sysAdminService: SystemAdministrationService,public authService : AuthService,
        public fb: FormBuilder, public toster: ToastrService, public hrmService: HrmsService,public SetupServiceobj: SetupService, public router: Router, public route: ActivatedRoute) {

        this.EmpbasicForm = this.fb.group({
            FirstName: ['',Validators.required],
            LastName: ['',Validators.required],
            FatherName: [''],
            Email: ['',  Validators.email],
            Cnic: ['', [Validators.required, Validators.minLength(13)]],
            CnicExpiry: [''],
            Phone: ['', [Validators.required, Validators.minLength(11)]],
            HomePhone: ['', Validators.minLength(12)],
            DOB: [''],
            POB: [''],
            BloodGroup: [''],
            MaritalStatus: [''],
            Gender: [''],
            CompanyId: [''],
            CountryId: [''],
            BranchId: [''],
            CityId: [''],
            ReligionId: [''],
            GroupId: ['', Validators.required],
            DepartmentId: [''],
            Address: [''],
            PermanentAddress: [''],
            FullName: ['']
        });

    }

    update(value) {
        console.log(value); 
        this.submitted = true;
        if (this.EmpbasicForm.invalid) { 
            this.toster.error("Fill All Required Fields");  
        }
        else{ 
        value.UserId = this.id; 
        value.CompanyId = this.authService.getUserCompanyId(); 
        this.employeeService.updateEmployeeBasicInfo(value).subscribe(resp => {
            console.log(resp); 
            this.showSuccess("Basic Information Updated");
        }); 
        console.log(value); 
        }
    }

    async ngOnInit() {

        this.religion = await this.SetupServiceobj.getAllReligions();

        this.groups = await this.SetupServiceobj.getAllGroups();
        console.log(this.groups);
        

        this.hrmService.GetCitiesByCompanyId(this.authService.getUserCompanyId()).subscribe((res : City[]) => {
            this.cities = res;
        }); 
       
        this.hrmService.getCountriesByCompanyId(this.authService.getUserCompanyId()).subscribe((res : any[]) => {
            this.countries = res;
        });

        this.companies = await this.sysAdminService.getCompanies();
        
        this.sysAdminService.getBranchesByComapnyId(this.authService.getUserCompanyId()).subscribe((res : Branch[]) => {
            this.branches = res;
        });

        if (this.id) {
            this.employeeService.GetEmployee(this.id).subscribe(resp => {

                this.Employee = resp; 
                this.patchValues(resp);
                console.log(resp);
            });
        }  
    }

    showSuccess(message) {

        this.updateMessage.emit(message);
    }

    isUpdate(): boolean {

        if (this.id > 0)
            return true;
        else
            return false;
    }

    patchValues(employee: any) {

        this.EmpbasicForm.patchValue({
            FirstName: employee.firstName,
            LastName: employee.lastName,
            FatherName: employee.fatherName,
            Email: employee.email,
            Cnic: employee.cnic,
            CnicExpiry: employee.cnicExpiry,
            Phone: employee.phone,
            HomePhone: employee.homePhone,
            DOB: employee.dob,
            POB: employee.pob,
            BloodGroup: employee.bloodGroup,
            MaritalStatus: employee.maritalStatus,
            Gender: employee.gender,
            GroupId: employee.groupId, 
            CountryId: employee.countryId,
            CityId: employee.cityId,
            BranchId: employee.branchId,
            ReligionId: employee.religionId,
            DepartmentId: employee.departmentId,
            Address: employee.address,
            PermanentAddress: employee.permanentAddress
        });
    }

    get f() { return this.EmpbasicForm.controls; }

    async Formsubmit(value) {
        this.submitted = true;
        if (this.EmpbasicForm.invalid) { 
            this.toster.error("Fill All Required Fields");  
        } 
        else{
        value.CompanyId = this.authService.getUserCompanyId(); 
        this.employeeService.addEmployee(value).subscribe(resp => { 
            this.router.navigate(['hrm/employee/updateemployee/' + resp.userID]);
        })
    } 
}
}