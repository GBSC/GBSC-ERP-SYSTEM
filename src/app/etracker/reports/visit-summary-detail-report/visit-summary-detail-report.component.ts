import { Component, OnInit, Input ,ViewChild } from '@angular/core';
import { GridApi } from 'ag-grid-community';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../../../../app/core/Services/HRM/Employee/employee.service';
import { element } from '@angular/core/src/render3';

@Component({
  selector: 'app-visit-summary-detail-report',
  templateUrl: './visit-summary-detail-report.component.html',
  styleUrls: ['./visit-summary-detail-report.component.css']
})
export class VisitSummaryDetailReportComponent implements OnInit {
  @Input() gridApi: string;
  public Data = [];
// @Input("dayone") dayone : string;
  public pjpShop = [ ];
  public tPjpShop = 0;
   

  public pjpvited = [ ];
  public tPjpvited = 0;
 
  public outOfPjpVisited = [ ];
  public tOutOfPjpVisited = 0;

  public visitedShop = [ ];
  public tVisitedShop = 0;

  public productive = [ ];
  public tProductive = 0;
  
  public notProductive = [ ];
  public tNotProductive = 0;

  

    
  public notVisited = [ ];
  public tNotVisited = 0;

  
  
  public visitPerformancePersent = [ ];
  public tVisitPerformancePersent = 0;

  public productivityPersent = [ ];
  public tProductivityPersent = 0;

  public usrid : any
  public frmDate : any
  public toDate : any
  constructor( public route: ActivatedRoute  , public employeeServiceObj : EmployeeService) { }
  public usr : any;

  ngOnInit() {
    this.route.params.subscribe((params)=>{
      this.usrid = +params['id'];
      this.frmDate = params['fdate'];
      this.toDate = params['tdate'];
      console.log(this.usrid)
      console.log(this.frmDate)
      console.log(this.toDate)
    })

    this.employeeServiceObj.GetEmployee(this.usrid).subscribe(res => {
      this.usr = res;
      console.log(this.usr)
    })


    this.Data= JSON.parse( sessionStorage.getItem("previewData"));
    console.log(this.Data)

    this.Data.forEach(element=> {

      if(element.pjpShops){
        this.pjpShop.push(parseInt( element.pjpShops , 10))
      }
        if(element.pjpvited){
        this.pjpvited.push(parseInt( element.pjpvited , 10))
      }  if(element.outOfPjpVisited){
        this.outOfPjpVisited.push(parseInt( element.outOfPjpVisited , 10))
      } if(element.visitedShop){
        this.visitedShop.push(parseInt( element.visitedShop , 10))
      } if(element.productive){
        this.productive.push(parseInt( element.productive , 10))
      } if(element.notProductive){
        this.notProductive.push(parseInt( element.notProductive , 10))
      } if(element.notVisited){
        this.notVisited.push(parseInt( element.notVisited , 10))
      } if(element.visitPerformancePersent){
        this.visitPerformancePersent.push(parseInt( element.visitPerformancePersent , 10))
      } if(element.productivityPersent){
        this.productivityPersent.push(parseInt( element.productivityPersent , 10))
      }
    })

    for (let index = 0; index < this.pjpShop.length; index++) {
      this.tPjpShop += (this.pjpShop[index])
    }
    for (let index = 0; index < this.pjpvited.length; index++) {
      this.tPjpvited += (this.pjpvited[index])
    }    
    for (let index = 0; index < this.outOfPjpVisited.length; index++) {
      this.tOutOfPjpVisited += (this.outOfPjpVisited[index])
    }    
    for (let index = 0; index < this.visitedShop.length; index++) {
      this.tVisitedShop += (this.visitedShop[index])
    }    
    for (let index = 0; index < this.productive.length; index++) {
      this.tProductive += (this.productive[index])
    }    
    for (let index = 0; index < this.notProductive.length; index++) {
      this.tNotProductive += (this.notProductive[index])
    }    
    for (let index = 0; index < this.notVisited.length; index++) {
      this.tNotVisited += (this.notVisited[index])
    }    
    for (let index = 0; index < this.visitPerformancePersent.length; index++) {
      this.tVisitPerformancePersent += (this.visitPerformancePersent[index])
    }    
    for (let index = 0; index < this.productivityPersent.length; index++) {
      this.tProductivityPersent += (this.productivityPersent[index])
    }    

    console.log('PJP SHOP',this.tPjpShop);

    
  }

}
