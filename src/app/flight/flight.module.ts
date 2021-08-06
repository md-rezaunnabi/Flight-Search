import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslocoModule } from '@ngneat/transloco';
import { DxButtonModule, DxDateBoxModule, DxTextBoxModule, DxValidatorModule } from 'devextreme-angular';
import { FlightBaseComponent } from './flight-base/flight-base.component';
import { FlightInfoListComponent } from './flight-info-list/flight-info-list.component';
import { FlightInfoComponent } from './flight-info/flight-info.component';
import { FlightRoutingModule } from './flight-routing.module';
import { FlightSearchPanelComponent } from './flight-search-panel/flight-search-panel.component';

@NgModule({
  declarations: [FlightBaseComponent, FlightInfoComponent, FlightInfoListComponent, FlightSearchPanelComponent],
  imports: [
    CommonModule,
    TranslocoModule,
    FlightRoutingModule,
    DxTextBoxModule,
    DxValidatorModule,
    DxDateBoxModule,
    DxButtonModule
  ],
  exports: []
})
export class FlightModule {}
