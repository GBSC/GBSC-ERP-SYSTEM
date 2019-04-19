import { Component, ViewChild, AfterViewInit, Renderer2, Input, ElementRef, Inject, PLATFORM_ID, ViewEncapsulation ,NgZone } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import * as ko from "knockout";
import { Html } from "devexpress-reporting/dx-web-document-viewer";
import { environment } from '../../../../environments/environment';

import { AttendancesetupService  } from '../../../core/Services/HRM/Attendance/attendancesetup.service';

@Component({
  selector: 'app-department-wise-attendance',
  templateUrl: './department-wise-attendance.component.html',
  styleUrls: ['./department-wise-attendance.component.css']
})
export class DepartmentWiseAttendanceComponent  implements AfterViewInit {
  public showHideFilter: boolean = false;
  public shifts : any;
  public shiftId : any;
  @ViewChild('scripts')
  scripts: ElementRef;

  @ViewChild("control")
  control: ElementRef

  constructor(public attendancesetupServiceobj : AttendancesetupService, public renderer: Renderer2,public ngZone: NgZone) { }
    ngOnInit() {
      this.attendancesetupServiceobj.GetShifts().subscribe(res=> {
        this.shifts = res;
       });
      }


  ngAfterViewInit() {

      const reportUrl = ko["observable"]("DepartmentWiseAttendance"),
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
               if(this.shiftId)
               e.Parameters.filter(function (p) { return p.Key == "ShiftsId"; })[0].Value = this.shiftId;
            })
          }
      }, this.control.nativeElement);
  }

  onShiftChange(value){
     this.shiftId = value;

  }
  toggleFilter() {
    this.showHideFilter = !this.showHideFilter;
}


}