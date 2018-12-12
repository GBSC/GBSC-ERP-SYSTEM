import { Component, OnInit } from '@angular/core';
import { AttendancesetupService, AttendanceService, EmployeeService } from '../../../../core';

@Component({
    selector: 'app-attendance-flag-exemption',
    templateUrl: './attendance-flag-exemption.component.html',
    styleUrls: ['./attendance-flag-exemption.component.scss']
})
export class AttendanceFlagExemptionComponent implements OnInit {

    popupVisible = false;
    selectedRows: number[];
    prefix: string;
    selectionChangedBySelectbox: boolean;
    public selectedUsers = [];
    public attendanceflagExemption: any;
    public attendanceFlag: any;
    public employee: any;
    public flagType: any;
    public attendanceExemption : any = {};

    constructor(public attendanceservice: AttendanceService,public empservice: EmployeeService, public attendancesetupservice: AttendancesetupService) { }

    async ngOnInit() {
        this.attendanceflagExemption = await this.attendanceservice.getAttendanceFlagExemptions();

        this.attendanceFlag = await this.attendancesetupservice.getAttendanceFlags();

        this.employee = await this.empservice.GetAllEmployees();

        this.flagType = await this.attendancesetupservice.getFlagTypes();
    }

    showInfo(employee) { 
        this.popupVisible = true;
    }

      
    selectionChangedHandler(e) { 
        this.attendanceExemption.UserAttendanceFlagExemptions = e.selectedRowsData.map(u => {
            return {
                userId: u.userId, 
            };
        }); 
        if(!this.selectionChangedBySelectbox) {
            this.prefix=null;
        }
       
        this.selectionChangedBySelectbox=false; 
    }

     addselecteduser() {
        console.log(this.selectedUsers);
        this.popupVisible = false;
    }

    async addflagExemption(value) {
        this.attendanceExemption = {...this.attendanceExemption, ...value.data};
        console.log(this.attendanceExemption);

        await this.attendanceservice.addAttendanceFlagExemption(this.attendanceExemption);
        this.attendanceflagExemption = await this.attendanceservice.getAttendanceFlagExemptions();
    }

    async updateflagExemption(value) {
        this.attendanceservice.updateAttendanceFlagExemption(value);
    }

    async deleteflagExemption(value) {
        this.attendanceservice.DeleteAttendanceFlagExemption(value.key);
    }

}