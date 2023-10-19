export class Booking {
  day: number;
  month: string;
  unit: string;
  booked: boolean;
  isFirstDay: boolean;
  isLastDay: boolean;

  constructor(day: number, month: string, unit: string, booked: boolean, isFirstDay: boolean, isLastDay: boolean) {
    this.day = day;
    this.month = month;
    this.unit = unit;
    this.booked = booked;
    this.isFirstDay = isFirstDay;
    this.isLastDay = isLastDay;
  }
}
