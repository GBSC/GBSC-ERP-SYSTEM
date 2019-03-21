import { Component, OnInit, Input ,ViewChild } from '@angular/core';
import { GridApi } from 'ag-grid-community';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../../../../app/core/Services/HRM/Employee/employee.service';


@Component({
  selector: 'app-shop-census-deatil-report',
  templateUrl: './shop-census-deatil-report.component.html',
  styleUrls: ['./shop-census-deatil-report.component.css']
})
export class ShopCensusDeatilReportComponent implements OnInit {
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

    
    this.ActivePersent = (this.totalActiveshop / (this.totalActiveshop + this.totalCloseshop) )*100
  }
  btn(){
    var divToPrint=document.getElementById("printTable");
    let newWin= window.open("");
     newWin.document.write(divToPrint.innerHTML);
     newWin.print();
     newWin.close();
  }
  export(){
    var CsvString = "";
      this.Data.forEach(function(RowItem, RowIndex) {
      RowItem.forEach(function(ColItem, ColIndex) {
        CsvString += ColItem + ',';
      });
      CsvString += "\r\n";
    });
    CsvString = "data:application/csv," + encodeURIComponent(CsvString);
    var x = document.createElement("A");
    x.setAttribute("href", CsvString );
    x.setAttribute("download","somedata.csv");
    document.body.appendChild(x);
    x.click();
  }
  print(gridContainer){
    gridContainer.print(); 
  }








}
