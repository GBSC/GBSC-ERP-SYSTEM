import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-employees',
    templateUrl: './employees.component.html',
    styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

    emp: any;
    public employeeId :any;
    constructor(public employee: EmployeeService, public router: Router) { }

    async ngOnInit() {

        await this.employee.GetAllEmployees();
        this.emp = this.employee.employeereg;
        console.log(this.emp);
    }


    onToolbarPreparing(e) {
        e.toolbarOptions.items.unshift(
            {
                location: 'after',
                widget: 'dxButton',
                options: {
                    icon: 'add',
                    onClick: this.onadd.bind(this)
                }
            });
    }

    onadd() {
        this.router.navigate(['hrm/employee/registration'])
    }

//     onupdate(d) {
//     console.log(d.key);
//      this.employeeId  =  d.key 
//      this.router.navigate(['hrm/employee/employeeupdate/'+this.employeeId]);  

//    //     this.router.navigate(['hrm/employee/registration'])
//     }
    getCurrentRowData(d)
    {
        console.log(d.key);
     this.employeeId  =  d.key 
     this.router.navigate(['hrm/employee/employeeupdate/'+this.employeeId]);  

    }
}
