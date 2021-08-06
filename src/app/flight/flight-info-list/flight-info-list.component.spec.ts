import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FlightInfoListComponent } from './flight-info-list.component';

describe('FlightInfoListComponent', () => {
  let component: FlightInfoListComponent;
  let fixture: ComponentFixture<FlightInfoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FlightInfoListComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightInfoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
