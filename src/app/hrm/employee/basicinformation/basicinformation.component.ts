import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { EmployeeService, SetupService, HrmsService, SystemAdministrationService } from '../../../core';
import { Employee } from '../../../core/Models/HRM/employee';

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
    public departments: any;
    public branches: any;
    public companies: any;
    public countries: any;

    @Input('employeeId') id: number;

    @Output() updateMessage = new EventEmitter();


    public EmpbasicForm: FormGroup;

    constructor(public employeeService: EmployeeService, public sysAdminService: SystemAdministrationService, public fb: FormBuilder, public hrmService: HrmsService,
        public SetupServiceobj: SetupService, public router: Router, public route: ActivatedRoute) {

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
            CompanyId: [''],
            CountryId: [''],
            BranchId: [''],
            CityId: [''],
            ReligionId: [''],
            GroupId: [''],
            DepartmentId: [''],
            Address: [''],
            PermanentAddress: [''],
            FullName: ['']
        });

    }

    update(value) {

        value.UserId = this.id; 
        this.employeeService.updateEmployeeBasicInfo(value).subscribe(resp => {
            this.showSuccess("Basic Information Updated");
        });

    }

    async ngOnInit() {

        this.religion = await this.SetupServiceobj.getAllReligions();
        
        this.departments = await this.hrmService.getAllDepartments(); 

        this.groups = await this.SetupServiceobj.getAllGroups();

        this.cities = await this.hrmService.getAllCities();
       
        this.countries = await this.hrmService.getAllCountries();

        this.companies = await this.sysAdminService.getCompanies();
        
        this.sysAdminService.getBranches().subscribe(resp=>{
            this.branches = resp
        });

        if (this.id) {
            this.employeeService.GetEmployee(this.id).subscribe(resp => {

                this.Employee = resp; 
                this.patchValues(resp);

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
            CompanyId: employee.companyId,
            CountryId: employee.countryId,
            CityId: employee.cityId,
            BranchId: employee.branchId,
            ReligionId: employee.religionId,
            DepartmentId: employee.departmentId,
            Address: employee.address,
            PermanentAddress: employee.permanentAddress
        });
    }

    async Formsubmit(value) {

        this.employeeService.addEmployee(value).subscribe(resp => {

            this.router.navigate(['hrm/employee/updateemployee/' + resp.userID]);
        })
    }
}