import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flight-base',
  templateUrl: './flight-base.component.html',
  styleUrls: ['./flight-base.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FlightBaseComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
