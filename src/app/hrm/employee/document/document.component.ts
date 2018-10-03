import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../../../core';



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
        await this.employee.GetDocumentsByUserId();
        let UserDocuments = this.employee.DocumentsByUserId;

    }
    async addDocuments() {
        let doc = await this.employee.adduserDocuments();
        console.log(doc);
    }

    getDocumentsBankFormValue() {
        this.setdocumentsFormValue.emit(this.documentForm.value);
    }
    
    private  forimg: File[]   = [];
    public allDocs: File[] = [];

    fileselect(event) {
        console.log(event);
        this.forimg = event.target.files;
        console.log(this.forimg);
    }


   async onupload() {


            const y = new FormData();
            let fileCount: number = this.forimg.length;
            if (fileCount > 0) { 
                for (let i = 0; i < fileCount; i++) {
                    y.append('models', this.forimg[i]);
                }
                
            }
            await this.employee.GetDocumentsByUserId();
             this.employee.DocumentsByUserId;
            await  this.employee.addDocuments(y);
            await this.employee.GetDocumentsByUserId();
             this.employee.DocumentsByUserId;
    }

  async  deleteUserDocument(value){
      console.log(value);
    let x = await this.employee.deleteUserDocument(value.key.userDocumentId)
    }
    
}
