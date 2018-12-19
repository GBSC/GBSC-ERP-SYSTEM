import { Component, ViewChild, AfterViewInit, Renderer2, Input, ElementRef, Inject, PLATFORM_ID, ViewEncapsulation } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import * as ko from "knockout";
import { Html } from "devexpress-reporting/dx-web-document-viewer";
import { environment } from '../../../../environments/environment';

@Component({
    selector: 'app-list-of-joinners',
    encapsulation: ViewEncapsulation.None,
    templateUrl: './list-of-joinners.component.html',
    // styleUrls: ['./list-of-joinners.component.scss']
})
export class ListOfJoinnersComponent implements AfterViewInit {
    @ViewChild('scripts')
    scripts: ElementRef;

    @ViewChild("control")
    control: ElementRef

    constructor(private renderer: Renderer2) { }

    ngAfterViewInit() {

        const reportUrl = ko["observable"]("ListofJoiners"),
            container = this.renderer.createElement("div");
        container.innerHTML = Html;
        var host =`${environment.repotr_url}`;
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