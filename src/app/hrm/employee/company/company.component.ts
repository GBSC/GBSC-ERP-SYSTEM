import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SetupService, EmployeeService } from '../../../core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-employeecompany',
    templateUrl: './company.component.html',
    styleUrls: ['./company.component.css']
})
export class EmployeeCompanyComponent implements OnInit {


    public EmpCompanyForm: any;
    public designation: any;
    public employeetype: any;
    public functions: any;
    public groups: any;
    public managementlevel: any;
    public id: any;
    public EmployeeCompany: any;

    constructor(public fb: FormBuilder, private SetupServiceobj: SetupService, public employeeService: EmployeeService, public router: Router, private route: ActivatedRoute) { }

    async ngOnInit() {

        this.functions = await this.SetupServiceobj.getAllFunctions();

        this.designation = await this.SetupServiceobj.getAllDesignations();

        this.managementlevel = await this.SetupServiceobj.getAllManagementlevels();

        this.groups = await this.SetupServiceobj.getAllGroups();

        this.employeetype = await this.SetupServiceobj.getAllEmployeeTypes();

        await this.SetupServiceobj.getAllEmployeeStatus();

        let cempstatus = this.SetupServiceobj.employeestatus;


        this.route.params.subscribe((params) => {

            this.id = +params['id'];

            this.employeeService.GetEmployeeCompany(this.id).subscribe(resp => {

                this.EmployeeCompany = resp

                console.log(this.EmployeeCompany);

                //this.patchValues(resp);
            });


        });



    }

    public leavingDateinput = false;
    enableInput(e) {
        console.log(e);
        switch (e.target.id) {
            case 'chL':
                this.leavingDateinput = e.target.checked
                break;

            default:
                break;
        }
    }
    doit(e) {
        console.log(e.target.value)
    }

    async addcompanyinfo() {
        let cmp = await this.employeeService.addusercompany();
        console.log(cmp);
    }

    async update(value) {

        console.log(value);
        // let x = await this.employeeService.updateUserCompanyById(value);
        // console.log(x);
        // console.log(this.employeeService.EmpCompanyForm.value);
    }


    patchValues(company: any) {
        this.employeeService.EmpCompanyForm.patchValue({

            DesignationId: company.designationId,
            ManagementLevelId: company.managementlevelId,
            FunctionId: company.functionId,
            GroupId: company.groupId,
            EmployeeStatusId: company.employeeStatusId,
            EmployeeTypeId: company.employeeTypeId,
            ShiftId: company.shiftId,
            ContractStart: company.ContractStart,
            ContractEnd: company.contractEnd,
            AppointmentDate: company.appointmentDate,
            NextAppraisalDate: company.nextAppraisalDate,
            ConfirmDueDate: company.confirmDueDate,
            ConfirmationDate: company.confirmationDate,
            LeavingDate: company.leavingDate,
            ResignDate: company.resignDate,
            Approver: company.approver
        });
    }

}
