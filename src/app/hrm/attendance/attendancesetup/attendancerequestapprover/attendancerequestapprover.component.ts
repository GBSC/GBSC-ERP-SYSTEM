import { Component, OnInit } from '@angular/core';
import { AttendancesetupService } from '../../services/attendancesetup.service';

@Component({
  selector: 'app-attendancerequestapprover',
  templateUrl: './attendancerequestapprover.component.html',
  styleUrls: ['./attendancerequestapprover.component.scss']
})
export class AttendancerequestapproverComponent implements OnInit {

  public attendanceRequestapprover: any;
  constructor(public attendancesetupservice:AttendancesetupService) { }

  async ngOnInit() {
      await this.attendancesetupservice.getattendanceRequestapprover(); 
      this.attendanceRequestapprover = this.attendancesetupservice.attendancerequestapprover
      console.log(this.attendanceRequestapprover);
      
  }

  async addattendanceRequestapprover(value) { 
      this.attendancesetupservice.addattendanceRequestapprover(value.data);
    }
    
    async updateattendanceRequestapprover(value) {
      console.log(value); 
      this.attendancesetupservice.updateattendanceRequestapprover(value);   
    }

    async deleteattendanceRequestapprover(value) { 
      this.attendancesetupservice.DeleteattendanceRequestapprover(value.key);
    }

}
