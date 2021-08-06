import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { IFlightSearchRequest } from 'src/app/core/models';

@Component({
  selector: 'app-flight-search-panel',
  templateUrl: './flight-search-panel.component.html',
  styleUrls: ['./flight-search-panel.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FlightSearchPanelComponent implements OnInit {
  flightSearchRequest: IFlightSearchRequest = <IFlightSearchRequest>{};

  constructor() {}

  ngOnInit(): void {}

  onFormSubmit(): void {}
}
