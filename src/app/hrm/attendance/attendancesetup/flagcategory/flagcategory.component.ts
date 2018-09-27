import { Component, OnInit } from '@angular/core';
import { AttendancesetupService } from '../../services/attendancesetup.service';

@Component({
  selector: 'app-flagcategory',
  templateUrl: './flagcategory.component.html',
  styleUrls: ['./flagcategory.component.scss']
})
export class FlagcategoryComponent implements OnInit {

   
  public flagcategory: any;
  constructor(public attendancesetupservice:AttendancesetupService) { }

  async ngOnInit() {
      await this.attendancesetupservice.getflagCategories(); 
      this.flagcategory = this.attendancesetupservice.flagCategory
      console.log(this.flagcategory);
      
  }

  async addflagcategory(value) { 
      this.attendancesetupservice.addflagCategory(value.data);
    }
    
    async updateflagcategory(value) {
      console.log(value); 
      this.attendancesetupservice.updateflagCategory(value);   
    }

    async deleteflagcategory(value) { 
      this.attendancesetupservice.DeleteflagCategory(value.key);
    }

}