export class Booking {
  day: number;
  month: string;
  unit: string;
  booked: boolean;
  // TODO: should add information about first and last day of booking
  // this information is required for table css split color rendering

  constructor(day: number, month: string, unit: string, booked: boolean) {
    this.day = day;
    this.month = month;
    this.unit = unit;
    this.booked = booked;
  }
}
