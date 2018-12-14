import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SuperadminserviceService, HrmsService, AuthService, SystemAdministrationService } from '../../../app/core';
import { UserService } from '../../../app/core/Services/Security/user.service';

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


      this.setValues();

    })

    this.adminService.getCitiesByCompanyId(this.companyId).subscribe(resp => this.cities = resp);

    this.systemAdminService.getRolesByCompanyId(this.companyId).subscribe(resp => this.roles = resp);

  }

  submit(value) {

    value.companyId = this.companyId;
    this.userService.createAppUser(value).subscribe(resp => console.log(resp));
  }

  update(value) {

    let user = this.user;

    user.firstName = value.firstName;
    user.lastName = value.lastName;
    user.email = value.email;
    user.phone = value.phone;
    user.cityId = value.cityId;
    user.roleId = value.roleId;
    
    this.userService.editUser(user).subscribe(resp => console.log(resp));
  }

  setValues() {

    this.userService.getUser(this.userId).subscribe(resp => {
      this.user = resp
      this.patchValues(this.user);
    }
    );
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
