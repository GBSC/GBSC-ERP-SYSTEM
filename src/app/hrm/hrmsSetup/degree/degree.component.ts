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

    public degrees: any;
    public Model: any;

    constructor(public httpClient: HttpClient, public dataService: SetupService) { }

    async ngOnInit() {
        this.degrees = await this.dataService.getAllDegrees();
    }

    async addNewDegree(dgree) {
        await this.dataService.addDegree(dgree.data);
        this.degrees = await this.dataService.getAllDegrees();
    }

    Editingdegree(value) {
        this.Model = { ...value.oldData, ...value.newData };
    }

    async Editdegree() {
        await this.dataService.updateDegree(this.Model);
    }

    deleteDegree(dgre) {
        this.dataService.DeleteDegree(dgre.key);
    }

}

