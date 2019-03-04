import { Component, OnInit } from '@angular/core';
import { AttendancesetupService } from '../../../../core';

@Component({
    selector: 'app-attendanceflag',
    templateUrl: './attendanceflag.component.html',
    styleUrls: ['./attendanceflag.component.scss']
})
export class AttendanceflagComponent implements OnInit {

    public updatingModel: any;
    public attendanceflag: any;
    public flagcategory: any;
    public flagEffecttypes: any;
    public flagvalue: any;

    constructor(public attendancesetupservice: AttendancesetupService) { }

    async ngOnInit() {

         this.attendancesetupservice.getAttendanceFlags().subscribe(rsp => {
            this.attendanceflag = rsp
            
        });

        this.flagcategory = await this.attendancesetupservice.getFlagCategories();

        this.flagEffecttypes = await this.attendancesetupservice.getFlagEffectTypes();

        this.attendancesetupservice.getFlagValues().subscribe(res => {
            this.flagvalue = res
            
        });
    }

     addattendanceflag(value) {
         this.attendancesetupservice.addAttendanceFlag(value.data).subscribe(rs => { console.log(rs);});
        this.attendancesetupservice.getAttendanceFlags().subscribe(resp => {
            this.attendanceflag = resp 
        });   
     }

    updatingattendanceflag(value) {
        this.updatingModel = { ...value.oldData, ...value.newData };
    }

    async updateattendanceflag() {
        await this.attendancesetupservice.updateAttendanceFlag(this.updatingModel);
    }

    async deleteattendanceflag(value) {
        await this.attendancesetupservice.DeleteAttendanceFlag(value.key);
    }

}