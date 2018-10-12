import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { SetupService } from '../../../core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-languages',
    templateUrl: './languages.component.html',
    styleUrls: ['./languages.component.css']
})
export class LanguageComponent implements OnInit {


    public language: any;
    constructor(public httpClient: HttpClient,
        public dataService: SetupService) { }



    async ngOnInit() {

        await this.dataService.getAllLanguages();
        this.language = this.dataService.language;

        // this.dataService.getAllLanguages().subscribe((data)=>this.languages=data);
    } S

    // If you don't need a filter or a pagination this can be simplified, you just use code from else block

    addLanguage(lang) {
        this.dataService.addLanguage(lang.data);
    }

    EditLanguage(lng) {
        this.dataService.updateLanguage(lng);
    }

    deleteLanguage(lnguge) {
        this.dataService.DeleteLanguage(lnguge.key);

    }

}