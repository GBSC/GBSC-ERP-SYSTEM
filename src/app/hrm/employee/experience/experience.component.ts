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

    @Input('employeeId') id: number;

<<<<<<< HEAD
    }

    async ngOnInit() {

        this.workExperience = await this.employeeService.GetExperienceByUserId();

        this.route.params.subscribe((params) => {
            this.id = +params['id'];

            this.employeeService.GetEmployee(this.id).subscribe(resp => {
=======
    public experiences: any;
>>>>>>> master

    constructor(public employeeService: EmployeeService) {

    }

    async ngOnInit() {

        this.employeeService.getWorkExperience(this.id).subscribe(resp => this.experiences = resp);

    }


<<<<<<< HEAD
    async addExperience(value) {
        let a: EmployeeExperience = value.data;
        a.userId = localStorage.getItem('id');
        console.log(a);
        await this.employeeService.adduserDependant(a);
    }
    private updatingExp: EmployeeExperience;

    async updatingExperience(value) {
        // let a: EmployeeDependant = value.data;
        // a.userId = localStorage.getItem('id');
        // console.log(a);
        this.updatingExp = { ...value.oldData, ...value.newData }
    }

    async updateExperience() {
        await this.employeeService.Updaterelation(this.updatingExp);
=======
    addWorkExperience(value) {
        value.data.userId = this.id;

        this.employeeService.addWorkExperience(value.data).subscribe(resp => console.log(resp));
>>>>>>> master
    }

    updateWorkExperience(value) {

        let expereince = this.experiences.find(x => x.WorkExperienceId == value.key);

        expereince = { ...expereince, ...value.data };

        this.employeeService.updateWorkExperience(expereince).subscribe(resp => console.log(resp));
    }

}
