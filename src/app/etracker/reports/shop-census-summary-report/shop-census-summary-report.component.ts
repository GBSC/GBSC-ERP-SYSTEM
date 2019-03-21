import { Component, OnInit, Input ,ViewChild } from '@angular/core';
import { GridApi } from 'ag-grid-community';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../../../../app/core/Services/HRM/Employee/employee.service';

@Component({
  selector: 'app-shop-census-summary-report',
  templateUrl: './shop-census-summary-report.component.html',
  styleUrls: ['./shop-census-summary-report.component.css']
})
export class ShopCensusSummaryReportComponent implements OnInit {
  public Data = [];
  public sumTotalShop = [ ];
  public TShop = 0;


  public sumTotalActiveshop = [ ];
  public totalActiveshop = 0;

  
  public sumTotalCloseshop = [ ];
  public totalCloseshop = 0;

  public ActivePersent = 0;

  public usrid : any
  public frmDate : any
  public toDate : any
  public usr : any;
  constructor(public route: ActivatedRoute  , public employeeServiceObj : EmployeeService) { }

  ngOnInit() {
   



    this.route.params.subscribe((params)=>{
      this.usrid = +params['id'];
      this.frmDate = params['fdate'];
      this.toDate = params['tdate'];
      console.log(this.usrid)
      console.log(this.frmDate)
      console.log(this.toDate)
    })

    console.log(this.usrid)
    console.log(this.frmDate)
    console.log(this.toDate)
    this.employeeServiceObj.GetEmployee(this.usrid).subscribe(res => {
      this.usr = res;
      console.log(this.usr)
    })

    this.Data= JSON.parse( sessionStorage.getItem("previewData"));
    console.log(this.Data)

    this.Data.forEach(element => {
      if(element.shopNameCount){
       this.sumTotalShop.push(element.shopNameCount)
      }
      if(element.shopNameCount){
       this.sumTotalActiveshop.push(element.activeStore)
      }
      if(element.shopNameCount){
       this.sumTotalCloseshop.push(element.close)
      }
     
    });

    for (let index = 0; index < this.sumTotalShop.length; index++) {

      this.TShop += (this.sumTotalShop[index])
    }


    
    for (let index = 0; index < this.sumTotalActiveshop.length; index++) {

      this.totalActiveshop += (this.sumTotalActiveshop[index])
    }

    for (let index = 0; index < this.sumTotalCloseshop.length; index++) {

      this.totalCloseshop += (this.sumTotalCloseshop[index])
    }


     console.log( this.sumTotalShop)
     console.log(this.TShop);
     console.log(this.totalActiveshop);
     console.log(this.totalCloseshop);
    // console.log(this.dayone)

    
    this.ActivePersent = Math.round(  (this.totalActiveshop / (this.totalActiveshop + this.totalCloseshop) )*100)



  }

  btn(){
    var divToPrint=document.getElementById("printTable");
    let newWin= window.open("");
     newWin.document.write(divToPrint.innerHTML);
     newWin.print();
     newWin.close();
  }

}
