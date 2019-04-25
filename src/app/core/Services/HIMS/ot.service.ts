import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OTService {
  public readonly API_URL = 'hims/api/';

  constructor(public ApiService: ApiService) { }

  getInvMedicineRequests():Observable<any>{
      return this.ApiService.get(this.API_URL+'OT/GetInvMedicineRequests');
  }

  getInvMedicineRequestById(id):Observable<any>{
      return this.ApiService.get(this.API_URL+'OT/GetInvMedicineRequest/'+id);
  }

  updateInvMedicineRequest(value):Observable<any>{
      return this.ApiService.put(this.API_URL+'OT/UpdateInvMedicineRequest',value);
  }

  addInvMedicineRequest(value):Observable<any>{
      return this.ApiService.post(this.API_URL+'OT/AddInvMedicineRequest',value);
  }

  getPatientCase():Observable<any>{
      return this.ApiService.get(this.API_URL+'OT/GetOtPatientCases');
  }

  deleteInvMedicineRequest(id):Observable<any>{
      return this.ApiService.delete(this.API_URL+'OT/DeleteInvMedicineRequest/'+id);
  }

  getPatientCaseById(id):Observable<any>{
      return this.ApiService.get(this.API_URL+'OT/GetOtPatientCase/'+id);
  }

  addPatientCase(value):Observable<any>{
      return this.ApiService.post(this.API_URL+'OT/AddOtPatientCase',value);
  }

  updatePatientCase(value):Observable<any>{
      return this.ApiService.put(this.API_URL+'OT/UpdateOtPatientCase',value);
  }

  getMedicineRequests():Observable<any>{
      return this.ApiService.get(this.API_URL+'HimsSetup/GetMedicineRequests');
  }

  getMedicineRequestById(id):Observable<any>{
      return this.ApiService.get(this.API_URL+'HimsSetup/GetMedicineRequest/'+id);
  }

  addMedicineRequest(value):Observable<any>{
      return this.ApiService.post(this.API_URL+'HimsSetup/AddMedicineRequest',value);
  }

  updateMedicineRequest(value):Observable<any>{
      return this.ApiService.put(this.API_URL+'HimsSetup/UpdateMedicineRequest',value);
  }

  deleteMedicineRequest(id : number):Observable<any>{
      return this.ApiService.delete(this.API_URL+'HimsSetup/DeleteMedicineRequest/'+id);
  }

  getOtTerminologys():Observable<any>{
      return this.ApiService.get(this.API_URL+'HimsSetup/GetOtTerminologys');
  }

  getOtTerminologyById(id):Observable<any>{
      return this.ApiService.get(this.API_URL+'HimsSetup/GetOtTerminology/'+id);
  }

  addOtTerminology(value):Observable<any>{
      return this.ApiService.post(this.API_URL+'HimsSetup/AddOtTerminology',value);
  }

  updateOtTerminology(value):Observable<any>{
      return this.ApiService.put(this.API_URL+'HimsSetup/UpdateOtTerminology',value);
  }

  deleteOtTerminology(id : number):Observable<any>{
      return this.ApiService.delete(this.API_URL+'HimsSetup/DeleteOtTerminology/'+id);
  }

  getOtProcedures():Observable<any>{
      return this.ApiService.get(this.API_URL+'HimsSetup/GetOtProcedures');
  }

  getOtProcedureById(id):Observable<any>{
      return this.ApiService.get(this.API_URL+'HimsSetup/GetOtProcedure/'+id);
  }

  addOtProcedure(value):Observable<any>{
      return this.ApiService.post(this.API_URL+'HimsSetup/AddOtProcedure',value);
  }

  updateOtProcedure(value):Observable<any>{
      return this.ApiService.put(this.API_URL+'HimsSetup/UpdateOtProcedure',value);
  }

  deleteOtProcedure(id : number):Observable<any>{
      return this.ApiService.delete(this.API_URL+'HimsSetup/DeleteOtProcedure/'+id);
  }

  getOtEquipments():Observable<any>{
    return this.ApiService.get(this.API_URL+'HimsSetup/GetOtEquipments');
  }

  getOtEquipmentById(id):Observable<any>{
      return this.ApiService.get(this.API_URL+'HimsSetup/GetOtEquipment/'+id);
  }

  addOtEquipment(value):Observable<any>{
      return this.ApiService.post(this.API_URL+'HimsSetup/AddOtEquipment',value);
  }

  updateOtEquipment(value):Observable<any>{
      return this.ApiService.put(this.API_URL+'HimsSetup/UpdateOtEquipment',value);
  }

  deleteOtEquipment(id : number):Observable<any>{
      return this.ApiService.delete(this.API_URL+'HimsSetup/DeleteOtEquipment/'+id);
  }


  getLaproscopySp():Observable<any>{
    return this.ApiService.get(this.API_URL+'OT/GetLaproscopySps');
  }

  getLaproscopySpId(id):Observable<any>{
      return this.ApiService.get(this.API_URL+'OT/GetLaproscopySp/'+id);
  }

  addLaproscopySp(value):Observable<any>{
      return this.ApiService.post(this.API_URL+'OT/AddLaproscopySp',value);
  }

  updateLaproscopySp(value):Observable<any>{
      return this.ApiService.put(this.API_URL+'OT/UpdateLaproscopySp',value);
  }

  deleteLaproscopySp(id : number):Observable<any>{
      return this.ApiService.delete(this.API_URL+'OT/DeleteLaproscopySp/'+id);
  }

  getLaproscopyFs():Observable<any>{
      return this.ApiService.get(this.API_URL+'OT/GetLaproscopyFses');
  }

  getLaproscopyFsById(id : number):Observable<any>{
      return this.ApiService.get(this.API_URL+'OT/GetLaproscopyFs/'+id);
  }

  addLaproscopyFs(value):Observable<any>{
      return this.ApiService.post(this.API_URL+'OT/AddLaproscopyFs',value);
  }

  updateLaproscopyFs(value):Observable<any>{
      return this.ApiService.put(this.API_URL+'OT/UpdateLaproscopyFs',value);
  }

  deleteLaproscopy(id):Observable<any>{
      return this.ApiService.delete(this.API_URL+'OT/DeleteLaproscopyFs/'+id);
  }


  getHystroscopy():Observable<any>{
    return this.ApiService.get(this.API_URL+'OT/GetHystroscopys');
  }

  getHystroscopyById(id : number):Observable<any>{
    return this.ApiService.get(this.API_URL+'OT/GetHystroscopy/'+id);
  }

  addHystroscopy(value):Observable<any>{
        return this.ApiService.post(this.API_URL+'OT/AddHystroscopy',value);
  }

  updateHystroscopy(value):Observable<any>{
        return this.ApiService.put(this.API_URL+'OT/UpdateHystroscopy',value);
  }

  deleteHystroscopy(id):Observable<any>{
        return this.ApiService.delete(this.API_URL+'OT/DeleteHystroscopy/'+id);
  }


  


   
 
}
 