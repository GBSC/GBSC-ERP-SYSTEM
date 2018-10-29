import { Component, OnInit } from '@angular/core';
import { TestType } from '../../../core/Models/HIMS/TestType';
import { PatientService } from '../../../core';

@Component({
  selector: 'app-test-type',
  templateUrl: './test-type.component.html',
  styleUrls: ['./test-type.component.scss']
})
export class TestTypeComponent implements OnInit {
  
  private TestTypes : TestType;

  constructor(private PatientService : PatientService) {

  }

  ngOnInit() {
    this.PatientService.getTestTypes().subscribe((res : TestType) => {
      this.TestTypes = res;
    });
  }

  AddTestType(value) {
    console.log(value);
    this.PatientService.addTestTypeAsync(value.data);
    this.PatientService.getTestTypes().subscribe((res : TestType) => {
      this.TestTypes = res;
    });
  }

  UpdateTestType(value) {
    console.log(value);
    this.PatientService.updateTestType(value.key).subscribe(res => {
      console.log(res);
    });
  }

  DeleteTestType(value) {
    console.log(value);
    this.PatientService.deleteTestType(value.key.testTypeId).subscribe(res => {
      console.log(res);
    });
  }

}
