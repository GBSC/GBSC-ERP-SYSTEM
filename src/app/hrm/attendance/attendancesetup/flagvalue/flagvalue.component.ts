import { Component, OnInit } from '@angular/core';
import { AttendancesetupService } from '../../../../core';

@Component({
    selector: 'app-flagvalue',
    templateUrl: './flagvalue.component.html',
    styleUrls: ['./flagvalue.component.scss']
})
export class FlagvalueComponent implements OnInit {
 
    public UpdatingModel: any;
    public flagvalue: any;

    constructor(public attendancesetupservice: AttendancesetupService) { }

     ngOnInit() {

         this.attendancesetupservice.getFlagValues().subscribe(resp =>{
            this.flagvalue = resp
         });
    }

     addflagvalue(value) {
         console.log(value.data);
         
        this.attendancesetupservice.addFlagValue(value.data).subscribe(r => {console.log(r); 
            this.attendancesetupservice.getFlagValues().subscribe(resp =>{
                this.flagvalue = resp  });
        });
    }

    updatingflagvalue(value) {

        this.UpdatingModel = {...value.oldData, ...value.newData};
    }

     updateflagvalue() {
        this.attendancesetupservice.updateFlagValue(this.UpdatingModel).subscribe(fv => {
            console.log(fv);
            
        });
    }

    async deleteflagvalue(value) {
        this.attendancesetupservice.DeleteFlagValue(value.key);
    }

}