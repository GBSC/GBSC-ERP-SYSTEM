import { Component, OnInit, ViewChild } from '@angular/core';
import { AttendancesetupService, EmployeeService ,HrmsService} from '../../../../core';
import { Employee } from '../../../../core/Models/HRM/employee';
import { DxTreeViewComponent } from 'devextreme-angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DefaultKeyValueDiffer } from '@angular/core/src/change_detection/differs/default_keyvalue_differ';
 
// import { saveAs } from 'file-saver';
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
    public calendarForm: FormGroup;
    public currentdate: any;

    public offDaysDateList: any = [];
    public Daysoffs: any;

    public departments : any;
    public departmentId : any;



    constructor(public attendancesetupservice: AttendancesetupService,
        public empservice: EmployeeService, public hrmsServiceobj : HrmsService , private formBuilder: FormBuilder , public router : Router) {
        this.calendarForm = this.formBuilder.group({
            Dayoff: [''],
            Remarks: [''],
            Daysoffs: this.formBuilder.array([])
        });
    }

    async ngOnInit() {

        // this.assignrosters = await this.attendancesetupservice.getAsignRosters();
        // console.log(this.assignrosters);
        this.attendancesetupservice.GetAsignRosters().subscribe(res=>{
            this.assignrosters = res;
            console.log(this.assignrosters);
        });

 
        // this.roster = await this.attendancesetupservice.getRosters();

        this.attendancesetupservice.GetRosters().subscribe(res=>{
            this.roster = res;
            console.log(this.roster);
        });

        // this.employee = await this.empservice.GetAllEmployees();



        // this.shifts = await this.attendancesetupservice.getShifts();

        this.attendancesetupservice.GetShifts().subscribe(res=>{
            this.shifts = res;
            console.log(this.shifts);
        });

        this.empservice.getAllEmployees().subscribe(res=>{
            this.employee = res;
            console.log(this.employee);
        });

        this.hrmsServiceobj.GetAllDepartments().subscribe(res=>{
            this.departments = res ;
            console.log(this.departments);
        });




    }

    // onClickMe(args: any) {
    //       console.log(this);
    //       const self : any = this;
    //       console.log(self)
    //       const filename = 'exportExcel.xlsx';
    //        const json = JSON.stringify(self.spread.toJSON());
    //       self.excelIO.save(json, function (blob) {
    //       saveAs(blob, filename);
    //   }, function (e) {
    //       console.log(e);
    //   });
    //   }


 

    addOffDaysList(value) {
        this.calendarForm.value.Daysoffs = value;
        delete this.calendarForm.value.Dayoff;
        delete this.calendarForm.value.Remarks;
        this.Daysoffs = this.calendarForm.value;
        // // this.offdays =  this.offdays.Daysoffs.map(d => d);
        console.log(this.Daysoffs);

    }





    public inputvaluelist: any = [];


    changeremarks(e, i) {
        this.inputvaluelist[i].Remarks = e.target.value
    }


    onDepartmentChange(value){
        this.departmentId = value;
        if(this.departmentId){
            this.empservice.GetEmployeesByDepartmentId(this.departmentId).subscribe(res=> {
                    this.employee = res;
            });
        }
    }


    click(formatDate, todate) {
        var currentDate = new Date(formatDate.value);
        var endDate = new Date(todate.value);
        //   let counter = 0;
        this.inputvaluelist.push({
            Dayoff: this.formatDate(new Date(currentDate)),
            Remarks: 'On'
        });
        
        while (currentDate < endDate) {
            currentDate = new Date(currentDate.setDate(currentDate.getDate() + 1));
            let a: any = {
                Dayoff: this.formatDate(new Date(currentDate)),
                Remarks: 'On'
            };
            this.inputvaluelist.push(a);
            //   counter ++;
        }
        console.log(this.inputvaluelist);

        return this.inputvaluelist;
    }





    addrange() {
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

    openOffDayModel() {
        this.currentdate = this.formatDate(new Date());
        console.log(this.currentdate);
    }

    formatDate(date: Date) {
        return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
    }


    showInfo() {
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
        this.rosterData = { ...this.rosterData, ...value.data };
        this.rosterData.Daysoffs = this.Daysoffs.Daysoffs.map(d => d);
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



    // public exportButtonHandler(value) {
    //     this.excelExportService.exportData(value, new IgxExcelExporterOptions("ExportFileFromData"));
    // }


    routeForUpdateAssignroster(id){
        console.log(id);
          this.router.navigate(['/hrm/attendance/updateassignroster/'+id.key]);
    }


    onClickMe(d){
        this.router.navigate(['/hrm/attendance/assignrosterexcelsheet/'+d.key]);
    }
  
}
