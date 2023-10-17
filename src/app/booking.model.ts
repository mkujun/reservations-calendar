export class Booking {
  day: number;
  month: string;
  unit: string;
  booked: boolean;

  constructor(day: number, month: string, unit: string, booked: boolean) {
    this.day = day;
    this.month = month;
    this.unit = unit;
    this.booked = booked;
  }
}
