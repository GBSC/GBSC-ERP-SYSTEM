import { Component, OnInit, Input } from '@angular/core';
import { AttendanceService, EmployeeService, AttendancesetupService } from '../../../core';
import { FormBuilder } from '@angular/forms';
import { AllowancearrearComponent } from '../../payroll/payrollsetup/allowancearrear/allowancearrear.component';

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

    constructor(private fb: FormBuilder, public attendanceservice: AttendanceService, public attendanceSetupservice: AttendancesetupService,
        public Employeeservice: EmployeeService) { }


    async ngOnInit() {

        this.attendancerequestForm = this.fb.group({
            UserId: [''],
            // RosterId:[''],
            FromDate: [''],
            ToDate: ['']


        });

        this.employees = await this.Employeeservice.GetAllEmployees();

        this.rosterattendance = await this.attendanceservice.getUserRosterAttendances();
        this.rosters = await this.attendanceSetupservice.getRosters();
        console.log(this.rosters);
        this.shift = await this.attendanceSetupservice.getShifts();
        console.log(this.shift);

        //  this.assignrosters = await this.attendanceSetupservice.getAsignRoster(22);
        // .filter(s=> s.userId)
    }


    getattendancerequest(value) {
        this.attendancerequestForm.value.FromDate = this.formatDate(new Date(this.attendancerequestForm.value.FromDate))
        this.attendancerequestForm.value.ToDate = this.formatDate(new Date(this.attendancerequestForm.value.ToDate))
        this.attendanceservice.getUserAttendancesbyIddate(value.UserId, value.FromDate, value.ToDate).subscribe(res => {
            this.employeeData = res;
            console.log(this.employeeData);
            this.employeeData.forEach(element => {
                console.log(element.assignRosterId);
                this.attendanceSetupservice.getAsignRosterById(element.assignRosterId).subscribe(res => {
                    this.employeeAsignRosters = res;
                    console.log(this.employeeAsignRosters)
                })
            });

        })
        console.log(value);
    }

    GetUserattendance(value) {
        this.currentUserAttendance = this.rosterattendance.filter(ul => ul.userId == value)
        console.log(this.currentUserAttendance);
        // console.log(this.assignrosters);
        // console.log(this.assignrosters.shiftsId);
        // console.log(this.assignrosters.userAssignRosters);

        // let usersWithShifts = this.assignrosters.userAssignRosters.map(r => {
        //     r.shiftsId = this.assignrosters.shiftsId;
        //     return r;
        // });
        // usersWithShifts.foreach(

        // )
        // console.log(usersWithShifts);
    }


    // async updatingattendance(value) {
    //     this.updatingModel = { ...value.oldData, ...value.newData };
    // }


    // async updateuserRosterattendance() {
    //     this.attendanceservice.updateUserRosterAttendance(this.updatingModel);
    // }

    async  updateUserAttendance(value) {
        console.log(value);
        let x = await this.attendanceservice.updateUserRosterAttendance(value.key);
        return x;
    }

    // updateUserRosterAttendance    await this.attendanceservice.updateUserRosterAttendance(this.updatingModel);

    formatDate(date: Date) {
        return (date.getMonth() + 1) + "-" + date.getDate() + "-" + date.getFullYear();
    }

}
