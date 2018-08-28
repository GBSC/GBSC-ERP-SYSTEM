import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
    selector: 'app-document',
    templateUrl: './document.component.html',
    styleUrls: ['./document.component.css']
})
export class DocumentComponent implements OnInit {

    @Output('setdocumentsFormValue') setdocumentsFormValue = new EventEmitter();
    public documentForm: FormGroup;
    constructor(public employee: EmployeeService, public fb: FormBuilder) { }

    async ngOnInit() {

        // this.documentForm = this.fb.group({
        //   AccountTitle: ['', Validators.required],
        //   AccountNumber: ['', Validators.required],
        //   BankName: ['', Validators.required],
        //   BankCode: ['', Validators.required],
        //   BankBranch: ['', Validators.required]
        // }); 

    }
    async addDocuments() {
        let doc = await this.employee.adduserDocuments();
        console.log(doc);
    }

    getDocumentsBankFormValue() {
        this.setdocumentsFormValue.emit(this.documentForm.value);
    }
}
