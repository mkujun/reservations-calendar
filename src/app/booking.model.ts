export class Booking {
  day: number;
  month: string;
  unit: string;
  booked: boolean;
  isFirstDay: boolean;
  isLastDay: boolean;
  // TODO: should add information about first and last day of booking
  // this information is required for table css split color rendering

  constructor(day: number, month: string, unit: string, booked: boolean, isFirstDay: boolean, isLastDay: boolean) {
    this.day = day;
    this.month = month;
    this.unit = unit;
    this.booked = booked;
    this.isFirstDay = isFirstDay;
    this.isLastDay = isLastDay;
  }
}
