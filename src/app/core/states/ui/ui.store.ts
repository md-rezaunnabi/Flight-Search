import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';

export interface UIState {
  searchByAirlineNameFieldValue: string;
}

export function createInitialUIState(): UIState {
  return {
    searchByAirlineNameFieldValue: ''
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'UI', resettable: true })
export class UIStore extends Store<UIState> {
  constructor() {
    super(createInitialUIState());
  }
}
