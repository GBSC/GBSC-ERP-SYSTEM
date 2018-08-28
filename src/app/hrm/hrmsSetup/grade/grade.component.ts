import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { HomeDetails } from '../models/home.details.interface';
import { HrmsService } from '../services/hrms.service';

import { BehaviorSubject } from 'rxjs';

import { SetupService } from '../services/setup.service';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Grade } from '../models/grade,interface';

@Component({
    selector: 'app-grade',
    templateUrl: './grade.component.html',
    styleUrls: ['./grade.component.css']
})
export class GradesComponent implements OnInit {
    public grade: any;


    constructor(public httpClient: HttpClient,
        public dataService: SetupService) { }


    async ngOnInit() {
        // this.dataService.getAllgrades().subscribe((data)=>this.grade=data);
        await this.dataService.getAllgrades();
        this.grade = this.dataService.grades;
        //  console.log(this.grade);

    }

    // If you don't need a filter or a pagination this can be simplified, you just use code from else block

    addNewGrade(grde) {

        this.dataService.addGrade(grde.data);
    }

    gradeEdit(grad) {

        this.dataService.updateGrade(grad);
    }

    deletegrade(grade) {

        this.dataService.DeleteGrade(grade.key);
    }

}