import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { SetupService } from '../../../core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-relations',
    templateUrl: './relations.component.html',
    styleUrls: ['./relations.component.css']
})
export class RelationComponent implements OnInit {

    public updatingModel: any;
    public relation: any;

    constructor(public httpClient: HttpClient, public dataService: SetupService) { }
 
    async ngOnInit() {
        this.relation = await this.dataService.getAllRelation();
    }
 
    async addrelation(relation) {
        await this.dataService.addRelation(relation.data);
        this.relation = await this.dataService.getAllRelation();
    }

    relationUpdating(value) {
        this.updatingModel= {...value.oldData, ...value.newData};
    }
   
    async Editrelation(reltion) {
        await this.dataService.updateRelation(reltion);
    }

    async deleterelation(reltn) {
        await this.dataService.DeleteRelation(reltn.key);
    }
}