import { Component, OnInit } from '@angular/core';
import { AttendancesetupService } from '../../services/attendancesetup.service';

@Component({
  selector: 'app-flageffecttype',
  templateUrl: './flageffecttype.component.html',
  styleUrls: ['./flageffecttype.component.scss']
})
export class FlageffecttypeComponent implements OnInit {

   
  public flageffecttype: any;
  constructor(public attendancesetupservice:AttendancesetupService) { }

  async ngOnInit() {
      await this.attendancesetupservice.getflagEffecttypes(); 
      this.flageffecttype = this.attendancesetupservice.flagEffecttype
      console.log(this.flageffecttype);
      
  }

  async addflageffecttype(value) { 
      this.attendancesetupservice.addflagEffecttype(value.data);
    }
    
    async updateflageffecttype(value) {
      console.log(value); 
      this.attendancesetupservice.updateflagEffecttype(value);   
    }

    async deleteflageffecttype(value) { 
      this.attendancesetupservice.DeleteflagEffecttype(value.key);
    }

}