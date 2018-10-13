import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SetupService, LeaveService, LeaveSetupService, EmployeeService } from '../../../../core';

@Component({
    selector: 'app-employeeleaveopening',
    templateUrl: './employeeleaveopening.component.html',
    styleUrls: ['./employeeleaveopening.component.css']
})
export class EmployeeleaveopeningComponent implements OnInit {
    public leaveOpeningForm: FormGroup;
    public leaveOpenDetailForm: FormGroup;
    public employees: any;
    public leaveYear: any;
    public leaveType: any;
    public leaveOpeningId;
    public leaveopening: any;
    public leveopeningdetail: any;

    constructor(public fb: FormBuilder, public setup: SetupService, public leaveservice: LeaveService, public leavesetupservice: LeaveSetupService, public empservice: EmployeeService, public router: Router) { }

    async ngOnInit() {

        this.leaveOpeningForm = this.fb.group({
            UserId: ['', Validators.required],
            LeaveYearId: ['', Validators.required],
            Remarks: ['', Validators.required]

        });


        this.leaveOpenDetailForm = this.fb.group({
            LeaveTypeId: ['', Validators.required],
            Quantity: ['', Validators.required],
            ExpiryDate: ['', Validators.required]
        });

        this.leaveopening = await this.leaveservice.getLeaveOpening();

        this.leveopeningdetail = await this.leaveservice.getLeaveOpeningDetail();

        this.employees = await this.empservice.GetAllEmployees();

        this.leaveYear = await this.leavesetupservice.getLeaveYears();

        this.leaveType = await this.leavesetupservice.getLeaveTypes();
    }


    async addLeaveopenDetail() {
<<<<<<< HEAD

        // console.log(this.leaveopendetailForm.value);
        // console.log(this.leaveOpeningId);
        // let LDForm = {...this.leaveopendetailForm.value, leaveOpeningId: this.leaveOpeningId.leaveOpeningID}
=======
>>>>>>> master
        this.leaveOpenDetailForm.value.leaveOpeningId = this.leaveOpeningId.leaveOpeningID;
        await this.leaveservice.addLeaveOpeningDetail(this.leaveOpenDetailForm.value);
    }
<<<<<<< HEAD
    public leaveOpeningId;
=======
>>>>>>> master

    async addleaveopening(e) {
        this.leaveOpeningId = await this.leaveservice.addLeaveOpening(this.leaveOpeningForm.value);
    }

}
