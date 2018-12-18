import { Component, OnInit } from '@angular/core';
import { LeaveService, LeaveSetupService, SetupService, EmployeeService } from '../../../../core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-viewemployeeleaveopening',
    templateUrl: './viewemployeeleaveopening.component.html',
    styleUrls: ['./viewemployeeleaveopening.component.scss']
})
export class ViewemployeeleaveopeningComponent implements OnInit {

    public leaveopening: any;
    public leveopeningdetail: any;
    public employees: any;
    public leaveYear: any;
    public leaveType: any;

    constructor(public leaveservice: LeaveService, public leavesetupservice: LeaveSetupService,
        public empservice: EmployeeService, public hrsetupservice: SetupService, public router: Router) { }

    async ngOnInit() {

        this.leaveopening = await this.leaveservice.getLeaveOpening();

        this.leveopeningdetail = await this.leaveservice.getLeaveOpeningDetail();

        this.employees = await this.empservice.GetAllEmployees();

        this.leaveYear = await this.leavesetupservice.getLeaveYears();

        this.leaveType = await this.leavesetupservice.getLeaveTypes();

    }
    onToolbarPreparing(e) {
        e.toolbarOptions.items.unshift(
            {
                location: 'after',
                widget: 'dxButton',
                options: {
                    icon: 'add',
                    onClick: this.addleaveopening.bind(this)
                }
            });
    }


    contentReady(e) {
        if (!e.component.getSelectedRowKeys().length)
            e.component.selectRowsByIndexes(0);
    }

    selectionChanged(e) {
        e.component.collapseAll(0);
        e.component.expandRow(e.currentSelectedRowKeys[0]);
    }

    addleaveopening() {
        this.router.navigate(['/hrm/leave/leaveadmin/createleaveopening']);
    }
}
