import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EmployeeService, SetupService } from '../../../core';

@Component({
    selector: 'app-employeequalification',
    templateUrl: './qualification.component.html',
    styleUrls: ['./qualification.component.css']
})
export class EmployeeQualificationComponent implements OnInit {
    @Output('setQualificationFormValue') setQualificationormValue = new EventEmitter();

    setQualificationFormValue: any;
    public QualificationForm: any;
    private fieldArray: Array<any> = [];
    private newAttribute: any = {};

    addFieldValue() {
        this.employee.allQualifications.push({ ...this.employee.QualificationForm.value });
        console.log(this.employee.allQualifications);
        this.fieldArray.push(this.newAttribute)
        this.newAttribute = {};
    }

    setUniName(e) {
        console.log(e);
        // console.log(this.employee.university);
        // this.employee.university.Name = e.target.value;
    }

    deleteFieldValue(index) {
        this.fieldArray.splice(index, 1);
    }

    constructor(public fb: FormBuilder, public employee: EmployeeService, private SetupServiceobj: SetupService) { }

    async ngOnInit() {


        await this.SetupServiceobj.getAllqualifications();
        let qualifctn = this.SetupServiceobj.qualification;
        console.log(qualifctn);

        await this.SetupServiceobj.getAllDegrees();
        let dgree = this.SetupServiceobj.degree;

        await this.SetupServiceobj.getAllgrades();
        let grde = this.SetupServiceobj.grades;

        await this.SetupServiceobj.getAllUniversities();
        let uni = this.SetupServiceobj.university;

        // this.employee.currentUniversity = this.employee.allQualifications[0];
    }

    p(e) {
        console.log(e);
        this.employee.university.Name = e.target.value;
        console.log(this.employee.university);
    }

    getQualificationFormValue() {
        this.setQualificationFormValue.emit(this.QualificationForm.value);
    }

    async addqualification() {
        let qualification = await this.employee.adduserUniversities();
        console.log(qualification);
    }
}
