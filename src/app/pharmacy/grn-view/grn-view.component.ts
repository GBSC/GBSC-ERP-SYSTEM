import { Component, OnInit } from '@angular/core';
import { GRN } from '../../core/Models/Pharmacy/GRN';
import { PharmacyService } from '../../core';


import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
    selector: 'app-grn-view',
    templateUrl: './grn-view.component.html',
    styleUrls: ['./grn-view.component.scss']
})
export class GrnViewComponent implements OnInit {

    private GRNs: GRN;
    private DetailGRN: GRN;
    private grnview : any;

    GrnViewForm : FormGroup;

    public date : any;


    constructor(private PharmacyService: PharmacyService , private formBuilder : FormBuilder, public router: Router) {
        this.GrnViewForm = this.formBuilder.group({
            grnDate :['']
        });
    }

  async  ngOnInit() {
      this.date  = this.formatDate(new Date());
        // this.PharmacyService.GetGRN().subscribe((res: GRN) => this.GRNs = res);
        this.grnview =    await this.PharmacyService.GetGRNsByDate(this.formatDate(new Date()));
        console.log(this.formatDate(new Date()));
    }

    // GetGrnDetails(value) {
    //     this.PharmacyService.GetGrnDetailsByCode(value.data.grnNumber).subscribe((res: GRN) => this.DetailGRN = res);
    // }
    async   onsubmit(value){
        this.grnview  =    await this.PharmacyService.GetGRNsByDate(value.grnDate);    
        }
    
        formatDate(date: Date) {
            return date.getFullYear( ) + "-" + (date.getMonth() +1) ;
        }
    
        onToolbarPreparing(e) {
            e.toolbarOptions.items.unshift(
              {
                location: 'after',
                widget: 'dxButton',
                options: {
                  icon: 'add',
                  onClick: this.addvoucher.bind(this)
                }
              });
          }
    
          addvoucher() {
            this.router.navigate(['/pharmacy/grn']);
          }

}
