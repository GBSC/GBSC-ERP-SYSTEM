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

        this.leaveservice.getleaveopening();
        this.leaveopening = this.leaveservice.leaveopening
        console.log(this.leaveopening);

        this.leaveservice.getleaveopeningdetail();
        this.leveopeningdetail = this.leaveservice.leaveopeningdetail
        console.log(this.leveopeningdetail);


        await this.empservice.GetAllEmployees();
        let employee = this.empservice.employeereg;

        await this.leavesetupservice.getAllleaveyear();
        let leaveyer = this.leavesetupservice.leaveyear;

        await this.leavesetupservice.getAllleavetype();
        let levetype = this.leavesetupservice.leavetype;

    }

    
    async addLeaveopenDetail(){  
        
        // console.log(this.leaveopendetailForm.value);
        // console.log(this.leaveOpeningId);
        // let LDForm = {...this.leaveopendetailForm.value, leaveOpeningId: this.leaveOpeningId.leaveOpeningID}
        this.leaveOpenDetailForm.value.leaveOpeningId = this.leaveOpeningId.leaveOpeningID;
        await this.leaveservice.addLeaveopeningdetail(this.leaveOpenDetailForm.value);
    }
    public leaveOpeningId;
    
    async addleaveopening(e) {
        this.leaveOpeningId = await this.leaveservice.addLeaveopening(this.leaveOpeningForm.value);
        console.log(this.leaveOpenDetailForm.value);
    }

}
