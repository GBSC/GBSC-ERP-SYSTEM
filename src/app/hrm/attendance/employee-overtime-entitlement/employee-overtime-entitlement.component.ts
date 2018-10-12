import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { AttendanceService, AttendancesetupService, EmployeeService } from '../../../core';

@Component({
    selector: 'app-employee-overtime-entitlement',
    templateUrl: './employee-overtime-entitlement.component.html',
    styleUrls: ['./employee-overtime-entitlement.component.scss']
})
export class EmployeeOvertimeEntitlementComponent implements OnInit {
    public empoverTimeEntitlement: any;
    public empworkingot: any;
    public empoffdayot;
    public incomingot;
    public outgoingot;
    public Updatedempovertimeentitlement: any;
    public Updatedworkingot: any;
    public Updatedincoming: any;
    public Updatedoffday: any;
    public Updatedoutgoing: any;

    public WorkingDayOTForm: FormGroup;
    public EmployeeEntitlementForm: FormGroup;
    public OffDayOTForm: FormGroup;
    public IncomingOTForm: FormGroup;
    public OutgoingOTForm: FormGroup;

    constructor(private fb: FormBuilder, public attendanceservice: AttendanceService, public attendancesetupservice: AttendancesetupService,
        public employeeservice: EmployeeService) { }

    async ngOnInit() {

        this.WorkingDayOTForm = this.fb.group({
            IsIncludeOtWorking: ['', Validators],
            OverTimeTypeId: ['', Validators],
            WokingOtHours: ['', Validators]
        });
        this.OffDayOTForm = this.fb.group({
            IsIncludeOtOff: ['', Validators],
            OverTimeTypeId: ['', Validators],
            OffOtHours: ['', Validators]
        });
        this.IncomingOTForm = this.fb.group({
            IsIncludeOtIncoming: ['', Validators],
            OverTimeTypeId: ['', Validators],
            IncomingOtHours: ['', Validators]
        });
        this.OutgoingOTForm = this.fb.group({
            IsIncludeOtOutgoing: ['', Validators],
            OverTimeTypeId: ['', Validators],
            OutgoingOtHours: ['', Validators]
        });
        this.EmployeeEntitlementForm = this.fb.group({
            // EmployeeWorkingDayOtId: ['', Validators],
            // EmployeeOffDayOtId: ['', Validators],
            // EmployeeIncomingOtId: ['', Validators],
            // EmployeeOutgoingOtId: ['', Validators] ,
            UserId: ['', Validators]
        });


        await this.attendanceservice.getempOvertimeEntitlements();
        this.empoverTimeEntitlement = this.attendanceservice.empOvertimeEntitlement
        console.log(this.empoverTimeEntitlement);

        await this.attendanceservice.getemployeeWorkingDayOts();
        this.empworkingot = this.attendanceservice.workingdayot
        console.log(this.empworkingot);

        await this.attendanceservice.getemployeeOffdayOts();
        this.empoffdayot = this.attendanceservice.workingoffdayot
        console.log(this.empoffdayot);

        await this.attendanceservice.getemployeeIncomingOts();
        this.incomingot = this.attendanceservice.newincomingot
        console.log(this.incomingot);

        await this.attendanceservice.getemployeeOutgoingOts();
        this.outgoingot = this.attendanceservice.OutgoingOts
        console.log(this.outgoingot);

        await this.attendancesetupservice.getAllovertimetype();
        let OverTimeType = this.attendancesetupservice.overtimetype

        await this.employeeservice.GetAllEmployees();
        let users = this.employeeservice.employeereg
    }

    async addEmployeeEntitlement() {

        this.EmployeeEntitlementForm.value.employeeWorkingDayOtID = await this.attendanceservice.addemployeeWorkingDayOt(this.WorkingDayOTForm.value);
        this.EmployeeEntitlementForm.value.employeeOffDayOtID = await this.attendanceservice.addemployeeOffdayOts(this.OffDayOTForm.value);
        this.EmployeeEntitlementForm.value.employeeIncomingOtID = await this.attendanceservice.addemployeeIncomingOts(this.IncomingOTForm.value);
        this.EmployeeEntitlementForm.value.employeeOutgoingOtID = await this.attendanceservice.addemployeeOutgoingOt(this.OutgoingOTForm.value);
        console.log(this.EmployeeEntitlementForm.value);
        await this.attendanceservice.addempOvertimeEntitlement(this.EmployeeEntitlementForm.value);
    }

    async updatingempEntitlement(value) {
        this.Updatedempovertimeentitlement = { ...value.oldData, ...value.newData };
        this.Updatedworkingot = { ...value.oldData, ...value.newData };
        this.Updatedincoming = { ...value.oldData, ...value.newData };
        this.Updatedoffday = { ...value.oldData, ...value.newData };
        this.Updatedoutgoing = { ...value.oldData, ...value.newData };
    }
    async updateempoverTimeEntitlement() {
        this.attendanceservice.updateempOvertimeEntitlement(this.Updatedempovertimeentitlement);
        this.attendanceservice.updateemployeeWorkingDayOt(this.Updatedworkingot);
        this.attendanceservice.updateemployeeIncomingOts(this.Updatedincoming);
        this.attendanceservice.updateemployeeOffdayOts(this.Updatedoffday);
        this.attendanceservice.updateemployeeOutgoingOt(this.Updatedoutgoing);
    }

    async deleteempoverTimeEntitlement(value) {
        this.attendanceservice.DeleteempOvertimeEntitlement(value.key);
    }

}