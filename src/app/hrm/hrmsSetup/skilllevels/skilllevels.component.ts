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
    public updatingSkill: any;

    constructor(public httpClient: HttpClient, public dataService: SetupService) { }

    async ngOnInit() {
        this.skill = await this.dataService.getAllSkillLevels();
    }

    async addNewskill(slevel) {
        await this.dataService.addSkillLevel(slevel.data);
        this.skill = await this.dataService.getAllSkillLevels();
    }

    skillEditing(value) {
        this.updatingSkill = { ...value.oldData, ...value.newData };
    }

    async Editskill() {
        await this.dataService.updateSkillLevel(this.updatingSkill);
    }

    async deleteskill(skillevel) {
        await this.dataService.DeleteSkillLevel(skillevel.key);
    }

}



