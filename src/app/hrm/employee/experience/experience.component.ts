import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { EmployeeService } from '../../../core';

@Component({
    selector: 'app-experience',
    templateUrl: './experience.component.html',
    styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

    @Output('setExpFormValue') setExpFormValue = new EventEmitter();
    public experienceForm: any;
    private fieldArray: Array<any> = [];
    private newAttribute: any = {};

    constructor(public employee: EmployeeService, public fb: FormBuilder) { }

    async ngOnInit() {

        this.employee.allExperiencexpForm.push({ ...this.employee.experienceForm.value });
        this.employee.firstForm = this.employee.allExperiencexpForm[0];
    }

    addFieldValue() {
        this.employee.allExperiencexpForm.push({ ...this.employee.experienceForm.value });
        console.log(this.employee.allExperiencexpForm);
        this.fieldArray.push(this.newAttribute)
        this.newAttribute = {};
    }
    deleteFieldValue(index) {
        this.fieldArray.splice(index, 1);
    }
    async addexpinfo() {
        let exp = await this.employee.adduserexperience();
        console.log(exp);
    }

    getexperienceFormValue() {
        this.setExpFormValue.emit(this.experienceForm.value);
    }

}
