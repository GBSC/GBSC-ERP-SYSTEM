import { Component, OnInit, Input ,ViewChild } from '@angular/core';
import { GridApi } from 'ag-grid-community';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../../../../app/core/Services/HRM/Employee/employee.service';

@Component({
  selector: 'app-shop-status-deail-report',
  templateUrl: './shop-status-deail-report.component.html',
  styleUrls: ['./shop-status-deail-report.component.css']
})
export class ShopStatusDeailReportComponent implements OnInit {
  @Input() gridApi: string;
  public Data = [];
// @Input("dayone") dayone : string;
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

    console.log(this.usrid)
    console.log(this.frmDate)
    console.log(this.toDate)
    console.log(this.gridApi)
    // this.Data = []
    
    this.employeeServiceObj.GetEmployee(this.usrid).subscribe(res => {
      this.usr = res;
      console.log(this.usr)
    })

    this.Data= JSON.parse( sessionStorage.getItem("previewData"));
    console.log(this.Data)
    this.Data.shift();


     this.Data.forEach(element => {
       if(element.TotalShop){
        this.sumTotalShop.push(parseInt( element.TotalShop , 10))
       }
       if(element.TotalActive){
        this.sumTotalActiveshop.push( parseInt( element.TotalActive,10))
       }
       if(element.TotalClosed){
        this.sumTotalCloseshop.push( parseInt( element.TotalClosed,10))
       }
      
     });

    //  for (let index = 0; index < this.sumTotalShop.length; index++) {

    //   this.TShop += (this.sumTotalShop[index])
    // }


    
    // for (let index = 0; index < this.sumTotalActiveshop.length; index++) {

    //   this.totalActiveshop += (this.sumTotalActiveshop[index])
    // }

    // for (let index = 0; index < this.sumTotalCloseshop.length; index++) {

    //   this.totalCloseshop += (this.sumTotalCloseshop[index])
    // }
    this.TShop = this.sumTotalShop.reduce(this.getSum);

    this.totalActiveshop = this.sumTotalActiveshop.reduce(this.getSum);

    this.totalCloseshop = this.sumTotalCloseshop.reduce(this.getSum);

     console.log( this.sumTotalShop)
     console.log(this.TShop);
     console.log(this.totalActiveshop);
     console.log(this.totalCloseshop);
    // console.log(this.dayone)

    
    this.ActivePersent = Math.round(  (this.totalActiveshop / (this.totalActiveshop + this.totalCloseshop) )*100)
  }
  getSum(total, num) {
    return total + num;
  }


  btn(){
    var divToPrint=document.getElementById("printTable");
    let newWin= window.open("");
     newWin.document.write(divToPrint.innerHTML);
     newWin.print();
     newWin.close();
  }

}
