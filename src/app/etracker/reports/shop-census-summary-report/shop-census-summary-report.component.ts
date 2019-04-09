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

  public sumTotalPersent = [ ];
  public ActivePersent = 0;

  public usrid : any
  public frmDate : any
  public toDate : any
  public usr : any;
  public myData2 =[];
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
       
    console.log( this.Data[0].secGroup) 
    let mainData =              this.Data[0].secGroup
    console.log('Main 1')
    console.log( mainData)
    
    this.myData2 =   this.Data.filter(t=>t.secGroup == mainData)
    console.log('Main 2')
    console.log( this.myData2)

    this.myData2.forEach(element => {
      console.log(element)
      if(element.mainTotalShop){
       this.sumTotalShop.push(element.mainTotalShop)
      }
      if(element.mainTotalActive){
       this.sumTotalActiveshop.push(element.mainTotalActive)
      }
      if(element.mainTotalClosed){
       this.sumTotalCloseshop.push(element.mainTotalClosed)
      }
      if(element.mainTotalPersent){
        this.sumTotalPersent.push(element.mainTotalPersent)
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

    // for (let index = 0; index < this.sumTotalPersent.length; index++) {

    //   this.ActivePersent += (this.sumTotalPersent[index])
    // }


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
