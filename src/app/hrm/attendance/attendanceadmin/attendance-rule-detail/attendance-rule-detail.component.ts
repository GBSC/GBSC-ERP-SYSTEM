import { Component, OnInit } from '@angular/core';
import { AttendanceService, AttendancesetupService, SetupService, LeaveSetupService } from '../../../../core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-attendance-rule-detail',
    templateUrl: './attendance-rule-detail.component.html',
    styleUrls: ['./attendance-rule-detail.component.scss']
})
export class AttendanceRuleDetailComponent implements OnInit {

    public attendanceRuleId: any;
    public attendancerule: any;
    public LeaveTypes: any;
    public attendanceRule: any;
    public attendanceflag: any;
    public groups: any;

    constructor(public attendanceservice: AttendanceService,
        public router: Router, public attendancesetupservice: AttendancesetupService, public leavesetupservice: LeaveSetupService,
        public hrsetupservice: SetupService, ) { }

    async ngOnInit() {

        this.attendancerule = await this.attendanceservice.getAttendanceRules();

        this.groups = await this.hrsetupservice.getAllGroups();

        this.attendanceflag = await this.attendancesetupservice.getAttendanceFlags();

        this.LeaveTypes = await this.leavesetupservice.getLeaveTypes();

    }

    onToolbarPreparing(e) {
        e.toolbarOptions.items.unshift(
            {
                location: 'after',
                widget: 'dxButton',
                options: {
                    icon: 'add',
                    onClick: this.addAttendanceRule.bind(this)
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

    addAttendanceRule() {
        this.router.navigate(['/hrm/attendance/attendanceadmin/attendancerule']);
    }

    getSingleRowData(d) {
        this.attendanceRuleId = d.key;
        this.router.navigate(['/hrm/attendance/attendanceadmin/updateattendancerule/' + this.attendanceRuleId]);
    }
}