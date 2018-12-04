import { Component, OnInit, ViewChild, Renderer2, ElementRef } from '@angular/core';
import * as ko from "knockout";
import { Html } from "devexpress-reporting/dx-web-document-viewer";

@Component({
  selector: 'app-biochemistry-ontreatment-reportviewer',
  templateUrl: './biochemistry-ontreatment-reportviewer.component.html',
  styleUrls: ['./biochemistry-ontreatment-reportviewer.component.scss']
})
export class BiochemistryOntreatmentReportviewerComponent {

  @ViewChild('scripts')
  scripts: ElementRef;

  @ViewChild("control")
  control: ElementRef

  constructor(private renderer: Renderer2) { }

  ngAfterViewInit() {

      const reportUrl = ko["observable"]("BiochemistryOnTreatment"),
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
