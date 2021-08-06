import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { debounceTime, distinctUntilChanged, Observable } from 'rxjs';
import { IFlightInfo } from 'src/app/core/models';
import { FlightInfoQuery, UIStore } from 'src/app/core/states';

@UntilDestroy()
@Component({
  selector: 'app-flight-info-list',
  templateUrl: './flight-info-list.component.html',
  styleUrls: ['./flight-info-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FlightInfoListComponent implements OnInit {
  currentPage = 1;
  searchByAirlineNameField: FormControl = new FormControl();
  flightInfos$: Observable<IFlightInfo[]> = this.flightInfoQuery.allFlightInfos$();

  constructor(private flightInfoQuery: FlightInfoQuery, private uiStore: UIStore) {}

  ngOnInit(): void {
    // clear the search text
    this.clearSearch();

    // listen to searchfield value change with a delay of 300ms
    this.searchByAirlineNameField.valueChanges
      .pipe(debounceTime(300), distinctUntilChanged(), untilDestroyed(this))
      .subscribe((searchText) => {
        this.uiStore.update(() => ({ searchByAirlineNameFieldValue: searchText }));
      });
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
