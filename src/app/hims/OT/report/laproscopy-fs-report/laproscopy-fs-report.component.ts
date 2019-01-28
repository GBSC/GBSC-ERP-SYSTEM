import { Component, ViewChild, AfterViewInit, Renderer2, Input, ElementRef, Inject, PLATFORM_ID, ViewEncapsulation , NgZone } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import * as ko from "knockout";
import { Html } from "devexpress-reporting/dx-web-document-viewer";
import { environment } from '../../../../../environments/environment';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-laproscopy-fs-report',
  templateUrl: './laproscopy-fs-report.component.html',
  styleUrls: ['./laproscopy-fs-report.component.css']
})
export class LaproscopyFsReportComponent implements AfterViewInit {
  @ViewChild('scripts')
  scripts: ElementRef;

  @ViewChild("control")
  control: ElementRef;

  public patientId : any;
  public laproscopyFsDate : any;

  constructor(public renderer: Renderer2,public ngZone: NgZone , public router : ActivatedRoute) { }

  ngOnInit(){

    this.router.params.subscribe((params)=>{
      this.patientId = +params['id'];
       this.laproscopyFsDate = this.formatDate(new Date(params['date']));
          //  this.fwbInitialDate =  params['date'];

      console.log(this.patientId);
      console.log(this.laproscopyFsDate);



    });
   }
   formatDate(date: Date) {
    return  ( date.getMonth() +1)   + "/" + date.getDate()  + "/" +date.getFullYear();
  }
  ngAfterViewInit() {

      const reportUrl = ko["observable"]("LaproscopyFsReport1"),
          container = this.renderer.createElement("div");
      container.innerHTML = Html;


          var host = `${environment.repotr_url}`;
       //  var host ='http://localhost:57581/'
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
                if(this.laproscopyFsDate)
                e.Parameters.filter(function (p) { return p.Key == "date"; })[0].Value = this.laproscopyFsDate;
            })
          }
      }, this.control.nativeElement);
  }

}