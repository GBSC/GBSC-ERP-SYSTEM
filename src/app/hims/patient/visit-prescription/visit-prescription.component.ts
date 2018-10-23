import { Component, OnInit } from '@angular/core';
import { InventoryItem } from '../../../core/Models/Pharmacy/InventoryItem';
import { PharmacyService, PatientService } from '../../../core';
import { SalesIndentItem } from '../../../core/Models/Pharmacy/SalesIndentItem';
import { Patient } from '../../../core/Models/HIMS/patient';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-visit-prescription',
  templateUrl: './visit-prescription.component.html',
  styleUrls: ['./visit-prescription.component.scss']
})
export class VisitPrescriptionComponent implements OnInit {
  private InventoryItems : InventoryItem;
  private CurrentPatient : Patient;
  private CurrentPatientID : number;
  private Prescriptions : SalesIndentItem[]= [];

  constructor(private PharmacyService : PharmacyService, private PatientService : PatientService, private Router: ActivatedRoute) { }

  ngOnInit() {
    this.PharmacyService.GetInventoryItems().subscribe((res : InventoryItem) => {
      this.InventoryItems = res;
      console.log("InventoryItems", this.InventoryItems);
    });

    this.Router.params.subscribe(params => {
      this.CurrentPatientID = params['id'];
      this.PatientService.getpatient(this.CurrentPatientID).subscribe((Patient : Patient) => {
          this.CurrentPatient = Patient;
          console.log("CurrentPatient", this.CurrentPatient);
      });
  });
  }

  AddPrescription(value) {
      
  }

  UpdatingModel(value) {

  }

  UpdatePrescription(value) {

  }

  DeletePrescription(value) {

  }

  getFilteredTerritories(options) {
    return {
        filter: options.data ? ["areaId", "=", options.data.areaId] : null
    };
}

}
