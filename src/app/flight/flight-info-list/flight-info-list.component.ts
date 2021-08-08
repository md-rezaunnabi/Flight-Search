import { AfterViewInit, ChangeDetectionStrategy, Component, HostListener, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { BehaviorSubject, debounceTime, distinctUntilChanged, Observable } from 'rxjs';
import { getFlightInfoListHeight } from 'src/app/core/helpers';
import { IFlightInfo } from 'src/app/core/models';
import { FlightService } from 'src/app/core/services';
import { FlightInfoQuery, UIQuery, UIStore } from 'src/app/core/states';

@UntilDestroy()
@Component({
  selector: 'app-flight-info-list',
  templateUrl: './flight-info-list.component.html',
  styleUrls: ['./flight-info-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FlightInfoListComponent implements OnInit, AfterViewInit {
  currentPage = 1;
  flightInfoListHeight$: BehaviorSubject<number> = new BehaviorSubject<number>(500);
  searchByAirlineNameField: FormControl = new FormControl();
  flightInfos$: Observable<IFlightInfo[]> = this.flightInfoQuery.filteredFlightInfos$();

  constructor(
    public flightService: FlightService,
    private flightInfoQuery: FlightInfoQuery,
    private uiStore: UIStore,
    public uiQuery: UIQuery
  ) {}

  ngOnInit(): void {
    // clear the search text
    this.clearSearch();

    // listen to flight search panel collapse/expand
    this.flightService.collapseFlightSearchPanel$.pipe(untilDestroyed(this)).subscribe(() => {
      // re-calc flight info list height after a dealy
      setTimeout(() => {
        this.caclflightInfoListHeight();
      }, 100);
    });

    // listen to searchfield value change with a delay of 300ms
    this.searchByAirlineNameField.valueChanges
      .pipe(debounceTime(300), distinctUntilChanged(), untilDestroyed(this))
      .subscribe((searchText) => {
        this.uiStore.update(() => ({ searchByAirlineNameFieldValue: searchText }));
      });
  }

  ngAfterViewInit(): void {
    // calc intial flight info list height
    this.caclflightInfoListHeight();
  }

  @HostListener('window:resize')
  caclflightInfoListHeight(): void {
    this.flightInfoListHeight$.next(getFlightInfoListHeight());
  }

  clearSearch(): void {
    // clear search textfield and local store value
    this.searchByAirlineNameField.reset();
    this.uiStore.update(() => ({ searchByAirlineNameFieldValue: '' }));
  }

  trackById(index: number, flightInfo: IFlightInfo): string {
    return flightInfo.Id;
  }
}
