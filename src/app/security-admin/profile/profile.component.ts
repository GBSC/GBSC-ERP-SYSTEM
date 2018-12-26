import { Component, OnInit } from '@angular/core';
import { AuthService, EmployeeService, HrmsService, SystemAdministrationService } from '../../core';
import { ThrowStmt } from '@angular/compiler';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Employee } from '../../core/Models/HRM/employee';
import { City } from '../../core/Models/HRM/city';
import { Role } from 'src/app/core/Models/HRM/role';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
    private userName : string = '';
    private userLevel : string = '';
    private UpdateUserProfileForm : FormGroup;
    private User : any;
    private Cities : any[] = [];
    private UserCity : any;
    private Roles : any[] = [];
    private UserRole : any;

    constructor(private authservice : AuthService, private formBuilder : FormBuilder, private EmployeeService : EmployeeService, private HrmsService : HrmsService, private SystemAdminService : SystemAdministrationService) {
        this.UpdateUserProfileForm = this.formBuilder.group({
            FirstName : ['', Validators.required],
            LastName : ['', Validators.required],
            City : [''],
            ContactNumber : ['', Validators.required],
            Role : [''],
            Email : ['']
        });

    }

    ngOnInit() {
        this.userName = this.authservice.getProfileInfo().Username;
        this.userLevel = this.authservice.getProfileInfo().UserLevel;
        console.log(this.userLevel);

        this.HrmsService.GetCitiesByCompanyId(this.authservice.getUserCompanyId()).subscribe((res : any[]) => {
            this.Cities = res;

            // this.SystemAdminService.GetRolesByCompanyId(this.authservice.getUserCompanyId()).subscribe((res : any[]) => {
            //     this.Roles = res;
            // });

            this.Roles.push(this.SystemAdminService.getRolesByCompanyIdAsync(this.authservice.getUserCompanyId()));

            this.UserCity = this.Cities.find(a => a.cityId == this.User.CityId);
            this.UserRole = this.Roles.find(a => a.roleId == this.User.roleId);

            this.EmployeeService.GetEmployee(this.authservice.getUserId()).subscribe((res : Employee) => {
                this.User = res;
                console.log(res);

                this.UpdateUserProfileForm.patchValue({
                    FirstName : this.User.firstName,
                    LastName : this.User.lastName,
                    City : this.User.cityId,
                    ContactNumber : this.UserCity.name,
                    Role : this.UserRole.name,
                    Email : this.User.email
                });
            });

        });

        
        
        
    }

}
