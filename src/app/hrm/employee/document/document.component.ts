import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../../../core';



@Component({
    selector: 'app-document',
    templateUrl: './document.component.html',
    styleUrls: ['./document.component.css']
})
export class DocumentComponent implements OnInit {

    @Input('employeeId') id: number;

    public documentForm: FormGroup;

    constructor(public employee: EmployeeService, public fb: FormBuilder) { }

    async ngOnInit() {

    }
    async addDocuments() { 
    }


    private forimg: File[] = [];
    public allDocs: File[] = [];

    fileselect(event) {
        this.forimg = event.target.files;
    }


    async onupload() {


        const y = new FormData();
        let fileCount: number = this.forimg.length;
        if (fileCount > 0) {
            for (let i = 0; i < fileCount; i++) {
                y.append('models', this.forimg[i]);
            }

        } 
    }

    async  deleteUserDocument(value) {
        let x = await this.employee.deleteUserDocument(value.key.userDocumentId)
    }

}
