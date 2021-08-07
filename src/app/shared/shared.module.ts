import { NgModule } from '@angular/core';
import { FallbackImageDirective } from './directives/fallback-image.directive';
import { FlightDurationPipe } from './pipes/flight-duration.pipe';

@NgModule({
  declarations: [FallbackImageDirective, FlightDurationPipe],
  imports: [],
  exports: [FallbackImageDirective, FlightDurationPipe]
})
export class SharedModule {}
