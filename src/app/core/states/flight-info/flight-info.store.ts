import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { IFlightInfo } from '../../models';

export type FlightInfoState = EntityState<IFlightInfo>;

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'FlightInfo', idKey: 'Id', resettable: true })
export class FlightInfoStore extends EntityStore<FlightInfoState, IFlightInfo> {
  constructor() {
    super();
  }
}
