import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouteConfigLoadEnd, RouteConfigLoadStart, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  showLazyLoader$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(router: Router) {
    router.events.subscribe((event) => {
      if (event instanceof RouteConfigLoadStart) {
        this.showLazyLoader$.next(true);
      } else if (event instanceof RouteConfigLoadEnd) {
        this.showLazyLoader$.next(false);
      }
    });
  }
}
