import { Component, OnInit } from '@angular/core';
import { PayrollSetupService } from '../../../../core';

@Component({
  selector: 'app-frequency',
  templateUrl: './frequency.component.html',
  styleUrls: ['./frequency.component.scss']
})
export class FrequencyComponent implements OnInit {

  public Frequency: any; 
  constructor(public payrollsetupservice: PayrollSetupService) { }

 async ngOnInit() {
      await this.payrollsetupservice.getfrequencies();
      this.Frequency = this.payrollsetupservice.frequency;
    }
  
    async addFrequency(value) {
      await this.payrollsetupservice.addfrequency(value.data);
    }
  
    async updateFrequency(value) {
      console.log(value);
      await this.payrollsetupservice.updatefrequency(value);
    }
  
    async deleteFrequency(value) {
      await this.payrollsetupservice.Deletefrequency(value.key);
    }
  
  }