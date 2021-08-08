import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { akitaConfig, enableAkitaProdMode, persistState } from '@datorama/akita';
import * as localForage from 'localforage';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
  enableAkitaProdMode();
}

// local forage driver config for akita
localForage.config({
  driver: [
    localForage.INDEXEDDB,
    localForage.LOCALSTORAGE, //falback db
    localForage.WEBSQL //falback db
  ],
  name: 'FlightSearchDB',
  version: 1,
  storeName: 'akita_local_state'
});

// for persistant state after page reload in akita
export const akitaPersistStorage = persistState({
  storage: localForage
});

// akita config to make the store resettable
akitaConfig({
  resettable: true
});

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
