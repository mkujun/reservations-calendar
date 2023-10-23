import { Booking } from 'src/app/booking.model';

export class BookingJune {
  N2: Booking[];
  N3: Booking[];
  N4: Booking[];
  N5: Booking[];
  numberOfDays: number = 30;

  constructor() {
    this.N2 = [];
    this.N3 = [];
    this.N4 = [];
    this.N5 = [];

    for (let index = 1; index <= this.numberOfDays; index++) {
      const N2 = new Booking(index, 'June', 'N2', false, false, false);
      this.N2.push(N2);
      const N3 = new Booking(index, 'June', 'N3', false, false, false);
      this.N3.push(N3);
      const N4 = new Booking(index, 'June', 'N4', false, false, false);
      this.N4.push(N4);
      const N5 = new Booking(index, 'June', 'N5', false, false, false);
      this.N5.push(N5);
    }
  }

  // day can be booked, but only if its not first nor last day
  isFirstOrLastDay(element: Booking): boolean {
    return element.booked && !element.isLastDay && !element.isFirstDay;
  }

  isN2Booked(from: number, to: number): boolean {
    let period: Booking[] = this.N2.slice(Number(from) - 1, Number(to));
    return period.some(this.isFirstOrLastDay);
  }

  isN3Booked(from: number, to: number): boolean {
    let period: Booking[] = this.N3.slice(Number(from) - 1, Number(to));
    return period.some(this.isFirstOrLastDay);
  }

  isN4Booked(from: number, to: number): boolean {
    let period: Booking[] = this.N4.slice(Number(from) - 1, Number(to));
    return period.some(this.isFirstOrLastDay);
  }

  isN5Booked(from: number, to: number): boolean {
    let period: Booking[] = this.N5.slice(Number(from) - 1, Number(to));
    return period.some(this.isFirstOrLastDay);
  }

  getBookingByUnit(unitName: string) {
    if (unitName == 'N2') {
      return this.N2;
    } else {
      return null;
    }
  }

  deleteBooking(from: number, to: number, unitName: string) {
    const unit = this.getBookingByUnit(unitName);
    unit?.map((d: Booking) => {
      if (d.day >= from && d.day <= to) {
        d.booked = false;
        d.isFirstDay = false;
        d.isLastDay = false;
      }
    });
  }

  // TODO: modifiy booking function
}
