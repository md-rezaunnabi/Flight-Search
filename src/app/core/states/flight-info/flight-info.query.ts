import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { auditTime, combineLatest, map, Observable } from 'rxjs';
import { IFlightInfo } from '../../models';
import { UIQuery } from '../ui/ui.query';
import { FlightInfoState, FlightInfoStore } from './flight-info.store';

@Injectable({
  providedIn: 'root'
})
export class FlightInfoQuery extends QueryEntity<FlightInfoState, IFlightInfo> {
  constructor(protected store: FlightInfoStore, private uiQuery: UIQuery) {
    super(store);
  }

  allFlightInfos$(): Observable<IFlightInfo[]> {
    return combineLatest([this.selectAll(), this.uiQuery.searchByAirlineNameFieldValue$]).pipe(
      auditTime(0),
      map(([flightInfos, searchText]) => {
        return searchText?.trim?.()
          ? flightInfos.filter((x) => x.AirlineName.toLowerCase().includes(searchText.toLowerCase()))
          : flightInfos;
      })
    );
  }
}
