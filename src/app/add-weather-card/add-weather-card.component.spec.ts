import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWeatherCardComponent } from './add-weather-card.component';

describe('AddWeatherCardComponent', () => {
  let component: AddWeatherCardComponent;
  let fixture: ComponentFixture<AddWeatherCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddWeatherCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddWeatherCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
