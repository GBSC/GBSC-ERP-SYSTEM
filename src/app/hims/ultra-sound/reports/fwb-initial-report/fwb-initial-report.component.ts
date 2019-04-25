import { Component, ViewChild, AfterViewInit, Renderer2, Input, ElementRef, Inject, PLATFORM_ID, ViewEncapsulation , NgZone } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import * as ko from "knockout";
import { Html } from "devexpress-reporting/dx-web-document-viewer";
import { environment } from '../../../../../environments/environment';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-fwb-initial-report',
  templateUrl: './fwb-initial-report.component.html',
  styleUrls: ['./fwb-initial-report.component.css']
})
export class FwbInitialReportComponent  implements AfterViewInit {
  @ViewChild('scripts')
  scripts: ElementRef;

  @ViewChild("control")
  control: ElementRef;

  public patientId : any;
  public fwbInitialDate : any;

  constructor(public renderer: Renderer2,public ngZone: NgZone , public router : ActivatedRoute) { }

  ngOnInit(){

    this.router.params.subscribe((params)=>{
      this.patientId = +params['id'];
       this.fwbInitialDate = this.formatDate(new Date(params['date']));
          //  this.fwbInitialDate =  params['date'];

      console.log(this.patientId);
      console.log(this.fwbInitialDate);



    });
   }
   formatDate(date: Date) {
    return  ( date.getMonth() +1)   + "/" + date.getDate()  + "/" +date.getFullYear();
  }
  ngAfterViewInit() {

      const reportUrl = ko["observable"]("fwbInitialReport"),
          container = this.renderer.createElement("div");
      container.innerHTML = Html;


          var host = `${environment.repotr_url}`;
        // var host ='http://localhost:57581/'
      this.renderer.appendChild(this.scripts.nativeElement, container);
      ko.applyBindings({
          reportUrl,
          requestOptions: {
              host,
              invokeAction: 'WebDocumentViewer/Invoke'
          },callbacks: {
            ParametersSubmitted: (s, e) => this.ngZone.run(() => {
                if(this.patientId)
                e.Parameters.filter(function (p) { return p.Key == "patientId"; })[0].Value = this.patientId;
                if(this.fwbInitialDate)
                e.Parameters.filter(function (p) { return p.Key == "date"; })[0].Value = this.fwbInitialDate;
            })
          }
      }, this.control.nativeElement);
  }

}