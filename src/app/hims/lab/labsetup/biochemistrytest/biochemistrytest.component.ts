import { Component, OnInit } from '@angular/core';
import {BioChemistryService} from '../../../lab/services/bio-chemistry.service';
import {BioChemistryTest} from '../../../../models/biochemistrytest'

@Component({
  selector: 'app-biochemistrytest',
  templateUrl: './biochemistrytest.component.html',
  styleUrls: ['./biochemistrytest.component.scss']
})
export class BiochemistrytestComponent implements OnInit {

  private tests : BioChemistryTest;

  constructor(private bioChemistryServie : BioChemistryService) { 

  }

  ngOnInit() {

    this.bioChemistryServie.getTests().subscribe(tests=> this.tests = tests);

  }

  addNewTest(test){

    this.bioChemistryServie.addTest(test.data);

  }

}
