import { BookingJune } from './booking-june';
import { BookingJuly } from './booking-july';
import { BookingAugust } from './booking-august';
import { BookingSeptember } from './booking-september';
import { Booking } from '../app/booking.model';
import { UnitBookings } from './unit-bookings';

export class Bookings {
  bookingJune: BookingJune;
  bookingJuly: BookingJuly;
  bookingAugust: BookingAugust;
  bookingSeptember: BookingSeptember;

  bookingsN2: UnitBookings[] = [];
  bookingsN3: UnitBookings[] = [];
  bookingsN4: UnitBookings[] = [];
  bookingsN5: UnitBookings[] = [];

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
    } else if (month == 'August') {
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
    } else return [];
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

  private getLastDayOfMonth(month: string): number {
    if (month == 'June' || month == 'September') {
      return 30;
    } else if (month == 'July' || month == 'August') {
      return 31;
    }
    return 0;
  }

  createUnitBooking(
    unit: string,
    from: string,
    fromMonth: string,
    to: string,
    toMonth: string
  ) {
    const fromDate: string = from + '.' + fromMonth;
    const toDate: string = to + '.' + toMonth;

    const unitBookings: UnitBookings = new UnitBookings(unit, fromDate, toDate);

    if (unit == 'N2') {
      this.bookingsN2.push(unitBookings);
    } else if (unit == 'N3') {
      this.bookingsN3.push(unitBookings);
    } else if (unit == 'N4') {
      this.bookingsN4.push(unitBookings);
    } else if (unit == 'N5') {
      this.bookingsN5.push(unitBookings);
    }
  }

  createBooking(
    from: number,
    to: number,
    fromMonth: string,
    toMonth: string,
    unitName: string
  ) {
    this.createUnitBooking(
      unitName,
      String(from),
      fromMonth,
      String(to),
      toMonth
    );

    // if period spans through one month
    if (fromMonth == toMonth) {
      const unit = this.getBookingByUnit(unitName, fromMonth);
      unit?.map((d: Booking) => {
        this.markBooked(from, to, d);
      });
    }
    // if period spans through two months
    else {
      const unitFrom = this.getBookingByUnit(unitName, fromMonth);
      unitFrom?.map((d: Booking, i: number, unitFrom) => {
        // last day of month
        if (i + 1 == this.getLastDayOfMonth(fromMonth)) {
          // if the last day of the month is first day of the booking period
          if (i + 1 == from) {
            d.booked = true;
            d.isFirstDay = true;
          } else {
            d.booked = true;
            d.isLastDay = false;
          }
        } else {
          this.markBooked(from, this.getLastDayOfMonth(fromMonth), d);
        }
      });
      const unitTo = this.getBookingByUnit(unitName, toMonth);
      unitTo?.map((d: Booking, i: number, unitTo) => {
        if (d.day == 1) {
          // if the first day of the month is the last day in booking period
          if (d.day == to) {
            d.booked = true;
            d.isLastDay = true;
          } else {
            d.booked = true;
            d.isFirstDay = false;
          }
        } else {
          this.markBooked(1, to, d);
        }
      });
    }
  }

  // TODO: refactor delete according to create
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

  isUnitBooked(
    from: number,
    to: number,
    fromMonth: string,
    toMonth: string,
    unitName: string
  ): boolean {
    // if period spans through one month
    if (fromMonth == toMonth) {
      const unit = this.getBookingByUnit(unitName, fromMonth);
      let period: Booking[] = unit.slice(Number(from) - 1, Number(to));

      if (period.length <= 2) {
        return period.some(this.isOneNight);
      } else {
        return period.some(this.isFirstOrLastDay);
      }
    }
    // if period spans through two months
    else {
      const unitFrom = this.getBookingByUnit(unitName, fromMonth);
      const unitTo = this.getBookingByUnit(unitName, toMonth);
      const periodFrom: Booking[] = unitFrom.slice(
        Number(from) - 1,
        this.getLastDayOfMonth(fromMonth)
      );
      const periodTo: Booking[] = unitTo.slice(1, Number(to));
      const period: Booking[] = periodFrom.concat(periodTo);

      if (period.length <= 2) {
        return period.some(this.isOneNight);
      } else {
        return period.some(this.isFirstOrLastDay);
      }
    }
  }
}
