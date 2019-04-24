import { Component, ViewChild, AfterViewInit, Renderer2, Input, ElementRef, Inject, PLATFORM_ID, ViewEncapsulation , NgZone } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import * as ko from "knockout";
import { Html } from "devexpress-reporting/dx-web-document-viewer";
import { environment } from '../../../../../environments/environment';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-medicine-request-report',
  templateUrl: './medicine-request-report.component.html',
  styleUrls: ['./medicine-request-report.component.css']
})
export class MedicineRequestReportComponent implements AfterViewInit {
  @ViewChild('scripts')
  scripts: ElementRef;

  @ViewChild("control")
  control: ElementRef;

  public depertId : any;

   public medicineRequestDate : any;

  constructor(public renderer: Renderer2,public ngZone: NgZone , public router : ActivatedRoute) { }

  ngOnInit(){

    this.router.params.subscribe((params)=>{
        this.depertId = +params['id'];
        console.log( this.depertId)
        this.medicineRequestDate = this.formatDate(new Date(params['date']));
          //  this.fwbInitialDate =  params['date'];
 
      console.log(this.medicineRequestDate);



    });
   }
  
   formatDate(date: Date) {
    return    date.getFullYear()   + "-" + ( date.getMonth() +1) + "-" + date.getDate() ;
  }

  ngAfterViewInit() {

      const reportUrl = ko["observable"]("MedicineRequestReport"),
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
                console.log(e.Parameters)
                if(this.depertId)
                e.Parameters.filter(function (p) { return p.Key == "depertId"; })[0].Value = this.depertId;
                if(this.medicineRequestDate)
                e.Parameters.filter(function (p) { return p.Key == "date"; })[0].Value = this.medicineRequestDate;
            })
          }
      }, this.control.nativeElement);
  }

}