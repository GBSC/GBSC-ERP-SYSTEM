import { Component, ViewChild, AfterViewInit, Renderer2, Input, ElementRef, Inject, PLATFORM_ID, ViewEncapsulation } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import * as ko from "knockout";
import { Html } from "devexpress-reporting/dx-web-document-viewer"; 
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-leavebalance',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './leavebalance.component.html',
  // styleUrls: ['./leavebalance.component.scss']
})
export class LeavebalanceComponent implements AfterViewInit {
  @ViewChild('scripts')
  scripts: ElementRef;

  @ViewChild("control")
  control: ElementRef

  constructor(public renderer: Renderer2) { }

  ngAfterViewInit() {

      const reportUrl = ko["observable"]("LeaveBalance"),
          container = this.renderer.createElement("div");
      container.innerHTML = Html;
      var host = `${environment.repotr_url}`;
      this.renderer.appendChild(this.scripts.nativeElement, container);
      ko.applyBindings({
          reportUrl,
          requestOptions: {
              host,
              invokeAction: 'WebDocumentViewer/Invoke'
          }
      }, this.control.nativeElement);
  }

}