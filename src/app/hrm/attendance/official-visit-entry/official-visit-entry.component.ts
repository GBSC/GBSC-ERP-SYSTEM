import { Component, OnInit } from '@angular/core';
import { AttendanceService } from '../services/attendance.service';
import { SystemAdministrationService } from '../../../systemadministration/service/systemadministration.services';
import { EmployeeService } from '../../employee/services/employee.service';

@Component({
    selector: 'app-official-visit-entry',
    templateUrl: './official-visit-entry.component.html',
    styleUrls: ['./official-visit-entry.component.scss']
})
export class OfficialVisitEntryComponent implements OnInit {

    public officialVisitentry: any;
<<<<<<< HEAD
    constructor(public attendanceservice: AttendanceService) { }
=======
    constructor(public attendanceservice: AttendanceService, public companyservice: SystemAdministrationService,
        public empservice: EmployeeService) { }
>>>>>>> master

    async ngOnInit() {
        await this.attendanceservice.getofficialVisitentries();
        this.officialVisitentry = this.attendanceservice.officialVisitentry
<<<<<<< HEAD
        console.log(this.officialVisitentry);
=======
        //console.log(this.officialVisitentry);

        await this.empservice.GetAllEmployees();
        let employee = this.empservice.employeereg

        await this.companyservice.getBranches();
        let branch = this.companyservice.branches
>>>>>>> master

    }

    async addofficialVisitentry(value) {
        this.attendanceservice.addofficialVisitentry(value.data);
    }

    async updateofficialVisitentry(value) {
        console.log(value);
        this.attendanceservice.updateofficialVisitentry(value);
    }

    async deleteofficialVisitentry(value) {
        this.attendanceservice.DeleteofficialVisitentry(value.key);
    }

}