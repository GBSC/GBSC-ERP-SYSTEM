import { Component, OnInit } from '@angular/core';
import { PayrollSetupService } from '../../services/payrollsetup.service';

@Component({
  selector: 'app-gratuity-slab-gratuity',
  templateUrl: './gratuity-slab-gratuity.component.html',
  styleUrls: ['./gratuity-slab-gratuity.component.scss']
})
export class GratuitySlabGratuityComponent implements OnInit {

  public gratuitySlabGratuity: any;
  constructor(public payrollsetupservice: PayrollSetupService) { }

  async ngOnInit() {
    await this.payrollsetupservice.getgratuityslabGratuities();
    this.gratuitySlabGratuity = this.payrollsetupservice.gratuityslabGratuity;
   
    await this.payrollsetupservice.getgratuityslabs();
    let gratuitySlab = this.payrollsetupservice.gratuityslab;
   
    // await this.payrollsetupservice.getgratuities();
    // let Gratuity = this.payrollsetupservice.gratuity;
  }

  async addGratuitySlabGratuity(value) {
    await this.payrollsetupservice.addgratuityslabGratuity(value.data);
  }

  async updateGratuitySlabGratuity(value) {
    console.log(value);
    await this.payrollsetupservice.updategratuityslabGratuity(value);
  }

  async deleteGratuitySlabGratuity(value) {
    await this.payrollsetupservice.DeletegratuityslabGratuity(value.key);
  }

}