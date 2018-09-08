import { Component, OnInit } from '@angular/core';
import { AttendanceService } from '../services/attendance.service';

@Component({
  selector: 'app-overtime-entitlement',
  templateUrl: './overtime-entitlement.component.html',
  styleUrls: ['./overtime-entitlement.component.scss']
})
export class OvertimeEntitlementComponent implements OnInit {

  public overtimeEntitlement: any;
  constructor(public attendanceservice:AttendanceService) { }

  async ngOnInit() {
      await this.attendanceservice.getempOvertimeEntitlements(); 
      this.overtimeEntitlement = this.attendanceservice.overtimeEntitlement
      console.log(this.overtimeEntitlement);
      
  }

  async addovertimeEntitlement(value) { 
      this.attendanceservice.addovertimeEntitlement(value.data);
    }
    
    async updateovertimeEntitlement(value) {
      console.log(value); 
      this.attendanceservice.updateovertimeEntitlement(value);   
    }

    async deleteovertimeEntitlement(value) { 
      this.attendanceservice.DeleteovertimeEntitlement(value.key);
    }

}