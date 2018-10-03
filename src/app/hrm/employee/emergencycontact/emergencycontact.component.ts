import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { EmployeeService, SetupService } from '../../../core';

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



    constructor(public fb: FormBuilder, public employee: EmployeeService, private SetupServiceobj: SetupService) { }

    async ngOnInit() {

        await this.SetupServiceobj.getAllRelation();
        let reltn = this.SetupServiceobj.relation;

        await this.SetupServiceobj.getAllCountries();
        let countries = this.SetupServiceobj.country;

        this.employee.allDependentForm.push({ ...this.employee.DependantForm.value });
        this.employee.firstForm = this.employee.allDependentForm[0];
        await this.SetupServiceobj.getAllCities();
        let cities = this.SetupServiceobj.city;
    }

    addFieldValue() {
        this.employee.allDependentForm.push({ ...this.employee.DependantForm.value });
        console.log(this.employee.allDependentForm);
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
}
