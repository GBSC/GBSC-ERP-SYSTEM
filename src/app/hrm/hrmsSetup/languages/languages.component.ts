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

        this.language = await this.dataService.getAllLanguages();
    }

    // If you don't need a filter or a pagination this can be simplified, you just use code from else block

    async addLanguage(value) {
       await this.dataService.addLanguage(value.data);
        this.language = await this.dataService.getAllLanguages();
    }

    async EditLanguage(value) {
        await this.dataService.updateLanguage(value);
    }

    async deleteLanguage(value) {
       await this.dataService.DeleteLanguage(value.key);

    }

}