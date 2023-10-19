import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { BookingJune } from 'src/mocks/booking-june';
import { Booking } from 'src/app/booking.model';

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

  createBooking(from: number, to: number, d: Booking) {
    if (d.day >= from && d.day <= to) {
      d.booked = true;
      if (d.day == from) {
        if (d.isFirstDay == false) {
          d.isFirstDay = true;
        } else {
          // if it is first, now it is also the last
          d.isLastDay = true;
        }
      }
      if (d.day == to) {
        if (d.isLastDay == false) {
          d.isLastDay = true;
        } else {
          // if it is last, now it is also the first
          d.isFirstDay = true;
        }
      }
    }
  }

  onSubmitPeriod() {
    const key = this.period.value.unit + this.period.value.month;
    const from = this.period.value.from;
    const to = this.period.value.to;

    if (key == 'N2June') {
      this.bookingJune.N2.map((d) => {
        this.createBooking(from, to, d);
      });
    } else if (key == 'N3June') {
      this.bookingJune.N3.map((d) => {
        this.createBooking(from, to, d);
      });
    } else if (key == 'N4June') {
      this.bookingJune.N4.map((d) => {
        this.createBooking(from, to, d);
      });
    } else if (key == 'N5June') {
      this.bookingJune.N5.map((d) => {
        this.createBooking(from, to, d);
      });
    }

    console.log(this.bookingJune);
  }
}
