import { Inject, Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators, NgForm,  FormBuilder} from '@angular/forms';
import { Loginform } from '../../models/loginform';

import { AccountService } from '../service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css'],


})
export class LoginformComponent implements OnInit {


       loginForm   : FormGroup;
public myLoginForm = new Loginform();

  constructor( private formBuilder: FormBuilder,private accountservice: AccountService, private router: Router) {

    this.loginForm = formBuilder.group({
      'Username' : ['admin', Validators.required],
      'Password' : ['Pass@2018', Validators.required]
    });
  }

  ngOnInit() {


    
  }

  async onSubmit(value) {
    localStorage.setItem('loginCred', JSON.stringify(value));
    console.log(value);
    let res = await this.accountservice.login(this.loginForm.value);
    let { auth_token, expires_in, id } = res.response; 
    localStorage.setItem('token', auth_token);
    this.router.navigate(['/patient/home']);


  }

  // onSubmit(value) {
  //   localStorage.setItem('loginCred', JSON.stringify(value));
  //   console.log(value);
  // }

revert() {
  this.loginForm.reset();
}


}

