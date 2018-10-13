import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SetupService, EmployeeService } from '../../../core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-employeecompany',
    templateUrl: './company.component.html',
    styleUrls: ['./company.component.css']
})
export class EmployeeCompanyComponent implements OnInit {

<<<<<<< HEAD
    @Output('setCompanyFormValue') setCompanyFormValue = new EventEmitter();
=======
>>>>>>> master

    public EmpCompanyForm: any;
    public designation: any;
    public employeetype: any;
    public functions: any;
    public groups: any;
    public managementlevel: any;

    @Input('employeeId') id: number;

    @Output() updateMessage = new EventEmitter();

    public EmployeeCompany: any;

    constructor(public fb: FormBuilder, private SetupServiceobj: SetupService, public employeeService: EmployeeService, public router: Router, private route: ActivatedRoute) {

<<<<<<< HEAD
    public id: any;
    public Employee: any;
    constructor(public fb: FormBuilder, private SetupServiceobj: SetupService, public employeeService: EmployeeService, public router: Router, private route: ActivatedRoute) {

        this.EmpCompanyForm = this.fb.group({

=======
        this.EmpCompanyForm = this.fb.group({
>>>>>>> master
            ManagementLevelId: [''],
            FunctionId: [''],
            EmployeeStatusId: [''],
            EmployeeTypeId: [''],
            DesignationId: [''],
            ContractStartDate: [''],
            ContractEndDate: [''],
            AppointmentDate: [''],
            NextAppraisalDate: [''],
            ConfirmationDueDate: [''],
            ConfirmationDate: [''],
            LeavingDate: [''],
            ResignDate: [''],
            Approver: [''],
            UserId: [this.id]

        });

<<<<<<< HEAD

    }


=======
    }

>>>>>>> master
    async ngOnInit() {

        this.functions = await this.SetupServiceobj.getAllFunctions();

<<<<<<< HEAD
        this.employeeService.GetEmployee(this.id).subscribe(resp => {

            this.Employee = resp;

            this.patchValues(resp);

        });
=======
        this.designation = await this.SetupServiceobj.getAllDesignations();

        this.managementlevel = await this.SetupServiceobj.getAllManagementlevels();

        this.groups = await this.SetupServiceobj.getAllGroups();

        this.employeetype = await this.SetupServiceobj.getAllEmployeeTypes();
>>>>>>> master

        await this.SetupServiceobj.getAllEmployeeStatus();

        let cempstatus = this.SetupServiceobj.employeestatus;

<<<<<<< HEAD

        //             }); 
=======
>>>>>>> master

        this.route.params.subscribe((params) => {

            this.id = +params['id'];

            this.employeeService.GetEmployeeCompany(this.id).subscribe(resp => {

                this.EmployeeCompany = resp

                this.patchValues(resp);
            });


        });



    }

    showSuccess(message) {

        this.updateMessage.emit(message);
    }

<<<<<<< HEAD
    public leavingDateinput = false;
    enableInput(e) {
        console.log(e);
        switch (e.target.id) {
            case 'chL':
                this.leavingDateinput = e.target.checked
                break;

            default:
                break;
=======

    async update(value) {

        value.UserId = this.id;

        if (this.EmployeeCompany.userCompanyId > 0) {

            value.UserCompanyId = this.EmployeeCompany.userCompanyId;

            this.employeeService.updateUserCompany(value).subscribe(c => {

                this.showSuccess("Company Information Updated");

            })
>>>>>>> master
        }
        else {

<<<<<<< HEAD
    async addcompanyinfo() {
        let cmp = await this.employeeService.addusercompany();
        console.log(cmp);
    }

    async update(value) {
        let x = await this.employeeService.updateUserCompanyById(value);
        console.log(x);
        console.log(this.employeeService.EmpCompanyForm.value);
    }


    patchValues(company: any) {

        console.log(company);

        this.employeeService.EmpCompanyForm.patchValue({
=======
            this.employeeService.addUserCompany(value).subscribe(c => {

                this.showSuccess("Company Information Added");

            })

        }
    }


    patchValues(company: any) {

        this.EmpCompanyForm.patchValue({
>>>>>>> master

            DesignationId: company.designationId,
            ManagementLevelId: company.managementlevelId,
            FunctionId: company.functionId,
            EmployeeStatusId: company.employeeStatusId,
            EmployeeTypeId: company.employeeTypeId,
            ShiftId: company.shiftId,
            ContractStartDate: company.ContractStartDate,
            ContractEndDate: company.contractEndDate,
            AppointmentDate: company.appointmentDate,
            NextAppraisalDate: company.nextAppraisalDate,
            ConfirmationDueDate: company.confirmationDueDate,
            ConfirmationDate: company.confirmationDate,
            LeavingDate: company.leavingDate,
            ResignDate: company.resignDate,
            Approver: company.approver,
            userId: this.id
        });
    }

}
