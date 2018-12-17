import { Component, OnInit, ViewChild, Renderer2, ElementRef } from '@angular/core';
import * as ko from "knockout";
import { Html } from "devexpress-reporting/dx-web-document-viewer";
import { environment } from '../../../../../environments/environment';

@Component({
    selector: 'app-semen-analysis-outsider-reportviewer',
    templateUrl: './semen-analysis-outsider-reportviewer.component.html',
    styleUrls: ['./semen-analysis-outsider-reportviewer.component.scss']
})
export class SemenAnalysisOutsiderReportviewerComponent {

    @ViewChild('scripts')
    scripts: ElementRef;

    @ViewChild("control")
    control: ElementRef

<<<<<<< HEAD
  constructor(public renderer: Renderer2) { }
=======
    constructor(private renderer: Renderer2) { }
>>>>>>> a21f706163d72ece4ff412f8ddad9475b6bd6ab0

    ngAfterViewInit() {

        const reportUrl = ko["observable"]("SemenAnalysisOutsider"),
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
