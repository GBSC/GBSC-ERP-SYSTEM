import { Component, OnInit } from '@angular/core';
import { AuthService, EmployeeService, HrmsService, SystemAdministrationService, UserService } from '../../core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Employee } from '../../core/Models/HRM/employee';
import { ToastrService } from 'ngx-toastr';

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
    // private Cities : any[] = [];
    // private UserCity : any;
    // private Roles : any[] = [];
    // private UserRole : any;

    private UpdatePasswordForm : FormGroup;

    constructor(private authservice : AuthService, private formBuilder : FormBuilder, private EmployeeService : EmployeeService, private HrmsService : HrmsService, private SystemAdminService : SystemAdministrationService, private UserService : UserService, private Toastr : ToastrService) {
        this.UpdateUserProfileForm = this.formBuilder.group({
            FirstName : ['', Validators.required],
            LastName : ['', Validators.required],
            // City : [''],
            ContactNumber : ['', Validators.required],
            // Role : [''],
            Email : ['']
        });

        this.UpdatePasswordForm = this.formBuilder.group({
            Username : [''],
            CurrentPassword : [''],
            NewPassword : [''],
            ConfirmPassword : ['']
        });

    }

    ngOnInit() {
        this.userName = this.authservice.getProfileInfo().Username;
        this.userLevel = this.authservice.getProfileInfo().UserLevel;
        // console.log(this.authservice.getUser());
        // console.log(this.userLevel);

        // this.HrmsService.GetCitiesByCompanyId(this.authservice.getUserCompanyId()).subscribe((res : any[]) => {
        //     this.Cities = res;
        //     console.log(res);
            
            // this.SystemAdminService.GetRolesByCompanyId(this.authservice.getUserCompanyId()).subscribe((res : any[]) => {
            //     this.Roles = res;
            // });

            // console.log(this.SystemAdminService.getRolesByCompanyIdAsync(this.authservice.getUserCompanyId()));
            // console.log(this.SystemAdminService.getRoles());

            // this.Roles.push(this.SystemAdminService.getRolesByCompanyIdAsync(this.authservice.getUserCompanyId()));
            // console.log(this.Roles);

            this.EmployeeService.GetEmployee(this.authservice.getUserId()).subscribe((res : Employee) => {
                this.User = res;
                // console.log(res);

                // this.UserCity = this.Cities.find(a => a.cityId == this.User.cityId);
                // this.UserRole = this.Roles.find(a => a.roleId == this.User.roleId);
                // console.log(this.UserRole);

                this.UpdateUserProfileForm.patchValue({
                    FirstName : this.User.firstName,
                    LastName : this.User.lastName,
                    // City : this.User.cityId,
                    ContactNumber : this.User.phone,
                    // Role : this.UserRole.name,
                    Email : this.User.email
                });
            });

        // });
    }

    UpdateUserProfileInfo(formvalue) {
        // console.log(formvalue);
        this.User.firstName = formvalue.FirstName;
        this.User.lastName = formvalue.LastName;
        this.User.phone = formvalue.ContactNumber;
        this.User.email = formvalue.Email;
        // console.log(this.User);
        
        this.UserService.EditUser(this.User).subscribe(
            (res : any) => {
                // console.log(res);
                this.Toastr.success("User profile updated successfully");
            },
            (err : any) => {
                this.Toastr.error("Unable to update user profile");
            }
        );
    }

    UpdatePassword(formvalue) {
        // console.log(formvalue);
        
        if(formvalue.Username != null && formvalue.Username != undefined 
            && formvalue.CurrentPassword != null && formvalue.CurrentPassword != undefined 
            && formvalue.NewPassword != null && formvalue.NewPassword != undefined
            && formvalue.ConfirmPassword != null && formvalue.ConfirmPassword != undefined 
            && formvalue.CurrentPassword != formvalue.NewPassword
            && formvalue.NewPassword === formvalue.ConfirmPassword) {

            let a : any = {
                Username : formvalue.Username,
                OldPassword : formvalue.CurrentPassword,
                NewPassword : formvalue.NewPassword
            };

            // console.log(a);

            this.UserService.changePassword(a).subscribe(
                (res : string) => {
                    this.Toastr.success(res);
                },
                (err : string) => {
                    this.Toastr.error(err);
                }
            );

        } else {
            this.Toastr.error("Passwords don't match");
        }
    }



}
