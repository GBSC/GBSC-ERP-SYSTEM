import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { EmployeeService, SetupService, HrmsService } from '../../../core';
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
    public city: any;
    public Employee: any;
    public groups: any;

    @Input('employeeId') id: number;

    @Output() updateMessage = new EventEmitter();


    public EmpbasicForm: FormGroup;

    constructor(public employeeService: EmployeeService, public fb: FormBuilder, public hrmService: HrmsService,
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
            CountryId: [''],
            CityId: [''],
            ReligionId: [''],
            GroupId: [''],
            Address: [''],
            PermanentAddress: ['']
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

        this.language = await this.SetupServiceobj.getAllLanguages();
        
        this.groups = await this.SetupServiceobj.getAllGroups();

        this.city = await this.hrmService.getAllCities();

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
            CityId: employee.cityId,
            ReligionId: employee.religionId,
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