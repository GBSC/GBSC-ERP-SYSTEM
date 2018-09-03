import { Component, OnInit } from '@angular/core';
import { InseminationprepService } from '../services/inseminationprep.service';
import { InseminationPrep } from '../../../models/inseminationprep';

@Component({
  selector: 'app-inseminationprep',
  templateUrl: './inseminationprep.component.html',
  styleUrls: ['./inseminationprep.component.scss']
})
export class InseminationprepComponent implements OnInit {

  private inseminationPrep : InseminationPrep;

  constructor(private inseminationPrepService : InseminationprepService) { }

  ngOnInit() {
  }

  onSubmit(value)
  {
    console.log(value);
  }

}
