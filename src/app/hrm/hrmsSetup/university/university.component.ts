import { Component, OnInit } from '@angular/core';
import { SetupService } from '../../../core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-university',
    templateUrl: './university.component.html',
    styleUrls: ['./university.component.css']
})
export class UniversityComponent implements OnInit {

    public university: any;
    constructor(public httpClient: HttpClient,
        public dataService: SetupService) { }

    async ngOnInit() {
        await this.dataService.getAllUniversities();
        this.university = this.dataService.university;

    }

    adduniversity(uni) {
        this.dataService.adduniversity(uni.data);
    }

    Edituniversity(university) {
        this.dataService.updateuniversity(university);
    }

    deleterelation(universty) {
        this.dataService.Deleteuniversity(universty.key);
    }

}
