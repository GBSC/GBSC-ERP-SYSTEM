import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { EmployeeService, SetupService } from '../../../core';
import { Employee } from '../../../core/Models/HRM/employee';
import { Router, ActivatedRoute } from '@angular/router';
import { EmployeeDependant } from '../../../core/Models/HRM/employeeDependant';

@Component({
    selector: 'app-emergencycontact',
    templateUrl: './emergencycontact.component.html',
    styleUrls: ['./emergencycontact.component.css']
})
export class EmergencycontactComponent implements OnInit {
    @Output('setdepndntFormValue') setDepndntFormValue = new EventEmitter();

    public DependantForm: any;
    public fieldArray: Array<any> = [];
    public newAttribute: any = {};
    public Employee: Employee;
    public dependant: any;
    private updatingModel: any; 
    @Input('id') id: number;


    constructor(public fb: FormBuilder, public employeeService: EmployeeService, private SetupServiceobj: SetupService,
        public router: Router, private route: ActivatedRoute) {
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
    }

    async ngOnInit() {

        this.employeeService.GetEmployee(this.id).subscribe(resp => {

            this.Employee = resp;
            console.log(this.Employee);

            // this.patchValues(resp);

        });

        this.employeeService.addedDependants = this.employeeService.currentUser.relations.map(r => {
            for (let k in r) {
                r[k.substr(0, 1).toUpperCase() + k.substr(1)] = r[k];
            }
            return r;
        });

        this.dependant = await this.employeeService.GetRelationsByUserId();
        console.log(this.dependant);


        await this.SetupServiceobj.getAllRelation();
        let reltn = this.SetupServiceobj.relation;

        await this.SetupServiceobj.getAllCountries();
        let countries = this.SetupServiceobj.country;

        this.employeeService.allDependentForm.push({ ...this.employeeService.DependantForm.value });
        this.employeeService.firstForm = this.employeeService.allDependentForm[0];
        await this.SetupServiceobj.getAllCities();
        let cities = this.SetupServiceobj.city;
    }

    ec(e, f) {
        e.preventDefault();
        console.log(e, f);
        this.employeeService.selectedDependants = {}
        this.employeeService.DependantForm.value.Name = f;
        this.employeeService.addedDependants.push(this.employeeService.DependantForm.value);
        console.log(this.employeeService.addedDependants);
    }

    setSelectedDependant(e) {
        console.log(this.employeeService.addedDependants);
        this.employeeService.selectedDependants = this.employeeService.addedDependants.find(u => u.Name === e.target.value)
        console.log(this.employeeService.selectedDependants)
    }

    async update(value) {
        console.log(value);
        await this.employeeService.UpdateDependant(value);

    }

    addFieldValue() {
        this.employeeService.allDependentForm.push({ ...this.employeeService.DependantForm.value });
        console.log(this.employeeService.allDependentForm);
        this.fieldArray.push(this.newAttribute)
        this.newAttribute = {};
    }
    deleteFieldValue(index) {
        this.fieldArray.splice(index, 1);
    }

    getdepndntFormValue() {
        console.log(this.DependantForm.value);
        this.setDepndntFormValue.emit(this.DependantForm.value);
    }

    async addDependant(value) { 
        await this.employeeService.adduserDependant(value.data);
    }

    async updatingDependant(value) {  
        this.updatingModel = { ...value.oldData, ...value.newData }
        console.log(value);
        
    }

    async updateDependant() {
        await this.employeeService.Updaterelation(this.updatingModel);
        console.log(this.updatingModel);
        
    }


    patchValues(dependant: any) {

        this.employeeService.DependantForm.patchValue({

            Name: dependant.name,
            Phone: dependant.phone,
            Email: dependant.email,
            Address: dependant.address,
            Country: dependant.country,
            City: dependant.city,
            State: dependant.state,
            Zip: dependant.zip,
            HomePhone: dependant.homePhone,
            PermanentAddress: dependant.permanentAddress

        });
    }
}
