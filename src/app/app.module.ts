import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UnitMonthComponent } from './components/unit-month/unit-month.component';
import { BookingsListComponent } from './components/bookings-list/bookings-list.component';

@NgModule({
  declarations: [AppComponent, UnitMonthComponent, BookingsListComponent],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
