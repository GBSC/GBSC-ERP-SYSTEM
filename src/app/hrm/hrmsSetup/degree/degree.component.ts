import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { SetupService } from '../../../core';

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

        this.degree = await this.dataService.getAllDegrees();
    }

    addNewDegree(dgree) {
        this.dataService.addDegree(dgree.data);
        this.degree = this.dataService.getAllDegrees();
    }

    Editdegree(deg) {
        this.dataService.updateDegree(deg);
    }

    deleteDegree(dgre) {
        this.dataService.DeleteDegree(dgre.key);
    }

}

