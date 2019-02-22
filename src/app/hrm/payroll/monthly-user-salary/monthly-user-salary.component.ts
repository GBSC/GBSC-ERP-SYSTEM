import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PayrollService, EmployeeService, PayrollSetupService, AttendanceService, AttendancesetupService } from '../../../core';
import { UserRosterAttendance } from '../../../core/Models/HRM/userRosterAttendance';
import { MonthlyUserSalary } from '../../../core/Models/HRM/monthlyUserSalary';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-monthly-user-salary',
    templateUrl: './monthly-user-salary.component.html',
    styleUrls: ['./monthly-user-salary.component.scss']
})
export class MonthlyUserSalaryComponent implements OnInit {

    public MonthlyUserSalaryForm: any
    public rosterAttendance: UserRosterAttendance[];
    public rosterattendance: any[] = [];
    public roster: any;
    public stopSalary: any;
    public paySlip: any;
    public monthlysalary: any;
    public employees: any;
    public userSalary: any;
    public monthlySalary: any;
    public monthlyUserSalary: any;
    public pfPayment: any;
    public payroll: any;
    public isDisabled = true;

    @Input('monthlyUserSalaryId') id: number;

    constructor(public fb: FormBuilder, public attendanceService: AttendanceService, public attendanceSetupService: AttendancesetupService, public payrollservice: PayrollService, public Employeeservice: EmployeeService,
        public payrollsetupservice: PayrollSetupService, public toastr: ToastrService, public router: Router, public activatedRoute: ActivatedRoute) { }

    async ngOnInit() {

        this.rosterAttendance = [];

        this.MonthlyUserSalaryForm = this.fb.group({
            MonthStartDate: [''],
            MonthEndDate: [''],
            TotalWorkingDaysInMonth: [''],
            PresentDays: [''],
            LeaveDays: [''],
            AbsentDays: [''],
            OvertimeHours: [''],
            IsStopped: [''],
            StopFrom: [''],
            StopTill: [''],
            StopSalaryId: [''],
            UserSalaryId: [''],
            PfPaymentId: [''],
            PaySlipId: [''],
            PayrollId: [''],
            UserId: ['']
        });

        this.stopSalary = await this.payrollservice.getStopSalaries();

        this.employees = await this.Employeeservice.GetAllEmployees();

        this.monthlySalary = await this.payrollservice.getMonthlySalaries();

        this.userSalary = await this.payrollservice.getUserSalaries();

        this.attendanceSetupService.GetAsignRosters().subscribe(resp => {
            this.roster = resp;
            console.log(this.roster);

        })

        this.activatedRoute.params.subscribe(params => {
            this.id = params['id'];
        });

        if (this.isUpdate() === true) {
            this.payrollservice.getmonthlyUserSalary(this.id).subscribe(resp => {
                this.monthlysalary = resp;
                let a = this.monthlysalary.userRosterAttendances;
                this.rosterattendance = a.filter(b => {
                    delete b.userRosterAttendanceId;
                    delete b.monthlyUserSalaryId;
                    return b;
                });
                this.patchValues(this.monthlysalary);
            });
        }
    }

    check() {
        this.isDisabled = !this.isDisabled;
        return;
    }
    async RosterAttendance(value) {
        let data = value.data;
        this.rosterAttendance.push(data);
    }

    async addMonthlySalary(value) {
        let monthlySalary = new MonthlyUserSalary();
        monthlySalary = { ...monthlySalary, ...value };
        monthlySalary.UserRosterAttendances = this.rosterAttendance;
        let x = await this.payrollservice.addMonthlySalary(monthlySalary);
        this.MonthlyUserSalaryForm.reset();
        this.toastr.success("Monthly Salary Updated");
        this.router.navigate(['/hrm/payroll/monthly-usersalary-detail']);
    }

    isUpdate(): boolean {

        if (this.id > 0) {
            return true;
        }
        else
            return false;
    }

    async updateRosterAttendance(value) {
        console.log(value);
    }

    async update(value) {
        value.monthlyUserSalaryId = this.id;
        value.userRosterAttendances = this.rosterattendance;
        this.payrollservice.updateMonthlySalary(value).subscribe(resp => {
            this.toastr.success("Monthly Salary Updated");
            this.router.navigate(['/hrm/payroll/monthly-usersalary-detail']);

        });
    }


    public employeeData: any = [];

    formatDate(date: Date) {
        return (date.getMonth() + 1) + "-" + date.getDate() + "-" + date.getFullYear();
    }

    getattendancerequest(value) {
        this.MonthlyUserSalaryForm.value.MonthStartDate = this.formatDate(new Date(this.MonthlyUserSalaryForm.value.MonthStartDate))
        this.MonthlyUserSalaryForm.value.MonthEndDate = this.formatDate(new Date(this.MonthlyUserSalaryForm.value.MonthEndDate))
        this.attendanceService.getUserAttendancesbyIddate(value.UserId, value.MonthStartDate, value.MonthEndDate).subscribe(res => {
            this.employeeData = res;
            console.log(this.employeeData);
        });

        this.attendanceSetupService.getAssignRosterByUser(value.UserId, value.MonthStartDate, value.MonthEndDate).subscribe(r => {
            console.log(r);
            // console.log( r.assignRoster); 
            
            console.log( r.assignRoster);
            console.log(r.daysoffs);
            this.roster = r.assignRoster

        });
    }

    patchValues(monthlysalary: any) {

        this.MonthlyUserSalaryForm.patchValue({

            MonthStartDate: monthlysalary.monthStartDate,
            MonthEndDate: monthlysalary.monthEndDate,
            TotalWorkingDaysInMonth: monthlysalary.totalWorkingDaysInMonth,
            PresentDays: monthlysalary.presentDays,
            LeaveDays: monthlysalary.leaveDays,
            AbsentDays: monthlysalary.absentDays,
            OvertimeHours: monthlysalary.overtimeHours,
            IsStopped: monthlysalary.isStopped,
            StopFrom: monthlysalary.stopFrom,
            StopTill: monthlysalary.stopTill,
            StopSalaryId: monthlysalary.stopSalaryId,
            UserSalaryId: monthlysalary.userSalaryId,
            PfPaymentId: monthlysalary.pfPaymentId,
            PaySlipId: monthlysalary.paySlipId,
            PayrollId: monthlysalary.payrollId
        })

    }

}
