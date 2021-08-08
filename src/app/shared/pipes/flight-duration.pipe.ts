import { Pipe, PipeTransform } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';

@Pipe({
  name: 'formatFlightDuration'
})
export class FlightDurationPipe implements PipeTransform {
  constructor(private translocoService: TranslocoService) {}

  transform(flightDuration: string, hourText: string, minuteText: string): string {
    if (flightDuration.includes(':')) {
      const duration: string[] = flightDuration.split(':');
      flightDuration = `${duration[0]} ${hourText}`;
      if (duration[1] !== '0' && duration[1] !== '00')
        flightDuration = `${flightDuration} ${duration[1]} ${minuteText}`;
    }
    return flightDuration;
  }
}
