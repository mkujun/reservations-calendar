import { BookingJune } from './booking-june';
import { BookingJuly } from './booking-july';
import { Booking } from '../app/booking.model';

export class Bookings {
  bookingJune: BookingJune;
  bookingJuly: BookingJuly;

  constructor() {
    this.bookingJune = new BookingJune();
    this.bookingJuly = new BookingJuly();
  }

  private getBookingByUnit(unitName: string, month: string): Booking[] {
    if (month == 'June') {
      switch (unitName) {
        case 'N2':
          return this.bookingJune.N2;
        case 'N3':
          return this.bookingJune.N3;
        case 'N4':
          return this.bookingJune.N4;
        case 'N5':
          return this.bookingJune.N5;
        default:
          return [];
      }
    }
    else if (month == 'July') {
      switch (unitName) {
        case 'N2':
          return this.bookingJuly.N2;
        case 'N3':
          return this.bookingJuly.N3;
        case 'N4':
          return this.bookingJuly.N4;
        case 'N5':
          return this.bookingJuly.N5;
        default:
          return [];
      }

    }
    else return [];
  }

  private markBooked(from: number, to: number, d: Booking) {
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

  createBooking(from: number, to: number, month: string, unitName: string) {
    const unit = this.getBookingByUnit(unitName, month);
    unit?.map((d: Booking) => {
      this.markBooked(from, to, d);
    })
  }

  deleteBooking(from: number, to: number, unitName: string, month: string) {
    const unit = this.getBookingByUnit(unitName, month);
      unit?.map((d: Booking) => {
        // days in between
        if (d.day > from && d.day < to) {
          d.booked = false;
          d.isFirstDay = false;
          d.isLastDay = false;
        }

        if (d.day == from) {
          // edge case
          if (d.isFirstDay && !d.isLastDay) {
            d.isFirstDay = false;
            d.booked = false;
          }
          if (d.isFirstDay && d.isLastDay) {
            d.isFirstDay = false;
            d.booked = true;
          }
        }

        if (d.day == to) {
          // edge case
          if (d.isLastDay && !d.isFirstDay) {
            d.isLastDay = false;
            d.booked = false;
          }
          if (d.isLastDay && d.isFirstDay) {
            d.isLastDay = false;
            d.booked = true;
          }
        }
      });
  }

  private isFirstOrLastDay(element: Booking): boolean {
    return element.booked && !element.isLastDay && !element.isFirstDay;
  }

  // TODO: 4 methods below should be one method
  isN2Booked(from: number, to: number, month: string): boolean {
    if (month == 'June') {
      let period: Booking[] = this.bookingJune.N2.slice(
        Number(from) - 1,
        Number(to)
      );
      return period.some(this.isFirstOrLastDay);
    }
    else if (month == 'July') {
      let period: Booking[] = this.bookingJuly.N2.slice(
        Number(from) - 1,
        Number(to)
      );
      return period.some(this.isFirstOrLastDay);

    }
    else {
      return false;
    }
  }

  isN3Booked(from: number, to: number, month: string): boolean {
    if (month == 'June') {
      let period: Booking[] = this.bookingJune.N3.slice(
        Number(from) - 1,
        Number(to)
      );
      return period.some(this.isFirstOrLastDay);
    }
    else if (month == 'July') {
      let period: Booking[] = this.bookingJuly.N3.slice(
        Number(from) - 1,
        Number(to)
      );
      return period.some(this.isFirstOrLastDay);

    }
    else {
      return false;
    }
  }

  isN4Booked(from: number, to: number, month: string): boolean {
    if (month == 'June') {
      let period: Booking[] = this.bookingJune.N4.slice(
        Number(from) - 1,
        Number(to)
      );
      return period.some(this.isFirstOrLastDay);
    }

    else if (month == 'July') {
      let period: Booking[] = this.bookingJuly.N4.slice(
        Number(from) - 1,
        Number(to)
      );
      return period.some(this.isFirstOrLastDay);

    }
    else {
      return false;
    }
  }

  isN5Booked(from: number, to: number, month: string): boolean {
    if (month == 'June') {
      let period: Booking[] = this.bookingJune.N5.slice(
        Number(from) - 1,
        Number(to)
      );
      return period.some(this.isFirstOrLastDay);
    }

    else if (month == 'July') {
      let period: Booking[] = this.bookingJuly.N5.slice(
        Number(from) - 1,
        Number(to)
      );
      return period.some(this.isFirstOrLastDay);

    }
    else {
      return false;
    }
  }
}
