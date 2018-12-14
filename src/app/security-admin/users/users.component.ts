import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../app/core/Services/Security/user.service';
import { AuthService } from '../../../app/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  private users: any;
  private authUser: any;

  constructor(private userService: UserService, private authService: AuthService) {
    this.authUser = this.authService.getUser();
  }

  ngOnInit() {

    this.userService.getUsersByCompany(this.authUser.assignedId.companyId).subscribe(resp => {
      this.users = resp;
    })

  }

  getdata(data){
    console.log(data);
  }

}
