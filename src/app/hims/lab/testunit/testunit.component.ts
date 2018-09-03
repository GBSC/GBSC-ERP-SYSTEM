import { Component, OnInit } from '@angular/core';
import { BioChemistryService } from '../services/bio-chemistry.service';
import { TestUnit } from '../../../models/testunit';

@Component({
  selector: 'app-testunit',
  templateUrl: './testunit.component.html',
  styleUrls: ['./testunit.component.scss']
})
export class TestunitComponent implements OnInit {

  private units : TestUnit;

  constructor(private bioChemistryService : BioChemistryService) { }

  ngOnInit() {

    this.bioChemistryService.getUnits().subscribe(units=> this.units = units);

  }


  addNewTest(test){

    this.bioChemistryService.addUnit(test.data);

  }

}
