import { Component, OnInit } from '@angular/core';
import { AttendanceService } from '../../services/attendance.service';

@Component({
  selector: 'app-attendancerule',
  templateUrl: './attendancerule.component.html',
  styleUrls: ['./attendancerule.component.scss']
})
export class AttendanceruleComponent implements OnInit {

  public attendancerule: any;
  constructor(public attendanceservice:AttendanceService) { }

  async ngOnInit() {
      await this.attendanceservice.getattendancerules(); 
      this.attendancerule = this.attendanceservice.attendancerule
      console.log(this.attendancerule);
      
  }

  async addattendancerule(value) { 
      this.attendanceservice.addattendancerule(value.data);
    }
    
    async updateattendancerule(value) {
      console.log(value); 
      this.attendanceservice.updateattendancerule(value);   
    }

    async deleteattendancerule(value) { 
      this.attendanceservice.Deleteattendancerule(value.key);
    }

}