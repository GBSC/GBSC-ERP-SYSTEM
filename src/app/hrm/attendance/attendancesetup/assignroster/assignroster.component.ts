import { Component, OnInit } from '@angular/core';
import { AttendancesetupService } from '../../services/attendancesetup.service';

@Component({
    selector: 'app-assignroster',
    templateUrl: './assignroster.component.html',
    styleUrls: ['./assignroster.component.scss']
})
export class AssignrosterComponent implements OnInit {


    public assignroster: any;
    constructor(public attendancesetupservice: AttendancesetupService) { }

    async ngOnInit() {
        await this.attendancesetupservice.getasignrosters();
        this.assignroster = this.attendancesetupservice.asignroster
        console.log(this.assignroster);

    }

    async addassignroster(value) {
        this.attendancesetupservice.addasignroster(value.data);
    }

    async updateassignroster(value) {
        console.log(value);
        this.attendancesetupservice.updateasignroster(value);
    }

    async deleteassignroster(value) {
        this.attendancesetupservice.Deleteasignroster(value.key);
    }

}
