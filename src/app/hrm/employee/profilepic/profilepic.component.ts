import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Validators } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';
import { FormBuilder } from '@angular/forms';

@Component({
    selector: 'app-profilepic',
    templateUrl: './profilepic.component.html',
    styleUrls: ['./profilepic.component.css']
})
export class ProfilepicComponent implements OnInit {
    @Output('setBankFormValue') setpicFormValue = new EventEmitter();
    public Profilepic: any;
    constructor(public employee: EmployeeService, public fb: FormBuilder, ) { }

    public selectedPic;

    async ngOnInit() {
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

    // async addpic() {

    //   let fomrData : any = new FormData();   
    //   fomrData.append('myFile', this.selectedPic, this.selectedPic.name);

    //   let usrdp = await this.employee.adduserProfilepic(FormData);
    //   console.log(usrdp);

    // }
}
