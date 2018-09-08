import { Component, OnInit } from '@angular/core';
import { AttendanceService } from '../../services/attendance.service';

@Component({
  selector: 'app-overtimeflag',
  templateUrl: './overtimeflag.component.html',
  styleUrls: ['./overtimeflag.component.scss']
})
export class OvertimeflagComponent implements OnInit {

  public overtimeflag: any;
  constructor(public attendanceservice:AttendanceService) { }

  async ngOnInit() {
      await this.attendanceservice.getAllovertimeflag(); 
      this.overtimeflag = this.attendanceservice.overtimeflag
      console.log(this.overtimeflag);
      
  }

  async addovertimeflag(value) { 
      this.attendanceservice.addovertimeflag(value.data);
    }
    
    async updateovertimeflag(value) {
      console.log(value); 
      this.attendanceservice.updateovertimeflag(value);   
    }

    async deleteovertimeflag(value) { 
      this.attendanceservice.Deleteovertimeflag(value.key);
    }

}