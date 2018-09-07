import { Component, OnInit } from '@angular/core';
import { LeaveSetupService } from '../../leaveSetup.service';

@Component({
  selector: 'app-leavedaytype',
  templateUrl: './leavedaytype.component.html',
  styleUrls: ['./leavedaytype.component.scss']
})
export class LeavedaytypeComponent implements OnInit {

  public levedaytype: any;
  constructor(public leavesetupservice:LeaveSetupService) { }

  async ngOnInit() {
      await this.leavesetupservice.getAllleavedaytype(); 
      this.levedaytype = this.leavesetupservice.leavedaytype
      console.log(this.levedaytype);
  }

  async addleavedaytype(ldaytype) {
      console.log(ldaytype.data);
      this.leavesetupservice.addleavedaytype(ldaytype.data);
    }
    
    async updateleavedaytype(levdaytype) {
      console.log(levdaytype); 
      this.leavesetupservice.updateleavedaytype(levdaytype); 
      console.log('in updated year')
   
    }

    async deleteleavedaytype(lvdaytype) {
      console.log(lvdaytype); 
      this.leavesetupservice.Deleteleavedaytype(lvdaytype.key); 
   
   
    }
    
}
