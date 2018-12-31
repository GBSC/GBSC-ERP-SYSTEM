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

    private companyId: any;
    private roles: any;
    private cities: any;
    private user: any;
    private userId: any;

    private userForm: FormGroup;

    constructor(private route: ActivatedRoute,
        private formBuilder: FormBuilder,
        private adminService: HrmsService,
        private systemAdminService: SystemAdministrationService,
        private userService: UserService,
        public toastr: ToastrService,
        private authService: AuthService) {

        this.companyId = this.authService.getUserCompanyId();

        this.userForm = formBuilder.group({
            'FirstName': ['', Validators.required],
            'LastName': ['', Validators.required],
            'CityId': [],
            'Phone': [],
            'RoleId': [],
            'Email': [],
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

        })

        this.adminService.getCitiesByCompanyId(this.companyId).subscribe(resp => this.cities = resp);

        this.systemAdminService.getRolesByCompanyId(this.companyId).subscribe(resp => this.roles = resp);

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

        let user = this.user;

        user.firstName = value.FirstName;
        user.lastName = value.LastName;
        user.email = value.Email;
        user.phone = value.Phone;
        user.cityId = value.CityId;
        user.roleId = value.RoleId;

        this.userService.editUser(user).subscribe(resp => this.displayToast("Account Updated"));
    }

    setValues() {

        this.userService.getUser(this.userId).subscribe(resp => {
            this.user = resp
            this.patchValues(this.user);
        }
        );
    }

    public displayToast(message) {
        this.toastr.success(message);
    }


    patchValues(user) {

        this.userForm.patchValue({
            'FirstName': user.firstName,
            'LastName': user.lastName,
            'CityId': user.cityId,
            'Phone': user.phone,
            'RoleId': user.roleId,
            'Email': user.email
        });

    }

}
