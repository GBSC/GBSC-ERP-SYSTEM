import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { SetupService } from '../../../core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http'; 

@Component({
    selector: 'app-leavetypes',
    templateUrl: './leavetypes.component.html',
    styleUrls: ['./leavetypes.component.css']
})
export class LeaveTypeComponent implements OnInit {

    public leavetype: any;
    constructor(public httpClient: HttpClient,
        public dataService: SetupService) { }



    async ngOnInit() {
        await this.dataService.getAllLeaveType();
        this.leavetype = this.dataService.leavetype;

        // this.dataService.GetAllLeaveType().subscribe((data)=>this.leavetypes=data);
    }

    // If you don't need a filter or a pagination this can be simplified, you just use code from else block

    addNewLeavetype(leave) {
        this.dataService.addLeaveTypes(leave.data);
    }

    EditLeave(ltype) {
        this.dataService.updateLeaveTypes(ltype);
    }

    deleteLeave(leav) {
        this.dataService.DeleteLeaveTypes(leav.key);
    }


}