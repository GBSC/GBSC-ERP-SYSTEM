import { Component, ViewChild, AfterViewInit, Renderer2, Input, ElementRef, Inject, PLATFORM_ID, ViewEncapsulation } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import * as ko from "knockout";
import { Html } from "devexpress-reporting/dx-web-document-viewer";

@Component({
  selector: 'app-new-patient-sheet-blood-karachi',
  templateUrl: './new-patient-sheet-blood-karachi.component.html',
  styleUrls: ['./new-patient-sheet-blood-karachi.component.scss']
})
export class NewPatientSheetBloodKarachiComponent implements AfterViewInit {
  @ViewChild('scripts')
  scripts: ElementRef;

  @ViewChild("control")
  control: ElementRef

  constructor(private renderer: Renderer2) { }

  ngAfterViewInit() {

      const reportUrl = ko["observable"]("NewPatientSheetBloodKarachi"),
          container = this.renderer.createElement("div");
      container.innerHTML = Html;
      var host = "http://localhost:57581/";
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