import { Component, OnInit } from '@angular/core';
import { PayrollSetupService } from '../../services/payrollsetup.service';
import { SetupService } from '../../../hrmsSetup/services/setup.service';

@Component({
  selector: 'app-salarystructure',
  templateUrl: './salarystructure.component.html',
  styleUrls: ['./salarystructure.component.scss']
})
export class SalarystructureComponent implements OnInit {

  public salarystructure: any; 
  constructor(public payrollsetupservice: PayrollSetupService, public setupservice: SetupService) { }

  async ngOnInit() {
      await this.payrollsetupservice.getsalarystructures();
      this.salarystructure = this.payrollsetupservice.salarystructure;
      
      await this.payrollsetupservice.getpayrolltypes();
      let payrolltype = this.payrollsetupservice.payrolltype;
     
      await this.setupservice.getAllGroups();
      let group = this.setupservice.group; 
    }
  
    async addSalaryStructure(value) {
      await this.payrollsetupservice.addsalarystructure(value.data);
    }
  
    async updateSalaryStructure(value) { 
      await this.payrollsetupservice.updatesalarystructure(value);
    }
  
    async deleteSalaryStructure(value) {
      await this.payrollsetupservice.Deletesalarystructure(value.key);
    }
  
  }