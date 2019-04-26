import { Component, OnInit } from '@angular/core';
import { OTService } from '../../../../core/Services/HIMS/ot.service';
import { HrmsService} from '../../../../core/Services/HRM/Setup/hrms.service';
import {EmployeeService} from '../../../../core/Services/HRM/Employee/employee.service';
import {PharmacyService} from '../../../../core/Services/Pharmacy/pharmacy.service';
import { FormGroup , FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-medicine-request',
  templateUrl: './medicine-request.component.html',
  styleUrls: ['./medicine-request.component.css']
})
export class MedicineRequestComponent implements OnInit {

  public MedicineRequestForm : FormGroup;
  public MedicineRequestDetailForm : FormGroup;

  public medicineRequest : any;
  public departments : any;
  public users : any;
  public inventoryItems : any;
  public inventoryItem : any;
  public packTypes : any;
  public packType : any;
  public arraydata = [];
  public description = "";
  public itemName = "";
  public packTypeName = "";

  public DisabledFields : boolean = true;

  constructor(public formBuilder : FormBuilder, public otServiceobj : OTService, public objHrmsService : HrmsService  , public objEmployeeService:EmployeeService 
    , public objPharmacyService : PharmacyService , public Toast: ToastrService) {

    this.MedicineRequestForm = this.formBuilder.group({
      RoDate : ['' ,  Validators.required],
      RequestDate:['' ,  Validators.required],
      Status:['',  Validators.required],
      Remarks:['',  Validators.required],
      DepartmentId:['',  Validators.required],
      UserId:['',  Validators.required],
      TotalOrderQty:[''],
      TotalDispatchQty:[''],
      MedicineRequestDetails:this.formBuilder.array([]),
    });

    this.MedicineRequestDetailForm = this.formBuilder.group({
      InventoryItemId :[''],
      InventoryItemName :[''],
      InventoryItemDescription :[''],
      InventoryItemPackType :[''],
      OrderQty:[''],
      DispatchQty:[''],
    });

   }

  ngOnInit() {

    this.objHrmsService.GetAllDepartments().subscribe(res=>{
      this.departments = res;
      console.log(this.departments);
    });

    this.objEmployeeService.getAllEmployees().subscribe(res=>{
      this.users = res;
      console.log(this.users)
    });

    this.objPharmacyService.GetInventoryItems().subscribe(res=>{
        this.inventoryItems = res;
        console.log(this.inventoryItems);
    });


    this.objPharmacyService.GetPackTypes().subscribe(res=>{
      this.packTypes = res;
      console.log(this.packTypes);
    })
    
    // this.otServiceobj.getMedicineRequests().subscribe(res =>{
    //   this.medicineRequest =  res;
    //   console.log(this.medicineRequest);
    // });
  }

  getInventoryItem(value){
    // console.log(value);
    this.objPharmacyService.GetInventoryItem(value).subscribe(res=>{
      this.inventoryItem  = res;
      // console.log(this.inventoryItem);
      // console.log(res);
      
      this.description = res.description;
      this.itemName = res.name;
      this.packTypeName =this.inventoryItem.packType.name;

      // this.packType = this.packTypes.find(x=> x.packTypeId == this.inventoryItem)
    });
     
  }


  addMedicineRequest(value , totalOrderQty , totalDispatchQty){

    console.log(value);
    console.log(totalOrderQty);
    console.log(totalDispatchQty);

    console.log(this.arraydata);
    this.arraydata =  this.arraydata.filter(t=>{
              delete  t.InventoryItemName
              delete  t.InventoryItemDescription 
      return  delete  t.InventoryItemPackType 
    })
    this.MedicineRequestForm.value.MedicineRequestDetails = this.arraydata;
    console.log(this.arraydata);
console.log(value)
if(value.MedicineRequestDetails.length){
  this.otServiceobj.addInvMedicineRequest(value).subscribe(res=> {
      if(res){
        console.log(res);
        this.MedicineRequestForm.reset();
        this.arraydata =[]
        this.Toast.success('Saved');

      }
      else{
        this.Toast.success('Select All');
      }
    })
}
else{
  this.Toast.error('Please Add Some Medicine Request')
}
    
    
  }

  // public inv : any = []
  addMedicineRequestDetail(value){
    // console.log(value);
  let x  = this.inventoryItems.find(t=> t.inventoryItemId == value.InventoryItemId)
    // console.log( x)
    this.MedicineRequestDetailForm.value.InventoryItemName = x.name;
      this.MedicineRequestDetailForm.value.InventoryItemDescription = x.description;
      let pac = this.packTypes.find(x=> x.packTypeId == x.packTypeId)
      // console.log(pac)
      this.MedicineRequestDetailForm.value.InventoryItemPackType = pac.name;
    console.log(value);

      this.arraydata.push(value)
  }

  deleteMedicineRequest(value){
    // console.log(value.key.InventoryItemId);
    this.arraydata.splice(value.key.InventoryItemId);
    console.log(this.arraydata);
  }
  // addMedicineRequest(value){
  //   console.log(value)
  //   this.otServiceobj.addMedicineRequest(value.key).subscribe(res => {
  //     console.log(res);
  //     this.otServiceobj.getMedicineRequests().subscribe(res =>{
  //       this.medicineRequest =  res;
  //       console.log(this.medicineRequest);
  //     });
  //   })
  // }

  // updateMedicineRequest(value){
  //   this.otServiceobj.updateMedicineRequest(value.key).subscribe(res =>{
  //     console.log(res);
  //   });
  //   console.log(value)
  // }

  // deleteMedicineRequest(value){
  //   this.otServiceobj.deleteMedicineRequest(value.key.medicineRequestId).subscribe(res=>{
  //     console.log(res);
  //   })
  // }

  valueChanged(value){
    console.log(value.key);
  }


}
