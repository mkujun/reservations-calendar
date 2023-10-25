import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitMonthComponent } from './unit-month.component';

describe('UnitMonthComponent', () => {
  let component: UnitMonthComponent;
  let fixture: ComponentFixture<UnitMonthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnitMonthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
