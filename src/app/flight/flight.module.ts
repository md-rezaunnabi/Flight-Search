import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlightBaseComponent } from './flight-base/flight-base.component';
import { FlightRoutingModule } from './flight-routing.module';
import { FlightInfoComponent } from './flight-info/flight-info.component';
import { FlightInfoListComponent } from './flight-info-list/flight-info-list.component';
import { FlightSearchPanelComponent } from './flight-search-panel/flight-search-panel.component';

@NgModule({
  declarations: [FlightBaseComponent, FlightInfoComponent, FlightInfoListComponent, FlightSearchPanelComponent],
  imports: [CommonModule, FlightRoutingModule],
  exports: [
    FlightInfoComponent
  ]
})
export class FlightModule {}
