import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flight-search-panel',
  templateUrl: './flight-search-panel.component.html',
  styleUrls: ['./flight-search-panel.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FlightSearchPanelComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
