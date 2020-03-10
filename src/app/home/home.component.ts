import { Component, OnInit, OnDestroy } from '@angular/core';

import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [HomeService]
})
export class HomeComponent implements OnInit, OnDestroy {
  data: any;

  constructor(private service: HomeService) {
  }

  async ngOnInit() {
    this.data = await this.service.Get();
  }

  ngOnDestroy() { }
}
