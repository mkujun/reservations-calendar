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
  juneHidden: boolean = false;
  julyHidden: boolean = false;
  augustHidden: boolean = false;
  septemberHidden: boolean = false;

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

  isMonthsValid(): boolean {
    const { from, to, fromMonth, toMonth } = this.period.value;

    if (fromMonth > toMonth) {
      return false;
    } else {
      if (from > to) {
        return false;
      }
    }

    return true;
  }

  getMonthName(monthNumber: number): string {
    if (monthNumber == 6) {
      return 'June';
    } else if (monthNumber == 7) {
      return 'July';
    } else if (monthNumber == 8) {
      return 'August';
    } else if (monthNumber == 9) {
      return 'September';
    } else {
      return '';
    }
  }

  onSubmitPeriod() {
    if (this.period.valid && this.isMonthsValid()) {
      let { from, to, unit } = this.period.value;
      let fromMonth = this.getMonthName(this.period.value.fromMonth);
      let toMonth = this.getMonthName(this.period.value.toMonth);

      this.bookings.isUnitBooked(from, to, fromMonth, toMonth, unit)
        ? this.bookedAlert()
        : this.bookings.createBooking(from, to, fromMonth, toMonth, unit);
    } else {
      alert('Form invalid');
    }
  }

  showHideJune() {
    this.juneHidden = !this.juneHidden;
  }

  showHideJuly() {
    this.julyHidden = !this.julyHidden;
  }

  showHideAugust() {
    this.augustHidden = !this.augustHidden;
  }

  showHideSeptember() {
    this.septemberHidden = !this.septemberHidden;
  }
}
