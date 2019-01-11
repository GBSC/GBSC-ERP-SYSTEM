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
    public universityupdating: any;

    constructor(public httpClient: HttpClient, public dataService: SetupService) { }

    async ngOnInit() {
        this.university = await this.dataService.getAllUniversities();
    }

    async adduniversity(uni) {
        await this.dataService.adduniversity(uni.data);
        this.university = await this.dataService.getAllUniversities();
    }

    universityEditing(value) {
        this.universityupdating = { ...value.oldData, ...value.newData };
    }

    async Edituniversity() {
        await this.dataService.updateuniversity(this.universityupdating);
    }

    async deleterelation(universty) {
        await this.dataService.Deleteuniversity(universty.key);
    }

}
