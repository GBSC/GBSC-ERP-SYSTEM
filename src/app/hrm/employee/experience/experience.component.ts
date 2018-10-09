import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { EmployeeService } from '../../../core';
import { EmployeeExperience } from '../../../core/Models/HRM/employeeExperience';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-experience',
    templateUrl: './experience.component.html',
    styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

    @Output('setExpFormValue') setExpFormValue = new EventEmitter();
    public experienceForm: any;
    public Employee: any;
    public workExperience: any;
    private updatingExp: any; 
    @Input('id') id: number;

    private fieldArray: Array<any> = [];
    private newAttribute: any = {};

    constructor(public employeeService: EmployeeService, public fb: FormBuilder,
        public router: Router, private route: ActivatedRoute) {
        this.experienceForm = this.fb.group({
            CompanyName: [''],
            Designation: [''],
            Timefrom: [''],
            Timeto: [''],
            Description: ['']
        });

    }

    async ngOnInit() {
 
        this.workExperience = await this.employeeService.GetExperienceByUserId();

        this.route.params.subscribe((params) => {
            this.id = +params['id'];

            this.employeeService.GetEmployee(this.id).subscribe(resp => {

                this.Employee = resp;
                console.log(this.Employee); 
                //   this.patchValues(resp);

            });
        });


        this.employeeService.allExperiencexpForm.push({ ...this.employeeService.experienceForm.value });
        this.employeeService.firstForm = this.employeeService.allExperiencexpForm[0];
    }

    async update(value) {
        console.log(value);
        await this.employeeService.updateuserWorkExperience(value);

    } 
    async addexpinfo() {
        let exp = await this.employeeService.adduserexperience();
        console.log(exp);
    }

    getexperienceFormValue() {
        this.setExpFormValue.emit(this.experienceForm.value);
    }


    async addExperience(value) { 
        await this.employeeService.AddworkExperience(value.data);
    }

    async updatingExperience(value) {  
        this.updatingExp = { ...value.oldData, ...value.newData }
    }

    async updateExperience() {
        await this.employeeService.UpdateworkExperience(this.updatingExp);
    }

}
