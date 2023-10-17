import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Booking } from './booking.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'reservations-calendar';

  BookingN2June: Booking[] = [];
  BookingN3June: Booking[] = [];
  BookingN4June: Booking[] = [];
  BookingN5June: Booking[] = [];

  period = new FormGroup({
    from: new FormControl(''),
    to: new FormControl(''),
    unit: new FormControl(''),
    month: new FormControl(''),
  });

  constructor() {
    for (let index = 1; index <= 30; index++) {
      const bookingN2June = new Booking(index, 'June', 'N2', false);
      this.BookingN2June.push(bookingN2June);
      const bookingN3June = new Booking(index, 'June', 'N3', false);
      this.BookingN3June.push(bookingN3June);
      const bookingN4June = new Booking(index, 'June', 'N4', false);
      this.BookingN4June.push(bookingN4June);
      const bookingN5June = new Booking(index, 'June', 'N5', false);
      this.BookingN5June.push(bookingN5June);
    }
  }

  ngOnInit(): void {
    console.log(this.BookingN2June);
    console.log(this.BookingN3June);
  }

  onSubmitPeriod() {
    const key = this.period.value.unit + this.period.value.month;
    const from = this.period.value.from;
    const to = this.period.value.to;

    if (key == 'N2June') {
      this.BookingN2June.map((d) => {
        if (d.day >= from && d.day <= to) {
          d.booked = true;
        }
      });
    } else if (key == 'N3June') {
    }
  }
}
