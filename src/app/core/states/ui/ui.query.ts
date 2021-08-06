import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { UIState, UIStore } from './ui.store';

@Injectable({
  providedIn: 'root'
})
export class UIQuery extends Query<UIState> {
  searchByAirlineNameFieldValue$ = this.select((state) => state.searchByAirlineNameFieldValue);

  constructor(protected store: UIStore) {
    super(store);
  }
}
