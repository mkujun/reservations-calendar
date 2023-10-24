import { BookingJune } from './booking-june';
import { Booking } from '../app/booking.model';

export class Bookings {
  bookingJune: BookingJune;

  constructor() {
    this.bookingJune = new BookingJune();
  }

  private getBookingByUnit(unitName: string, month: string) {
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
          return;
      }
    } else return null;
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

  createBooking(from: number, to: number, month: string, unit: string) {
    if (month == 'June') {
      if (unit == 'N2') {
        this.bookingJune.N2.map((d) => {
          this.markBooked(from, to, d);
        });
      } else if (unit == 'N3') {
        this.bookingJune.N3.map((d) => {
          this.markBooked(from, to, d);
        });
      } else if (unit == 'N4') {
        this.bookingJune.N4.map((d) => {
          this.markBooked(from, to, d);
        });
      } else if (unit == 'N5') {
        this.bookingJune.N5.map((d) => {
          this.markBooked(from, to, d);
        });
      }
    }
  }

  deleteBooking(from: number, to: number, unitName: string, month: string) {
    const unit = this.getBookingByUnit(unitName, month);
    if (month == 'June') {
      unit?.map((d: Booking) => {
        if (d.day >= from && d.day <= to) {
          d.booked = false;
          d.isFirstDay = false;
          d.isLastDay = false;
        }
      });
    }
  }

  private isFirstOrLastDay(element: Booking): boolean {
    return element.booked && !element.isLastDay && !element.isFirstDay;
  }

  isN2Booked(from: number, to: number, month: string): boolean {
    if (month == 'June') {
      let period: Booking[] = this.bookingJune.N2.slice(
        Number(from) - 1,
        Number(to)
      );
      return period.some(this.isFirstOrLastDay);
    } else {
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
    } else {
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
    } else {
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
    } else {
      return false;
    }
  }
}
