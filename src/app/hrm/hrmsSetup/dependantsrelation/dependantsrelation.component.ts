import { Component, OnInit } from '@angular/core';
import { SetupService } from '../../../core';

@Component({
  selector: 'app-dependantsrelation',
  templateUrl: './dependantsrelation.component.html',
  styleUrls: ['./dependantsrelation.component.scss']
})
export class DependantsrelationComponent implements OnInit {

    public updatingModel: any;
    public dependantsRelation: any;

    constructor(public dataService: SetupService) { }
 
    async ngOnInit() {
        this.dependantsRelation = await this.dataService.getDependantsRelations();
    }
 
    async addDependantRelation(value) {
        await this.dataService.addDependantsRelation(value.data);
        this.dependantsRelation = await this.dataService.getDependantsRelations();
    }

    DependantRelationUpdating(value) {
        this.updatingModel= {...value.oldData, ...value.newData};
    }
   
    async editDependantRelation() {
        await this.dataService.updateDependantsRelation(this.updatingModel);
    }

    async deleteDependantRelation(value) {
        await this.dataService.DeleteDependantsRelation(value.key);
    }
}