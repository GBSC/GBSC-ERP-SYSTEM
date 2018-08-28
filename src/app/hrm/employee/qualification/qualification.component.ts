import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SetupService } from '../../hrmsSetup/services/setup.service';
import { FormBuilder, Validators } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';

@Component({
    selector: 'app-qualification',
    templateUrl: './qualification.component.html',
    styleUrls: ['./qualification.component.css']
})
export class QualificationComponent implements OnInit {
    @Output('setQualificationFormValue') setQualificationormValue = new EventEmitter();

    setQualificationFormValue: any;
    public QualificationForm: any;
    private fieldArray: Array<any> = [];
    private newAttribute: any = {};

    addFieldValue() {
        this.fieldArray.push(this.newAttribute)
        this.newAttribute = {};
    }
    deleteFieldValue(index) {
        this.fieldArray.splice(index, 1);
    }

    constructor(public fb: FormBuilder, public employee: EmployeeService, private SetupServiceobj: SetupService) { }

    async ngOnInit() {

        // this.QualificationForm = this.fb.group({
        //   School: ['', Validators.required],
        //   EducationLevel: ['', Validators.required],
        //   Timefrom: ['', Validators.required],
        //   Timeto: ['', Validators.required],
        //   Courses: ['', Validators.required],
        //   Description: ['', Validators.required],
        //   Grade: ['', Validators.required],
        //   Course: ['', Validators.required]
        // });

        await this.SetupServiceobj.getAllqualifications();
        let qualifctn = this.SetupServiceobj.qualification;
        console.log(qualifctn);

        await this.SetupServiceobj.getAllDegrees();
        let dgree = this.SetupServiceobj.degree;

        await this.SetupServiceobj.getAllgrades();
        let grde = this.SetupServiceobj.grades;

        await this.SetupServiceobj.getAllUniversities();
        let uni = this.SetupServiceobj.university;

    }

    getQualificationFormValue() {
        this.setQualificationFormValue.emit(this.QualificationForm.value);
    }

    async addqualification() {
        let qualification = await this.employee.adduserUniversities();
        console.log(qualification);
    }
}
