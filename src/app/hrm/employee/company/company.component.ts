import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SetupService, EmployeeService, HrmsService, SystemAdministrationService, AuthService } from '../../../core';

import { Router, ActivatedRoute } from '@angular/router';
import { Department } from '../../../core/Models/HRM/department';
import { Branch } from '../../../core/Models/HRM/branch';

@Component({
    selector: 'app-employeecompany',
    templateUrl: './company.component.html',
    styleUrls: ['./company.component.css']
})
export class EmployeeCompanyComponent implements OnInit {

    public isDisabled = true;
    public EmpCompanyForm: any;
    public designation: any;
    public employeetype: any;
    public functions: any;
    public groups: any;
    public managementlevel: any;
    public employeestatus: any;
    public employees: any;
    public manager: any;
    public branches: any;
    public departments: any;
    public filterdemplyoee: any;
    submitted = false;

    @Input('employeeId') id: number;

    @Output() updateMessage = new EventEmitter();

    public EmployeeCompany: any;
    public cempstatus: any;

    constructor(public fb: FormBuilder, public sysAdminService : SystemAdministrationService, public authService : AuthService, public SetupServiceobj: SetupService, public hrmService: HrmsService, public employeeService: EmployeeService, public router: Router, public route: ActivatedRoute) {

        this.EmpCompanyForm = this.fb.group({
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
            CountryId: [''],
            CityId: [''],
            DepartmentId: [''],
            GroupId: [''],
            BranchId: [''],
            UserId: [this.id]

        });

    }

    async ngOnInit() {

        this.functions = await this.SetupServiceobj.getAllFunctions();

        this.designation = await this.SetupServiceobj.getAllDesignations();

        this.managementlevel = await this.SetupServiceobj.getAllManagementlevels();

        this.groups = await this.SetupServiceobj.getAllGroups();

        this.employeetype = await this.SetupServiceobj.getAllEmployeeTypes();

        this.sysAdminService.getBranchesByComapnyId(this.authService.getUserCompanyId()).subscribe((res : Branch[]) => {
            this.branches = res;
        });

        this.sysAdminService.getDepartmentsByCompanyId(this.authService.getUserCompanyId()).subscribe((res : Department[]) => {
            this.departments = res;
        }); 

        this.employees = await this.employeeService.GetAllEmployees();

        this.employeestatus = await this.SetupServiceobj.getEmployeeStatus();

        await this.SetupServiceobj.getEmployeeStatus();

        this.route.params.subscribe((params) => {

            this.id = +params['id'];

            this.employeeService.GetEmployeeCompany(this.id).subscribe(resp => {

                this.EmployeeCompany = resp                

                this.patchValues(resp);
            });


        });

    }

    check() {
        this.isDisabled = !this.isDisabled;
        return;
    }

    showSuccess(message) {

        this.updateMessage.emit(message);
    }


    async update(value) {
console.log(value);

        value.UserId = this.id;
        value.CompanyId = this.authService.getUserCompanyId(); 
        if (this.EmployeeCompany.userCompanyId > 0) {

            value.UserCompanyId = this.EmployeeCompany.userCompanyId;
            console.log(value.ConfirmationDueDate);
            
            if(
                value.ConfirmationDueDate >= value.AppointmentDate 
            && value.ConfirmationDate >= value.ConfirmationDueDate 
            && value.ConfirmationDate >= value.AppointmentDate
            // && this.formatDate(new Date(value.LeavingDate)) >= this.formatDate(new Date(value.AppointmentDate)),

            // console.log("equal cond", this.formatDate(new Date(value.LeavingDate)) >= this.formatDate(new Date(value.AppointmentDate))),
            // console.log(this.formatDate(new Date(value.LeavingDate))),
            
            // console.log(value.AppointmentDate),
            // console.log(value.LeavingDate),
            // console.log(value.ResignDate)
            // //     &&value.ResignDate >= value.AppointmentDate && value.ResignDate >= value.LeavingDate
             )
              {
                this.employeeService.updateUserCompany(value).subscribe(c => { 
                this.showSuccess("Company Information Updated");
                console.log(c); 
                console.log(value);
                
            })
            alert("Update")
        }
        else{
            alert("wrong")
        }
        }
        else {
            value.CompanyId = this.authService.getUserCompanyId(); 
            this.employeeService.addUserCompany(value).subscribe(c => {

                this.showSuccess("Company Information Added");

            })
        }
    }

    formatDate(date: Date) {
        return  ( date.getFullYear() +"-" + date.getMonth() +1)   + "-" + date.getDate();
      }

    patchValues(company: any) {

        this.EmpCompanyForm.patchValue({

            DesignationId: company.designationId,
            ManagementLevelId: company.managementlevelId,
            FunctionId: company.functionId,
            EmployeeStatusId: company.employeeStatusId,
            EmployeeTypeId: company.employeeTypeId,
            DepartmentId: company.departmentId,
            BranchId: company.branchId,
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
