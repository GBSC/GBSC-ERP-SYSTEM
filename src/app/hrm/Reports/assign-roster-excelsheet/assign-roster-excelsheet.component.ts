import { Component, ViewChild, AfterViewInit, Renderer2, Input, ElementRef, Inject, PLATFORM_ID, ViewEncapsulation ,NgZone  } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import * as ko from "knockout";
import { Html } from "devexpress-reporting/dx-web-document-viewer";
import { environment } from '../../../../environments/environment';
import { ActivatedRoute } from '@angular/router';
 
@Component({
  selector: 'app-assign-roster-excelsheet',
  templateUrl: './assign-roster-excelsheet.component.html',
  styleUrls: ['./assign-roster-excelsheet.component.css']
})
export class AssignRosterExcelsheetComponent implements AfterViewInit {


  public assignRosterId : any;

  @ViewChild('scripts')
  scripts: ElementRef;

  @ViewChild("control")
  control: ElementRef

  constructor(public renderer: Renderer2,public ngZone: NgZone,public route: ActivatedRoute ) { }
  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.assignRosterId = +params['id'];
      console.log(this.assignRosterId);
    });
  }

  ngAfterViewInit() {

      const reportUrl = ko["observable"]("AssignRosterExcelSheet"),
          container = this.renderer.createElement("div");
      container.innerHTML = Html;
      //var host = `${environment.repotr_url}`;
      var host = 'http://localhost:57581/'
      this.renderer.appendChild(this.scripts.nativeElement, container);
      ko.applyBindings({
          reportUrl,
          requestOptions: {
              host,
              invokeAction: 'WebDocumentViewer/Invoke'
          },
          callbacks: {
            ParametersSubmitted: (s, e) => this.ngZone.run(() => {
              if(this.assignRosterId)
              e.Parameters.filter(function (p) { return p.Key == "asignrosterId"; })[0].Value = this.assignRosterId;
            })
          }
      }, this.control.nativeElement);
  }

}