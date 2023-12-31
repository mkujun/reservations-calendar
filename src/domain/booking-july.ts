import { Booking } from 'src/app/booking.model';

export class BookingJuly {
  N2: Booking[];
  N3: Booking[];
  N4: Booking[];
  N5: Booking[];
  numberOfDays: number = 31;

  constructor() {
    this.N2 = [];
    this.N3 = [];
    this.N4 = [];
    this.N5 = [];

    for (let index = 1; index <= this.numberOfDays; index++) {
      const N2 = new Booking(index, 'July', 'N2', false, false, false);
      this.N2.push(N2);
      const N3 = new Booking(index, 'July', 'N3', false, false, false);
      this.N3.push(N3);
      const N4 = new Booking(index, 'July', 'N4', false, false, false);
      this.N4.push(N4);
      const N5 = new Booking(index, 'July', 'N5', false, false, false);
      this.N5.push(N5);
    }
  }
}
