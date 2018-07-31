import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appointment-scheduling',
  templateUrl: './appointment-scheduling.component.html',
  styleUrls: ['./appointment-scheduling.component.css']
})
export class AppointmentSchedulingComponent implements OnInit {

  transformations = [
    {
        key: "Flip",
        items: [ 
            { name: "0 degrees", value: "scaleX(1)" }, 
            { name: "180 degrees", value: "scaleX(-1)" }
        ]
    },
];

  constructor() { }

  ngOnInit() {
  }

}
