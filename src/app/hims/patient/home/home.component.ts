import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, NgForm } from '@angular/forms';

import { Loginform } from '../../../models/loginform';


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {




    public currentUser = new Loginform();

    constructor() {
    }


    ngOnInit() {

        // this.username= localStorage.getItem("loginCred");
        //  return JSON.parse(localStorage.getItem('loginCred'));
        this.currentUser = JSON.parse(localStorage.getItem('loginCred'));
        console.log(this.currentUser.Username);

    }

}
