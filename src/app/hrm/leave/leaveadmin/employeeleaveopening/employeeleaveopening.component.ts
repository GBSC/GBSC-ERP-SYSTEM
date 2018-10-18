import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SetupService, LeaveService, LeaveSetupService, EmployeeService } from '../../../../core';
import { LeaveOpeningDetail } from '../../../../core/Models/HRM/leaveOpeningDetail';
import { LeaveOpening } from '../../../../core/Models/HRM/leaveOpening';

@Component({
    selector: 'app-employeeleaveopening',
    templateUrl: './employeeleaveopening.component.html',
    styleUrls: ['./employeeleaveopening.component.css']
})
export class EmployeeleaveopeningComponent implements OnInit {
    public leaveOpeningForm: FormGroup; 
    private openingDetail: LeaveOpeningDetail[];
    public employees: any;
    public leaveYear: any;
    public msg: any;
    public leaveType: any;
    public leaveOpeningId;
    public leaveopening: any;
    public leveopeningdetail: any;

    constructor(public fb: FormBuilder, public setup: SetupService, public leaveservice: LeaveService, public leavesetupservice: LeaveSetupService, public empservice: EmployeeService, public router: Router) { }

    async ngOnInit() {

        this.openingDetail = [];

        this.leaveOpeningForm = this.fb.group({
            UserId: ['', Validators.required],
            LeaveYearId: ['', Validators.required],
            Remarks: ['', Validators.required]

        });
 

        this.leaveopening = await this.leaveservice.getLeaveOpening();
        
        this.leveopeningdetail = await this.leaveservice.getLeaveOpeningDetail();

        this.employees = await this.empservice.GetAllEmployees(); 

        this.leaveYear = await this.leavesetupservice.getLeaveYears(); 

        this.leaveType = await this.leavesetupservice.getLeaveTypes();
    }


    async addLeaveopenDetail(value) {
        
        let data = value.data;
        this.openingDetail.push(data);
    }
    
    async addleaveopening(value) {
        let opening = new LeaveOpening();
        opening = { ...opening, ...value };
        opening.LeaveOpeningDetails = this.openingDetail;
        let s = await this.leaveservice.addLeaveOpening(opening);
        this.msg = 'Success! Leave Opening Submit Successfully';
        setTimeout(() => {
            this.msg = null;
        }, 3000);
        this.leaveOpeningForm.reset();
        this.router.navigate(['/hrm/leave/leaveadmin/leaveopenings']);

    }

    async updatingLeaveOpeningDetail(value) {
        this.updatingLeaveOpeningDetail = { ...value.oldData, ...value.newData };    }

    async updateLeaveOpeningDetail() {
         await this.leaveservice.updateLeaveOpeningDetail( this.updatingLeaveOpeningDetail);
    }


}
