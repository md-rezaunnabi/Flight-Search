import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlightSearchComponent } from './base/flight-search.component';
import { FlightSearchRoutingModule } from './flight-search-routing.module';

@NgModule({
  declarations: [FlightSearchComponent],
  imports: [CommonModule, FlightSearchRoutingModule]
})
export class FlightSearchModule {}
