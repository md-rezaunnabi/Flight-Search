import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { guid } from '@datorama/akita';
import { catchError, map, Observable, retry } from 'rxjs';
import { FLightApiConstants, IFlightInfo, IFlightSearchRequest } from '../models';
import { FlightInfoStore } from '../states';

@Injectable({ providedIn: 'root' })
export class FlightService {
  constructor(private http: HttpClient, private flightInfoStore: FlightInfoStore) {}

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getFlightInfos(flightSearchRequest: IFlightSearchRequest): Observable<IFlightInfo[]> {
    // as the provided API only supports get request so we can not pass the request model(flightSearchRequest)
    return this.http.get<IFlightInfo[]>(FLightApiConstants.SEARCH_FLIGHT).pipe(
      retry(1),
      map((flightInfos: IFlightInfo[]) => {
        if (flightInfos?.length) {
          // as server does not send any Id so manually setting random unique Id for local state
          flightInfos = flightInfos.map((x) => ({ ...x, Id: guid() }));
          this.flightInfoStore.upsertMany(flightInfos);
        }
        return flightInfos;
      }),
      catchError((error) => {
        throw error;
      })
    );
  }
}
