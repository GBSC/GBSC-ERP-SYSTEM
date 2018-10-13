import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EmployeeService, SetupService } from '../../../core';
import { Router, ActivatedRoute } from '@angular/router';
import { Employee } from '../../../core/Models/HRM/employee';
import { EmployeeQualification } from '../../../core/Models/HRM/employeeQualification';
import { DataGrid } from 'primeng/primeng';

@Component({
    selector: 'app-employeequalification',
    templateUrl: './qualification.component.html',
    styleUrls: ['./qualification.component.css']
})
export class EmployeeQualificationComponent implements OnInit {
<<<<<<< HEAD
    public Employee: any;
    @Input('id') id: number;
    @Output('setQualificationFormValue') setQualificationormValue = new EventEmitter();

    public setQualificationFormValue: any;
    public QualificationForm: any;
    private fieldArray: Array<any> = [];
    private newAttribute: any = {};
    public addedUni = [];
    public selectedUni = '';

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

    constructor(public fb: FormBuilder, public employee: EmployeeService, private SetupServiceobj: SetupService,
        public router: Router, private route: ActivatedRoute) {
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
    }

    async ngOnInit() {

        this.route.params.subscribe((params) => {
            this.id = +params['id'];
            console.log(this.id)

            this.employee.GetUniversity(this.id).subscribe(resp => {

                this.Employee = resp;
                this.patchValues(resp);

            });
        });
=======

    public degrees: any;
    public qualifications: any;


    @Input('employeeId') id: number;

>>>>>>> master

    constructor(public employeeService: EmployeeService, private SetupServiceobj: SetupService,
        public router: Router, private route: ActivatedRoute) {
    }

<<<<<<< HEAD
        await this.SetupServiceobj.getAllUniversities();
        let uni = this.SetupServiceobj.university;
    }

    async update(value) {
        console.log(value);
        await this.employee.updateuserQualification(value);
=======
    async ngOnInit() {
>>>>>>> master

        this.SetupServiceobj.getAllDegrees().subscribe(resp => this.degrees = resp);

        this.employeeService.getQualifications(this.id).subscribe(resp => this.qualifications = resp);

<<<<<<< HEAD
    p(e, u) {
        console.log(e, u);
        this.employee.selectedUni = { Name: '', Qualifications: [] }
        this.employee.university.Name = u;
        this.employee.selectedUni.Name = u;
        this.employee.addedUniversities.push(this.employee.selectedUni);
        console.log(this.employee.university);
    }

    setSelectedUniversity(e) {
        console.log(this.employee.addedUniversities);
        this.employee.selectedUni = this.employee.addedUniversities.find(u => u.Name === e.target.value)
        console.log(this.employee.selectedUni)
    }
=======
    }

    addQualification(value) {
        value.data.userId = this.id;
>>>>>>> master

        this.employeeService.addQualification(value.data).subscribe(resp => console.log(resp));
    }

    updateQualification(value) {

<<<<<<< HEAD
    patchValues(qualification: any) {
=======
        let qualification = this.qualifications.find(x => x.universityId == value.key);
>>>>>>> master

        qualification = { ...qualification, ...value.data };

<<<<<<< HEAD
            Name: qualification.name,
            DegreeId: qualification.degreeId,
            Timefrom: qualification.timeFrom,
            Timeto: qualification.timeTo,
            Grade: qualification.grade,
            Courses: qualification.courses,
            Description: qualification.description

        });
    }
=======
        this.employeeService.updateQualification(qualification).subscribe(resp => console.log(resp));
    }

>>>>>>> master
}

