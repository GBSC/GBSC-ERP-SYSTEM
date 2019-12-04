import { Component, ViewChild, AfterViewInit, Renderer2, Input, ElementRef, Inject, PLATFORM_ID, ViewEncapsulation } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import * as ko from "knockout";
import { Html } from "devexpress-reporting/dx-web-document-viewer";
import { environment } from '../../../../../environments/environment';
import { PatientService } from '../../../../core';


@Component({
    selector: 'app-appointment-sheet',
    templateUrl: './appointment-sheet.component.html',
    styleUrls: ['./appointment-sheet.component.scss']
})
export class AppointmentSheetComponent implements AfterViewInit {
    @ViewChild('scripts')
    scripts: ElementRef;


    public consultant: any;
    
    @ViewChild("control")
    control: ElementRef

    constructor(public renderer: Renderer2 , public PatientServiceobj: PatientService) { }


    async  ngOnInit() {
        
        await this.PatientServiceobj.getConsultant();
        this.consultant = this.PatientServiceobj.consultant;
        console.log(this.consultant);

    }

    ngAfterViewInit() {

        const reportUrl = ko["observable"]("AppointmenSheet"),
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
    formatDate(date: Date) {
        return  (date.getMonth() + 1) + "/" +   date.getDate() + "/" +   date.getFullYear() ;
    }
    itemsend(cid,type,from,to) {
         console.log(cid.value)
         console.log(type.value)
 
         console.log(this.formatDate(new Date(from.value)))
      
         console.log(this.formatDate(new Date(to.value)))
     }

}