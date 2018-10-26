import { Component, OnInit } from '@angular/core';
import { PatientService } from '../../../core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


@Component({
    selector: 'app-paymentreceipt',
    templateUrl: './paymentreceipt.component.html',
    styleUrls: ['./paymentreceipt.component.css']
})
export class PaymentreceiptComponent implements OnInit {

    public visitnature : any;

    paymentReceiptForm : FormGroup;

    public patients : any;

    private nature: any[] = ['Select Nature', 'Package', 'Lab Tests', 'Medicines', 'Others'];
    constructor(private PatientServiceobj: PatientService , private formBuilder : FormBuilder , private Toast : ToastrService) { 

        this.paymentReceiptForm = this.formBuilder.group({
            MRN : ['',Validators.required]
        });


    }

    async  ngOnInit() {
        await this.PatientServiceobj.getPatient();
        let par = this.PatientServiceobj.patients;
        console.log(par);

        this.nature = this.nature.map((item, index) => {
            return { ID: index, Name: item }
        });

        console.log(this.nature);



       this.visitnature=  await this.PatientServiceobj.GetVisitNatures();
        console.log(this.visitnature); 
    
    }


    GetPatientByMrn(mrn ,keycode){
        console.log(mrn);
        console.log(  keycode);
       if(keycode.key == "Enter") {
           this.PatientServiceobj.SearchPatientByMrn(mrn).subscribe((res : any) => {
            console.log(res);

               if(res != null) {
                   this.patients = res;
                   console.log( this.patients)
                  }
               else {
                   this.Toast.error('MRN error');
               }
           });
       }
    }



}
 