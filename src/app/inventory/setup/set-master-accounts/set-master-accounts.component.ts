import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core';

@Component({
  selector: 'app-set-master-accounts',
  templateUrl: './set-master-accounts.component.html',
  styleUrls: ['./set-master-accounts.component.css']
})
export class SetMasterAccountsComponent implements OnInit {

  constructor(public Auth : AuthService) { }

  ngOnInit() {
  }

}
