import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flight-info',
  templateUrl: './flight-info.component.html',
  styleUrls: ['./flight-info.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FlightInfoComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
