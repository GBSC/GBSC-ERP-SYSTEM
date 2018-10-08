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

    @Output('setCompanyFormValue') setCompanyFormValue = new EventEmitter();
   
    public EmpCompanyForm: any;
    public designation: any;
    public managementlevel: any;

    public id : any;
    public Employee : any;
    constructor(public fb: FormBuilder, private SetupServiceobj: SetupService, public employeeService: EmployeeService,  public router: Router, private route: ActivatedRoute)
     {
      
        this.EmpCompanyForm = this.fb.group({
           
            ManagementLevelId: [''],
            FunctionId: [''],
            GroupId: [''],
            EmployeeStatusId: [''],
            EmployeeTypeId: [''],
            Shift: [''],
            GradeId: [''],
            QualificationId: ['']

        });
        

      }

    
async ngOnInit() {


    this.employeeService.GetEmployee(this.id).subscribe(resp => {

        this.Employee = resp;

        this.patchValues(resp);

    });

        // console.log(this.router.url);

        this.route.params.subscribe((params) => {
            this.id = +params['id'];
            console.log(this.id);
                    this.employeeService.GetEmployee(this.id).subscribe((Employee) => {
                       this.Employee = Employee  
                            
                    }); 

        });

        await this.SetupServiceobj.getAllFunctions();
        let fnc = this.SetupServiceobj.function;

        await this.SetupServiceobj.getAllqualifications();
        let qf = this.SetupServiceobj.qualification;

        this.designation = await this.SetupServiceobj.getAllDesignations();
        console.log(this.designation);
 

        this.managementlevel = await this.SetupServiceobj.getAllManagementlevels(); 

        await this.SetupServiceobj.getAllGroups();
        let grp = this.SetupServiceobj.group;
        console.log(grp);

        await this.SetupServiceobj.getAllEmployeeTypes();
        let cemptype = this.SetupServiceobj.employeetype;

        await this.SetupServiceobj.getAllEmployeeStatus();
        let cempstatus = this.SetupServiceobj.employeestatus;
    }

    getcompanyFormValue() {
        this.setCompanyFormValue.emit(this.EmpCompanyForm.value);
    }

    public leavingDateinput= false;
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
    
    async update(value)
    {
        let x = await this.employeeService.updateUserCompanyById(value);
        console.log(x);
        console.log(this.employeeService.EmpCompanyForm.value);
    }

   
    patchValues(company : any) { 
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
            NextApprisalDate: company.nextApprisalDate,
            ConfirmDueDate: company.confirmDueDate,
            ConfirmationDate: company.confirmationDate,
            LeavingDate: company.leavingDate,
            ResignDate: company.resignDate,
            Approver: company.approver
        });
    }

}
