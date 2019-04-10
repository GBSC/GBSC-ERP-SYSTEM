import { Component, OnInit, Input, ViewChild } from '@angular/core';
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

    this.Data.shift();

    this.Data.forEach(element => {
      if (element.TotalShop) {
        this.sumTotalShop.push(parseInt(element.TotalShop, 10))
      }
      if (element.TotalActive) {
        this.sumTotalActiveshop.push(parseInt(element.TotalActive, 10))
      }
      if (element.TotalClosed) {
        this.sumTotalCloseshop.push(parseInt(element.TotalClosed, 10))
      }

    });

    this.TShop = this.sumTotalShop.reduce(this.getSum);

    this.totalActiveshop = this.sumTotalActiveshop.reduce(this.getSum);

    this.totalCloseshop = this.sumTotalCloseshop.reduce(this.getSum);

    this.ActivePersent = Math.round((this.totalActiveshop / (this.totalActiveshop + this.totalCloseshop)) * 100)

  }



  btn() {
    var divToPrint = document.getElementById("printTable");
    let newWin = window.open("");
    newWin.document.write(divToPrint.innerHTML);
    newWin.print();
    newWin.close();
  }

  getSum(total, num) {
    return total + num;
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
