import { Component, OnInit } from '@angular/core';
import { PayrollSetupService } from '../../services/payrollsetup.service';

@Component({
  selector: 'app-usersalary',
  templateUrl: './usersalary.component.html',
  styleUrls: ['./usersalary.component.scss']
})
export class UsersalaryComponent implements OnInit {

  public userSalary: any;
    constructor(public payrollsetupservice: PayrollSetupService) { }

    async ngOnInit() {
        await this.payrollsetupservice.getusersalaries();
        this.userSalary = this.payrollsetupservice.usersalary;
    }

    async addUserSalary(value) {
        await this.payrollsetupservice.addusersalary(value.data);
    }

    async updateUserSalary(value) {
        console.log(value);
        await this.payrollsetupservice.updateusersalary(value);
    }

    async deleteUserSalary(value) {
        await this.payrollsetupservice.Deleteusersalary(value.key);
    }

}