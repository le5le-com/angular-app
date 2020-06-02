import { Component, OnInit } from '@angular/core';

import { Store } from 'le5le-store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  user: any = {
    username: '小乐'
  };

  constructor() { }

  ngOnInit() {
    Store.subscribe('user', ret => {
      if (ret) {
        this.user = ret;
      }
    });
  }

  onSignout() {

  }
}
