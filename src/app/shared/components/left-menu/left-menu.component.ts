import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.scss']
})
export class LeftMenuComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }


  isActive(strUrl: string) {
    if (!strUrl || strUrl === '/') {
      return !this._router.url || this._router.url === '/';
    } else {
      return this._router.url.indexOf(strUrl) === 0;
    }
  }
}
