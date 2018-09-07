import { Component, OnInit } from '@angular/core';
import { LeaveSetupService } from '../../leaveSetup.service';

@Component({
    selector: 'app-leavepurpose',
    templateUrl: './leavepurpose.component.html',
    styleUrls: ['./leavepurpose.component.css']
})
export class LeavepurposeComponent implements OnInit {
    public levepurpose: any;

    constructor(public leavesetupservice:LeaveSetupService) { }

    async ngOnInit() {
        this.leavesetupservice.getleavepurpose(); 
        this.levepurpose = await this.leavesetupservice.leavepurpose
    }

    addleavepurpose(lpurpose) {
        console.log(lpurpose.data);
        this.leavesetupservice.addleavepurpose(lpurpose.data);
      }
      
      updateleavepurpose(levpurpose) {
        console.log(levpurpose); 
        this.leavesetupservice.updatepurpose(levpurpose); 
        console.log('in updated purpose')
     
      }

      deleteleavepurpose(lvpurpose) {
        console.log(lvpurpose); 
        this.leavesetupservice.Deleteleavpurpose(lvpurpose.key); 
        console.log('in updated purpose')
     
      }

}
