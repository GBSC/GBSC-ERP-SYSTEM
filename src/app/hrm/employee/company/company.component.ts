import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SetupService } from '../../hrmsSetup/services/setup.service';
import { FormBuilder } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';

@Component({
    selector: 'app-employeecompany',
    templateUrl: './company.component.html',
    styleUrls: ['./company.component.css']
})
export class EmployeeCompanyComponent implements OnInit {

    @Output('setCompanyFormValue') setCompanyFormValue = new EventEmitter();

    public EmpCompanyForm: any;
    constructor(public fb: FormBuilder, private SetupServiceobj: SetupService, public employee: EmployeeService) { }

    async ngOnInit() {
        await this.SetupServiceobj.getAllFunctions();
        let fnc = this.SetupServiceobj.function;

        await this.SetupServiceobj.getAllqualifications();
        let qf = this.SetupServiceobj.qualification;


        await this.SetupServiceobj.getAllManagementlevels();
        let ml = this.SetupServiceobj.managementlevel;

        await this.SetupServiceobj.getAllgrades();
        let grd = this.SetupServiceobj.grades;

        await this.SetupServiceobj.getAllDesignations();
        let cdsg = this.SetupServiceobj.designation;

        await this.SetupServiceobj.getAllManagementlevels();
        let mnglevel = this.SetupServiceobj.managementlevel;

        await this.SetupServiceobj.getAllShifts();
        let cshft = this.SetupServiceobj.shift;

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

    doit(e) {
        console.log(e.target.value)
    }

    async addcompanyinfo() {
        let cmp = await this.employee.addusercompany();
        console.log(cmp);
    }


}
