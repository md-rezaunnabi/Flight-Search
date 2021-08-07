import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { DxValidationGroupComponent } from 'devextreme-angular';
import { finalize } from 'rxjs';
import { IFlightSearchRequest } from 'src/app/core/models';
import { FlightService } from 'src/app/core/services';

@UntilDestroy()
@Component({
  selector: 'app-flight-search-panel',
  templateUrl: './flight-search-panel.component.html',
  styleUrls: ['./flight-search-panel.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FlightSearchPanelComponent implements OnInit {
  @ViewChild('searchFormValGroup', { static: false }) searchFormValGroup!: DxValidationGroupComponent;

  flightSearchRequest: IFlightSearchRequest = <IFlightSearchRequest>{};

  constructor(private flightService: FlightService) {}

  ngOnInit(): void {}

  onFormSubmit(): void {
    // if form is invalid the return
    const { isValid } = this.searchFormValGroup?.instance?.validate?.();
    if (!isValid) return;

    // startloader and fetch flight infos
    this.flightService.isFetchingFlightInfos$.next(true);
    this.flightService
      .getFlightInfos(this.flightSearchRequest)
      .pipe(
        untilDestroyed(this),
        finalize(() => {
          // stop loader
          this.flightService.isFetchingFlightInfos$.next(false);
        })
      )
      .subscribe({
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        error: (error) => {
          //TODO: show error the alert to user or feed it to global error handlet
        }
      });
  }
}
