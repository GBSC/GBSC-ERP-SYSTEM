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

    constructor(private PharmacyService: PharmacyService,private FormBuilder : FormBuilder) {

        this.ReturnMedicineForm = this.FormBuilder.group({

            MRN : [''],
            ReturnNo:[''],
            ReturnDate : [''],
            SlipNo : [''],
            PatientName : [''],
            SpouseName : [''],
            Remarks:[''],
            Department :[''],
            InventoryItems : ['']

        });

    }

    async ngOnInit() {
        this.ReturnReason = await this.PharmacyService.GetReturnReasons();
        this.SalesReturn = await this.PharmacyService.GetSalesReturns();

        this.PharmacyService.GetInventoryItems().subscribe(result => {
            this.issuance = result;
            console.log(this.issuance);
        });
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
    public rr = [];
    public rrrr = [];
    AddIssuance(value)
    {
        let x  =  value.data;
        this.rr.push(x);
  
        console.log(this.rr)
    }

    addfinal()
    {
        this.ReturnMedicineForm.value.InventoryItems = this.rr;
        console.log(this.ReturnMedicineForm.value);
    }
}
