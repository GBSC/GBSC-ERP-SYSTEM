import { Component, OnInit } from '@angular/core';
import { TestTypeComponent } from '../test-type/test-type.component';
import { TestType } from '../../../core/Models/HIMS/TestType';

@Component({
  selector: 'app-test-category',
  templateUrl: './test-category.component.html',
  styleUrls: ['./test-category.component.scss']
})
export class TestCategoryComponent implements OnInit {
  
  private TestTypes : TestType;

  constructor() { }

  ngOnInit() {
  }

}
