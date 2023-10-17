import { Component, OnInit } from '@angular/core';
import { Day } from './month.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'reservations-calendar';
  N2June: Day[] = [];
  N3June: Day[] = [];

  ngOnInit(): void {
    for (let index = 1; index <= 30; index++) {
      const N2June: Day = {
        day: index,
        month: 'June',
        unit: 'N2',
        booked: false,
      };
      this.N2June.push(N2June);

      const N3June: Day = {
        day: index,
        month: 'June',
        unit: 'N3',
        booked: true,
      };
      this.N3June.push(N3June);
    }
  }
}
