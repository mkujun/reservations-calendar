import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { BookingJune } from 'src/mocks/booking-june';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'reservations-calendar';

  bookingJune: BookingJune = new BookingJune();

  period = new FormGroup({
    from: new FormControl(''),
    to: new FormControl(''),
    unit: new FormControl(''),
    month: new FormControl(''),
  });

  constructor() { }

  ngOnInit(): void {
    console.log(this.bookingJune);
  }

  onSubmitPeriod() {
    const key = this.period.value.unit + this.period.value.month;
    const from = this.period.value.from;
    const to = this.period.value.to;

    // TODO: add for other units
    if (key == 'N2June') {
      this.bookingJune.N2.map((d) => {
        if (d.day >= from && d.day <= to) {
          d.booked = true;
          d.isFirstDay = d.day == from ? true : false;
          d.isLastDay = d.day == to ? true : false;
        }
      });
    } else if (key == 'N3June') {
      this.bookingJune.N3.map((d) => {
        if (d.day >= from && d.day <= to) {
          d.booked = true;
        }
      });

    }
    console.log(this.bookingJune);
  }

}
