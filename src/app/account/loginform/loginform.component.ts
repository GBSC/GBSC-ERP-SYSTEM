import { Inject, Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm, FormBuilder } from '@angular/forms';
import { Loginform } from '../../models/loginform';

import { AccountService } from '../service.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-loginform',
    templateUrl: './loginform.component.html',
    styleUrls: ['./loginform.component.css'],


})
export class LoginformComponent implements OnInit {


    loginForm: FormGroup;
    public myLoginForm = new Loginform();

    constructor(private formBuilder: FormBuilder, private accountservice: AccountService, private router: Router, private route: ActivatedRoute) {

        this.loginForm = formBuilder.group({
            'Username': ['rootadmin', Validators.required],
            'Password': ['Pass@2018', Validators.required]
        });
    }

    ngOnInit() {

    }

    async login() {
        this.accountservice.login(this.loginForm.value);
    }

    revert() {
        //    this.route.url.subscribe(d => console.log(d))
        console.log(this.route.snapshot.url);
    }


}

