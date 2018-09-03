import { Component, OnInit } from '@angular/core';
import {BioChemistryService} from '../../../lab/services/bio-chemistry.service'

@Component({
  selector: 'app-embryologists',
  templateUrl: './embryologists.component.html',
  styleUrls: ['./embryologists.component.scss']
})
export class EmbryologistsComponent implements OnInit {

  public embryologist : any;

  constructor(private BioChemistryServiceobj : BioChemistryService) {

   }

 async ngOnInit() {

  await this.BioChemistryServiceobj.getEmbryologists();
  this.embryologist = this.BioChemistryServiceobj.embryologist;
  }

  async addEmbryologist(value){
    let x = await this.BioChemistryServiceobj.addEmbryologist(value.key);
    console.log(x);
  }

  async updateEmbryologist(value){
    let x = await this.BioChemistryServiceobj.updateEmbryologist(value.key);
    console.log(x);
  }

  async deleteEmbryologist(value){
    let x = await this.BioChemistryServiceobj.deleteEmbryologist(value.key.embryologistId);
    console.log(x);
  }

}
