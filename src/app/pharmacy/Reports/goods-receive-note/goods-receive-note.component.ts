import { Component, ViewChild, AfterViewInit, Renderer2, ElementRef} from '@angular/core';
import * as ko from "knockout";
import { Html } from "devexpress-reporting/dx-web-document-viewer";
import { environment } from '../../../../environments/environment'

@Component({
  selector: 'app-goods-receive-note',
  templateUrl: './goods-receive-note.component.html',
  styleUrls: ['./goods-receive-note.component.css']
})
export class GoodsReceiveNoteComponent implements AfterViewInit {
  @ViewChild('scripts')
  scripts: ElementRef;

  @ViewChild("control")
  control: ElementRef;

  constructor(public renderer: Renderer2 ) { }

  ngAfterViewInit() {

      const reportUrl = ko["observable"]("GoodsReceiveNote"),
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