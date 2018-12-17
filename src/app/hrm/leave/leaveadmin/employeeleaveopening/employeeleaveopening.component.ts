import { Component, OnInit, Input } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { SetupService, LeaveService, LeaveSetupService, EmployeeService } from '../../../../core';
import { LeaveOpeningDetail } from '../../../../core/Models/HRM/leaveOpeningDetail';
import { LeaveOpening } from '../../../../core/Models/HRM/leaveOpening';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-employeeleaveopening',
    templateUrl: './employeeleaveopening.component.html',
    styleUrls: ['./employeeleaveopening.component.css']
})
export class EmployeeleaveopeningComponent implements OnInit {
    public leaveOpeningForm: FormGroup;
    public openingDetail: LeaveOpeningDetail[];
    public employees: any;
    public leaveOpeningDetail: any[] = [];
    public leaveYear: any;
    public leaveType: any;
    public leaveOpeningId;
    public leaveopening: any;
    public leveopeningdetail: any;
    public leaveOpening: any;

    @Input('leaveRequestId') id: number;

    constructor(public toastr: ToastrService, public activatedRoute: ActivatedRoute,
        public fb: FormBuilder, public setup: SetupService, public leaveservice: LeaveService, public leavesetupservice: LeaveSetupService,
        public empservice: EmployeeService, public router: Router) { }

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
        this.activatedRoute.params.subscribe(params => {
            this.id = params['id'];
        });

        if (this.isUpdate() === true) {
            this.leaveservice.getLeaveOpeningById(this.id).subscribe(resp => {
                this.leaveOpening = resp;
                let a = this.leaveOpening.leaveOpeningDetails;
                this.leaveOpeningDetail = a.filter(b => {
                    delete b.leaveOpeningDetailId;
                    delete b.leaveOpeningId;
                    return b;
                });
                this.patchValues(this.leaveOpening);
            });
        }
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
        this.toastr.success('Employee Leave Opening Added');
        this.leaveOpeningForm.reset();
        this.router.navigate(['/hrm/leave/leaveadmin/leaveopenings']);

    }


    isUpdate(): boolean {

        if (this.id > 0) {
            return true;
        }
        else
            return false;
    }

    async updateLeaveopenDetail(value) {
        console.log(value);
    }

    async update(value) {
        value.leaveOpeningId = this.id;
        value.LeaveOpeningDetails = this.leaveOpeningDetail;
        console.log(value);
        this.leaveservice.updateLeaveOpening(value).subscribe(resp => {
            this.toastr.success("Leave Opening Updated");
            this.router.navigate(['/hrm/leave/leaveadmin/leaveopenings']);

        });
    }

    patchValues(opening: any) {
        this.leaveOpeningForm.patchValue({

            UserId: opening.userId,
            LeaveYearId: opening.leaveYearId,
            Remarks: opening.remarks
        })

    }

}
