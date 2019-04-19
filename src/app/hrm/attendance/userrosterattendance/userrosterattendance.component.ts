import { Component, OnInit } from '@angular/core';
import { AttendanceService, EmployeeService, AttendancesetupService } from '../../../core';
import { FormBuilder } from '@angular/forms';

@Component({
    selector: 'app-userrosterattendance',
    templateUrl: './userrosterattendance.component.html',
    styleUrls: ['./userrosterattendance.component.scss']
})
export class UserrosterattendanceComponent implements OnInit {

    public employee: any;
    public assignRoster: any;
    public userAttendanceForm: any;
    public updatingModel: any;
    public userRosterattendance: any;
    public userRosterId : any;

    constructor(public fb: FormBuilder, public attendanceservice: AttendanceService, public attendanceSetupService: AttendancesetupService,
        public employeeService: EmployeeService) {
        this.userAttendanceForm = this.fb.group({
            userId: [''],
            isOnLeave: [''],
            checkInTime: [''],
            checkOutTime: [''],
            attendanceDate: [''],
            assignRosterId: ['']
        });
    }

    async ngOnInit() {

        this.userRosterattendance = await this.attendanceservice.getUserRosterAttendances();
 
        this.employee = await this.employeeService.GetAllEmployees();

        this.attendanceSetupService.GetAsignRosters().subscribe(assignRoster => {
            this.assignRoster = assignRoster; 
        });

    }
 
    setAssignRoster(e) { 
        this.assignRoster.forEach(ar => {  
        return ar.userAssignRosters.forEach(g => {
                if(g.userId == e){ 
                     
                    this.userRosterId = g.assignRosterId; 
                     return;
                }
            });
        });
            
    }

    async adduserRosterattendance(value) {
 
        if (value.checkInTime != null && value.checkOutTime != null) {

            value.isPresent = true
        }
         value.assignRosterId = this.userRosterId
         
        await this.attendanceservice.addUserRosterAttendance(value);
         this.userRosterattendance = await this.attendanceservice.getUserRosterAttendances();
    }

    async updatingattendance(value) {
        this.updatingModel = { ...value.oldData, ...value.newData };
    }


    async updateuserRosterattendance() {
        await this.attendanceservice.updateUserRosterAttendance(this.updatingModel);
    }

    async deleteuserRosterattendance(value) {
        await this.attendanceservice.DeleteUserRosterAttendance(value.key);
    }
}