import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../app/core/Services/Security/user.service';
import { AuthService } from '../../../app/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  public companyId : any;
  public users: any;
  public selectedUserId: any;
  public registrationForm: FormGroup;

  constructor(private userService: UserService, private authService: AuthService, formBuilder: FormBuilder) {
    this.companyId = this.authService.getUserCompanyId();

    this.registrationForm = formBuilder.group({
      'Email': ['', Validators.required],
      'Username': ['', Validators.required],
      'Password': ['', Validators.required]
    })
  }

  ngOnInit() {

    this.userService.getUsersByCompany(this.companyId).subscribe(resp => {
      this.users = resp;
    })

  }

  getdata(data) {
    console.log(data);
  }

  setSelectedUserId(id) {
    this.selectedUserId = id;
  }

  submitRegisterUserForm(value){

    let user = this.users.find(u=> u.userId = this.selectedUserId);
    
    value.firstName = user.firstName;
    value.lastName = user.lastName;
    value.email = user.email;
    value.phone = user.phone;
    value.cityId = user.cityId;
    value.roleId = user.roleId;

    value.companyId = this.companyId;
    
    console.log(value);
  }

}
