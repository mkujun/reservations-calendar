import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Bookings } from 'src/mocks/bookings';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'reservations-calendar';

  bookings: Bookings = new Bookings();

  period = new FormGroup({
    from: new FormControl(''),
    to: new FormControl(''),
    unit: new FormControl(''),
    month: new FormControl(''),
  });

  constructor() {}

  ngOnInit(): void {
    console.log(this.bookings.bookingJune);
  }

  deleteBooking() {
    const from = this.period.value.from;
    const to = this.period.value.to;
    const unit = this.period.value.unit;
    const month = this.period.value.month;

    let res: string | null = prompt(
      'Are you sure you want to delete booking? (yes/no)'
    );

    if (res === 'yes') {
      this.bookings.deleteBooking(from, to, unit, month);
    }
  }

  // TODO: this can move 'from' and 'to' period in existing booking period
  modifyBooking() {}

  bookedAlert(): void {
    alert('booked');
  }

  onSubmitPeriod() {
    const from = this.period.value.from;
    const to = this.period.value.to;
    const month = this.period.value.month;
    const unit = this.period.value.unit;

    if (unit == 'N2') {
      if (this.bookings.isN2Booked(from, to, month)) {
        this.bookedAlert();
      } else {
        this.bookings.createBooking(from, to, month, unit);
      }
    } else if (unit == 'N3') {
      if (this.bookings.isN3Booked(from, to, month)) {
        this.bookedAlert();
      } else {
        this.bookings.createBooking(from, to, month, unit);
      }
    } else if (unit == 'N4') {
      if (this.bookings.isN4Booked(from, to, month)) {
        this.bookedAlert();
      } else {
        this.bookings.createBooking(from, to, month, unit);
      }
    } else if (unit == 'N5') {
      if (this.bookings.isN5Booked(from, to, month)) {
        this.bookedAlert();
      } else {
        this.bookings.createBooking(from, to, month, unit);
      }
    }

    console.log(this.bookings.bookingJune);
  }
}
