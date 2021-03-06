import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { GridApi } from 'ag-grid-community';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../../../../app/core/Services/HRM/Employee/employee.service';
import { element } from '@angular/core/src/render3';


@Component({
  selector: 'app-shop-census-deatil-report',
  templateUrl: './shop-census-deatil-report.component.html',
  styleUrls: ['./shop-census-deatil-report.component.css']
})
export class ShopCensusDeatilReportComponent implements OnInit {
  @Input() gridApi: string;
  public Data: any = [];
  public newData: any = [];

  // @Input("dayone") dayone : string;
  public sumTotalShop = [];
  public TShop = 0;


  public sumTotalActiveshop = [];
  public totalActiveshop = 0;


  public sumTotalCloseshop = [];
  public totalCloseshop = 0;

  public ActivePersent = 0;

  public usrid: any
  public frmDate: any
  public toDate: any
  public deletTopEmptyobj = []

  constructor(public route: ActivatedRoute, public employeeServiceObj: EmployeeService) { }
  public usr: any;
  ngOnInit() {

    this.route.params.subscribe((params) => {
      this.usrid = +params['id'];
      this.frmDate = params['fdate'];
      this.toDate = params['tdate'];
    })

    console.table([{ "userID": this.usrid, "toDate": this.toDate, "gridApi": this.gridApi }]);
    // this.Data = []

    this.employeeServiceObj.GetEmployee(this.usrid).subscribe(res => {
      this.usr = res;
    })

    this.Data = JSON.parse(sessionStorage.getItem("previewData"));

    // this.Data.shift();   

    this.Data.forEach(element => {

      // if (element.TotalShop) {
      //   this.sumTotalShop.push(parseInt(element.TotalShop, 10))
      // }
      // if (element.TotalActive) {
      //   this.sumTotalActiveshop.push(parseInt(element.TotalActive, 10))
      // }
      // if (element.TotalClosed) {
      //   this.sumTotalCloseshop.push(parseInt(element.TotalClosed, 10))
      // }

      if (element.activeStore) {
        this.sumTotalActiveshop.push(element.activeStore)
      }
      if (element.close) {
        this.sumTotalCloseshop.push(element.close)
      }


    });


    console.log(this.sumTotalActiveshop)
    console.log(this.sumTotalCloseshop)


    this.totalActiveshop = this.sumTotalActiveshop.reduce((prev, current) => prev + current, 0);

    // this.totalActiveshop = this.sumTotalActiveshop.reduce(this.getSum);
    console.log(this.totalActiveshop)


    this.totalCloseshop = this.sumTotalCloseshop.reduce((prev, current) => prev + current, 0);
    console.log(this.totalCloseshop)
    this.TShop = this.totalActiveshop + this.totalCloseshop;
    console.log(this.TShop)
    this.ActivePersent = Math.round((this.totalActiveshop / (this.totalActiveshop + this.totalCloseshop)) * 100)
    console.log(this.ActivePersent)

    this.Data.find(e => {
      console.log(e)
      if (e.TotalShop) {
        this.deletTopEmptyobj.push(e.TotalShop);
      }
    })
    console.log(this.Data)
    if (this.deletTopEmptyobj.length) {
      this.Data.shift();
    }
    else {
      this.Data.pop();
    }
    console.log(this.Data)

  }




  getSum(total, num) {
    return total + num;
  }


  btn() {
    var divToPrint = document.getElementById("printTable");
    let newWin = window.open("");
    newWin.document.write(divToPrint.innerHTML);
    newWin.print();
    newWin.close();
  }



  export() {
    var CsvString = "";
    this.Data.forEach(function (RowItem, RowIndex) {
      RowItem.forEach(function (ColItem, ColIndex) {
        CsvString += ColItem + ',';
      });
      CsvString += "\r\n";
    });
    CsvString = "data:application/csv," + encodeURIComponent(CsvString);
    var x = document.createElement("A");
    x.setAttribute("href", CsvString);
    x.setAttribute("download", "somedata.csv");
    document.body.appendChild(x);
    x.click();
  }
  print(gridContainer) {
    gridContainer.print();
  }








}
