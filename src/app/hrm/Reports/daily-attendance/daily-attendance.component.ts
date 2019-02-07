import { Component, ViewChild, AfterViewInit, Renderer2, Input, ElementRef, Inject, PLATFORM_ID, ViewEncapsulation ,NgZone } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import * as ko from "knockout";
import { Html } from "devexpress-reporting/dx-web-document-viewer";
import { environment } from '../../../../environments/environment';
import { AttendancesetupService  } from '../../../core/Services/HRM/Attendance/attendancesetup.service';
import { HrmsService  } from '../../../core/Services/HRM/Setup/hrms.service';


@Component({
  selector: 'app-daily-attendance',
  templateUrl: './daily-attendance.component.html',
  styleUrls: ['./daily-attendance.component.css']
})  
export class DailyAttendanceComponent implements AfterViewInit {

    public showHideFilter: boolean = false;
    public shifts : any;
    public shiftId : any;
    public department : any;
    public departmentId : any;

  @ViewChild('scripts')
  scripts: ElementRef;

  @ViewChild("control")
  control: ElementRef

  constructor(public hrmsServiceobj : HrmsService, public attendancesetupServiceobj : AttendancesetupService, public renderer: Renderer2,public ngZone: NgZone) { }
  ngOnInit() {
    this.attendancesetupServiceobj.GetShifts().subscribe(res=> {
      this.shifts = res;
      console.log(this.shifts);
    });

    this.hrmsServiceobj.GetAllDepartments().subscribe(res =>{
        this.department = res;
        console.log(this.department);
    });
    }


  ngAfterViewInit() {

      const reportUrl = ko["observable"]("DailyAttendance"),
          container = this.renderer.createElement("div");
      container.innerHTML = Html;
      var host = `${environment.repotr_url}`;
      this.renderer.appendChild(this.scripts.nativeElement, container);
      ko.applyBindings({
          reportUrl,
          requestOptions: {
              host,
              invokeAction: 'WebDocumentViewer/Invoke'
          },
          callbacks: {
            ParametersSubmitted: (s, e) => this.ngZone.run(() => {
                if(this.departmentId)
                e.Parameters.filter(function (p) { return p.Key == "departmentId"; })[0].Value = this.departmentId;
                if(this.shiftId)
                e.Parameters.filter(function (p) { return p.Key == "ShiftsId"; })[0].Value = this.shiftId;
            })
          }
      }, this.control.nativeElement);
  }

  onShiftChange(value){
    console.log(value);
    this.shiftId = value;
  }

  onDepartmentChange(value){
      console.log(value);
      this.departmentId = value;
  }
  toggleFilter() {
    this.showHideFilter = !this.showHideFilter;
}

}