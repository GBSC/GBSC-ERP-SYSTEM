import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { EmployeeService, SetupService } from '../../../core';
import { Employee } from '../../../core/Models/HRM/employee';

@Component({
    selector: 'app-basicinformation',
    templateUrl: './basicinformation.component.html',
    styleUrls: ['./basicinformation.component.css']
})
export class BasicinformationComponent implements OnInit {


    public basic: any;
    public Employee: Employee;
    @Input('id') id: number;

    @Output('setbasicinfoFormValue') setBasicinfoFormValue = new EventEmitter();

    public EmpbasicForm: FormGroup;

    constructor(public employeeService: EmployeeService, public fb: FormBuilder, private SetupServiceobj: SetupService, public router: Router, private route: ActivatedRoute) {

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
            LanguageId: [''],
            Address: [''],
            PermanentAddress: ['']
        });

    }

    getbasicinfoFormValue() {
        this.setBasicinfoFormValue.emit(this.EmpbasicForm.value);
    }

    async update(value) {
        console.log(value);
      await this.employeeService.updateUersById(value);

    }

    async updateUersById(value) {
        console.log(value);
        
        await this.employeeService.updateUersById(value);
    }

     async ngOnInit() {

        this.employeeService.GetEmployee(this.id).subscribe(resp => {

            this.Employee = resp;

            this.patchValues(resp);

        });
 
    }

    patchValues(employee : any) {

        this.employeeService.EmpbasicForm.patchValue({

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
            CityId: employee.cityId,
            ReligionId: employee.religionId,
            Address: employee.address,
            PermanentAddress: employee.permanentAddress
        });
    }

    async Formsubmit(){
        await this.employeeService.addEmployee();
    }
}