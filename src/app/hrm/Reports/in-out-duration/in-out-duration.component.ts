import { Component, ViewChild, AfterViewInit, Renderer2, Input, ElementRef, Inject, PLATFORM_ID, ViewEncapsulation  ,NgZone } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import * as ko from "knockout";
import { Html } from "devexpress-reporting/dx-web-document-viewer";
import { environment } from '../../../../environments/environment';
import { HrmsService } from '../../../core/Services/HRM/Setup/hrms.service';
import { EmployeeService } from '../../../core/Services/HRM/Employee/employee.service';

@Component({
    selector: 'app-in-out-duration',
    encapsulation: ViewEncapsulation.None,
    templateUrl: './in-out-duration.component.html',
    // styleUrls: ['./in-out-duration.component.scss']
})
export class InOutDurationComponent  implements AfterViewInit {
    public showHideFilter: boolean = false;
    public User: boolean = true;
    public department: any;
    public departmentId: any;

    public users : any;
    public userId : any;

    @ViewChild('scripts')
    scripts: ElementRef;
  
    @ViewChild("control")
    control: ElementRef
  
    constructor(public hrmsServiceobj: HrmsService, public employeeServiceobj : EmployeeService ,public renderer: Renderer2,public ngZone: NgZone) { }
    ngOnInit() {


        this.hrmsServiceobj.GetAllDepartments().subscribe(res => {
            this.department = res;
         });
    }
  
  
    ngAfterViewInit() {
  
        const reportUrl = ko["observable"]("InOutDuration"),
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
                if (this.departmentId)
                e.Parameters.filter(function (p) { return p.Key == "departmentId"; })[0].Value = this.departmentId;
                if (this.userId)
                e.Parameters.filter(function (p) { return p.Key == "userId"; })[0].Value = this.userId;
               })
            }
        }, this.control.nativeElement);
    }

    
    onDepartmentChange(value) {
         this.departmentId = value;
        if(this.departmentId){
            this.employeeServiceobj.GetEmployeesByDepartmentId(this.departmentId).subscribe(res=>{
                this.users = res;
                if(this.users){
                    this.User = false;
                }
             });
        }
    }

    onUserChange(value){
        this.userId = value;
     }
    toggleFilter() {
        this.showHideFilter = !this.showHideFilter;
        
    }

  
  }