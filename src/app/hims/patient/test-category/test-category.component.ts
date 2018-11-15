import { Component, OnInit } from '@angular/core';
import { PatientService } from '../../../core';
import { TestCategory } from '../../../core/Models/HIMS/TestCategory';

@Component({
  selector: 'app-test-category',
  templateUrl: './test-category.component.html',
  styleUrls: ['./test-category.component.scss']
})
export class TestCategoryComponent implements OnInit {
  
  private TestCategories : TestCategory[];
  private UpdatedModel : TestCategory;

  constructor(private PatientService : PatientService) {

  }

  ngOnInit() {
    this.PatientService.getTestCategories().subscribe((res : TestCategory[]) => {
      this.TestCategories = res;
    });
  }

  AddTestCategory(value) {
    this.PatientService.addTestCategory(value.data).subscribe((res : any) => {
		  this.PatientService.getTestCategories().subscribe((res : TestCategory[]) => {
			  this.TestCategories = res;
		  });
	  });
  }

  UpdateModel(value) {
    this.UpdatedModel = {...value.oldData, ...value.newData};
  }

  UpdateTestCategory() {
    this.PatientService.updateTestCategory(this.UpdatedModel).subscribe(res => {
      // console.log(res);
    });
  }

  DeleteTestCategory(value) {
    this.PatientService.deleteTestCategory(value.data.testCategoryId).subscribe(res => {
      // console.log(res);
    });
  }

}
