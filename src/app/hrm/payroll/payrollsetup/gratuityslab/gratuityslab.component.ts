import { Component, OnInit } from '@angular/core';
import { PayrollSetupService } from '../../services/payrollsetup.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GratuitySlabGratuity } from '../../../model/gratuitySlabGratuity';
import { GratuitySlab } from '../../../model/gratuitySlab';
import { PayrollService } from '../../services/payroll.service';

@Component({
    selector: 'app-gratuityslab',
    templateUrl: './gratuityslab.component.html',
    styleUrls: ['./gratuityslab.component.css']
})
export class GratuityslabComponent implements OnInit {
    public gratuitySlab: any;

    public gratuitySlabForm;
    private gratuitySlabGratuityDetail : GratuitySlabGratuity[];
    
  constructor(private fb: FormBuilder,public payrollsetupservice: PayrollSetupService,
    public payrollservice: PayrollService) { }

  async ngOnInit() {

    this.gratuitySlabGratuityDetail = [];

    this.gratuitySlabForm = this.fb.group({
      Title: ['', Validators.required],
      MultiplicationFactor: ['', Validators.required],
      EmploymentDaysFrom: ['', Validators.required],
      EmploymentDaysTill: ['', Validators.required]
    });


    await this.payrollsetupservice.getgratuityslabs();
    this.gratuitySlab = this.payrollsetupservice.gratuityslab;

     await this.payrollservice.getgratuities();
  }

  async addGratuitySlabGratuity(value) {
    let data = value.data; 
      this.gratuitySlabGratuityDetail.push(data); 
      console.log(this.gratuitySlabGratuityDetail); 
    }
    
    async submitForm(value)
    {
      console.log(value);
      let gratuityslab = new GratuitySlab();
      
      gratuityslab = {...gratuityslab, ...value}; 
      gratuityslab.gratuitySlabGratuities = this.gratuitySlabGratuityDetail;
      let x = await this.payrollsetupservice.addgratuityslab(gratuityslab);
      
  }

  async updateGratuitySlab(value) {
    console.log(value);
    await this.payrollsetupservice.updategratuityslab(value);
  }

  async deleteGratuitySlab(value) {
    await this.payrollsetupservice.Deletegratuityslab(value.key);
  }

}