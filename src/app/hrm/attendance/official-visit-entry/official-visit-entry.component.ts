import { Component, OnInit } from '@angular/core';
import { AttendanceService } from '../services/attendance.service';

@Component({
  selector: 'app-official-visit-entry',
  templateUrl: './official-visit-entry.component.html',
  styleUrls: ['./official-visit-entry.component.scss']
})
export class OfficialVisitEntryComponent implements OnInit {

  public officialVisitentry: any;
  constructor(public attendanceservice:AttendanceService) { }

  async ngOnInit() {
      await this.attendanceservice.getofficialVisitentries(); 
      this.officialVisitentry = this.attendanceservice.officialVisitentry
      console.log(this.officialVisitentry);
      
  }

  async addofficialVisitentry(value) { 
      this.attendanceservice.addofficialVisitentry(value.data);
    }
    
    async updateofficialVisitentry(value) {
      console.log(value); 
      this.attendanceservice.updateofficialVisitentry(value);   
    }

    async deleteofficialVisitentry(value) { 
      this.attendanceservice.DeleteofficialVisitentry(value.key);
    }

}