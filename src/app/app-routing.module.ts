import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./flight-search/flight-search.module').then((m) => m.FlightSearchModule) }
  // { path: '**', component: ErrorComponent, data: { error: 404 } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
