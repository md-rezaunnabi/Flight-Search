import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { IFlightInfo } from '../../models';
import { FlightInfoState, FlightInfoStore } from './flight-info.store';

@Injectable({
  providedIn: 'root'
})
export class FlightInfoQuery extends QueryEntity<FlightInfoState, IFlightInfo> {
  allFlightInfos$ = this.selectAll();

  constructor(protected store: FlightInfoStore) {
    super(store);
  }
}
