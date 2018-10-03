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
        // console.log(this.university);
        // this.dataService.GetAllRelation().subscribe((data)=>this.Relation=data);
    }


    // If you don't need a filter or a pagination this can be simplified, you just use code from else block

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
