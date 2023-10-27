import { Component, OnInit, Input } from '@angular/core';
import { Bookings } from 'src/domain/bookings';
import { UnitBookings } from 'src/domain/unit-bookings';

@Component({
  selector: 'app-bookings-list',
  templateUrl: './bookings-list.component.html',
  styleUrls: ['./bookings-list.component.scss'],
})
export class BookingsListComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input() N2: UnitBookings[] = [];
  @Input() N3: UnitBookings[] = [];
  @Input() N4: UnitBookings[] = [];
  @Input() N5: UnitBookings[] = [];

  @Input() bookings: Bookings = new Bookings();

  deleteBooking(item: UnitBookings) {
    const bookingToDelete: UnitBookings = item;

    this.bookings.deleteUnitBooking(bookingToDelete);
  }
}
