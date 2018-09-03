
import { BehaviorSubject } from 'rxjs';
import { Component, OnInit , Inject} from '@angular/core';
import {FormGroup,FormControl,FormBuilder, Validators} from '@angular/forms';
import {FormsModule } from '@angular/forms'; 


@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {

public currency : any;


  ngOnInit() {

    this.currency = [
      {
        id : "1", 
        title : "Abc",
        roundOf:"xyz",
        isBase :"etc",
        active:"yes"
      }
    ]
  }


}
