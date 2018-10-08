import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EmployeeService, SetupService } from '../../../core';
import { Router, ActivatedRoute } from '@angular/router';
import { Employee } from '../../../core/Models/HRM/employee';
import { EmployeeQualification } from '../../../core/Models/HRM/employeeQualification';

@Component({
    selector: 'app-employeequalification',
    templateUrl: './qualification.component.html',
    styleUrls: ['./qualification.component.css']
})
export class EmployeeQualificationComponent implements OnInit {
    public Employee: any;
    public qualification: any;

    @Input('id') id: number;
    @Output('setQualificationFormValue') setQualificationormValue = new EventEmitter();

    public setQualificationFormValue: any;
    public QualificationForm: any;
    public degree: any;
    private fieldArray: Array<any> = [];
    private newAttribute: any = {};
    public addedUni = [];
    public selectedUni = '';
    private UserQualifications : Array<any> = [];

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
        public router: Router, private route: ActivatedRoute)
     {
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

        this.qualification = await this.employee.GetQualificationByUserId(); 
  
        this.route.params.subscribe((params) => {
            this.id = +params['id'];
        console.log(this.id)

        this.employee.GetUniversity(this.id).subscribe(resp => {

            this.Employee = resp;
        // this.patchValues(resp);

        });
    });

        await this.SetupServiceobj.getAllqualifications();
        let qualifctn = this.SetupServiceobj.qualification;
        console.log(qualifctn);

        await this.SetupServiceobj.getAllDegrees();
        let dgree = this.SetupServiceobj.degree;

        await this.SetupServiceobj.getAllUniversities();
        let uni = this.SetupServiceobj.university;
     }
 
     async update(value) {
        console.log(value);
      await this.employee.updateuserQualification(value);

    }


    // p(e,u) {
    //         console.log(e,u);
    //         this.employee.selectedUni = {Name: '', Qualifications: []}
    //         this.employee.university.Name = u;
    //         this.employee.selectedUni.Name =u;
    //         this.employee.addedUniversities.push(this.employee.selectedUni);
    //         console.log(this.employee.university);
    // }

    setSelectedUniversity(e){
        console.log(this.employee.addedUniversities);
        this.employee.selectedUni = this.employee.addedUniversities.find(u => u.Name === e.target.value)
        console.log(this.employee.selectedUni)
    }

    getQualificationFormValue() {
        this.setQualificationFormValue.emit(this.QualificationForm.value);
    }

    async addQualification(value) {
        let a: EmployeeQualification = value.data;
        a.userId = localStorage.getItem('id');
        console.log(a);
        let qualification = await this.employee.adduserUniversities(value.data);
        console.log(qualification);
    }
    async updatingQualification(value) {
        this.qualification = {...value.oldData, ...value.newData}
    }
    async updateQualification(value) {
        await this.employee.updateuserQualification(this.qualification);
       
    }

    // patchValues(qualification : any) {

    //     this.QualificationForm.patchValue({

    //         Name:  qualification.name,
    //         DegreeId: qualification.degreeId,
    //         Timefrom: qualification.timeFrom,
    //         Timeto: qualification.timeTo,
    //         Grade: qualification.grade,
    //         Courses: qualification.courses,
    //         Description: qualification.description 

    //     });
    //   }
}

