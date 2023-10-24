import { BookingJune } from './booking-june';
import { BookingJuly } from './booking-july';
import { BookingAugust } from './booking-august';
import { BookingSeptember } from './booking-september';
import { Booking } from '../app/booking.model';

export class Bookings {
  bookingJune: BookingJune;
  bookingJuly: BookingJuly;
  bookingAugust: BookingAugust;
  bookingSeptember: BookingSeptember;

  constructor() {
    this.bookingJune = new BookingJune();
    this.bookingJuly = new BookingJuly();
    this.bookingAugust = new BookingAugust();
    this.bookingSeptember = new BookingSeptember();
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
    } else if (month == 'July') {
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
    }  else if (month == 'August') {
      switch (unitName) {
        case 'N2':
          return this.bookingAugust.N2;
        case 'N3':
          return this.bookingAugust.N3;
        case 'N4':
          return this.bookingAugust.N4;
        case 'N5':
          return this.bookingAugust.N5;
        default:
          return [];
      }
    } else if (month == 'September') {
      switch (unitName) {
        case 'N2':
          return this.bookingSeptember.N2;
        case 'N3':
          return this.bookingSeptember.N3;
        case 'N4':
          return this.bookingSeptember.N4;
        case 'N5':
          return this.bookingSeptember.N5;
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
    });
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

  private isOneNight(element: Booking): boolean {
    return element.booked;
  }

  private isFirstOrLastDay(element: Booking): boolean {
    return element.booked && !element.isLastDay && !element.isFirstDay;
  }

  isUnitBooked(from: number, to: number, month: string, unitName: string) {
    const unit = this.getBookingByUnit(unitName, month);
    let period: Booking[] = unit.slice(Number(from) - 1, Number(to));

    if(period.length <= 2) {
      return period.some(this.isOneNight);
    }
    else {
      return period.some(this.isFirstOrLastDay);
    }
  }
}
