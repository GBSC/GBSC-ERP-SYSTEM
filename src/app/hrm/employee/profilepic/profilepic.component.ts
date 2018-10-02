import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Validators } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-profilepic',
    templateUrl: './profilepic.component.html',
    styleUrls: ['./profilepic.component.css']
})
export class ProfilepicComponent implements OnInit {
    @Output('setBankFormValue') setpicFormValue = new EventEmitter();
    public Profilepic: any;
    constructor(public employee: EmployeeService, public fb: FormBuilder,public router: Router, private route: ActivatedRoute ) { }

    public selectedPic;
    public id : any;


    async ngOnInit() {
        this.route.params.subscribe((params) => {
            this.id = +params['id'];
        });
        console.log(this.id);

        // this.Profilepic = this.fb.group({
        //   ProfileImg: ['', Validators.required]
        // }); 
    }

    getProfilepicFormValue() {
        this.setpicFormValue.emit(this.Profilepic.value);
    }

    getProfilePic(e) {
        this.employee.selectedPic = e.target.files[0];
    }


    private forevent: File = null;

    onfileselect(event) {
        this.forevent = <File>event.target.files[0];
        console.log(this.forevent)
    }

    
    onupload() {
        const file = new FormData();
        file.append('file', this.forevent);
 
        console.log(file);
        this.employee.addDocument(file);
        console.log(file);
 
     }
    

    // async addpic() {

    //   let fomrData : any = new FormData();   
    //   fomrData.append('myFile', this.selectedPic, this.selectedPic.name);

    //   let usrdp = await this.employee.adduserProfilepic(FormData);
    //   console.log(usrdp);

    // }
}
