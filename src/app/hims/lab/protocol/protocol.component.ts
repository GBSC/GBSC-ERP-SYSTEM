import { Component, OnInit } from '@angular/core';
import { ProtocolService } from '../../../core/Services/HIMS/protocol.service';

@Component({
  selector: 'app-protocol',
  templateUrl: './protocol.component.html',
  styleUrls: ['./protocol.component.scss']
})
export class ProtocolComponent implements OnInit {

  public protocols : any;

  constructor(private protocolService : ProtocolService) { }

  ngOnInit() {

    this.protocolService.getProtocols().subscribe(resp=>this.protocols = resp);
  }

  addProtocol(value)
  {
    this.protocolService.addProtocol(value.data).subscribe(resp=>console.log(resp));
  }

  updateProtocol(value)
  {
    this.protocolService.updateProtocol(value.key).subscribe(resp=>console.log(resp));
  }

}
