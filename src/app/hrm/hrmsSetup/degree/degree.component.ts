import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
 
import { BehaviorSubject } from 'rxjs';

import { SetupService } from '../services/setup.service';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-degree',
    templateUrl: './degree.component.html',
    styleUrls: ['./degree.component.css']
})
export class DegreeComponent implements OnInit {

    public degree: any;
    constructor(public httpClient: HttpClient,
        public dataService: SetupService) { }

    async ngOnInit() {

        await this.dataService.getAllDegrees();
        this.degree = this.dataService.degree;
        // this.dataService.getAllDegrees().subscribe((data)=>this.degree=data);
    }



    // If you don't need a filter or a pagination this can be simplified, you just use code from else block

    addNewDegree(dgree) {

        this.dataService.addDegree(dgree.data);
    }

    Editdegree(deg) {
        this.dataService.updateDegree(deg);
    }

    deleteDegree(dgre) {
        this.dataService.DeleteDegree(dgre.key);
    }

}

