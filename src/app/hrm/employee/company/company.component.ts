import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SetupService, EmployeeService, HrmsService, SystemAdministrationService, AuthService } from '../../../core';

import { Router, ActivatedRoute } from '@angular/router';
import { Department } from '../../../core/Models/HRM/department';
import { Branch } from '../../../core/Models/HRM/branch';
import { ToastrService } from 'ngx-toastr';

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

    constructor(public fb: FormBuilder, public toster : ToastrService, public sysAdminService : SystemAdministrationService, public authService : AuthService, public SetupServiceobj: SetupService, public hrmService: HrmsService, public employeeService: EmployeeService, public router: Router, public route: ActivatedRoute) {

        this.EmpCompanyForm = this.fb.group({
            ManagementLevelId: ['',Validators.required],
            FunctionId: ['',Validators.required],
            EmployeeStatusId: ['',Validators.required],
            EmployeeTypeId: ['',Validators.required],
            DesignationId: ['',Validators.required],
            ContractStartDate: [''],
            ContractEndDate: [''],
            AppointmentDate: ['',Validators.required],
            NextAppraisalDate: [''],
            ConfirmationDueDate: [''],
            ConfirmationDate: [''],
            LeavingDate: [''],
            ResignDate: [''],
            Approver: ['',Validators.required],
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

    get f() { return this.EmpCompanyForm.controls; }

    update(value) { 
        console.log(value);  

        this.submitted = true;
        if (this.EmpCompanyForm.invalid) { 
            this.toster.error("Fill All Required Fields");  
        } 

        else{ 
        value.UserId = this.id;
        value.CompanyId = this.authService.getUserCompanyId();  

        if (this.EmployeeCompany.userCompanyId > 0) { 
            value.UserCompanyId = this.EmployeeCompany.userCompanyId; 
       if(
            this.formatDate( new Date (value.ConfirmationDueDate)) >= this.formatDate( new Date (value.AppointmentDate))
            && this.formatDate( new Date (value.ConfirmationDate)) >= this.formatDate( new Date (value.ConfirmationDueDate))
            && this.formatDate(new Date(value.ContractStartDate)) >= this.formatDate(new Date(value.ConfirmationDate)) 
            && this.formatDate(new Date(value.ContractEndDate)) >= this.formatDate(new Date(value.ContractStartDate)) 
            && this.formatDate(new Date(value.ResignDate)) >= this.formatDate(new Date(value.AppointmentDate)) 
            && this.formatDate(new Date(value.LeavingDate)) >= this.formatDate(new Date(value.AppointmentDate)) 
            && this.formatDate(new Date(value.LeavingDate)) >= this.formatDate(new Date(value.ResignDate)) 
             || value.LeavingDate == null || value.resignDate == null || value.confirmationDueDate == null || value.confirmationDate == null || value.ContractStartDate == null || value.contractEndDate == null
              ) 
              {  
                this.employeeService.updateUserCompany(value).subscribe(c => { 
                this.showSuccess("Company Information Updated"); 
            })
        }
            else{
                this.toster.info("Date Error");  
            }
        }
        else {
            if(
                this.formatDate( new Date (value.ConfirmationDueDate)) >= this.formatDate( new Date (value.AppointmentDate))
                && this.formatDate( new Date (value.ConfirmationDate)) >= this.formatDate( new Date (value.ConfirmationDueDate))
                && this.formatDate(new Date(value.ContractStartDate)) >= this.formatDate(new Date(value.ConfirmationDate)) 
                && this.formatDate(new Date(value.ContractEndDate)) >= this.formatDate(new Date(value.ContractStartDate)) 
                && this.formatDate(new Date(value.ResignDate)) >= this.formatDate(new Date(value.AppointmentDate)) 
                && this.formatDate(new Date(value.LeavingDate)) >= this.formatDate(new Date(value.AppointmentDate)) 
                && this.formatDate(new Date(value.LeavingDate)) >= this.formatDate(new Date(value.ResignDate)) 
                 || value.LeavingDate == null || value.resignDate == null || value.confirmationDueDate == null || value.confirmationDate == null || value.ContractStartDate == null || value.contractEndDate == null
                  ) {
            value.CompanyId = this.authService.getUserCompanyId(); 
            this.employeeService.addUserCompany(value).subscribe(c => {this.showSuccess("Company Information Added");  
        }) }
        else{
            this.toster.info("Date Error");  

        }
         }
           }
    }

    formatDate(date: Date) {
        return   date.getFullYear() +"-" +( date.getMonth() +1)   + "-" + date.getDate();
      }

    patchValues(company: any) {

        this.EmpCompanyForm.patchValue({

            DesignationId: company.designationId,
            ManagementLevelId: company.managementLevelId,
            FunctionId: company.functionId,
            EmployeeStatusId: company.employeeStatusId,
            EmployeeTypeId: company.employeeTypeId,
            DepartmentId: company.departmentId,
            BranchId: company.branchId,
            ShiftId: company.shiftId,
            ContractStartDate: company.contractStartDate,
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
