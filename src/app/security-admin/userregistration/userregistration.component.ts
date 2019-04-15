import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HrmsService, AuthService, SystemAdministrationService, UserService } from '../../../app/core';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-userregistration',
    templateUrl: './userregistration.component.html',
    styleUrls: ['./userregistration.component.scss']
})
export class UserregistrationComponent implements OnInit {

    public companyId: any;
    public roles: any;
    public cities: any;
    public user: any;
    public username: any;
    public userId: any;

    public userForm: FormGroup;

    public userTypes = ['Android', 'Desktop', 'Both'];

    constructor(public route: ActivatedRoute,
        public formBuilder: FormBuilder,
        public adminService: HrmsService,
        public systemAdminService: SystemAdministrationService,
        public userService: UserService,
        public toastr: ToastrService,
        public authService: AuthService) {

        this.companyId = this.authService.getUserCompanyId();

        this.userForm = formBuilder.group({
            'FirstName': ['', Validators.required],
            'LastName': ['', Validators.required],
            'CityId': [],
            'Phone': [],
            'RoleId': [],
            'Email': [],
            'UserType': [],
            'Username': [],
            'Password': [],
            'ConfirmPassword': []
        });

    }

    ngOnInit() {

        this.route.params.subscribe((params) => {
            this.userId = +params['id'];
            if (this.userId)
                this.setValues();
        });

        this.adminService.getCitiesByCompanyId(this.companyId).subscribe(resp => this.cities = resp);

        this.systemAdminService.getDropdownRolesByCompany(this.companyId).subscribe(resp => this.roles = resp);

    }

    submit(value) {

        value.companyId = this.companyId;
        this.userService.createAppUser(value).subscribe(resp => {
            this.userId = resp.userId;
            this.displayToast("Account Created");
            this.setValues();
        });
    }

    update(value) {
console.log(value);

        let user = this.user;
        user.firstName = value.FirstName;
        user.lastName = value.LastName;
        user.email = value.Email;
        user.phone = value.Phone;
        user.cityId = value.CityId;
        user.roleId = value.RoleId;
        user.userType = value.UserType;

        this.userService.editUser(user).subscribe(resp => {
            console.log(resp);
            
            this.displayToast("Account Updated")
            if (this.username && value.Password) {
                let passChangeModel = { username: this.username, password: value.Password }
                this.userService.changePasswordAdmin(passChangeModel).subscribe(res => {

                    if (res == "Password Changed")
                        this.displayToast("Password Updated1");
                    else
                        this.errorToast("Password not changed!");
                })
            }
        });
    }

    setValues() {

        this.userService.getUser(this.userId).subscribe(resp => {
            this.user = resp
            console.log(resp); 
            this.patchValues(this.user);
            this.userService.getUsernameByUserId(this.user.userId).subscribe(u => {
                this.username = u;
            })
        }
        );
    }

    public displayToast(message) {
        this.toastr.success(message);
    }

    public errorToast(message){
        this.toastr.error(message);
    }


    patchValues(user) {
        console.log(user.cityId);
        
        this.userForm.patchValue({
            'FirstName': user.firstName,
            'LastName': user.lastName,
            'CityId': user.cityId,
            'Phone': user.phone,
            'RoleId': user.roleId,
            'UserType': user.userType,
            'Email': user.email
        });
    }

}
