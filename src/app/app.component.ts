import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Bookings } from 'src/domain/bookings';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'reservations-calendar';
  bookings: Bookings = new Bookings();
  period: FormGroup;

  constructor(private fb: FormBuilder) {
    this.period = this.fb.group({
      from: ['', [Validators.required]],
      to: ['', [Validators.required]],
      unit: ['', [Validators.required]],
      fromMonth: ['', [Validators.required]],
      toMonth: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  // TODO
  modifyBooking() {}

  bookedAlert(): void {
    alert('booked');
  }

  // TODO: check if date from is earlier in time than date to

  onSubmitPeriod() {
    if (this.period.valid) {
      const { from, to, unit, fromMonth, toMonth } = this.period.value;

      this.bookings.isUnitBooked(from, to, fromMonth, toMonth, unit)
        ? this.bookedAlert()
        : this.bookings.createBooking(from, to, fromMonth, toMonth, unit);
    } else {
      alert('Form invalid');
    }
  }
}
