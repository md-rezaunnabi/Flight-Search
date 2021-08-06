import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flight-info-list',
  templateUrl: './flight-info-list.component.html',
  styleUrls: ['./flight-info-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FlightInfoListComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
