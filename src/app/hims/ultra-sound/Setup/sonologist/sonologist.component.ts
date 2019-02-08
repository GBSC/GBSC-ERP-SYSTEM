import { Component, OnInit } from '@angular/core';
import { UltraSoundService } from '../../../../core/Services/HIMS/ultra-sound.service';
 
@Component({
  selector: 'app-sonologist',
  templateUrl: './sonologist.component.html',
  styleUrls: ['./sonologist.component.css']
})
export class SonologistComponent implements OnInit {

  public sonologists : any

  constructor(public ultraSoundobj : UltraSoundService) { }

  ngOnInit() {
    this.ultraSoundobj.getSonologist().subscribe(res=>{
      this.sonologists = res;
      console.log(this.sonologists)
    });
  }

  addSonologist(value){
    this.ultraSoundobj.addSonologist(value.key).subscribe(res=>{
      console.log(res);
      this.ultraSoundobj.getSonologist().subscribe(res=>{
        this.sonologists = res;
        console.log(this.sonologists)
      });
    })
 


  }
  updateSonologist(value){
     this.ultraSoundobj.updateSonologist(value.key).subscribe(res=>{
      console.log(res);
    })


  }

  deleteSonologist(value){
     this.ultraSoundobj.deleteSonologist(value.key.sonologistId).subscribe(res=>{
      console.log(res);
    })

  }

}
