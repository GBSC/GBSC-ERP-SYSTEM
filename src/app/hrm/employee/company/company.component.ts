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

    public id : any;
    public Employee : any;
    constructor(public fb: FormBuilder, private SetupServiceobj: SetupService, public employee: EmployeeService,  public router: Router, private route: ActivatedRoute) { }

async ngOnInit() {

        console.log(this.router.url);

        this.route.params.subscribe((params) => {
            this.id = +params['id'];
            console.log(this.id);
                    this.employee.GetEmployee(this.id).subscribe((Employee) => {
                       this.Employee = Employee 
                           console.log(Employee)

                            
                    }); 

        });

        await this.SetupServiceobj.getAllFunctions();
        let fnc = this.SetupServiceobj.function;

        await this.SetupServiceobj.getAllqualifications();
        let qf = this.SetupServiceobj.qualification;


        await this.SetupServiceobj.getAllManagementlevels();
        let ml = this.SetupServiceobj.managementlevel;

        await this.SetupServiceobj.getAllDesignations();
        let cdsg = this.SetupServiceobj.designation;

        await this.SetupServiceobj.getAllManagementlevels();
        let mnglevel = this.SetupServiceobj.managementlevel;

        await this.SetupServiceobj.getAllGroups();
        let grp = this.SetupServiceobj.group;

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
        let cmp = await this.employee.addusercompany();
        console.log(cmp);
    }
    
    async update(value)
    {
        let x = await this.employee.updateUserCompanyById(value);
        console.log(x);
    }


}
