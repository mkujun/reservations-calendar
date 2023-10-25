import { Component, OnInit, Input } from '@angular/core';
import { Booking } from '../../booking.model';

@Component({
  selector: '[app-unit-month]',
  templateUrl: './unit-month.component.html',
  styleUrls: ['./unit-month.component.scss']
})
export class UnitMonthComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    console.log("bookings", this.bookings);
  }

  @Input() bookings: Booking[] = [];
  @Input() unitName: string = '';
}
