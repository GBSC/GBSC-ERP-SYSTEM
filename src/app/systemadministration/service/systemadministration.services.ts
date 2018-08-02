import { Injectable ,OnInit} from '@angular/core';
 import { HttpClient, HttpErrorResponse } from '@angular/common/http';
 import { Http, Response } from '@angular/http';
 import 'rxjs/add/operator/map';



export class Product {
  id: string;
  text: string;
  expanded?: boolean;
  selected?: boolean;
  items?: Product[];
}

var products: Product[] = [{
  id: "1",
  text: "Staff",
  items: [{
      id: "1_1",
      text: "Employees"
  }, {
      id: "1_2",
      text: "Import Employees"
  }, {
      id: "1_3",
      text: "Staff Directory"
  }]
}, {
  id: "2",
  text: "Core HR",
  items: [{
      id: "2_1",
      text: "Awards"
  }, {
      id: "2_2",
      text: "Transfers"
  }, {
      id: "2_3",
      text: "Resignations"
  }, {
      id: "2_4",
      text: "Travels"
  }, {
      id: "2_5",
      text: "Promotions"
  }, {
      id: "2_6",
      text: "Complaints"
  }, {
      id: "2_7",
      text: "Warnings"
  }, {
      id: "2_8",
      text: "Terminations"
  }, {
      id: "2_9",
      text: "Employees Last Login"
  }, {
      id: "2_10",
      text: "Employees Exit"
  }]
}, {
  id: "3",
  text: "Organization",
  items: [{
      id: "3_1",
      text: "Announcements"
  }, {
      id: "3_2",
      text: "Company Policy"
  },{
      id: "3_3",
      text: "Organization Chart"
  },{
      id: "3_4",
      text: "Department"
  }, {
      id: "3_5",
      text: "Designation"
  },{
      id: "3_6",
      text: "Company"
  },{
      id: "3_7",
      text: "Location"
  }, {
      id: "3_8",
      text: "Office Shifts"
  },{
      id: "3_9",
      text: "Holidayss"
  },{
      id: "3_10",
      text: "Expense"
  }]
},{
  id: "4",
  text: "Assets",
  items: [{
      id: "4_1",
      text: "Assets"
  }, {
      id: "4_2",
      text: "Category"
  }]
},];
 
@Injectable()
export class SystemAdministrationService {


     
 
  constructor(private http: HttpClient) {
  }

 
  


  getProducts(): Product[] {
    return products;
}












}