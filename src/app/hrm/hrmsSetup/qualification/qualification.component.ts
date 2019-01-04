import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { SetupService } from '../../../core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-qualification',
    templateUrl: './qualification.component.html',
    styleUrls: ['./qualification.component.css']
})
export class QualificationComponent implements OnInit {

    public qualification: any;

    constructor(public httpClient: HttpClient,
        public dataService: SetupService) { }

    async ngOnInit() {
        this.qualification = await this.dataService.getAllqualifications();
    }


    addNewqualification(qfc) {
        this.dataService.addQualification(qfc.data);
        this.qualification = this.dataService.getAllqualifications();

    }

    EditNewqualification(qfction) {
        this.dataService.updateQualification(qfction);
    }

    deletequalification(qualificatin) {

        this.dataService.DeleteQualification(qualificatin.key);
    }


}