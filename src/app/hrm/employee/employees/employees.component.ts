import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService, UserService, AuthService } from '../../../core';

@Component({
    selector: 'app-employees',
    templateUrl: './employees.component.html',
    styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

    public users: any;
    public userId: any; 
    public emp: any;


    constructor(public userService: UserService, public authService: AuthService, public employee: EmployeeService, public router: Router) { }

     async ngOnInit() {

        this.emp =  await this.employee.GetAllEmployees();
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

    getCurrentRowData(d) {
        this.userId = d.key;
        this.router.navigate(['hrm/employee/updateemployee/' + this.userId]); 
    }
}
