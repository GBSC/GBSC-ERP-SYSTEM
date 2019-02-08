import { Component, ViewChild, AfterViewInit, Renderer2, Input, ElementRef, Inject, PLATFORM_ID, ViewEncapsulation ,NgZone } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import * as ko from "knockout";
import { Html } from "devexpress-reporting/dx-web-document-viewer";
import { environment } from '../../../../environments/environment';
import { HrmsService  } from '../../../core/Services/HRM/Setup/hrms.service';


@Component({
  selector: 'app-missing-entries',
  templateUrl: './missing-entries.component.html',
  styleUrls: ['./missing-entries.component.css']
})
export class MissingEntriesComponent implements AfterViewInit {
  public showHideFilter: boolean = false;
  public department : any;
  public departmentId : any;

  @ViewChild('scripts')
  scripts: ElementRef;

  @ViewChild("control")
  control: ElementRef

  constructor(public hrmsServiceobj : HrmsService, public renderer: Renderer2,public ngZone: NgZone) { }
  async ngOnInit() {

this.department = await   this.hrmsServiceobj.getAllDepartments();
console.log(this.department);

  }


  ngAfterViewInit() {

      const reportUrl = ko["observable"]("MissingEntries"),
          container = this.renderer.createElement("div");
      container.innerHTML = Html;
      var host = `${environment.repotr_url}`;
      this.renderer.appendChild(this.scripts.nativeElement, container);
      ko.applyBindings({
          reportUrl,
          requestOptions: {
              host,
              invokeAction: 'WebDocumentViewer/Invoke'
           } ,
          callbacks: {
            ParametersSubmitted: (s, e) => this.ngZone.run(() => {
               if(this.departmentId)
               e.Parameters.filter(function (p) { return p.Key == "departmentId"; })[0].Value = this.departmentId;
            })
          }
      }, this.control.nativeElement);
  }

  onDepartmentChange(value){
    this.departmentId = value;
    console.log(value)
  }
  toggleFilter() {
    this.showHideFilter = !this.showHideFilter;
}

}