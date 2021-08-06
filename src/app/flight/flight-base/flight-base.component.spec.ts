import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FlightBaseComponent } from './flight-base.component';

describe('FlightSearchComponent', () => {
  let component: FlightBaseComponent;
  let fixture: ComponentFixture<FlightBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FlightBaseComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
