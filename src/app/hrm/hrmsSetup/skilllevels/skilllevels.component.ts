import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { SetupService } from '../../../core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http'; 

@Component({
    selector: 'app-skilllevels',
    templateUrl: './skilllevels.component.html',
    styleUrls: ['./skilllevels.component.css']
})
export class SkillLevelsComponent implements OnInit {



    public skill: any;
    constructor(public httpClient: HttpClient,
        public dataService: SetupService) { }



    async ngOnInit() {
        await this.dataService.getAllSkillLevels();
        this.skill = this.dataService.skilllevels;
        // console.log(this.skill);
        // this.dataService.getAllSkillLevels().subscribe((data)=>this.skilllevels=data);
    }

    addNewskill(slevel) {
        this.dataService.addSkillLevel(slevel.data);
    }

    Editskill(skill) {
        this.dataService.updateSkillLevel(skill);
    }

    deleteskill(skillevel) {
        this.dataService.DeleteSkillLevel(skillevel.key);
    }

}



