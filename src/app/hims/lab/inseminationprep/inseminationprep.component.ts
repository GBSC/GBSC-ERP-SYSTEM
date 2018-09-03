import { Component, OnInit } from '@angular/core';
import { InseminationprepService } from '../services/inseminationprep.service';
import { InseminationPrep } from '../../../models/inseminationprep';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-inseminationprep',
  templateUrl: './inseminationprep.component.html',
  styleUrls: ['./inseminationprep.component.scss']
})
export class InseminationprepComponent implements OnInit {

  private inseminationPrep : InseminationPrep;
  private inseminationPrepForm : FormGroup;

  constructor(private inseminationPrepService : InseminationprepService, private formBuilder : FormBuilder) { 

    this.inseminationPrepForm = formBuilder.group({
      
    })
  }

  ngOnInit() {
  }

  onSubmit(value)
  {
    console.log(value);
  }

}
