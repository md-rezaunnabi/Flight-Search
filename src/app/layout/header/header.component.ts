import { Component, OnInit } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { appHeaderHeight } from 'src/app/core/helpers';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  headerHeight = appHeaderHeight;
  constructor(public translocoService: TranslocoService) {}

  ngOnInit(): void {}
}
