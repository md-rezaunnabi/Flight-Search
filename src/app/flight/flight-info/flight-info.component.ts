import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { IFlightInfo } from 'src/app/core/models';

@Component({
  selector: 'app-flight-info',
  templateUrl: './flight-info.component.html',
  styleUrls: ['./flight-info.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FlightInfoComponent implements OnInit {
  @Input()
  flightInfo!: IFlightInfo;

  constructor() {}

  ngOnInit(): void {}
}
