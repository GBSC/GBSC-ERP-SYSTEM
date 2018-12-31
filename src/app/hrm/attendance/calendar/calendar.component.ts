import { Component, OnInit, ViewChild } from '@angular/core';

import { FormBuilder, Validators, FormGroup } from '@angular/forms';

//  import { DateRangeDescriptor, DateRangeType, IgxCalendarComponent, IgxSnackbarComponent } from "igniteui-angular";

@Component({
    selector: 'app-calendar',
    templateUrl: './calendar.component.html',
    styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

    //  @ViewChild("calendar") public calendar: IgxCalendarComponent;
    //  @ViewChild(IgxSnackbarComponent) public snackbar: IgxSnackbarComponent;
    //  public range = [];

    public days = [];
    public remarks = [];
    public index = [];
    public months =[];
    public calendarForm : FormGroup;
    // public years = [];
    // public monthSelected = null;
    constructor(private formBuilder : FormBuilder) { 
        this.calendarForm = this.formBuilder.group({
            Date : [''],
            Reamrks : ['']
        });
    }

    ngOnInit() {
        // let daysLength = 0;
        // if (this.monthSelected == 2) {
        //     daysLength = 2;
        // }
        // if (this.monthSelected == 2) {
        //     daysLength = 2;
        // }
        for (let i = 1; i <= 31; i++) {
            this.days.push(i);
        }
        
        for (let i = 1; i <= 31; i++) {
            this.remarks.push(i);
        }
 

        for (let i = 1; i <= 12; i++) {
            this.months.push(i);
        }

        // for (let i = 1; i <= 1970; i++) {
        //     this.years.push(1970 + i);
        // }
    }


    // save(a , b , value , g){
    //     console.log(a);
    //     console.log(b);
    //     console.log(value);
    //     console.log(g)
    // }
    // public selectPTOdays(dates: Date[]) {
    //     this.range = dates;
    // }

    //   public submitPTOdays(eventArgs) {
    //     this.calendar.specialDates =
    //         [{ type: DateRangeType.Specific, dateRange: this.range }];

    //     this.range.forEach((item) => {
    //         this.calendar.selectDate(item);
    //     });

    //     if (this.range.length === 0) {
    //         this.snackbar.message = "Select dates from the Calendar first.";
    //     } else {
    //         this.snackbar.message = "PTO days submitted.";
    //     }
    //     this.snackbar.show();
    // }

}
