import { Component, OnInit, Input } from '@angular/core';
import { AttendanceService, EmployeeService, AttendancesetupService } from '../../../core';
import { FormBuilder } from '@angular/forms';
 
@Component({
    selector: 'app-create-attendancerequest',
    templateUrl: './create-attendancerequest.component.html',
    styleUrls: ['./create-attendancerequest.component.scss']
})
export class CreateAttendancerequestComponent implements OnInit {

    public employee: any;
    public attendancerequestForm: any;
    public employees: any;
    public rosters: any;
    public currentUserAttendance = [];
    public rosterattendance: any;
    public updatingModel: any;
    public userRosterattendance: any;
    public employeeData: any = [];
    public employeeAsignRosters: any = [];
    public shift: any;

    constructor(public fb: FormBuilder, public attendanceservice: AttendanceService, public attendanceSetupservice: AttendancesetupService,
        public Employeeservice: EmployeeService) { }


    async ngOnInit() {

        this.attendancerequestForm = this.fb.group({
            UserId: [''], 
            FromDate: [''],
            ToDate: ['']


        });

        this.employees = await this.Employeeservice.GetAllEmployees();

        this.rosterattendance = await this.attendanceservice.getUserRosterAttendances();
        this.rosters = await this.attendanceSetupservice.getRosters();
         this.shift = await this.attendanceSetupservice.getShifts();
     }


    getattendancerequest(value) {
        this.attendancerequestForm.value.FromDate = this.formatDate(new Date(this.attendancerequestForm.value.FromDate))
        this.attendancerequestForm.value.ToDate = this.formatDate(new Date(this.attendancerequestForm.value.ToDate))
        this.attendanceservice.getUserAttendancesbyIddate(value.UserId, value.FromDate, value.ToDate).subscribe(res => {
            this.employeeData = res;
             this.employeeData.forEach(element => {
                 this.attendanceSetupservice.getAsignRosterById(element.assignRosterId).subscribe(res => {
                    this.employeeAsignRosters = res;
                 })
            });

        })
     }

    GetUserattendance(value) {
        this.currentUserAttendance = this.rosterattendance.filter(ul => ul.userId == value)
     } 

    async updateUserAttendance(value) {
         let x = await this.attendanceservice.updateUserRosterAttendance(value.key);
        return x;
    } 

    formatDate(date: Date) {
        return (date.getMonth() + 1) + "-" + date.getDate() + "-" + date.getFullYear();
    }

}
