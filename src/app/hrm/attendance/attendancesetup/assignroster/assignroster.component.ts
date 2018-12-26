import { Component, OnInit, ViewChild } from '@angular/core';
import { AttendancesetupService, EmployeeService } from '../../../../core';
import { Employee } from '../../../../core/Models/HRM/employee';
import { DxTreeViewComponent } from 'devextreme-angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';


@Component({
    selector: 'app-assignroster',
    templateUrl: './assignroster.component.html',
    styleUrls: ['./assignroster.component.scss']
})
export class AssignrosterComponent implements OnInit {
    @ViewChild(DxTreeViewComponent) treeView;

    public updatingModel: any;
    public shifts: any;
    public employee: any;
    popupVisible = false;
    public assignrosters: any;
    public rosterAsign: any;
    public rosterData: any = {};
    public roster: any;
    selectedRows: number[];
    prefix: string;
    selectionChangedBySelectbox: boolean;
    public selectedUsers = [];
    public calendarForm : FormGroup;
    public currentdate: any;

    public offDaysDateList : any = [];
    public Daysoffs : any  ;



    constructor(public attendancesetupservice: AttendancesetupService,
        public empservice: EmployeeService , private formBuilder : FormBuilder) { 
            this.calendarForm = this.formBuilder.group({
                Dayoff : [''],
                Remarks : [''],
                Daysoffs: this.formBuilder.array([])
            });
        }

    async ngOnInit() {
 
        this.assignrosters = await this.attendancesetupservice.getAsignRosters();
        console.log(this.assignrosters);

        this.rosterAsign = await this.attendancesetupservice.getAsignRoster(20);

        this.roster = await this.attendancesetupservice.getRosters();

        this.employee = await this.empservice.GetAllEmployees();
        
        

        this.shifts = await this.attendancesetupservice.getShifts();


    }
    addOffDaysList(value){
        this.calendarForm.value.Daysoffs = value;
        delete this.calendarForm.value.Dayoff;
        delete this.calendarForm.value.Remarks;
        this.Daysoffs = this.calendarForm.value; 
       // this.offdays =  this.offdays.Daysoffs.map(d => d);
         console.log(this.Daysoffs);
         
    }

    addrange(){
        let { value } = this.calendarForm;
        let doc = {
            Dayoff: value.Dayoff,
            Remarks: value.Remarks
        }
        this.offDaysDateList.push(doc);
    }
    remove(index) {
        this.offDaysDateList.splice(index, 1);
    }

    openOffDayModel(){
        this.currentdate = this.formatDate(new Date());
        console.log(this.currentdate);
    }

    formatDate(date: Date) {
        return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
    }


    showInfo(employee) {
        this.popupVisible = true;
    }


    selectionChangedHandler(e) {
        console.log(e);
        this.rosterData.UserAssignRosters = e.selectedRowsData.map(u => {
            return {
                userId: u.userId,

            };
        });
        if (!this.selectionChangedBySelectbox) {
            this.prefix = null;
        }

        this.selectionChangedBySelectbox = false;
    }

    addselecteduser() {
        this.popupVisible = false;
    }

    async addassignroster(value) {
        this.rosterData = { ...this.rosterData , ...value.data };
        this.rosterData.Daysoffs =  this.Daysoffs.Daysoffs.map(d => d);
        console.log(this.rosterData);
        await this.attendancesetupservice.addAsignRoster(this.rosterData);
        this.assignrosters = await this.attendancesetupservice.getAsignRosters();
        console.log(this.assignrosters);
    }

    async updatingAssignroster(value) {

        this.updatingModel = { ...value.oldData, ...value.newData };
    }

    async updateassignroster() {
        await this.attendancesetupservice.updateAsignRoster(this.updatingModel);
    }

    async deleteassignroster(value) {
        await this.attendancesetupservice.DeleteAsignRoster(value.key);
    }

}
