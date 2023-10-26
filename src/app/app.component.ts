import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Bookings } from 'src/domain/bookings';

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
    fromMonth: new FormControl(''),
    toMonth: new FormControl(''),
  });

  constructor() {}

  ngOnInit(): void {
  }

  deleteBooking() {
    const { from, to, unit, fromMonth, toMonth } = this.period.value;

    let res: string | null = prompt(
      'Are you sure you want to delete booking? (yes/no)'
    );

    if (res === 'yes') {
      //this.bookings.deleteBooking(from, to, unit, month);
    }
  }

  // TODO: this can move 'from' and 'to' period in existing booking period
  modifyBooking() {}

  bookedAlert(): void {
    alert('booked');
  }

  onSubmitPeriod() {
    const { from, to, unit, fromMonth, toMonth } = this.period.value;

    this.bookings.isUnitBooked(from, to, fromMonth, toMonth, unit)
      ? this.bookedAlert()
      : this.bookings.createBooking(from, to, fromMonth, toMonth, unit);
  }
}
