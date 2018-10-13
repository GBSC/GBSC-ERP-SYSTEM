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

    public experiences: any;

    constructor(public employeeService: EmployeeService) {

    }

    async ngOnInit() {

        this.employeeService.getWorkExperience(this.id).subscribe(resp => this.experiences = resp);

    }


    addWorkExperience(value) {
        value.data.userId = this.id;

        this.employeeService.addWorkExperience(value.data).subscribe(resp => console.log(resp));
    }

    updateWorkExperience(value) {

        let expereince = this.experiences.find(x => x.WorkExperienceId == value.key);

        expereince = { ...expereince, ...value.data };

        this.employeeService.updateWorkExperience(expereince).subscribe(resp => console.log(resp));
    }

}
