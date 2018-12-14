import { Component, OnInit, ViewChild, Renderer2, ElementRef } from '@angular/core';
import * as ko from "knockout";
import { Html } from "devexpress-reporting/dx-web-document-viewer";
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-biochemistry-outsider-reportviewer',
  templateUrl: './biochemistry-outsider-reportviewer.component.html',
  styleUrls: ['./biochemistry-outsider-reportviewer.component.scss']
})
export class BiochemistryOutsiderReportviewerComponent{

  @ViewChild('scripts')
  scripts: ElementRef;

  @ViewChild("control")
  control: ElementRef

  constructor(private renderer: Renderer2) { }

  ngAfterViewInit() {

      const reportUrl = ko["observable"]("BiochemistryOutsider"),
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
