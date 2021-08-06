import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlightBaseComponent } from './flight-base/flight-base.component';
import { FlightRoutingModule } from './flight-routing.module';

@NgModule({
  declarations: [FlightBaseComponent],
  imports: [CommonModule, FlightRoutingModule]
})
export class FlightModule {}
