import { Component, OnInit, OnDestroy } from '@angular/core';

import { StoreService } from 'le5le-store';

import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [HomeService],
  // tslint:disable-next-line:use-host-property-decorator
  host: {
    '(document:keydown)': 'onkeyDocument($event)'
  }
})
export class HomeComponent implements OnInit, OnDestroy {
  constructor(private service: HomeService, private storeService: StoreService) {}

  ngOnInit() {}

  ngOnDestroy() {}
}
