import { Component, OnInit } from '@angular/core';
import { PayrollSetupService } from '../../services/payrollsetup.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-fundsetup',
    templateUrl: './fundsetup.component.html',
    styleUrls: ['./fundsetup.component.css']
})
export class FundsetupComponent implements OnInit {

    public fundSetup: any; 
    public FundSetupForm: FormGroup;
  private updatingfundSetup: any;
    
    constructor(private fb: FormBuilder,public payrollsetupservice: PayrollSetupService) { }

   async ngOnInit() {

    this.FundSetupForm = this.fb.group({
      PayrollYearId: ['', Validators],
      PfEmployerContribution: ['', Validators],
      PfEmployeeContribution: ['', Validators],
      TaxableAmountLimit: ['', Validators],
      MinServicePeriod: ['', Validators],
      ApplicableFrom: ['', Validators],
      EobiMinimumSalary: ['', Validators],
      EobiEmployerContribution: ['', Validators],
      EobiEmployeeContribution: ['', Validators],
      MaximumContribution: ['', Validators],
      ExemptAge: ['', Validators],
      SessiMinimumSalary: ['', Validators],
      SessiEmployerContribution: ['', Validators],
      SessiEmployeeContribution: ['', Validators],
      PessiMinimumSalary: ['', Validators],
      PessiEmployerContribution: ['', Validators],
      PessiEmployeeContribution: ['', Validators],
      IessiMinimumSalary: ['', Validators],
      IessiEmployerContribution: ['', Validators],
      IessiEmployeeContribution: ['', Validators]
  });

        await this.payrollsetupservice.getfundsetups();
        this.fundSetup = this.payrollsetupservice.fundsetup;
       
        await this.payrollsetupservice.getpayrollyears();
        let Payrollyear = this.payrollsetupservice.payrollyear;
      }
    
      async addFundSetup() {
        await this.payrollsetupservice.addfundsetup(this.FundSetupForm.value);
        console.log(this.FundSetupForm.value);
        
      }
    
      updatingFundSetup(value){
        this.updatingfundSetup = {...value.oldData, ...value.newData};
    }
    async updateFundSetup() { 
       await this.payrollsetupservice.updateallowancededuction(this.updatingfundSetup);
    }
    
      async deleteFundSetup(value) {
        await this.payrollsetupservice.Deletefundsetup(value.key);
      }
    
    }