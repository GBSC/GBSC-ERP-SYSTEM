import { Component, OnInit } from '@angular/core';
import { PharmacyService } from '../../core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
    selector: 'app-returnmedicine',
    templateUrl: './returnmedicine.component.html',
    styleUrls: ['./returnmedicine.component.css']
})
export class ReturnmedicineComponent implements OnInit {

    private ReturnReason: any;
    private SalesReturn: any;
    public issuance : any;
    private ReturnMedicineForm : FormGroup;
    private AllCustomers : any;
    private customerdata : any ={};



    constructor(private PharmacyService: PharmacyService, private FormBuilder : FormBuilder) {

        this.ReturnMedicineForm = this.FormBuilder.group({

            CRN: [''],
            PatientName: [''],
            SpouseName: [''],
            Department: [''],
            Remarks: [''],

            ReturnNo:[''],
            ReturnDate : [''],
            SlipNo : [''],
            // InventoryItems : ['']

        });

    }

    async ngOnInit() {
        this.ReturnReason = await this.PharmacyService.GetReturnReasons();
        this.SalesReturn = await this.PharmacyService.GetSalesReturns().toPromise();

        this.PharmacyService.getCustomers().subscribe(result => this.AllCustomers = result);

        this.PharmacyService.GetInventoryItems().subscribe(result => {
            this.issuance = result;
            console.log(this.issuance);
        });
    }

    getcellvalueForCustomer(value){
        console.log(value);
        this.customerdata = this.AllCustomers.find(x => x.crn == value);
        console.log(this.customerdata);

    }



    async AddSalesReturn(value) {
        return await this.PharmacyService.AddSalesReturn(value);
    }

    async UpdateSalesReturn(value) {
        return await this.PharmacyService.UpdateSalesReturn(value.Key);
    }

    async DeleteSalesReturn(value) {
        return await this.PharmacyService.DeleteSalesReturn(value.Key.SalesReturnId);
    }

    
    public vae : any;
    onsubmit(value)
    {
        this.vae = value;
        console.log(value);
    }

        keyPress(event: any){
            console.log(event)
        }

        onKeydown(value, event) {
            if (event.key === "Enter") {
              console.log(value);

            }
          }

    public rr = [];
    public rrrr = [];
    AddIssuance(value)
    {
        console.log(value);
        let x  =  value.data;
        this.rr.push(x);
  
        console.log(this.rr)
    }

    addfinal()
    {
        this.ReturnMedicineForm.value.InventoryItems = this.rr;
        console.log(this.ReturnMedicineForm.value);
    }


    // public val : any;
    // public currentSelected = {}
    // setAreaValue(rowData: any,value : any) : void {
    //     this.val = value;
    //     console.log(value);

    //   //  console.log(this.ovais);
    //             // console.log(this.aaa);
    //             // let dddd = this.ovais.find(t => t.itemCode === value);
    //             // console.log(dddd)
    //     // this.aaa = this.xcx.find(x=> x.itemCode == value)
    //    //  console.log(this.aaa.find(a => a.itemCode === value));

    // }


    setAreaValue(rowData: any,value : any) : void
    {
        console.log(value);
    }
}
