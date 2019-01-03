import { Component, OnInit, ViewChild } from '@angular/core';
//  import { DateRangeDescriptor, DateRangeType, IgxCalendarComponent, IgxSnackbarComponent } from "igniteui-angular";

@Component({
    selector: 'app-calendar',
    templateUrl: './calendar.component.html',
    styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

    //   @ViewChild("calendar") public calendar: IgxCalendarComponent;
    //  @ViewChild(IgxSnackbarComponent) public snackbar: IgxSnackbarComponent;
    public range = [];

    constructor() { }

    ngOnInit() {
    }



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
