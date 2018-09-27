import { Component, OnInit } from '@angular/core';
import { AttendancesetupService } from '../../services/attendancesetup.service';

@Component({
  selector: 'app-attendanceflag',
  templateUrl: './attendanceflag.component.html',
  styleUrls: ['./attendanceflag.component.scss']
})
export class AttendanceflagComponent implements OnInit {

  public attendanceflag: any;
  constructor(public attendancesetupservice:AttendancesetupService) { }

  async ngOnInit() {
      await this.attendancesetupservice.getattendanceflag(); 
      this.attendanceflag = this.attendancesetupservice.attendanceflag
      console.log(this.attendanceflag);
      
  }

  async addattendanceflag(value) { 
      this.attendancesetupservice.addattendanceflag(value.data);
    }
    
    async updateattendanceflag(value) {
      console.log(value); 
      this.attendancesetupservice.updateattendanceflag(value);   
    }

    async deleteattendanceflag(value) { 
      this.attendancesetupservice.Deleteattendanceflag(value.key);
    }

}