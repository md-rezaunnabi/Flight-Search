import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlightBaseComponent } from './flight-base/flight-base.component';

const routes: Routes = [{ path: '', component: FlightBaseComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlightRoutingModule {}
