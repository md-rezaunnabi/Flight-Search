import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FlightSearchPanelComponent } from './flight-search-panel.component';

describe('FlightSearchPanelComponent', () => {
  let component: FlightSearchPanelComponent;
  let fixture: ComponentFixture<FlightSearchPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FlightSearchPanelComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightSearchPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
