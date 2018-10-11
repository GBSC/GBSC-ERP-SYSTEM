import { Component, OnInit } from '@angular/core';
import { AttendanceService, SystemAdministrationService, EmployeeService } from '../../../core';

@Component({
    selector: 'app-official-visit-entry',
    templateUrl: './official-visit-entry.component.html',
    styleUrls: ['./official-visit-entry.component.scss']
})
export class OfficialVisitEntryComponent implements OnInit {

    public officialVisitentry: any;
    constructor(public attendanceservice: AttendanceService, public companyservice: SystemAdministrationService,
        public empservice: EmployeeService) { }

    async ngOnInit() {
        
        this.officialVisitentry = await this.attendanceservice.getOfficialVisitEntries();

        await this.empservice.GetAllEmployees();
        let employee = this.empservice.employeereg

        await this.companyservice.getBranches();
        let branch = this.companyservice.branches

    }

    async addofficialVisitentry(value) {
        this.attendanceservice.addOfficialVisitEntry(value.data);
    }

    async updateofficialVisitentry(value) { 
        this.attendanceservice.updateOfficialVisitEntry(value);
    }

    async deleteofficialVisitentry(value) {
        this.attendanceservice.DeleteOfficialVisitEntry(value.key);
    }

}