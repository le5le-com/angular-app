import { Component, OnInit } from '@angular/core';

import { Store } from 'le5le-store';
import { CoreService } from './core/core.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  user: any = {
    username: 'demo'
  };

  constructor(private _coreService: CoreService) { }

  ngOnInit() {
    Store.subscribe('user', ret => {
      if (ret) {
        ret.nicknamePinyin = this._coreService.getPinyin(ret.username);
        this.user = ret;
      }
    });
  }

  onSignout() {

  }
}
