import { Component, OnInit } from '@angular/core';
import { LeaveSetupService } from '../../leaveSetup.service';

@Component({
  selector: 'app-leavetype',
  templateUrl: './leavetype.component.html',
  styleUrls: ['./leavetype.component.scss']
})
export class LeavetypeComponent implements OnInit {

  public levetype: any;
  constructor(public leavesetupservice:LeaveSetupService) { }

  async ngOnInit() {
      await this.leavesetupservice.getAllleavetype(); 
      this.levetype = this.leavesetupservice.leavetype
      console.log(this.levetype);
      
  }

  async addleavetype(ltype) {
      console.log(ltype.data);
      this.leavesetupservice.addleavetype(ltype.data);
    }
    
    async updateleavetype(levtype) {
      console.log(levtype); 
      this.leavesetupservice.updateleavetype(levtype); 
      console.log('in updated year')
   
    }

    async deleteleavetype(lvtype) {
      console.log(lvtype); 
      this.leavesetupservice.Deleteleavetype(lvtype); 
   
   
    }

}
