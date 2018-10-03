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

    public relation: any;
    constructor(public httpClient: HttpClient, public dataService: SetupService) { }



    async ngOnInit() {
        await this.dataService.getAllRelation();
        this.relation = this.dataService.relation;
        // console.log(this.relation);
        // this.dataService.GetAllRelation().subscribe((data)=>this.Relation=data);
    }


    // If you don't need a filter or a pagination this can be simplified, you just use code from else block

    addrelation(relation) {
        this.dataService.addRelation(relation.data);
    }

    Editrelation(reltion) {
        this.dataService.updateRelation(reltion);
    }

    deleterelation(reltn) {
        this.dataService.DeleteRelation(reltn.key);
    }


}