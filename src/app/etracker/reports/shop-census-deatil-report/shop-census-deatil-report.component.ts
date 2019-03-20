import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-shop-census-deatil-report',
  templateUrl: './shop-census-deatil-report.component.html',
  styleUrls: ['./shop-census-deatil-report.component.css']
})
export class ShopCensusDeatilReportComponent implements OnInit {

  public Data = [];
// @Input("dayone") dayone : string;
  public sumTotalShop = [ ];
  public TShop = 0;


  public sumTotalActiveshop = [ ];
  public totalActiveshop = 0;

  
  public sumTotalCloseshop = [ ];
  public totalCloseshop = 0;

  public ActivePersent = 0;
  constructor() { }

  ngOnInit() {
    // this.Data = []
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
     newWin.document.write(divToPrint.outerHTML);
     newWin.print();
     newWin.close();
  }
  export(){
    // this.Data.exportDataAsCsv();
  }
  print(gridContainer){
    gridContainer.print(); 
  }








}
