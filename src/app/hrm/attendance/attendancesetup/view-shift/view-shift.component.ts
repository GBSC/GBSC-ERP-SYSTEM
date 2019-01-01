import { Component, OnInit } from '@angular/core';
import { AttendancesetupService } from '../../../../core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-view-shift',
    templateUrl: './view-shift.component.html',
    styleUrls: ['./view-shift.component.scss']
})
export class ViewShiftComponent implements OnInit {

    public shiftsId: any;
    public flagType: any;
    public shift: any;
    public attendanceflag: any;
    public AssignRosters: any;

    constructor(public attendancesetupservice: AttendancesetupService, public router: Router) { }

    async ngOnInit() {

        this.shift = await this.attendancesetupservice.getShifts();

        this.attendanceflag = await this.attendancesetupservice.getAttendanceFlags();

        this.flagType = await this.attendancesetupservice.getFlagTypes();

        this.AssignRosters = await this.attendancesetupservice.getAsignRosters();

    }

    onToolbarPreparing(e) {
        e.toolbarOptions.items.unshift(
            {
                location: 'after',
                widget: 'dxButton',
                options: {
                    icon: 'add',
                    onClick: this.addShift.bind(this)
                }
            });
    }


    contentReady(e) {
        if (!e.component.getSelectedRowKeys().length)
            e.component.selectRowsByIndexes(-1);
    }

    selectionChanged(e) {
        e.component.collapseAll(-0);
        e.component.expandRow(e.currentSelectedRowKeys[0]);
    }

    addShift() {
        this.router.navigate(['/hrm/attendance/attendancesetup/shift']);
    }

    getSingleRowData(d) {
        this.shiftsId = d.key;  
        this.router.navigate(['/hrm/attendance/attendancesetup/updateshift/' + this.shiftsId]);
    }

}