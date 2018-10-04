import { Component, OnInit } from '@angular/core';
import { SetupService } from '../../setup/service/setupservices';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {
public role :any;
public featuremodule:  any;
  constructor(public SetupServiceobj : SetupService) 
  { }

 async  ngOnInit() {



   await this.SetupServiceobj.getDepartments();
   this.role = this.SetupServiceobj.departments;
   console.log(this.role);

   await this.SetupServiceobj.getRoles();
   let y = this.SetupServiceobj.roles;
   console.log(y);

 
 

    await this.SetupServiceobj.GetmyModulesWithFeatures();
    this.featuremodule = this.SetupServiceobj.data
    console.log(this.featuremodule);

    
  }

  async addRole(value)
  {
    console.log(value);
    await this.SetupServiceobj.addRole(value.key)
    
  }


  async updateRole(value)
  {
console.log(value.key);
await this.SetupServiceobj.updateRole(value.key);
  }

  async deletRole(value) {
    console.log(value);
    console.log(value.key);
    await this.SetupServiceobj.deletRole(value.key.roleId);
  }
}
