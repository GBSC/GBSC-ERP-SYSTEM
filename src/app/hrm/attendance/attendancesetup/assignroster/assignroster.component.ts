import { Component, OnInit } from '@angular/core';
import { AttendancesetupService } from '../../../../core';

@Component({
    selector: 'app-assignroster',
    templateUrl: './assignroster.component.html',
    styleUrls: ['./assignroster.component.scss']
})
export class AssignrosterComponent implements OnInit {

    public updatingModel : any;
    public assignroster: any;
    public roster: any;
    constructor(public attendancesetupservice: AttendancesetupService) { }

    async ngOnInit() {

        this.assignroster = await this.attendancesetupservice.getAsignRosters();
  
        this.roster = await this.attendancesetupservice.getRosters();

    }

    async addassignroster(value) {

        await this.attendancesetupservice.addAsignRoster(value.data);
        this.assignroster = await this.attendancesetupservice.getAsignRosters();
    }

     updatingAssignroster(value) {
       this.updatingModel = {...value.oldData, ...value.newData };
    }
   
    async updateassignroster() {
       await this.attendancesetupservice.updateAsignRoster( this.updatingModel);
       this.assignroster = await this.attendancesetupservice.getAsignRosters();
    }

    async deleteassignroster(value) {
        await this.attendancesetupservice.DeleteAsignRoster(value.key);
    }

}
