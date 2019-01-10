import { Component, ViewChild, AfterViewInit, Renderer2, Input, ElementRef, Inject, PLATFORM_ID, ViewEncapsulation  ,NgZone } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import * as ko from "knockout";
import { Html } from "devexpress-reporting/dx-web-document-viewer";
import { environment } from '../../../../environments/environment';


@Component({
  selector: 'app-dailyattendanceandleave',
  templateUrl: './dailyattendanceandleave.component.html',
  styleUrls: ['./dailyattendanceandleave.component.css']
})
export class DailyattendanceandleaveComponent implements AfterViewInit {
  @ViewChild('scripts')
  scripts: ElementRef;

  @ViewChild("control")
  control: ElementRef

  constructor(public renderer: Renderer2,public ngZone: NgZone) { }
  ngOnInit() {

  }


  ngAfterViewInit() {

      const reportUrl = ko["observable"]("dailyattendanceandleave"),
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
            })
          }
      }, this.control.nativeElement);
  }

}