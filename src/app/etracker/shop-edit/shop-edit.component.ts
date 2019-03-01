import { Component, OnInit } from '@angular/core';
import { InventorysystemService, AuthService } from '../../../app/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StoreService } from '../../../app/core/Services/ETracker/store.service';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-shop-edit',
  templateUrl: './shop-edit.component.html',
  styleUrls: ['./shop-edit.component.css']
})
export class ShopEditComponent {

  shopClassifications = ['500 & Above', '250 to 499', '100 to 249', 'Less then 100'];

  shopCategories = ['LMT', 'V/S', 'Retail'];

  companyId: any;

  subsections: any[];

  shop = { activeStatus: true };

  pjp = [];

  form: FormGroup;

  storeId;

  constructor(public fb: FormBuilder,
    public inventoryService: InventorysystemService,
    public storeService: StoreService,
    public route: ActivatedRoute,
    public toastr: ToastrService,
    authService: AuthService) {

    this.route.params.subscribe((params) => {
      this.storeId = +params['id'];
    });

    this.companyId = authService.getUserCompanyId();


    this.inventoryService
      .getSubsectionsByCompany(this.companyId).subscribe(resp => {
        this.subsections = resp.map(subsection => {
          return {
            subsectionId: subsection.subsectionId, name: subsection.name
          }
        })
      });


    this.form = this.fb.group({
      ShopName: [''],
      ShopKeeper: [''],
      ContactNo: [''],
      Landline: [''],
      Address: [''],
      Street: [''],
      City: [''],
      Landmark: [''],
      SubsectionId: [''],
      Category: [],
      Classification: [''],
      CNIC: ['']
    });



    this.storeService.getStorePjp(this.storeId).subscribe(res => {

      this.pjp = res;

    });

    this.storeService.getStore(this.storeId).subscribe(res => {
      this.shop = res;
      this.patchValues(this.shop);

    });


  };

  addRemoveVisitDay(event, index) {

    this.pjp[index].selected = !this.pjp[index].selected;
    console.log(this.pjp[index]);

  }

  patchValues(shop) {

    this.form.patchValue({
      ShopName: shop.shopName,
      ShopKeeper: shop.shopKeeper,
      ContactNo: shop.contactNo,
      Landline: shop.landline,
      Address: shop.address,
      Street: shop.street,
      City: shop.city,
      Landmark: shop.landmark,
      SubsectionId: shop.subsectionId,
      Category: shop.category,
      Classification: shop.classification,
      CNIC: shop.cnic
    })
  }

  public displayToast(message) {
    this.toastr.success(message);
  }


  submit(value) {

    var model = { ...this.shop, ...value};

    this.storeService.updateStore(model).subscribe(res => {

      this.displayToast('Shop Updated!');

    });

    this.storeService.updatePjp(this.pjp, this.storeId).subscribe(res => {
      
      this.displayToast('Pjp Updated!');

    });
  }


}
