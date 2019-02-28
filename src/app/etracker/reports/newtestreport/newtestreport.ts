import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AgGridNg2 } from 'ag-grid-angular';

@Component({
  selector: 'app-newtestreport',
  templateUrl: './newtestreport.component.html',
  styleUrls: ['./newtestreport.component.css']
})
export class newtestreport implements OnInit {

  rowData: any;

  @ViewChild('agGrid') agGrid: AgGridNg2;
  title = 'app';
  columnDefs = [
    { headerName: 'Make', field: 'make' },
    { headerName: 'Model', field: 'model' },
    { headerName: 'Price', field: 'price' }
  ];

 
  constructor(private http: HttpClient) {

  }
  ngOnInit() {
    this.rowData = this.http.get('https://api.myjson.com/bins/ly7d1');
  }
}
